import type {} from '@deepseek-ai/cordis';

/**
 * Minis 风格皮肤 — Host 半部（无逻辑）。
 * 行存在使 client-modules 扫描到本包的 dsh.client 声明，从而把皮肤加载进浏览器。
 * 客户端皮肤见 ./client.js（ModuleLoader bundle，由 exports["./client"] 提供）。
 */
export function apply(ctx: unknown): void {
  void ctx;
}
