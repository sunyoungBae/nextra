const isProd = process.env.NODE_ENV === "production";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "https://sunyoungbae.github.io/nextra/" : undefined,
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};
