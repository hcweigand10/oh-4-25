const express = require("express")
const router = express.Router()
const countryRoutes = require("./countriesController")
const planetRoutes = require("./planetsController")

router.use("/countries", countryRoutes)
router.use("/planets", planetRoutes)

module.exports = router
