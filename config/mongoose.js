const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// successfully acquired conection
const db = mongoose.connection;

// error message
db.on("error", console.error.bind(console, "Error in connecting to DB"));

// once connection establish print success message
db.once("open", () => {
  console.log("Successfully connected to DB");
});
