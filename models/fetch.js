// import fetch from 'node-fetch';

// app.get("/", (req, res) => {
// 	Country.deleteMany()
// 		.then((result) => console.log(result))
// 		.catch((err) => console.log(err));
// 	res.send("deleting..");
// 	console.log("deleting...");
// });

// app.get("/", (req, res) => {
// 	fetch("https://restcountries.com/v3.1/all")
// 		.then((resp) => resp.json())
// 		.then((data) => {
// 			var i = 0;
// 			data.forEach((country) => {
// 				// I used let and if statements for values which are not present in all countries from the reosurce
// 				const name = country.name.official;
// 				const flag = country.flags.png;
// 				const cca3 = country.cca3;
// 				const population = country.population;
// 				const region = country.region;
// 				let capital;
// 				if (country.capital) {
// 					capital = country.capital.toString();
// 				} else {
// 					// some countries do not have a capital from the resource, so I'm replacing it with their name
// 					capital = name;
// 				}

// 				let nativeName;
// 				if (country.name.nativeName) {
// 					let nativeNameKey = Object.keys(country.name.nativeName)[0];
// 					nativeName = country.name.nativeName[nativeNameKey].official;
// 				}

// 				let topLevelDomain;
// 				if (country.tld) {
// 					topLevelDomain = country.tld.toString();
// 				}
// 				let currency;
// 				if (country.currencies !== null && country.currencies !== undefined) {
// 					currency = Object.keys(country.currencies)[0];
// 				}

// 				let languages = [];
// 				if (country.languages) {
// 					let lang = Object.keys(country.languages);

// 					for (let i = 0; i < lang.length; i++) {
// 						//pushing the languages into an array
// 						languages.push(country.languages[lang[i]]);
// 					}
// 				}

// 				const borders = country.borders;

// 				const entry = new Country({
// 					name,
// 					cca3,
// 					flag,
// 					population,
// 					region,
// 					capital,
// 					nativeName,
// 					topLevelDomain,
// 					currency,
// 					languages,
// 					borders,
// 				});
// 				i++; // did this to check if the entries are complete

// 				entry
// 					.save()
// 					.then((result) => console.log(result, i))
// 					.catch((err) => console.log(err));
// 			});
// 		})
// 		.catch((err) => console.log(err));
//     res.send("uploading...");
// 	console.log("Uploading...");
// });
