import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/articles/:articleId", "routes/PageArticleDetail.tsx"),
] satisfies RouteConfig;
