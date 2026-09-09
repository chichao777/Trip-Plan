# 2026 国庆欧洲旅行计划

这是一个无需安装、无需构建的静态旅行决策页。路线严格保留最新版行程表中的 8 座城市，并针对独自旅行、紧凑节奏、建筑、博物馆、美食与夜生活进行了优化。

行程包含法兰克福与苏黎世的长时间转机 City Walk，并为返机场预留了明确的安全时间。

住宿已同步为 Youth Hostel Luxembourg City、TOC Hostel Barcelona、Luma Terra Prague Hostel 和 Hostel Lollis Homestay Dresden；朋友住址仅在私人行程表中保留。

## 直接使用

- `europe-trip-2026.html` 是完整单文件版本，CSS、JavaScript、图标和 9 张图片均已内嵌，可直接打开。
- `index.html`、`styles.css`、`app.js` 与 `assets/` 是便于继续修改的源文件版本。
- 交互地图需要联网加载 OpenStreetMap 底图；离线时仍可使用城市按钮、行程、清单、预订和备忘功能。
- 页面不提供不可核验的价格、评分、评论或实时交通；2026 年开放时间、预约、航班和车次请在出发前复核。

## 发布到 GitHub Pages

1. 新建一个公开仓库，例如 `europe-trip-2026`。
2. 将本目录中的 `index.html`、`styles.css`、`app.js`、`.nojekyll` 和 `assets` 文件夹上传到仓库根目录。
3. 打开仓库的 `Settings` > `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/ (root)`，然后保存。
6. 等待约 1 到 3 分钟，页面会显示正式访问地址。

未登录时，清单、预订确认状态和备忘录保存在当前浏览器中。使用页面顶部的云端同步入口登录后，准备事项、行李清单、预订状态和备忘会通过 Supabase 在同一账号的设备间同步。
