export function onRequest(context) {
  const url = new URL(context.request.url);

  const q = url.searchParams.get("q");
  const skip = url.searchParams.get("skip");
  const take = url.searchParams.get("take");

  return new Response(`Some fruit ${q}`);
}
