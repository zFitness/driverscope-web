# Vk Driver Lab · 介绍网站

Vk Driver Lab 的官方介绍与下载引导站点，纯静态（零构建），部署在 GitHub Pages。

## 本地预览

```bash
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## 结构

```
.
├── index.html                  # 单页：Hero / 功能 / 截图 / 要求 / 下载
├── styles.css                  # 靛蓝主色 + 中性 Surface，浅色优先并适配深色
├── app.js                      # 运行时读取本仓库 Release 最新版本与 SHA256
└── assets/
    ├── brand/logo.webp|png     # 站点 Logo
    └── screenshots/*.webp      # 9 张应用截图（由软著截图压缩而来）
```

## 部署

推送到 `main` 后由 `.github/workflows/pages.yml` 自动发布到 GitHub Pages。
首次需在仓库 Settings → Pages → Source 选择 **GitHub Actions**。

## 下载与 Release 的关系

源码在私有仓库 `zFitness/DriverScope` 构建，其 Actions 将签名 APK 与
`SHA256SUMS.txt` 跨仓库发布到**本公开仓库的 Releases**。本仓库公开，因此
Releases API 可被站点直接读取，用于展示版本、大小与校验值。

站点读取 `https://api.github.com/repos/zFitness/driverscope-web/releases/latest`；
无 Release 或网络受限时自动回退为静态文案与 Release 链接。

## 内容来源

文案与截图取自 `DriverScope/my-docs/软件著作权申请资料`（业务理解、申请表信息、
用户截图）与 `设计文档/UI设计`。
