const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, "./static")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));



app.get("/", (req, res) => {
  const imageFolderPath = path.join(__dirname, "/static/images/Work"); // Replace with the actual path to your image folder

  fs.readdir(imageFolderPath, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }

    let imageTags = files
      .filter(
        (file) =>
          file.endsWith(".jpg") ||
          file.endsWith(".jpeg") ||
          file.endsWith(".png")
      ) // Filter only image files
      .map((file) => `<img src="/images/Work/${file}" alt="${file}">`); // Generate <img> tags
      
    for (let i = imageTags.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageTags[i], imageTags[j]] = [imageTags[j], imageTags[i]];
    }
    
    const html = imageTags.join("\n"); // Join the <img> tags with line breaks

    res.render('index',{images:html})
  });

});

app.listen(port, () => {
  console.log(`Server On at localhost:${port}`);
});
