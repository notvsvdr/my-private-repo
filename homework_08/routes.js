const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const handlers = require('./controllers/handlers');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/rockstar', handlers.postRockstar);
router.get('/rockstars', handlers.getRockstars);
router.get('/rockstar/:id', handlers.getRockstarById);
router.put('/rockstar/:id', handlers.putRockstar);
router.delete('/rockstar/:id', handlers.deleteRockstar);

module.exports = router;