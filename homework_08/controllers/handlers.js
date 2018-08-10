const fs = require('fs');
const path = require('path');
const storagePath = path.join(__dirname, '..', 'data', 'storage.json');

const postRockstar = (req, res) => {
    fs.readFile(storagePath, (error, data) => {
        if (error) {
            return res.sendStatus(500);
        }

        if (!req.body.name || !req.body.band || !req.body.instrument || !req.body) {
            return res.sendStatus(400);
        }

        const rockstars = JSON.parse(data);

        const check = rockstars.find((elem) => {
            return (elem.name === req.body.name && elem.band === req.body.band && elem.instrument === req.body.instrument);
        });
        if (check) {
            return res.status(409).send({ "message": "Musician already exist." });
        }

        const temp = {
            id: rockstars.length + 1,
            name: req.body.name,
            band: req.body.band,
            instrument: req.body.instrument
        }

        rockstars.push(temp);

        fs.writeFile(storagePath, JSON.stringify(rockstars), (error) => {
            if (error) {
                return res.sendStatus(500);
            }
        });
        res.sendStatus(201);
    });
}

const getRockstars = (req, res) => {
    fs.readFile(storagePath, (error, data) => {
        if (error) {
            return res.sendStatus(500);
        }
        const rockstars = JSON.parse(data);
        if (!rockstars) {
            res.sendStatus(404);
        }
        res.json(rockstars);
    });
}

const getRockstarById = (req, res) => {
    fs.readFile(storagePath, (error, data) => {
        if (error) {
            return res.sendStatus(500);
        }
        const rockstars = JSON.parse(data);
        const rockstar = rockstars.find(elem => elem.id === parseInt(req.params.id));
        if (!rockstar) {
            return res.sendStatus(404);
        }
        res.status(200).send(rockstar);
    });
}

const putRockstar = (req, res) => {
    fs.readFile(storagePath, (error, data) => {
        if (error) {
            return res.sendStatus(500);
        }
        const rockstars = JSON.parse(data);
        const rockstar = rockstars.find(elem => elem.id === parseInt(req.params.id));

        if (!rockstar) {
            return res.sendStatus(404);
        }

        if (!req.body.name || !req.body.band || !req.body.instrument || !req.body) {
            return res.sendStatus(400);
        }

        rockstar.name = req.body.name;
        rockstar.band = req.body.band;
        rockstar.instrument = req.body.instrument;

        fs.writeFile(storagePath, JSON.stringify(rockstars), (error) => {
            if (error) {
                return res.sendStatus(500);
            }
        });
        res.send(rockstar);
    });
}

const deleteRockstar = (req, res) => {
    fs.readFile(storagePath, (error, data) => {
        if (error) {
            res.sendStatus(500);
            return;
        }
        const rockstars = JSON.parse(data);
        const rockstar = rockstars.find((elem) => elem.id === parseInt(req.params.id));

        if (!rockstar) {
            return res.sendStatus(404);
        }

        const index = rockstars.indexOf(rockstar);
        rockstars.splice(index, 1);

        fs.writeFile(storagePath, JSON.stringify(rockstars), (error) => {
            if (error) {
                return res.sendStatus(500);
            }
        });
        res.send({ "message": "Musician has been successfully removed." });
    });
}

module.exports = {
    postRockstar: postRockstar,
    getRockstars: getRockstars,
    getRockstarById: getRockstarById,
    putRockstar: putRockstar,
    deleteRockstar: deleteRockstar
}