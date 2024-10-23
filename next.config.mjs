import createNextIntlPlugin from "next-intl/plugin";

import AutoImport from "unplugin-auto-import/webpack";

const withNextIntl = createNextIntlPlugin(); // 相当于是国际化插件nextIntl配置注入

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // 添加 unplugin-auto-import 插件
    config.plugins.push(
      AutoImport({
        imports: [
          // 你可以在这里指定需要自动导入的模块
          "react",
          // "react-router",
        ],
        dts: "./auto-imports.d.ts", // 生成 TypeScript 类型声明文件
        dirs: [
          "./components/**", // 自动引入 components 文件夹中的组件
          "./i18n/**",
        ],
      })
    );

    return config;
  },
};

export default withNextIntl(nextConfig);
