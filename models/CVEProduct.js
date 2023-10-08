const mongoose = require("mongoose");
const CVEYear = require("./CVEYear");
// const CVE = require("./CVE");
const uuid = require("uuid")


const CVEProductSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuid.v1 },
    productName: String,
    productVersion: String,
    notes: String,
    // cveYearId: { type: mongoose.Schema.Types.ObjectId, ref: CVEYear },
    state: String,
    cves: [{ type: mongoose.Schema.Types.ObjectId, ref: mongoose.models.CVE }],
    privateNotes: String
  },
  {
    timestamps: true,
  }
);

const CVEProduct = mongoose.models.CVEProduct || mongoose.model("CVEProduct", CVEProductSchema);
module.exports = CVEProduct
  
