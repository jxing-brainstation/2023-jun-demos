// write the routes that start with /contestants

/*
 Routes from this morning:
 1. GET /contestants 
    POST /contestants
 2. GET /contestants/:id
 3. DELETE /contestants/:id
*/

const express = require('express')
const fs = require('fs');
const { v4: uuid } = require("uuid");
const router = express.Router();

const getContestants = () => {
    const contestantsJson = fs.readFileSync("./data/contestants.json");

    return JSON.parse(contestantsJson);
}
// I know my route will start with contestants (because of what we'll in server.js)
// the route here is /contestants/
router
    .route("/")
    .get((req, res) => {
        let contestants = getContestants();

        if (req.query.country) {
            contestants = contestants.filter((contestant) => {
                return contestant.country === req.query.country;
            })
        }

        /*  
        Test all these:
            GET
                /contestants?order=rating
                /contestants?order=rating&sort=desc
                /contestants?order=rating&sort=asc
                
                /contestants?country=USA&order=rating
                /contestants?country=USA&sort=asc
        */
        if (req.query.order === "rating") {
            if (req.query.sort === "asc") {
                // Sort ascending
                contestants.sort((a, b) => {
                    return a.rating - b.rating
                })

            } else {
                // Sort descending
                contestants.sort((a, b) => {
                    return b.rating - a.rating
                })
            }
        }

        res.json(contestants);
    })
    .post((req, res) => {
        // if one of the pieces of data is missing, respond with status: 400
        // server-side validation
        if (!req.body.name
            || !req.body.hometown
            || !req.body.country
            || !req.body.age
            || !req.body.originalSeason
            || !req.body.rating
        ) {
            res.status(400).json({
                message: "All fields are required"
            })
        }
        //in the body: include the data

        /*we want the body to look like:
        {
            "name": "John Doe",
            "hometown": "Toronto",
            "country": "CA",
            "age": 27,
            "originalSeason": "Season 9",
            "rating": 10
        }
        */

        //create the new contestant object with data from req.body
        // for the id, generate a new ID
        const newContestant = {
            id: uuid(),
            ...req.body,
            imageURL: "http://localhost:8080/images/default-pic.jpeg"
        }

        //read the file
        //now contestants is an array of objects (JS)
        const contestants = getContestants();
        // contestants.push(newContestant);

        const newContestants = [...contestants, newContestant];
        //  write to the file with the new contestant

        fs.writeFileSync("./data/contestants.json", JSON.stringify(newContestants))
        // last step: respond with status code: 201 if it succeeeded
        // also respond with the new object 
        res.status(201).json(newContestant)
    })


//the route here is /contestants/:id
router
    .route("/:id")
    .get((req, res) => {
        // How to test: 
        // GET /contestants/{existing id}
        // GET /contestants/{non-existent id}
        const { id } = req.params;

        const contestants = getContestants();

        const foundContestant = contestants.find(contestant => contestant.id === id);

        if (foundContestant) {
            return res.json(foundContestant)
        }

        return res.status(404).json({
            message: "Could not find contestant with id " + id
        })
    })
    .delete((req, res) => {
        const { id } = req.params;

        const contestants = getContestants();
        const filteredContestants = contestants.filter(contestant => {
            return contestant.id !== id
        });

        if (contestants.length === filteredContestants.length) {
            return res.status(404).json({
                message: "Could not find contestant with id " + id
            })
        }

        fs.writeFileSync("./data/contestants.json", JSON.stringify(filteredContestants));

        return res.sendStatus(204);
    })
module.exports = router;