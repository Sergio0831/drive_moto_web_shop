module.exports = {
  "gifsicle": { "optimizationLevel": 2, "interlaced": false, "colors": 10 },
  "mozjpeg": { "progressive": true, "quality": 30 },
  "pngquant": { "quality": 30 },
  "svgo": {
    "plugins": [
      { "removeViewBox": false },
      { "cleanupIDs": true },
    ]
  },
  "webp": { "quality": 30 }
}