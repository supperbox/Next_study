import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

// routing这个对象定义了应用的路由规则，包括哪些路径应该对应哪些语言。

export default createMiddleware(routing);

// export function middleware(request) {
//   console.log(request.nextUrl.pathname);
//   if (request.nextUrl.pathname.startsWith("/person")) {
//     return NextResponse.rewrite(new URL("/home", request.url));
//   }
// }

export const config = {
  matcher: [
    // "/",
    // "/(zh_CN|zh_TW)/:path*",
    // 匹配所有其他路径，自动映射成带locale的路径
    "/((?!api)(?!_next|_vercel|.*\\..*).+)",
    // 排除以api开头的路径，避免api请求被重定向  使用 + 号排除根节点
  ],
};

// // 这个配置文件的作用是确保用户在访问网站时，能够根据他们的语言偏好被重定向到正确的语言版本

// middleware.js

// 中间件可以是 async 函数，如果使用了 await
