const express = require("express")
const router = express.Router()
const fs = require("fs")

// api/countries
router.get("/", (req,res) => {
  const countries = JSON.parse(fs.readFileSync("./db/countries.json"))
  res.json(countries)
})

// /api/countries/api/countries/2
router.get("/:id", (req,res) => {
  const countries = JSON.parse(fs.readFileSync("./db/countries.json"))
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (country.id == req.params.id) {
      res.json(country)
    }
    
  }
  res.json({msg: "Not a valid ID"})
})

// /api/countries
router.post("/", (req,res) => {
  const currentCountries = JSON.parse(fs.readFileSync("./db/countries.json"))
  // check that req.body is correct format
  if (req.body.population) {

  } else {
    res.status(500).json({msg: "improper data structure"})
  }
  // read all countries
  // create new country from request
  console.log(req.body)
  const newCountry = req.body
  // push to array
  currentCountries.push(newCountry)
  // overwrite countries.json
  fs.writeFile("./db/countries.json", JSON.stringify(currentCountries), (err) => {
    if (err) {
      throw err
    }
  })
  res.json(currentCountries)
})


module.exports = router