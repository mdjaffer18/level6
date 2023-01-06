s (4 sloc)  132 Bytes

const app = require("./app");
app.listen(process.env.PORT || 3000, () => {
  console.log("Started express server at port 3000");
});