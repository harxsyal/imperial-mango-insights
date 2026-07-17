// Renders the "/" route via the built SSR bundle and writes dist/client/index.html.
// Used by the GitHub Actions deploy workflow to ship a static SPA shell to cPanel.
import { writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const serverEntry = path.join(root, "dist/server/index.mjs");
const outFile = path.join(root, "dist/client/index.html");

const mod = await import(pathToFileURL(serverEntry).toString());
const handler = mod.default;

const env = { ASSETS: { fetch: async () => new Response("", { status: 404 }) } };
const ctx = { waitUntil: () => {}, passThroughOnException: () => {} };

const res = await handler.fetch(new Request("http://localhost/"), env, ctx);
if (!res.ok) {
  console.error(`SSR shell render failed: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const html = await res.text();
await writeFile(outFile, html, "utf8");
console.log(`Wrote SPA shell (${html.length} bytes) to ${outFile}`);