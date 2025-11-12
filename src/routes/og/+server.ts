import type { RequestHandler } from '@sveltejs/kit';
import { t } from "@cf-wasm/og/html-to-react";
import { ImageResponse } from '@cf-wasm/og/others';
import { initSatori, initYoga } from '@cf-wasm/satori/others';
import { initResvg } from '@cf-wasm/resvg/legacy/others';
import { defaultFont } from '@cf-wasm/og/others';
import resvgWasmModule from '@cf-wasm/resvg/legacy/resvg.wasm?module';
import yogaWasmModule from '@cf-wasm/satori/yoga.wasm?module';
import notoSansFontBuffer from '@cf-wasm/og/noto-sans-v27-latin-regular.ttf.bin';

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