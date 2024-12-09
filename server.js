const express = require("express");
const cors = require("cors");
const postRoute = require("./backend/router/post");
 
const app = express();
app.use(cors())
app.use(express.json());
app.use("/post", postRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found" });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur" });
});




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});