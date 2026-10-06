<div align="center">

<img src="assets/brand/logo.png" alt="Vk Driver Lab" width="112" />

# Vk Driver Lab

**查看、下载、导入、比较并实测 Android 平台的 Vulkan 图形驱动。**

<p>
  <img alt="Platform" src="https://img.shields.io/badge/Platform-Android-3DDC84?logo=android&logoColor=white" />
  <img alt="minSdk" src="https://img.shields.io/badge/minSdk-24-3DDC84" />
  <img alt="Arch" src="https://img.shields.io/badge/arch-arm64-blue" />
  <img alt="Vulkan" src="https://img.shields.io/badge/Vulkan-supported-9F1D20" />
  <img alt="Root" src="https://img.shields.io/badge/root-not%20required-2ea44f" />
</p>
<p>
  <a href="https://github.com/zFitness/driverscope-web/releases/latest"><img alt="Release" src="https://img.shields.io/github/v/release/zFitness/driverscope-web?label=release&sort=semver" /></a>
  <a href="https://zfitness.github.io/driverscope-web/"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fzfitness.github.io%2Fdriverscope-web%2F&label=website" /></a>
  <img alt="License" src="https://img.shields.io/badge/license-proprietary-lightgrey" />
</p>

[官网](https://zfitness.github.io/driverscope-web/) · [下载](https://github.com/zFitness/driverscope-web/releases/latest) · [English](README.md)

<p>
  <img src="assets/screenshots/home.webp" alt="首页" width="230" />
  <img src="assets/screenshots/library.webp" alt="驱动库" width="230" />
</p>

</div>

Vk Driver Lab 是一款运行于 Android 平台的 Vulkan 图形驱动分析与实测工具，面向使用模拟器游玩游戏的玩家与移动图形技术爱好者。全部功能以非 root 方式实现，不修改系统分区，不替代系统自带驱动。

## 功能
- 设备与驱动信息采集：SoC、CPU、内存、GPU、Android 版本、驱动名称/厂商/版本等
- Vulkan 能力解析：扩展、Vulkan 1.0–1.4 核心功能、设备限制、队列族、内存与图像格式
- 驱动库管理：统一管理系统原厂、下载与导入驱动
- 内置源下载与代理加速：按平台筛选下载，支持 GitHub 代理前缀
- 驱动包导入：导入 zip / so，安全解压并解析元数据
- 驱动对比：并排对比版本、扩展数量、显存与测试结果
- 图形测试与离屏跑分：三角形、立方体、vkmark 等用例，回显实际加载的驱动标识
- 设置与诊断导出：语言、代理、问题反馈与原始数据导出

## 系统要求
Android 7.0 (API 24)+ · arm64 · 支持 Vulkan · Adreno/骁龙 · 2GB+ 内存 · 无需 root

## 技术栈
Kotlin + C++ (NDK) · Jetpack Compose · 内置离线中文字典 · 签名 APK + SHA256

## 本仓库
本仓库是 Vk Driver Lab 的介绍站点（纯静态，部署于 GitHub Pages）与**公开发布锚点**。应用源码位于私有仓库，签名 APK 由本地构建后发布到本仓库的 [Releases](https://github.com/zFitness/driverscope-web/releases)。

```bash
python3 -m http.server 8080   # 本地预览
```

© 2026 zFitness · Vk Driver Lab
