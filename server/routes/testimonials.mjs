import express from 'express';
import mongoose from 'mongoose';
import testimonialSchema from "../schemas/testimonialSchema.mjs";

const testimonialRouter = express.Router();

const testimonialModel = mongoose.model('Testimonial', testimonialSchema);

// Get all testimonials
testimonialRouter.get("/", async (req, res) => {
    let doc = await testimonialModel.find({});
    res.json(doc);
});

// Get a specific testimonial
testimonialRouter.get("/:id", async (req, res) => {
    let doc = await testimonialModel.findOne({_id: req.params.id});
    res.json(doc);
});

export default testimonialRouter;