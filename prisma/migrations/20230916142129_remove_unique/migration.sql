/*
  Warnings:

  - Added the required column `state` to the `CVEProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CVE_cveId_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CVEProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "productVersion" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "cveYearId" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    CONSTRAINT "CVEProduct_cveYearId_fkey" FOREIGN KEY ("cveYearId") REFERENCES "CVEYear" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CVEProduct" ("cveYearId", "id", "notes", "productName", "productVersion") SELECT "cveYearId", "id", "notes", "productName", "productVersion" FROM "CVEProduct";
DROP TABLE "CVEProduct";
ALTER TABLE "new_CVEProduct" RENAME TO "CVEProduct";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
