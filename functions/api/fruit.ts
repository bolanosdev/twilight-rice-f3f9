import { fruits } from "./data";

export function onRequest(context) {
  const url = new URL(context.request.url);
  const q = url.searchParams.get("q");

  return new Response(JSON.stringify(fruits));
}
