// Use this https://planetscale.com/blog/how-to-seed-a-database-with-prisma-and-next-js
// and this https://github.com/planetscale/nextjs-starter/blob/main/prisma/seed.js
// and this https://www.designcise.com/web/tutorial/how-to-reset-autoincrement-number-sequence-in-sqlite :)
// AND this https://www.stackfive.io/work/prisma/seeding-relational-data-with-prisma (Promise.all)
// for inspiration
// const { PrismaClient } = require('@prisma/client');
// const { CVEProducts, CVEYears, CVEs } = require('./data.js');
// const prisma = new PrismaClient();
const dbConnect = require("../lib/dbConnect");
const mongoose = require("mongoose");
const CVE = require("../models/CVE");
const CVEYear = require("../models/CVEYear");
const CVEProduct = require("../models/CVEProduct");
const { CVEProducts, CVEYears, CVEs } = require("./data.js");

async function cleanup() {
  await CVE.deleteMany();
  console.log("Deleted records in CVE table");

  await CVEProduct.deleteMany();
  console.log("Deleted records in CVE Product table");

  await CVEYear.deleteMany();
  console.log("Deleted records in CVE Year table");
}
async function seedYears() {
  await CVEYear.insertMany(CVEYears);
  console.log("Created records in CVE Year table");
}
async function seedProducts() {
  await CVEProduct.insertMany(CVEProducts);
  console.log("Created records in CVE Product table");
}
async function seedCVEs() {
  await CVE.insertMany(CVEs);
  console.log("Created records in CVE table");

  console.log("Seeding complete");
}

async function load() {
  await dbConnect();
  await cleanup();
  await seedYears();
  await seedProducts();
  await seedCVEs();
}

load().then(() => {
  process.exit(1);
});
