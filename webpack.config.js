const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js") ,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          },
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      short_name: "Petgram 😸",
      description:
        "Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve("src/assets/icon.png"),
          size: "1024x1024",
          purpose: "maskable",
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com | images.unsplash.com)'),
          handler: "CacheFirst",
          options: {
            cacheName: "images"
          }
        },
        {
          urlPattern: new RegExp("https://petgram-server-pink.vercel.app/graphql"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api"
          }
        },
      ]
    })
  ],
};
