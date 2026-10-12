const express = require('express');

const clueDb = require('../helpers/clueDb');

// jService-compatible API served from the local clue database
const router = express.Router();

const handle = (fn) => async (req, res) => {
    try {
        await fn(req, res);
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ error: err.message });
    }
};

router.get('/category', handle(async (req, res) => {
    const category = await clueDb.getCategory(parseInt(req.query.id));
    category ? res.json(category) : res.status(404).json({ error: 'Category not found' });
}));

router.get('/random-category', handle(async (req, res) => {
    res.json(await clueDb.getRandomCategory());
}));

router.get('/random', handle(async (req, res) => {
    res.json(await clueDb.getRandomClues(parseInt(req.query.count) || 1));
}));

module.exports = router;
