module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "../../node_modules/react/dist/react.js",
      "javascripts/app.js"

    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [

  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
