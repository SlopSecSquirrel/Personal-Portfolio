-- CreateTable
CREATE TABLE "CVEYear" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "notes" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CVEProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "productVersion" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "cveYearId" INTEGER NOT NULL,
    CONSTRAINT "CVEProduct_cveYearId_fkey" FOREIGN KEY ("cveYearId") REFERENCES "CVEYear" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CVE" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cveId" TEXT NOT NULL,
    "cveProductId" INTEGER NOT NULL,
    "vulnName" TEXT NOT NULL,
    "vulnDescription" TEXT NOT NULL,
    "vulnSeverity" TEXT NOT NULL,
    "vulnNotes" TEXT NOT NULL,
    "vulnState" TEXT NOT NULL,
    "pubURLs" TEXT NOT NULL,
    CONSTRAINT "CVE_cveProductId_fkey" FOREIGN KEY ("cveProductId") REFERENCES "CVEProduct" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CVEYear_year_key" ON "CVEYear"("year");

-- CreateIndex
CREATE UNIQUE INDEX "CVE_cveId_key" ON "CVE"("cveId");
