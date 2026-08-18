# dsh-plugin-minis-skin

Minis 风格皮肤：冷调浅灰蓝聊天卡片、钢蓝灰用户气泡、淡蓝思考栏（iOS 蓝）、黑色代码面板、毛玻璃设置面板、染色玻璃侧边栏。纯客户端主题覆盖，无 host 逻辑。

## 安装

```sh
dsh plugin --profile web add <本目录路径>
```

安装后重启 DSH，皮肤随页面自动加载（每次打开界面自动应用，无需手动启用）。

卸载：

```sh
dsh plugin --profile web remove @dsh-external/dsh-plugin-minis-skin
```

## 说明

- 皮肤通过 `dsh.client` 声明由 client-modules 加载：`package.json` 中声明平台 `web`，`exports["./client"]` 指向 `lib/client.js`（ModuleLoader bundle）。
- `cordis.patch.yml` 将一行 `minis-skin` 插入 profile 层叠栈，使 client-modules 扫描到本包。
- 主题覆盖层使用 `theme.overrideTokens`，停用/卸载即完全还原；**不强制主题**——尊重设置 → 外观中选择的浅色/深色/跟随系统，皮肤按当前明暗自动应用对应配色。
- 部分 CSS 类名前缀（`gdEzaW`、`o3BgMG`、`Sxvs8a`、`pC0e7a`、`_Xvjua`、`cvtE3a`、`gNWCoW`、`QWLzlG`、`CY-8Ka`、`pI_x6G`、`VOzbGW`、`hHd-Xa`）来自 DSH 构建产物的 CSS Modules 哈希，**DSH 升级后可能变化**——升级后若卡片/侧栏样式失效，更新 `src/client.js` 中的类名并重新 `npm run build` 即可。
