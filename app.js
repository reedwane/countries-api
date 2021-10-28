import express from "express";
import mongoose from "mongoose";
import Country from "./models/country.js";
import dotenv from "dotenv";
import fetch from "node-fetch";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3002;
const dbURI = process.env.MONGODB_URI;

// connecting to the database
mongoose
	.connect(dbURI)
	.then((result) => {
		app.listen(PORT);
	})
	.catch((err) => console.log(err));

//post or delete data from db
//

// getting all the countries
app.get("/all", (req, res) => {
	Country.find({}, { _id: 0, __v: 0 })
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
});

// redirecting '/' to get all countries
app.get("/", (req, res) => {
	res.send("go to /all to see all countries");
});

// search by cca3 code
app.get("/code/:cca3", (req, res) => {
	const code = req.params.cca3.toUpperCase();
	const query = { cca3: code };

	Country.find(query, { _id: 0, __v: 0 })
		.then((result) =>
			result.length === 0
				? res.send({ Error: "Country not found" })
				: res.send(result),
		)
		.catch((err) => console.log(err));
});

// filter by region
app.get("/:region", (req, res) => {
	const region = req.params.region.toUpperCase();
	const edit = region[0].toUpperCase() + region.slice(1).toLocaleLowerCase(); //changing the first letter to uppercase to match the valuse in the db
	const query = { region: edit };

	if (edit == "All") {
		// if the region is set to All
		res.redirect("/all");
	} else {
		Country.find(query, { _id: 0, __v: 0 })
			.then((result) =>
				result.length === 0
					? res.send({ Error: "Region not found" })
					: res.send(result),
			)
			.catch((err) => res.send(err));
	}
});

// filter by partial or full name
app.get("/:region/:name", (req, res) => {
	const region = req.params.region;
	const regionEdit =
		region[0].toUpperCase() + region.slice(1).toLocaleLowerCase();

	const cName = new RegExp(req.params.name, "i");
	let query;

	// querying with just the name if the region param is "all or with both params if otherwise"
	regionEdit === "All"
		? (query = { name: cName })
		: (query = { region: regionEdit, name: cName });

	Country.find(query, { _id: 0, __v: 0 })
		.then((result) =>
			result.length === 0
				? res.send({ Error: "Country not found" })
				: res.send(result),
		)
		.catch((err) => console.log(err));
});

// catch invalid requests
app.use((req, res) => {
	res.send("Country not Found");
});
