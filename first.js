const moment = require("moment");
const tz = require("moment-timezone");

//year -2018, month - 10, date - 03 ,
const est = moment.tz("2018-10-03T01:14:13.534Z", "America/New_York");

const estDateTime = est.format("DD/MM/YYYY hh:mm A");
console.log(estDateTime);

console.log(" ------------------ ");

const jun = moment("2014-06-01T12:00:00Z");
const dec = moment("2014-12-01T12:00:00Z");

const j = jun.tz("America/New_York").format("hh:mm A"); // 8am EDT
const d = dec.tz("America/New_York").format("hh:mm A"); // 7am EST
console.log(j);
console.log(d);
