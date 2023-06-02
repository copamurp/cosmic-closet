import express from 'express';
import mongoose from 'mongoose';
import testimonialSchema from "../schemas/testimonialSchema.mjs";
import databaseObject from "../db/connection.mjs";

const testimonialRouter = express.Router();
const conn = mongoose.createConnection(process.env.MONGOOSE_COSMICCLOSET_URI, {maxPoolSize: 10});
const testimonialModel = conn.model('Testimonial', testimonialSchema);

// Get all testimonials
testimonialRouter.get("/", async (req, res) => {
	let database = databaseObject.getDb("cosmic_closet");
	let collection = await database.collection("testimonials");
	let result = await collection.find({}).toArray();

	res.json(result).status(200);
});

export default testimonialRouter;