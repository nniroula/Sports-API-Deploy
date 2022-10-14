"use strict";

const express = require('express');
// const app = require('../app');   // Instead router is needed

// import db to query the database
const db = require('../db');  // db = db.js file
// import playerClass
const Player = require('../models/playerClass');

const router = new express.Router();

// HOME Route
router.get('/', function(req, res, next){
    console.log("This the home route for the app.");
    // return res.send("Aurora Everest Cricket Club.");
    return res.send({
        "name": "Aurora Everest Cricket Club",
        "Estd": "July 2020"
    });
})


router.get('/players', async function(req, res, next){
    try{
        const results = await Player.getAllPlayers(); // getAllPlayer() returns a promise, so await it here
        return res.json(results);
    }catch(e){
        return next(e);
    }
})

// get a single player
router.get('/players/:id', async function(req, res, next){
    // invalid id should throw error, it does not do that now. handle it in getPlayerById method
    try{
        const result = await Player.getPlayerById(req.params.id);
        return res.json(result);
    }catch(e){
        return next(e);
    }
})


// post request
router.post('/players', async function(req, res, next){
    // grab data passed in req.body, and that data to create a player
    // destruct the request body and get data
    try{
        const {first_name, last_name, email, birth_date, 
            phone_number, emergency_contact, profile_picture_url,
            playing_role, registered_date} = req.body;

        const player = await Player.createPlayer(first_name, last_name, email, birth_date, 
            phone_number, emergency_contact, profile_picture_url,
            playing_role, registered_date);
        
        return res.json(player);
    }catch(e){
        return next(e);
    }
})



module.exports = router;


//


/** Routes for companies. */

/*
const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureLoggedIn } = require("../middleware/auth");
const Company = require("../models/company");

const companyNewSchema = require("../schemas/companyNew.json");
const companyUpdateSchema = require("../schemas/companyUpdate.json");

// const router = new express.Router();
*/

/** POST / { company } =>  { company }
 *
 * company should be { handle, name, description, numEmployees, logoUrl }
 *
 * Returns { handle, name, description, numEmployees, logoUrl }
 *
 * Authorization required: login
 */
/*
router.post("/", ensureLoggedIn, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, companyNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const company = await Company.create(req.body);
    return res.status(201).json({ company });
  } catch (err) {
    return next(err);
  }
});
*/
/** GET /  =>
 *   { companies: [ { handle, name, description, numEmployees, logoUrl }, ...] }
 *
 * Can filter on provided search filters:
 * - minEmployees
 * - maxEmployees
 * - nameLike (will find case-insensitive, partial matches)
 *
 * Authorization required: none
 */
/*
router.get("/", async function (req, res, next) {
  try {
    // const companies = await Company.findAll(); // OLD CODE
    const companies = await Company.findAll(req.query); // new code
    return res.json({ companies });
  } catch (err) {
    return next(err);
  }
});
*/
/** GET /[handle]  =>  { company }
 *
 *  Company is { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 *
 * Authorization required: none
 */
/*
router.get("/:handle", async function (req, res, next) {
  try {
    const company = await Company.get(req.params.handle);
    return res.json({ company });
  } catch (err) {
    return next(err);
  }
});
*/
/** PATCH /[handle] { fld1, fld2, ... } => { company }
 *
 * Patches company data.
 *
 * fields can be: { name, description, numEmployees, logo_url }
 *
 * Returns { handle, name, description, numEmployees, logo_url }
 *
 * Authorization required: login
 */
/*
router.patch("/:handle", ensureLoggedIn, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, companyUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const company = await Company.update(req.params.handle, req.body);
    return res.json({ company });
  } catch (err) {
    return next(err);
  }
});
*/
/** DELETE /[handle]  =>  { deleted: handle }
 *
 * Authorization: login
 */
/*
router.delete("/:handle", ensureLoggedIn, async function (req, res, next) {
  try {
    await Company.remove(req.params.handle);
    return res.json({ deleted: req.params.handle });
  } catch (err) {
    return next(err);
  }
});
*/

// module.exports = router;


