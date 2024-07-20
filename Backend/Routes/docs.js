const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Docs = require('../Model/Document');
const fetchuser = require('../Middlewares/fetchuser');


router.get('/getAllDocs', fetchuser, async (req, res) => {
    try {
        const docs = await Docs.find({ user: req.user._id });
        res.json(docs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

module.exports = router;



