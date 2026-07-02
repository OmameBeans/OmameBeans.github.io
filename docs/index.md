---
title: ホーム
description: React(TS)で構築した自作ブログサイトのトップページです。
date: 2026-06-30
tags: [React, TypeScript, Markdown]
---

# Welcome to My Code Log 👋

このサイトは、**React (TypeScript)** をベースに、ローカルの Markdown ファイル（`.md`）を自動解析して構築された自作の技術ブログ・ドキュメントサイトです。

日々の開発で学んだこと、詰まったポイント、新しく挑戦した技術の備忘録を階層構造でまとめています。

---

## 🚀 サイトの構成・特徴

* **完全スタティック構成**: `docs` フォルダの階層をビルド時に JSON 化し、爆速で動作するツリー UI を実現。
* **型安全なコンポーネント**: TypeScript による再帰コンポーネントでサイドバーを構築。
* **Markdown 駆動**: 記事の追加は `docs` フォルダにファイルを置くだけ。

---

## 📂 コンテンツの歩き方

左側の**サイドバー（記事ツリー）**から、興味のあるカテゴリを展開してドキュメントを閲覧してください。

### 主要なカテゴリ（予定）
1.  **Frontend** (`docs/frontend/`)
    * React, TypeScript, Next.js, CSS 関連のTips
2.  **Backend** (`docs/backend/`)
    * C# (.NET), Web API 設計, データベース関連
3.  **DevOps / Tools** (`docs/tools/`)
    * Git, GitHub Copilot, AtCoder（競技プログラミング）の解説など

---

## 🛠️ 最近のアップデート

* **2026-06-30**: ブログサイトの基本アーキテクチャ（Node.js スクリプトによる階層の自動 JSON 化 ＆ ツリーUI）を実装。
* **2026-06-25**: サイトの企画・設計を開始。

> **Tip:** Markdown の先頭に `gray-matter` 形式でメタデータを記述すると、サイドバーの表示名や記事の公開日を自動で反映できるようになっています。