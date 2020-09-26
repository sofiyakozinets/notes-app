import express from "express";

import * as Notes from "../models/notes";

const router = express.Router();

router.get("/", (req, res) => {
	Notes.loadNotes().then(data => res.send(data));
});

router.post("/", (req, res) => {
	Notes.createNote(req.body).then(data => res.send(data));
});

router.delete("/:id", (req, res) => {
	Notes.deleteNote(req.params.id).then(data => res.send(data));
});

module.exports = router;
