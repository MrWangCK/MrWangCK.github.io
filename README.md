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
| 🔗 快捷链接 | 个人简历、算法演示、GitHub 主页、ChatShare 等 |
| 🤖 AI 大模型 | ChatGPT、Claude、Gemini、DeepSeek、Kimi、通义千问、豆包、腾讯元宝、Grok、秘塔搜索 等 |
| 🛠️ AI 应用 | Cursor、Trae、通义灵码、Coze、Dify、Ollama、魔搭、可灵、即梦、硅基流动 等 |
| 💻 编程开发 | GitHub/Gitee、MDN、菜鸟教程、掘金、Spring、Redis、MyBatis、Kafka、Nacos、小林coding、pdai 等 |
| 🎯 刷题竞赛 | LeetCode、牛客、洛谷、Codeforces、AcWing、AtCoder、蓝桥杯、Kaggle、天池、OI Wiki 等 |
| 🛡️ 网络安全 | 攻防世界、CTFHub、CTFtime、HackTheBox、FreeBuf、先知、看雪、Vulhub、OWASP 等 |
| 📚 在线学习 | 中国大学MOOC、学堂在线、Coursera、可汗学院、知网、arXiv、B站课堂 等 |
| 🚀 求职实习 | BOSS直聘、实习僧、智联、前程无忧、猎聘、应届生、看准网、超级简历、OfferShow 等 |
| 🎓 校园生活 | 学信网、超星、四六级、计算机等级考试、河南省教育考试院、助学贷款 等 |
| 📋 办公协作 | 腾讯文档、金山文档、语雀、飞书、钉钉、腾讯会议、Notion、邮箱 等 |
| 🔧 效率工具 | DeepL、Smallpdf、draw.io、草料二维码、iconfont、Canva、正则调试、PDF 工具 等 |
| 💾 系统软件 | 7-Zip、Everything、OBS、火绒、Snipaste、ToDesk、Win11/Win10 官方下载 等 |
| 📑 模板素材 | 千图网、包图网、稻壳儿、OfficePLUS、Unsplash、Pexels、站酷、花瓣网 等 |
| 📦 网盘资源 | 阿里云盘、夸克、百度网盘、天翼云、123 云盘、蓝奏云、文叔叔、资源分享 等 |
| 🎬 影音娱乐 | Bilibili、爱奇艺、优酷、豆瓣、网易云/QQ 音乐、斗鱼、小红书、起点 等 |
| ⬇️ 视频下载 | yt-dlp、Cobalt、you-get、哔哩下载姬、唧唧下载、SnapAny 等 |
| 🎮 小游戏 | 20 个本地单文件小游戏 + 4399、Poki、CrazyGames、2048 原版 等 |
| 🎮 游戏相关 | Steam、Epic、小黑盒、SteamDB、游民星空、3DM、TapTap、NGA 等 |
| 🛒 购物电商 | 淘宝、京东、拼多多、闲鱼、得物、小米商城、慢慢买 等 |
| 🧭 导航网站 | 虫部落、小众软件、异次元、吾爱破解、优设导航 等 |

> 共 20 个分类、约 490 个链接，全部经可用性实测后收录。

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
├── index.html              # 导航首页（主页面，样式内联）
├── resume.html              # 个人简历
├── search-algorithm.html    # 查找算法演示（styles.css / main.js）
├── games/                   # 20 个单文件小游戏
├── styles.css / main.js      # 算法演示页资源
├── 2.jpg / favicon.ico      # 二维码与站点图标
└── CNAME                    # 自定义域名 wcky.top
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
