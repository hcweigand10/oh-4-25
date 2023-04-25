const express = require("express")
const router = express.Router()
const planets = require("../db/planets.json")

// api/planets
router.get("/", (req,res) => {
  res.json(planets)
})

// api/planets/2
router.get("/:id", (req,res) => {
  for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    if (planet.id == req.params.id) {
      res.json(planet)
    }
    
  }
  res.json({msg: "Not a valid ID"})
})


module.exports = router