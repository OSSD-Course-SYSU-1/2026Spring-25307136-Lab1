# 新增功能

## 1. 商品比货模式

在商品列表页（H5页面）新增"比货"功能，用户可勾选最多两件商品进行参数对比。

- **进入比货模式**：点击商品列表页右下角浮动的「比货」按钮，每个商品项前出现勾选框，单击商品即可勾选/取消（最多勾选2件）。
- **商品详情对比**：勾选两件商品后点击「确认」，跳转到商品详情页时，页面会并排展示两件商品的图片轮播（带标签"一"/"二"）、价格、标题及详细参数。
- **选一/选二**：对比模式下，底部操作栏变为「选一」/「选二」按钮，点击对应按钮即可将所选商品加入订单确认。
- **退出比货**：点击右下角变为红色的「取消」按钮，退出比货模式并恢复原始商品列表。

> **涉及文件**：`IndexPage.ets`（比货按钮逻辑）、`product_list.js`（勾选与模式切换）、`product_detail.js`（对比展示与选一/选二）、`product_detail.css`（对比样式）、`ProductModel.ets`（`ArkTSFunModel` 接口）。

---

## 2. 跨设备接续（Continuation）

支持将当前浏览状态从一台设备无缝接续到另一台设备。

- **源端保存**：`EntryAbility.onContinue()` 自动保存当前 Web 页面 URL、订单确认页详情、设备状态栏/导航栏高度等上下文数据。
- **目的端恢复**：
  - **冷启动**：`EntryAbility.onCreate()` 检测 `CONTINUATION` 启动原因，从 `Want` 参数中恢复数据，并调用 `restoreWindowStage()` 还原页面。
  - **热启动**：`EntryAbility.onNewWant()` 同样处理接续数据恢复。
- **页面栈恢复**：`onWindowStageRestore()` 重新加载首页，IndexPage 自动从 `AppStorage` 中读取上一条浏览的 URL 进行恢复。

> **涉及文件**：`EntryAbility.ets`（接续逻辑）、`module.json5`（`"continuable": true` 及 skills 配置）。

---

## 3. 多设备响应式布局

基于 HarmonyOS 官方断点系统，实现手机、折叠屏/小平板、平板三种形态的自适应布局。

- **断点系统**（`BreakpointSystem.ets`）：通过 `mediaquery` 监听窗口宽度变化，划分为三个断点：

  | 断点 | 范围 | 对应设备 |
  |------|------|---------|
  | `sm` | 320vp ≤ width < 600vp | 手机 |
  | `md` | 600vp ≤ width < 840vp | 折叠屏/小平板 |
  | `lg` | 840vp ≤ width | 平板/大屏 |

- **ArkTS 侧适配**：`IndexPage` 和 `OrderConfirmPage` 通过 `@StorageProp('currentBreakpoint')` 感知当前断点，动态调整按钮尺寸、圆角、字体大小和间距。
- **H5 侧适配**：`product_list.css` 和 `product_detail.css` 使用 `@media screen and (min-width: 600px)` 和 `(min-width: 840px)` 媒体查询适配平板屏幕。
- **平板资源**：`tablet/element/float.json` 覆盖基础资源，提供平板设备专属的大尺寸字体、图标和间距值。

> **涉及文件**：`BreakpointSystem.ets`、`IndexPage.ets`、`OrderConfirmPage.ets`、`tablet/element/float.json`、`product_list.css`、`product_detail.css`。

---

## 4. 沉浸式状态栏 & 安全区域适配

优化全屏显示效果，适配设备状态栏和底部导航栏的安全区域。

- **安全区域获取**：`IndexPage` 通过 `window.getWindowAvoidArea()` 获取顶部状态栏和底部导航栏高度（vp 单位）。
- **全屏沉浸**：调用 `setWindowLayoutFullScreen(true)` 启用全屏布局。
- **动态状态栏颜色**：`updateStatusBar()` 根据当前页面类型（列表页/详情页）自动切换状态栏颜色（浅色/深色），适配深色商品图片背景。
- **页面内边距**：`IndexPage` 和 `OrderConfirmPage` 使用获取到的状态栏/导航栏高度设置 `padding`，确保内容不被系统栏遮挡。

> **涉及文件**：`IndexPage.ets`、`OrderConfirmPage.ets`。

---

## 更新后的工程目录

```
├──entry/src/main/ets                           // 代码区
│  ├──common
│  │  ├──constants   
│  │  │  └──CommonConstants.ets                 // 常量
│  │  └──utils   
│  │     ├──BreakpointSystem.ets                // [新增] 响应式断点系统
│  │     └──Logger.ets                          // 日志打印  
│  ├──entryability
│  │  └──EntryAbility.ets                       // [增强] 跨设备接续支持
│  ├──model
│  │  └──ProductModel.ets                       // [增强] 新增ArkTSFunModel接口
│  └──pages
│     ├──IndexPage.ets                          // [增强] 比货模式/响应式布局/沉浸式状态栏
│     └──OrderConfirmPage.ets                   // [增强] 响应式布局/安全区域适配
└──entry/src/main/resources                     // 资源文件夹
   ├──base/element/float.json                   // 手机端尺寸资源
   ├──tablet/element/float.json                 // [新增] 平板端尺寸资源
   └──rawfile
      ├──js
      │   ├──product_list.js                    // [增强] 比货勾选逻辑
      │   └──product_detail.js                  // [增强] 对比展示/选一选二
      └──style
          ├──product_list.css                   // [增强] 平板响应式样式
          └──product_detail.css                 // [增强] 对比样式/平板响应式
```

## 更新后的相关权限

不涉及额外权限。

## 更新后的约束与限制

1. 本示例支持标准系统上运行，支持设备：华为手机、折叠屏、平板。
2. HarmonyOS系统：HarmonyOS 5.0.5 Release及以上。
3. DevEco Studio版本：DevEco Studio 5.0.5 Release及以上。
4. HarmonyOS SDK版本：HarmonyOS 5.0.5 Release SDK及以上。
5. 跨设备接续功能需两台支持该特性的 HarmonyOS 设备。
