const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = {
  ...withNextra(),

  images: {
    unoptimized: true,
  },
  assetPrefix: "https://sunyoungbae.github.io/nextra/",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};
