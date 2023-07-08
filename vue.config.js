// node命令操作
const path = require("path");
const argv = process.argv.splice(2);
// webpack插件--生成代码分析报告 有analyzer命令则生成报告没有为空
const BundleAnalyzerPlugin = argv.includes("--analyzer")
  ? [new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)()]
  : [];
const plugins = [...BundleAnalyzerPlugin];
console.log("当前开发环境:", process.env.NODE_ENV);
// webpack插件--管理打包后的文件路径 将.dist文件自动打包放到package/home.zip 然后删除.dist文件
const FileManagerPlugin = require("filemanager-webpack-plugin");
if (process.env.NODE_ENV === "production") {
  plugins.push(
    new FileManagerPlugin({
      onEnd: {
        archive: [
          {
            source: "./dist",
            destination: "./package/dist.zip",
          },
        ],
        delete: ["./dist"],
      },
    })
  );
}

module.exports = {
  // 部署应用包时的基本URL
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  // 关掉eslint代码检测
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080, // 端口号
    host: "localhost", // 地址
    open: true, // 配置自动启动浏览器
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolvePath("src"),
        styles: resolvePath("src/styles"),
      },
      extensions: [".js", ".vue", ".json"],
    },
    plugins: [...plugins],
  },
};

function resolvePath(relativePath) {
  return path.resolve(__dirname, relativePath);
}
