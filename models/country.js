import mongoose from "mongoose";

const Schema = mongoose.Schema;

//

const countrySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	cca3: {
		type: String,
		required: true,
	},
	flag: {
		type: String,
		required: true,
	},
	population: {
		type: Number,
		required: true,
	},
	region: {
		type: String,
		required: true,
	},
	capital: {
		type: String,
	},
	nativeName: {
		type: String,
		required: true,
	},
	topLevelDomain: {
		type: String,
		required: true,
	},
	currency: {
		type: String,
		required: true,
	},
	languages: {
		type: Array,
		required: true,
	},
	borders: {
		type: Array,
	},
});

const Country = mongoose.model("Country", countrySchema);

export default Country;
