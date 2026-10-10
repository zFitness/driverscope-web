<div align="center">

<img src="assets/brand/logo.png" alt="Vk Driver Lab" width="112" />

# Vk Driver Lab

**Inspect, compare, and test Android Vulkan GPU drivers.**

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

[Website](https://zfitness.github.io/driverscope-web/) · [Download](https://github.com/zFitness/driverscope-web/releases/latest) · [中文](README.zh.md)

<p>
  <img src="assets/screenshots/home.webp" alt="Home screen" width="230" />
  <img src="assets/screenshots/library.webp" alt="Driver library" width="230" />
  <img src="assets/screenshots/10-%E4%B8%8A%E5%B1%8F%E6%B8%B2%E6%9F%93.webp" alt="render" width="230" />
</p>

</div>

Vk Driver Lab is an Android tool for inspecting, downloading, importing, comparing, and testing Vulkan GPU drivers — built for emulator gamers and mobile graphics enthusiasts. Everything is non-root: it never modifies system partitions or replaces the stock driver.

## Features
- Device & driver info: SoC, CPU, memory, GPU, Android version, driver name/vendor/version
- Vulkan capability parsing: extensions, Vulkan 1.0–1.4 core features, limits, queue families, memory, image formats
- Driver library: unified model for system, downloaded, and imported drivers
- Built-in source & proxy: filter and download by platform, with GitHub proxy support
- Driver import: safely unpack and parse zip / so packages
- Driver comparison: side-by-side version, extension count, memory, and test results
- Graphics tests & offscreen benchmark: triangle, cube, vkmark, with loaded-driver echo
- Settings & diagnostics: language, proxy, feedback, and raw data export

## Requirements
Android 7.0 (API 24)+ · arm64 · Vulkan · Adreno/Snapdragon · 2GB+ RAM · no root

## Tech
Kotlin + C++ (NDK) · Jetpack Compose · offline Chinese dictionary · signed APK + SHA256

## This repo
Hosts the landing page (static, GitHub Pages) and the **public release anchor**. The app source lives in a private repository; signed APKs are built locally and published to [Releases](https://github.com/zFitness/driverscope-web/releases).

```bash
python3 -m http.server 8080   # preview locally
```

© 2026 zFitness · Vk Driver Lab
