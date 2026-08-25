// Must match `basePath` / `assetPrefix` in next.config.js.
const BASE_PATH = '/manish-portfolio';

// Raw <img>/<a href> URLs are not rewritten by Next, so they need the basePath
// applied by hand. Next serves `public/` under the basePath in dev as well as in
// production, so this is unconditional — gating it on NODE_ENV 404s every asset
// when running `npm run dev`.
export function getAssetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
