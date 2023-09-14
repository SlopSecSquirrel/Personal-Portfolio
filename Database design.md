# CVE showcase model/UI designs

## Candidate components and models

* CVE Showcase (showcase.jsx)
* CVE Year (cve-year.jsx / CVEYear table in the DB)
* CVE Product (cve-product.jsx / CVEProduct in the DB)
* CVE (cve.jsx / CVE in the DB)

## Proposed structure

The showcase will contain a series of "CVE Year" components which will group CVEs by the year that they were obtained. These will be expandable panels, with the current year being expanded by default and the other years collapsed

Each "CVE Year" will contain a series of "CVE Product" components in a list, also as collapsible panels probably. These panels will each contain a list of CVEs for the product.

Each "CVE Product" will contain a list of "CVE" components detailing the CVEs which were obtained whilst researching that product/product version. These "CVE" components will be rendered as cards, either page width cards or small rounded cards in a grid. These will be ordered by severity.

## CVEYear Model

Each "CVE Year" object in the database/UI will have the following fields

* Year (obviously)
* ID
* A short note about what I focused on that year and why

## CVEProduct Model

Each "CVE Product" object in the database/UI will have the following fields

* The "CVEYear" ID that it corresponds with
* The product name
* The product version that was researched
* A short description of the product

## CVE Model

Each "CVE" object in the database/UI will have the following fields

* CVE ID (this can be the primary key, realistically)
* CVEProduct ID (a foreign key pointing at the associated CVEProduct)
* Vulnerability name
* Vulnerability description
* Vulnerability severity
* Notes (so I can credit other researchers that I worked with, where necessary)
* State - public or private
  * **this one's important.** Keep currently unpublished CVEs in 'private' state and don't render their full details in the UI if they're private.
  * Maybe render the CVE ID and the severity with a "coming soon" description for all unpublished findings?
  * Make a new CVEProduct with a silly codename for these unpublished findings for this occasion.
* Publication URLs (comma separated list in MySQL, array in Mongo et al.)

## Aesthetic stuff

Each "CVE" Component card will be colored according to the severity of the vulnerability

* Critical findings - Red-ish
* High findings - Orange-ish
* Medium findings - Yellow-ish
* Low findings - Blue-ish
* Unpublished finding stubs - Black-ish
