let mix = require("laravel-mix");
let fs = require("fs");

mix.sass("assets/styles/styles.scss", "assets/dist/styles.min.css").options({
  processCssUrls: false,
});
mix.combine(["assets/js/scripts.js"], "assets/dist/scripts.min.js");

// mix.minify("assets/styles/styles.scss", "assets/styles/dist/styles.min.css");
