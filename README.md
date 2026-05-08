# 导航首页

一个简洁美观的多分类网址导航页面，收录了日常工作学习常用的网站链接。

## 功能特点

### 搜索功能
- 集成多搜索引擎（百度、Google、Bing、DuckDuckGo）
- 快速切换搜索来源
- 快捷搜索引擎按钮

### 分类导航

| 分类 | 内容 |
|------|------|
| 🤖 AI 大模型 | ChatGPT、Claude、Gemini、Kimi、DeepSeek、通义千问、文心一言、讯飞星火、智谱 AI、秘塔搜索、Perplexity、豆包、360智脑、Coze扣子 等 |
| 🛠️ AI 应用 | MiniMax Agent、Dreamify、AI 工具集、Vocal Remover、AI 绘画、SiliconCloud 等 |
| 🎨 我的作品 | 作品集、算法可视化、查找算法演示 |
| 💻 编程开发 | GitHub、Stack Overflow、MDN、W3School、菜鸟教程、phpStudy、JSRUN、仓颉编程、Intel ARK、软仓、Matplotlib 等 |
| 📚 在线学习 | Bilibili、YouTube、腾讯课堂、网易云课堂、慕课网、腾讯云社区、CSDN、博客园、doyoudo 等 |
| 🎯 刷题竞赛 | LeetCode、牛客网、洛谷、Codeforces、AtCoder、AcWing、NowCoder、CTFHub 等 |
| 🛡️ 网络安全 | CTFWar、補丁网络、FreeBuf、先知社区、安全客、Vulhub、Kali工具 等 |
| 🎬 影音娱乐 | YouTube、Bilibili、爱奇艺、腾讯视频、优酷、豆瓣、网易云音乐、喜马拉雅 等 |
| 🔧 效率工具 | iSlide、创客贴、图怪兽、remove.bg、腾讯文档、百度网盘、迅雷、CloudConvert 等 |
| 📑 模板素材 | 简历模板、PPT模板、图标库、图片素材、字体下载、设计工具 等 |
| 🎮 游戏相关 | Steam、Epic、游民星空、3DM、TapTap、原神官网、WIKI 等 |
| 🎓 校园生活 | 教务系统、图书馆、课程表、学校官网、校园论坛 等 |
| 🧭 导航网站 | 各种导航站点集合 |
| 📦 网盘资源 | 百度网盘、阿里云盘、天翼云、夸克网盘 等 |

## 技术实现

- **纯前端实现**：HTML + CSS + JavaScript，无需后端
- **响应式设计**：适配桌面和移动端
- **渐变背景**：深色渐变主题，护眼美观
- **无外部依赖**：所有功能原生实现

## 使用方法

直接在浏览器中打开 `index.html` 即可使用。

### 搜索
1. 在顶部搜索框输入关键词
2. 选择搜索引擎（默认百度）
3. 点击搜索按钮或按回车

### 访问链接
点击任意卡片即可跳转到对应网站。

## 文件结构

```
wcky/
├── index.html          # 导航首页（主页面）
├── home.html           # 其他页面
├── works.html          # 作品集页面
├── search-algorithm.html # 查找算法演示页面
├── styles.css          # 样式文件
└── main.js             # JavaScript 逻辑
```

## 自定义

### 添加新链接
在 `index.html` 中找到对应分类，在 `<div class="links-grid">` 下添加：

```html
<div class="link-card" href="链接地址">
    <div class="link-info">
        <h3>标题</h3>
        <p>描述（可选）</p>
    </div>
</div>
```

### 添加新分类
在合适位置添加新的分类区块：

```html
<h2 class="category-title"><span class="emoji">图标</span> 分类名称</h2>
<div class="links-grid">
    <!-- 链接卡片 -->
</div>
```

### 修改样式
在 `<style>` 标签中修改 CSS 变量和样式。

## 浏览器兼容

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License
