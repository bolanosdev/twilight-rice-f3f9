import { fruits } from "./data";

export function onRequest(context) {
  const url = new URL(context.request.url);
  const search = url.searchParams.get("search");

  return new Response(JSON.stringify(fruits));
}
