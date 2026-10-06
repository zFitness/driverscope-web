// 运行时读取 GitHub Release 最新版本信息。
// 站点与发布产物同属公开仓库 zFitness/driverscope-web，因此 Releases API 可公开访问。
(function () {
  const REPO = "zFitness/driverscope-web";
  const API = `https://api.github.com/repos/${REPO}/releases/latest`;

  const $ = (id) => document.getElementById(id);
  const versionEl = $("dl-version");
  const fileEl = $("dl-file");
  const metaEl = $("dl-meta");
  const shaWrap = $("dl-sha");
  const shaValue = $("dl-sha-value");
  const dlButton = $("dl-button");
  const heroBtn = $("hero-download");
  const heroMeta = $("hero-meta");

  if (!versionEl) return;

  const fmtSize = (bytes) => {
    if (!bytes && bytes !== 0) return "";
    const mb = bytes / 1024 / 1024;
    return `${mb.toFixed(1)} MB`;
  };

  const fmtDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
  };

  async function fetchSha(asset) {
    try {
      const res = await fetch(asset.browser_download_url, { cache: "no-store" });
      if (!res.ok) return null;
      const text = await res.text();
      const line = text
        .split("\n")
        .map((l) => l.trim())
        .find((l) => l.toLowerCase().endsWith(".apk"));
      return line ? line.split(/\s+/)[0] : null;
    } catch (e) {
      return null;
    }
  }

  fetch(API, { headers: { Accept: "application/vnd.github+json" } })
    .then((r) => {
      if (!r.ok) throw new Error("no release");
      return r.json();
    })
    .then(async (rel) => {
      const apk = (rel.assets || []).find((a) => /\.apk$/i.test(a.name));
      const sums = (rel.assets || []).find((a) => /SHA256SUMS/i.test(a.name));
      const version = rel.tag_name || rel.name || "—";

      versionEl.textContent = version;
      if (apk) {
        fileEl.textContent = apk.name;
        const parts = [fmtSize(apk.size), `发布于 ${fmtDate(rel.published_at)}`].filter(Boolean);
        metaEl.textContent = parts.join(" · ");
        if (dlButton) dlButton.href = apk.browser_download_url;
        if (heroBtn) {
          heroBtn.href = apk.browser_download_url;
          heroBtn.textContent = `下载 ${version}`;
        }
        if (heroMeta) heroMeta.textContent = `${apk.name} · ${fmtSize(apk.size)} · Android 7.0+ · 无需 root`;
        if (sums && shaWrap) {
          const sha = await fetchSha(sums);
          if (sha) {
            shaValue.textContent = sha;
            shaWrap.hidden = false;
          }
        }
      } else {
        fileEl.textContent = "该版本暂无可下载的 APK";
      }
    })
    .catch(() => {
      // 无 Release 或网络受限时保持静态回退文案。
      fileEl.textContent = "暂无发布版本，可前往 Release 页面查看";
      metaEl.textContent = "";
      versionEl.textContent = "—";
    });
})();
