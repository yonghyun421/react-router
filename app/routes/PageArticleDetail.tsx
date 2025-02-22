import { useLoaderData } from "react-router";
import type { Route } from "./+types/PageArticleDetail";

export function loader({ request, params, context }: Route.LoaderArgs) {
  // X-yh-asdf 헤더가 있으면 X를 해라!!
  //   const header = request.headers.get("X-yh-asdf");
  console.log("THIS IS SERVER");

  // 만약 P라면, '/'로 리다이렉트를 시켜줘!
  if (true) {
    const headers = new Headers();
    headers.set("Location", "/");

    return new Response(null, {
      status: 302,
      headers,
    });
  }
}
