const express = require("express")
const app = express()

const PORT = 3001

const routes = require("./controllers")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const countries = require("./db/countries.json")

app.get("/hi", (req,res) => {
  res.send("hi")
})

app.use("/api", routes)


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));