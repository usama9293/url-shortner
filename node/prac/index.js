import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/about.html") {
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        res.write("Error Occured");
        res.end();
      } else {
        res.end(data);
      }
    });
  } else {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.write("Error Occured");
        res.end();
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("server started at port 3000");
});
