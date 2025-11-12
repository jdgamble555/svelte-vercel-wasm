import type { RequestHandler } from '@sveltejs/kit';
import { ImageResponse } from "@cf-wasm/og/others";
import { t } from "@cf-wasm/og/html-to-react";
import notoSansFontBuffer from '@cf-wasm/og/others/noto-sans-v27-latin-regular.ttf.bin';
import yogaWasmModule from '@cf-wasm/satori/others/yoga.wasm?module';
import { initSatori, initYoga } from '@cf-wasm/satori/others';
import { initResvg } from '@cf-wasm/resvg/others';
import resvgWasmModule from '@cf-wasm/resvg/others/resvg.wasm?module';
import { defaultFont } from '@cf-wasm/og/others';

if (!initSatori.initialized) {
  initSatori(initYoga(yogaWasmModule));
}

if (!initResvg.initialized) {
  initResvg(resvgWasmModule);
}

defaultFont.set(notoSansFontBuffer);

export const GET: RequestHandler = async () => {
    const html = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
        <p>Renders HTML</p>
        <p>Hello World!</p>
      </div>`;

    return new ImageResponse(t(html));
};