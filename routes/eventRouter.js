const router = require("express").Router();
const event_controller = require("../controllers/eventController");

router.get("/", event_controller.getTopEvents);
router.get("/topics", event_controller.getAllTopics);
router.get("/topics/:topic", event_controller.getTopic);
router.get("/countries", event_controller.getCountryMentions);
router.get("/countries/:country", event_controller.getMentionsPerCountry);
router.get("/countries/code/:code", event_controller.getMentionsPerCountryCode);

module.exports = router;
