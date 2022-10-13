"use strict";

const express = require('express');
// const app = require('../app');   // Instead router is needed

const router = new express.Router();

// router.get('/players', function(){
//     console.log("This should retrieve all the players.");
// })
router.get('/players', function(req, res, next){
    console.log("This should retrieve all the players.");
    return res.send("I am the Players route.");  // this renders data to the browser
})

router.get('/', function(req, res, next){
    console.log("This the home route for the app.");
    // return res.send("Aurora Everest Cricket Club.");
    return res.send({
        "name": "Aurora Everest Cricket Club",
        "Estd": "July 2020"
    });
})

// post request
router.post('/players', function(req, res, next){
    // return res.send("You are trying to create a player profile.")
    return res.send({
        "firsName": "LOL",
        "lastName": "Lol",
        "age": 34
    })
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


