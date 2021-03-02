const router = require("express").Router();
const map_controller = require("../controllers/mapController");

router.get("/mapjson/:name", map_controller.mapJson);
router.get("/maplayers", map_controller.mapLayers);

module.exports = router;
