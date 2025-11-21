import { type RequestHandler } from "@sveltejs/kit";
//import { ImageResponse } from "$lib/image-response";
import ImageCard from "$lib/image-card.svelte";
import { ImageResponse } from "@ethercorps/sveltekit-og";


export const prerender = false;


export const GET = (async ({ url }) => {

  const { width, height } = Object.fromEntries(url.searchParams);

  return new ImageResponse(
    ImageCard,
    {
      width: Number(width) || 1600,
      height: Number(height) || 900
    }
  );

}) satisfies RequestHandler;