import {Schema} from 'mongoose';

const testimonialSchema = new Schema(
	{
		name:   {
			type:     String,
			required: true,
			trim:     true,
		},
		quote:  {
			type:     String,
			required: true,
			trim:     true,
		},
		rating: {
			type:     Number,
			required: true,
		},
		date:   {
			type:     Date,
			required: true,
		},
		title:  {
			type:     String,
			required: true,
		},
	},
)

export default testimonialSchema;