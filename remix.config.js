//default
// /**
//  * @type {import('@remix-run/dev').AppConfig}
//  */
// module.exports = {
//   ignoredRouteFiles: [".*"]
//   // appDirectory: "app",
//   // assetsBuildDirectory: "public/build",
//   // serverBuildPath: "build/index.js",
//   // publicPath: "/build/",
//   // devServerPort: 8002
// };

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "netlify/functions/server/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
}
