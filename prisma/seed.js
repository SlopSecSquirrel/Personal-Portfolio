// Use this https://planetscale.com/blog/how-to-seed-a-database-with-prisma-and-next-js
// and this https://github.com/planetscale/nextjs-starter/blob/main/prisma/seed.js
// and this https://www.designcise.com/web/tutorial/how-to-reset-autoincrement-number-sequence-in-sqlite :) 
// AND this https://www.stackfive.io/work/prisma/seeding-relational-data-with-prisma (Promise.all)
// for inspiration
const { PrismaClient } = require('@prisma/client');
const { CVEProducts, CVEYears, CVEs } = require('./data.js');
const { Love_Ya_Like_A_Sister } = require('next/font/google/index.js');
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.CVE.deleteMany();
        console.log('Deleted records in CVE table');

        await prisma.CVEProduct.deleteMany();
        console.log('Deleted records in CVE Product table');

        await prisma.CVEYear.deleteMany();
        console.log('Deleted records in CVE Year table');

        await prisma.CVEYear.createMany({
            data: CVEYears});
            console.log('Created records in CVE Year table');

        await prisma.CVEProduct.createMany({
            data: CVEProducts});
            console.log('Created records in CVE Product table');

        await prisma.CVE.createMany({
            data: CVEs});
            console.log('Created records in CVE table');

            console.log('Seeding complete');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();