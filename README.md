# Vk Driver Lab

**Inspect, compare, and test Android Vulkan GPU drivers.**
查看、下载、导入、比较并实测 Android 平台的 Vulkan 图形驱动。

[官网 Website](https://zfitness.github.io/driverscope-web/) · [下载 Download](https://github.com/zFitness/driverscope-web/releases/latest)

---

## 中文

Vk Driver Lab 是一款运行于 Android 平台的 Vulkan 图形驱动分析与实测工具，面向使用模拟器游玩游戏的玩家与移动图形技术爱好者。全部功能以非 root 方式实现，不修改系统分区，不替代系统自带驱动。

**功能**
- 设备与驱动信息采集：SoC、CPU、内存、GPU、Android 版本、驱动名称/厂商/版本等
- Vulkan 能力解析：扩展、Vulkan 1.0–1.4 核心功能、设备限制、队列族、内存与图像格式
- 驱动库管理：统一管理系统原厂、下载与导入驱动
- 内置源下载与代理加速：按平台筛选下载，支持 GitHub 代理前缀
- 驱动包导入：导入 zip / so，安全解压并解析元数据
- 驱动对比：并排对比版本、扩展数量、显存与测试结果
- 图形测试与离屏跑分：三角形、立方体、vkmark 等用例，回显实际加载的驱动标识
- 设置与诊断导出：语言、代理、问题反馈与原始数据导出

**系统要求**：Android 7.0 (API 24)+ · arm64 · 支持 Vulkan · Adreno/骁龙 · 2GB+ 内存 · 无需 root

**技术栈**：Kotlin + C++ (NDK) · Jetpack Compose · 内置离线中文字典 · 签名 APK + SHA256

---

## English

Vk Driver Lab is an Android tool for inspecting, downloading, importing, comparing, and testing Vulkan GPU drivers — built for emulator gamers and mobile graphics enthusiasts. Everything is non-root: it never modifies system partitions or replaces the stock driver.

**Features**
- Device & driver info: SoC, CPU, memory, GPU, Android version, driver name/vendor/version
- Vulkan capability parsing: extensions, Vulkan 1.0–1.4 core features, limits, queue families, memory, image formats
- Driver library: unified model for system, downloaded, and imported drivers
- Built-in source & proxy: filter and download by platform, with GitHub proxy support
- Driver import: safely unpack and parse zip / so packages
- Driver comparison: side-by-side version, extension count, memory, and test results
- Graphics tests & offscreen benchmark: triangle, cube, vkmark, with loaded-driver echo
- Settings & diagnostics: language, proxy, feedback, and raw data export

**Requirements**: Android 7.0 (API 24)+ · arm64 · Vulkan · Adreno/Snapdragon · 2GB+ RAM · no root

**Tech**: Kotlin + C++ (NDK) · Jetpack Compose · offline Chinese dictionary · signed APK + SHA256

---

## 本仓库 / This repo

本仓库是 Vk Driver Lab 的介绍站点（纯静态，部署于 GitHub Pages）与**公开发布锚点**。应用源码位于私有仓库，CI 受限故改由本地脚本构建签名 APK 并发布到本仓库的 [Releases](https://github.com/zFitness/driverscope-web/releases)。

This repo hosts the Vk Driver Lab landing page (static, on GitHub Pages) and the **public release anchor**. The app source lives in a private repository; signed APKs are built locally and published to this repo's [Releases](https://github.com/zFitness/driverscope-web/releases).

```bash
python3 -m http.server 8080   # 本地预览 / preview locally
```

© 2026 zFitness · Vk Driver Lab
