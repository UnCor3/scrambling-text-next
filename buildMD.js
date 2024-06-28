import { glob } from "glob";
import fs from "fs";
import path from "path";

const mainFile = "README.md";

const order = [
  "Intro.md",
  "Vanilla.md",
  "Scramble.md",
  "ScrambleInView.md",
  "ScrambleOnHover.md",
  "Caveats.md",
  "Types.md",
];

glob("src/**/*.md")
  .then((files) => {
    if (!files.length) throw new Error("No files found");
    let content = "";
    console.log(files);
    files
      .sort((a, b) => {
        const aFilename = path.basename(a);
        const bFilename = path.basename(b);
        return order.indexOf(aFilename) - order.indexOf(bFilename);
      })
      .forEach((file) => {
        content += fs.readFileSync(file, "utf8");
      });
    if (fs.existsSync("dist")) {
      console.log("dist exists");
      fs.writeFileSync("dist/README.md", content);
    }
    fs.writeFileSync(mainFile, content);
    console.log("MD build complete");
  })
  .catch((err) => {
    console.error(err);
  });
