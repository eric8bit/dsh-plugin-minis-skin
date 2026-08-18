// Minis 风格皮肤 — 客户端插件
// 通过 dsh.client 声明被 client-modules 加载；运行于浏览器 ModuleLoader 环境。
// 注意：以下 CSS 类名前缀（gdEzaW / o3BgMG / Sxvs8a 等）来自 DSH 构建产物的
// CSS Modules 哈希，DSH 升级后可能需要刷新。

const SKIN_CSS = `
::selection{background:color-mix(in srgb,var(--dsw-alias-brand-primary) 30%,transparent)}
*{scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--dsw-alias-label-secondary) 35%,transparent) transparent}
body{--dsw-specific-bubble:#E4E9F2;--dsw-specific-bubble-highlight:#D8DFEA}
body[data-ds-dark-theme]{--dsw-specific-bubble:#2C2C2E;--dsw-specific-bubble-highlight:#35353A}
body,body[data-ds-dark-theme]{
  --dsw-specific-sidebar-nav-item-hover:rgba(0,0,0,0.05);
  --dsw-specific-sidebar-nav-item-active:rgba(0,0,0,0.09)}
body[data-ds-dark-theme]{
  --dsw-specific-sidebar-nav-item-hover:rgba(255,255,255,0.08);
  --dsw-specific-sidebar-nav-item-active:rgba(255,255,255,0.10)}
body{
  background:radial-gradient(760px 640px at -60px 8%,rgba(130,155,255,0.22),transparent 62%),
    radial-gradient(680px 600px at -80px 68%,rgba(215,120,250,0.18),transparent 62%),
    radial-gradient(560px 480px at 200px 30%,rgba(90,205,255,0.16),transparent 62%),
    var(--dsw-alias-bg-base);
  background-attachment:fixed}
.pI_x6G_frame{background:transparent}
.VOzbGW_panel{
  background-color:color-mix(in srgb,var(--dsw-alias-bg-layer-2) 66%,transparent);
  background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27180%27 height=%27180%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E%3CfeComponentTransfer%3E%3CfeFuncA type=%27linear%27 slope=%270.05%27/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E");
  backdrop-filter:blur(24px) saturate(150%);
  -webkit-backdrop-filter:blur(24px) saturate(150%)}
.pI_x6G_sidebarCol{
  background-color:color-mix(in srgb,var(--dsw-specific-sidebar-fill) 74%,transparent);
  background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27180%27 height=%27180%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E%3CfeComponentTransfer%3E%3CfeFuncA type=%27linear%27 slope=%270.06%27/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E");
  border-right:1px solid rgba(0,0,0,0.10);
  --dsw-alias-label-primary:#1F1F28;
  --dsw-alias-label-secondary:rgba(20,20,30,0.70);
  --dsw-alias-label-tertiary:rgba(20,20,30,0.50);
  --dsw-alias-label-caption:rgba(20,20,30,0.45);
  --dsw-alias-label-primary-dimmed:rgba(20,20,30,0.85);
  --dsw-alias-brand-primary:#1976D2;
  --dsw-alias-bg-layer-1:#FFFFFF;
  --dsw-alias-bg-layer-2:#E8E7ED;
  --dsw-alias-bg-overlay:rgba(255,255,255,0.92)}
body[data-ds-dark-theme] .pI_x6G_sidebarCol{
  border-right-color:rgba(255,255,255,0.12);
  --dsw-alias-label-primary:#F5F5F7;
  --dsw-alias-label-secondary:rgba(255,255,255,0.70);
  --dsw-alias-label-tertiary:rgba(255,255,255,0.45);
  --dsw-alias-label-caption:rgba(255,255,255,0.40);
  --dsw-alias-label-primary-dimmed:rgba(255,255,255,0.85);
  --dsw-alias-brand-primary:#4DA3FF;
  --dsw-alias-bg-layer-1:#2C2C2E;
  --dsw-alias-bg-layer-2:#3A3A3C;
  --dsw-alias-bg-overlay:rgba(28,28,30,0.9)}
.hHd-Xa_root{background:transparent;
  --dsh-scrollbar-thumb:rgba(0,0,0,0.20);
  --dsh-scrollbar-thumb-hover:rgba(0,0,0,0.30)}
body[data-ds-dark-theme] .hHd-Xa_root{
  --dsh-scrollbar-thumb:rgba(255,255,255,0.25);
  --dsh-scrollbar-thumb-hover:rgba(255,255,255,0.35)}
.o3BgMG_root,.CY-8Ka_card,.pC0e7a_root,._Xvjua_root,
.gdEzaW_compactionRow,.gdEzaW_retryRow,.gdEzaW_turnErrorRow,
.QWLzlG_root,.cvtE3a_card,.gNWCoW_card{
  box-sizing:border-box;width:100%;max-width:var(--dsh-chat-content-width);
  border:1px solid transparent;border-radius:16px;padding:8px 16px}
.o3BgMG_root,.CY-8Ka_card,.pC0e7a_root,._Xvjua_root,
.gdEzaW_compactionRow,.gdEzaW_retryRow,.gdEzaW_turnErrorRow,
.cvtE3a_card,.gNWCoW_card{background:#EEF0F4;border-color:#EEF0F4}
.QWLzlG_root{background:#EEF7FE;border-color:#EEF7FE}
.QWLzlG_leading,.QWLzlG_title{color:#007AFF}
.QWLzlG_chevron{color:#007AFF}
.QWLzlG_separator{background:#007AFF}
.o3BgMG_leading,.CY-8Ka_leading{color:#45BD63}
.o3BgMG_title,.CY-8Ka_title{color:var(--dsw-alias-brand-primary)}
.o3BgMG_ioCard,.CY-8Ka_ioCard,.o3BgMG_codeBody,.o3BgMG_terminalBody,
.o3BgMG_diffBody,.o3BgMG_readBody,.o3BgMG_searchBody,.o3BgMG_webBody,
.CY-8Ka_terminal,.pC0e7a_body,.cvtE3a_output,.gNWCoW_output,._Xvjua_body{
  --dsw-alias-markdown-code-block:#000000;
  --dsw-alias-markdown-code-block-banner:#111111;
  --dsw-alias-label-primary:#FFFFFF;
  --dsw-alias-label-secondary:#C4C4CE;
  --dsw-alias-label-tertiary:#A0A0AE;
  background:#000000;color:#FFFFFF}
body[data-ds-dark-theme] .o3BgMG_root,
body[data-ds-dark-theme] .CY-8Ka_card,
body[data-ds-dark-theme] .pC0e7a_root,
body[data-ds-dark-theme] ._Xvjua_root,
body[data-ds-dark-theme] .gdEzaW_compactionRow,
body[data-ds-dark-theme] .gdEzaW_retryRow,
body[data-ds-dark-theme] .gdEzaW_turnErrorRow,
body[data-ds-dark-theme] .cvtE3a_card,
body[data-ds-dark-theme] .gNWCoW_card{
  background:#1C1C1E;border-color:#1C1C1E}
body[data-ds-dark-theme] .QWLzlG_root{background:#00080F;border-color:#00080F}
body[data-ds-dark-theme] .QWLzlG_leading,
body[data-ds-dark-theme] .QWLzlG_title{color:#0A84FF}
body[data-ds-dark-theme] .QWLzlG_chevron{color:#0A84FF}
body[data-ds-dark-theme] .QWLzlG_separator{background:#0A84FF}
body[data-ds-dark-theme] .o3BgMG_leading,
body[data-ds-dark-theme] .CY-8Ka_leading{color:#43C666}
`;

const SKIN_TOKENS = {
  '--dsw-alias-bg-base': { light: '#FFFFFF', dark: '#000000' },
  '--dsw-alias-bg-layer-1': { light: '#FFFFFF', dark: '#1E1E1E' },
  '--dsw-alias-bg-layer-2': { light: '#E9ECEF', dark: '#0A0A0A' },
  '--dsw-alias-bg-overlay': { light: 'rgba(255,255,255,0.96)', dark: 'rgba(28,28,28,0.95)' },
  '--dsw-alias-border-l1': { light: 'rgba(0,0,0,0.08)', dark: 'rgba(255,255,255,0.10)' },
  '--dsw-alias-border-l2': { light: 'rgba(0,0,0,0.15)', dark: 'rgba(255,255,255,0.18)' },
  '--dsw-alias-brand-primary': { light: '#1976D2', dark: '#29B6F6' },
  '--dsw-alias-label-primary': { light: '#212529', dark: '#FFFFFF' },
  '--dsw-alias-label-secondary': { light: '#6C757D', dark: '#B0B0B0' },
  '--dsw-alias-state-error-primary': { light: '#D32F2F', dark: '#F44336' },
  '--dsw-alias-state-success-primary': { light: '#45BD63', dark: '#43C666' },
  '--dsw-alias-state-warn-primary': { light: '#FF9800', dark: '#FF9800' },
  '--dsw-specific-sidebar-fill': { light: '#F2F1F6', dark: '#1C1C1E' },
};

function apply(ctx) {
  // 注入皮肤样式表（幂等：页面已存在同款标签则不重复插入）
  let tag = null;
  const existing = document.querySelector('style[data-plugin-css="minis-skin"]');
  if (existing === null) {
    tag = document.createElement('style');
    tag.dataset.plugin = '@dsh-external/dsh-plugin-minis-skin';
    tag.dataset.pluginCss = 'minis-skin';
    tag.textContent = SKIN_CSS;
    document.head.appendChild(tag);
  }

  const theme = ctx.get('theme');
  if (theme === undefined) return;

  ctx.effect(() => {
    // 不强制主题：尊重用户的浅色/深色/跟随系统偏好，皮肤按当前明暗自动应用对应配色。
    const disposer = theme.overrideTokens('minis-skin', SKIN_TOKENS);
    return () => {
      disposer();
      if (tag !== null) tag.remove();
    };
  });
}

window.__ModuleLoader__.load({
  id: '@dsh-external/dsh-plugin-minis-skin',
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    exports.apply = apply;
    return module.exports;
  },
});
