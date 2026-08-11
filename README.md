#  DOM to Prompt — AI UI Inspector

Transform any webpage element into clean, context-rich Markdown prompts for Claude, Cursor, and ChatGPT in a single click.

[![Manifest V3](https://img.shields.io/badge/Chrome-Manifest_V3-6366f1?style=flat-square&logo=googlechrome)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![JavaScript](https://img.shields.io/badge/Language-Vanilla_JS-f7df1e?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

**DOM to Prompt** is a lightweight developer browser extension that bridges the gap between web UI inspection and AI-assisted code generation. Instead of manually copying raw elements, taking screenshots, or writing tedious structural descriptions to feed into your LLM, simply point, click, and paste a fully contextualized code prompt directly into your prompt window.

---

 Why DOM to Prompt?

When using AI tools like **Cursor, Claude 3.5 Sonnet, or ChatGPT** to replicate, rebuild, or fix UI components, LLMs perform best when given structured data—including HTML hierarchy, classes, and computed layout styles. 

Manually compiling this context takes minutes. **DOM to Prompt** cuts this down to 2 seconds.

---

## ✨ Features

-  **Visual Element Inspector:** Hover over any web page component to see real-time bounding boxes and tag identifiers.
-  **Computed Style Capture:** Automatically extracts key layout rules (`display`, `flex`, `grid`, `gap`, `padding`, `dimensions`, `colors`) while ignoring default noise.
-  **Clean Markup Extraction:** Strips framework-specific runtime attributes (e.g., Vue `data-v-*` tags) and trims excessive DOM noise.
-  **Instant Clipboard Export:** Formats and copies a structured Markdown prompt ready for immediate LLM consumption.
-  **Global Hotkey Support:** Toggle inspection mode on/off on any webpage using `Alt + P` (or `Option + P` on macOS).
-  **Privacy First:** Zero remote tracking, external server requests, or telemetry—all processing happens entirely in local memory inside your browser.

---

 Architecture Overview
