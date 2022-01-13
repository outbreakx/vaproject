import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
	brand: {
		type: String,
	},
	model: {
		type: String,
	},
	version: {
		type: Number
	},
	year: {
		type: Number,
	},
	mileague: {
		type: Number
	},
	shiftType: {
		type: String
	},
	sellPrice: {
		type: Number
	},
},
	{
		timestamps: true,
	}
);

CarSchema.index({
	"year": -1,
	"version": -1
});

const Car = mongoose.models.Car || mongoose.model('Car', CarSchema);

export default Car;