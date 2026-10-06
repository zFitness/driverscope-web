// 站点 i18n(默认英语,支持简体中文)+ 运行时读取 GitHub Release 最新版本信息。
// 站点与发布产物同属公开仓库 zFitness/driverscope-web,因此 Releases API 可公开访问。
(function () {
  const REPO = "zFitness/driverscope-web";
  const API = `https://api.github.com/repos/${REPO}/releases/latest`;
  const STORAGE_KEY = "vdl-lang";
  const DEFAULT_LANG = "en";

  const I18N = {
    en: {
      "doc.title": "Vk Driver Lab · Vulkan driver analysis for Android",
      "doc.desc":
        "Vk Driver Lab is a Vulkan graphics driver analysis and benchmarking tool for Android: inspect driver capabilities without root, download, import and compare open-source drivers, and run graphics tests and offscreen benchmarks.",

      "nav.features": "Features",
      "nav.shots": "Screenshots",
      "nav.requirements": "Requirements",
      "nav.download": "Download",

      "hero.badge": "Android · Vulkan · No root",
      "hero.tagline": "Inspect, compare, and test GPU drivers.",
      "hero.lede":
        "A Vulkan graphics driver analysis and benchmarking tool for Android. See which versions and extensions your device's current driver supports, download, import and compare candidate drivers, then run graphics tests and offscreen benchmarks directly.",
      "hero.download": "Download latest",
      "hero.shots": "View screenshots",
      "hero.meta": "For Adreno / Snapdragon devices · Android 7.0+",

      "features.title": "Features",
      "features.sub":
        "Implemented without root. It never modifies system partitions or replaces the stock driver.",
      "feat.1.title": "Device & driver info",
      "feat.1.desc":
        "Reads SoC, CPU core count and frequency, RAM, GPU model and vendor, Android version, the Linux GPU device node, plus driver name, vendor, Vulkan API version, driver version and build date.",
      "feat.2.title": "Vulkan capability analysis",
      "feat.2.desc":
        "Enumerates instance and device extensions grouped by purpose, lists Vulkan 1.0–1.4 core feature support, and reads device limits, queue families, memory heaps and image format capabilities.",
      "feat.3.title": "Driver library",
      "feat.3.desc":
        "Manages stock, downloaded and imported drivers in one unified model. System drivers are always present and non-deletable; select any to open details or compare.",
      "feat.4.title": "Built-in sources & proxy",
      "feat.4.desc":
        "Browse and download from built-in open-source driver sources filtered by Qualcomm, Dimensity and more, with progress, size and percentage; switch the built-in GitHub proxy prefix or set a custom one.",
      "feat.5.title": "Driver package import",
      "feat.5.desc":
        "Import zip driver packages or .so files from the system file picker, extract them safely, identify driver files and metadata, and parse library name, version and extensions.",
      "feat.6.title": "Driver comparison",
      "feat.6.desc":
        "Compare two drivers side by side across version, extension count, capability size, total VRAM, conformance and each test result, with visual highlighting of the differences.",
      "feat.7.title": "Graphics tests & benchmarks",
      "feat.7.desc":
        "Run triangle, cube, vkmark and other cases under a chosen driver; the actually loaded driver is echoed first, then pass/fail, score and frame rate.",
      "feat.8.title": "Settings & diagnostics",
      "feat.8.desc":
        "Language and proxy settings, issue feedback and open-source notices, plus copy or export of raw diagnostic data for troubleshooting.",

      "shots.title": "Screenshots",
      "shots.sub":
        "The complete flow, from device info and the driver library to testing and comparison.",
      "cap.1": "Home · Device overview",
      "cap.2": "OpenGL details",
      "cap.3": "Driver library",
      "cap.4": "Built-in source downloads",
      "cap.5": "Import local driver",
      "cap.6": "Driver details",
      "cap.7": "Graphics test & benchmark",
      "cap.8": "Driver comparison",
      "cap.9": "Settings",
      "cap.10": "On-screen rendering",

      "req.title": "System requirements",
      "req.os": "OS",
      "req.osv": "Android 7.0 (API 24) or later",
      "req.arch": "Architecture",
      "req.archv": "arm64",
      "req.api": "Graphics API",
      "req.apiv": "Vulkan support",
      "req.device": "Device",
      "req.devicev": "Adreno / Snapdragon (current)",
      "req.mem": "Memory",
      "req.memv": "2 GB or more",
      "req.perm": "Permissions",
      "req.permv": "No root required",

      "tech.title": "Technical highlights",
      "tech.stack": "Tech stack",
      "tech.stackv": "Kotlin + C++ (hybrid)",
      "tech.query": "Driver query",
      "tech.queryv": "Native / NDK (Vulkan · EGL · GLES)",
      "tech.dict": "Explanations",
      "tech.dictv": "Built-in offline dictionary, no network",
      "tech.import": "Driver import",
      "tech.importv": "Safe extraction, local metadata parsing",
      "tech.release": "Release",
      "tech.releasev": "Signed APK + SHA256 verification",

      "dl.title": "Download",
      "dl.sub": "Get the latest signed package from GitHub Releases and verify its SHA256.",
      "dl.latest": "Latest version",
      "dl.fetching": "Fetching release info…",
      "dl.go": "Go to download",
      "dl.all": "All releases",
      "dl.note":
        'GitHub may be slow to reach in some regions: switch the proxy inside the app, or use a local mirror. Before installing, verify the checksum with <code>sha256sum</code> or your system tools.',

      "rel.noApk": "No APK available for this release",
      "rel.none": "No release yet — check the Releases page",
      "rel.published": "Released {date}",
      "rel.heroBtn": "Download {v}",
      "rel.heroMeta": "{file} · {size} · Android 7.0+ · No root",

      "lang.toggle": "中文",
    },
    zh: {
      "doc.title": "Vk Driver Lab · Android Vulkan 驱动分析工具",
      "doc.desc":
        "Vk Driver Lab 是一款运行于 Android 平台的 Vulkan 图形驱动分析与实测工具：非 root 查看设备驱动能力，下载、导入、比较开源驱动，并运行图形测试与离屏跑分。",

      "nav.features": "功能",
      "nav.shots": "截图",
      "nav.requirements": "要求",
      "nav.download": "下载",

      "hero.badge": "Android · Vulkan · 非 root",
      "hero.tagline": "查看、比较并实测 GPU 驱动。",
      "hero.lede":
        "一款运行于 Android 平台的 Vulkan 图形驱动分析与实测工具。看清设备当前使用的驱动支持哪些版本与扩展，下载、导入、比较候选驱动，并直接跑图形测试与离屏跑分。",
      "hero.download": "下载最新版",
      "hero.shots": "查看截图",
      "hero.meta": "面向 Adreno / 骁龙设备 · Android 7.0+",

      "features.title": "功能",
      "features.sub": "以非 root 方式实现，不修改系统分区，不替代系统自带驱动。",
      "feat.1.title": "设备与驱动信息采集",
      "feat.1.desc":
        "读取 SoC、CPU 核心数与频率、运行内存、GPU 型号与厂商、Android 版本、Linux GPU 设备节点，以及驱动名称、厂商、Vulkan API 版本、驱动版本与构建日期。",
      "feat.2.title": "Vulkan 能力解析",
      "feat.2.desc":
        "枚举实例与设备扩展并按用途分组，列出 Vulkan 1.0–1.4 核心功能支持情况，读取设备限制、队列族、内存堆与图像格式能力。",
      "feat.3.title": "驱动库管理",
      "feat.3.desc":
        "以统一模型管理系统原厂驱动、下载驱动与导入驱动。系统驱动常驻且不可删除，支持勾选进入详情或对比。",
      "feat.4.title": "内置源下载与代理加速",
      "feat.4.desc":
        "从内置开源驱动源按高通、天玑等分类筛选并下载，显示进度、大小与百分比，可切换内置 GitHub 代理前缀或自定义代理。",
      "feat.5.title": "驱动包导入与解析",
      "feat.5.desc":
        "从系统文件选择器导入 zip 驱动包或 so 文件，安全解压、识别驱动文件与元数据，解析出库名、版本与扩展信息。",
      "feat.6.title": "驱动对比",
      "feat.6.desc":
        "并排对比两个驱动的版本号、扩展数量、能力规模、显存总量、一致性认证与各项测试结果，并对差异做可视化标注。",
      "feat.7.title": "图形测试与离屏跑分",
      "feat.7.desc":
        "在指定驱动下运行三角形、立方体、vkmark 等用例，先回显实际加载到的驱动标识，再输出通过或失败、跑分与帧率。",
      "feat.8.title": "设置与诊断导出",
      "feat.8.desc":
        "提供语言与代理设置、问题反馈与开源软件说明，并支持复制或导出原始诊断数据，便于排查与反馈问题。",

      "shots.title": "截图",
      "shots.sub": "从设备信息、驱动库到测试与对比的完整流程。",
      "cap.1": "首页 · 设备概览",
      "cap.2": "OpenGL 详情",
      "cap.3": "驱动库",
      "cap.4": "内置源下载",
      "cap.5": "导入本地驱动",
      "cap.6": "驱动详情",
      "cap.7": "图形测试与跑分",
      "cap.8": "驱动对比",
      "cap.9": "设置",
      "cap.10": "上屏渲染",

      "req.title": "系统要求",
      "req.os": "系统",
      "req.osv": "Android 7.0 (API 24) 及以上",
      "req.arch": "架构",
      "req.archv": "arm64",
      "req.api": "图形接口",
      "req.apiv": "支持 Vulkan",
      "req.device": "设备",
      "req.devicev": "Adreno / 骁龙（当前）",
      "req.mem": "内存",
      "req.memv": "2GB 以上",
      "req.perm": "权限",
      "req.permv": "无需 root",

      "tech.title": "技术特点",
      "tech.stack": "技术栈",
      "tech.stackv": "Kotlin + C++ 混合",
      "tech.query": "驱动查询",
      "tech.queryv": "Native / NDK（Vulkan · EGL · GLES）",
      "tech.dict": "中文解释",
      "tech.dictv": "内置离线字典，不联网",
      "tech.import": "驱动导入",
      "tech.importv": "安全解压，本地解析元数据",
      "tech.release": "发布",
      "tech.releasev": "签名 APK + SHA256 校验",

      "dl.title": "下载",
      "dl.sub": "从 GitHub Release 获取最新签名安装包，并核对 SHA256。",
      "dl.latest": "最新版本",
      "dl.fetching": "正在获取发布信息…",
      "dl.go": "前往下载",
      "dl.all": "全部版本",
      "dl.note":
        '国内访问 GitHub 可能较慢：可在应用内切换代理，或使用国内网盘镜像。安装前请用 <code>sha256sum</code> 或系统工具核对校验值。',

      "rel.noApk": "该版本暂无可下载的 APK",
      "rel.none": "暂无发布版本，可前往 Release 页面查看",
      "rel.published": "发布于 {date}",
      "rel.heroBtn": "下载 {v}",
      "rel.heroMeta": "{file} · {size} · Android 7.0+ · 无需 root",

      "lang.toggle": "EN",
    },
  };

  const $ = (id) => document.getElementById(id);

  let lang = DEFAULT_LANG;
  let release = null;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "zh") lang = saved;
  } catch (e) {
    /* localStorage unavailable */
  }

  function t(key, vars) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    let s = dict[key] != null ? dict[key] : I18N[DEFAULT_LANG][key];
    if (s == null) return key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        s = s.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
      });
    }
    return s;
  }

  const fmtSize = (bytes) => {
    if (!bytes && bytes !== 0) return "";
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  const fmtDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
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

  function applyStatic() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = t("doc.title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("doc.desc"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    const toggle = $("lang-toggle");
    if (toggle) toggle.textContent = t("lang.toggle");
  }

  function renderRelease() {
    const versionEl = $("dl-version");
    if (!versionEl) return;
    const fileEl = $("dl-file");
    const metaEl = $("dl-meta");
    const shaWrap = $("dl-sha");
    const shaValue = $("dl-sha-value");
    const dlButton = $("dl-button");
    const heroBtn = $("hero-download");
    const heroMeta = $("hero-meta");

    if (!release) {
      if (fileEl) fileEl.textContent = t("dl.fetching");
      return;
    }

    if (release.error) {
      if (fileEl) fileEl.textContent = t("rel.none");
      if (metaEl) metaEl.textContent = "";
      versionEl.textContent = "—";
      return;
    }

    if (heroMeta) heroMeta.textContent = t("hero.meta");
    versionEl.textContent = release.version;

    if (!release.apk) {
      if (fileEl) fileEl.textContent = t("rel.noApk");
      if (metaEl) metaEl.textContent = "";
      return;
    }

    const { apk } = release;
    if (fileEl) fileEl.textContent = apk.name;
    if (metaEl) metaEl.textContent = t("rel.published", { date: fmtDate(release.publishedAt) });
    if (dlButton) dlButton.href = apk.url;
    if (heroBtn) {
      heroBtn.href = apk.url;
      heroBtn.textContent = t("rel.heroBtn", { v: release.version });
    }
    if (heroMeta) heroMeta.textContent = t("rel.heroMeta", { file: apk.name, size: fmtSize(apk.size) });

    if (release.sha && shaWrap) {
      if (shaValue) shaValue.textContent = release.sha;
      shaWrap.hidden = false;
    }
  }

  function setLang(next) {
    lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
    applyStatic();
    renderRelease();
  }

  const toggle = $("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => setLang(lang === "en" ? "zh" : "en"));
  }

  applyStatic();

  if (!$("dl-version")) return;

  fetch(API, { headers: { Accept: "application/vnd.github+json" } })
    .then((r) => {
      if (!r.ok) throw new Error("no release");
      return r.json();
    })
    .then(async (rel) => {
      const apk = (rel.assets || []).find((a) => /\.apk$/i.test(a.name));
      const sums = (rel.assets || []).find((a) => /SHA256SUMS/i.test(a.name));
      release = {
        version: rel.tag_name || rel.name || "—",
        publishedAt: rel.published_at,
        apk: apk ? { name: apk.name, size: apk.size, url: apk.browser_download_url } : null,
        sha: null,
      };
      renderRelease();

      if (sums) {
        const sha = await fetchSha(sums);
        if (sha) {
          release.sha = sha;
          renderRelease();
        }
      }
    })
    .catch(() => {
      release = { error: true };
      renderRelease();
    });
})();
