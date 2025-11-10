import type { RequestHandler } from '@sveltejs/kit';
import { ImageResponse } from "@cf-wasm/og/others";
import { t } from "@cf-wasm/og/html-to-react";

export const GET: RequestHandler = async () => {
    const html = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
        <p>Renders HTML</p>
        <p>Hello World!</p>
      </div>`;

    return new ImageResponse(t(html));
};