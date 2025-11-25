
import type { Component } from 'svelte';
import { render } from 'svelte/server';
import { ImageResponse as OGImageResponse } from '@cf-wasm/og/others';
import { html } from 'satori-html';

export const prerender = false;


export const ImageResponse = async <T extends Record<string, unknown>>(
    component: Component<T>,
    options?: ConstructorParameters<typeof OGImageResponse>['1']
) => {
    const result = render(component as Component);
    return await OGImageResponse.async(html(result.body), options);
};
