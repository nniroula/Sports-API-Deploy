"use strict";

const express = require('express');

require("dotenv").config();
const SECRET_KEY = process.env.stripesecretkey || "secrettocricketaecc2020";

const PORT = +process.env.PORT || 3000;
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

module.exports = {
    PORT,
    BCRYPT_WORK_FACTOR,
    SECRET_KEY,
};
