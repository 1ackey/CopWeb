# 🎓 UIBE 英语学院内推简历投递网站

本项目是基于 **React + TypeScript + Vite** 开发的内推简历投递与管理系统前端设计，主要面向企业与学生，并对英语学院内部教师管理：

* 学生可在线上传简历（PDF/DOCX/DOC），并浏览职位信息。
* 企业可查看已投递的简历，并支持一键下载所有简历。

---

## ✨ 功能特性

* **学生端**

  * 上传简历（支持 PDF，最大 10MB）
  * 浏览职位信息（含职位描述、职责、要求）
  * 在线申请职位

* **企业端**

  * 浏览所有投递的简历
  * 下载单个简历或一键下载全部简历
  * 下载进度实时显示（进度条预览）

---

## 🛠️ 前端技术栈

* **框架**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **构建工具**: [Vite](https://vitejs.dev/)
* **样式**: [Tailwind CSS](https://tailwindcss.com/)
* **数据存储**: 本地 JSON 文件模拟 (e.g. `jobs.json`, `Resume.json`) （后期将完善后端）
* **依赖管理**: pnpm / npm

---

## 📂 项目结构

```bash
CopWeb/
├── src/
│   ├── components/       # 可复用的组件 (JobCard, TransitionButton 等)
│   ├── pages/
│   │   ├── students/     # 学生端页面 (SearchAndJobs.tsx)
│   │   ├── company/      # 企业端页面 (ResumeDownloadPage.tsx)
│   ├── services/         # 模拟数据存放，用作以后后端接入 (jobs.json, Resume.json)
│   ├── App.tsx           # 应用入口
│   └── main.tsx          # React 渲染入口
├── public/               # 静态资源
├── package.json
└── README.md
```

---

## 🚀 本地运行

1. 克隆项目

   ```bash
   git clone https://github.com/1ackey/CopWeb.git
   cd CopWeb
   ```

2. 安装依赖

   ```bash
   npm install
   # 或者
   pnpm install
   ```

3. 启动项目

   ```bash
   npm run dev
   ```

4. 打包构建

   ```bash
   npm run build
   ```
---

## 📌 后续优化方向

* 接入后端 API 管理（存储简历、职位数据） 预期使用flask框架
* 支持在线预览简历（PDF 预览）
* 增加搜索与筛选功能（按职位/公司/投递时间等）
* 增加权限控制（学生/企业登录系统）

---
