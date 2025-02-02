const { RspackFederationPlugin } = require("@rspack/core");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: "auto",
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new RspackFederationPlugin({
      name: "host",
      remotes: {
        remote1: "remote1@http://localhost:3001/remoteEntry.js",
        remote2: "remote2@http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@mui/material", "react-query"],
    }),
  ],
};