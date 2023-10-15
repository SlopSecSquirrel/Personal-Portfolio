const mongoose = require("mongoose");
const CVEProduct = require("./CVEProduct");
const uuid = require("uuid")

const CVESchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuid.v1 },
    cveId: { type:String,unique:true },
    // cveProductId: { type: mongoose.Schema.Types.ObjectId, ref: CVEProduct },
    vulnName: String,
    vulnDescription: String,
    vulnSeverity: String,
    vulnNotes: String,
    vulnState: String,
    pubURLs: String,
  },
  {
    timestamps: true,
  }
);
const CVE =  mongoose.models.CVE || mongoose.model("CVE", CVESchema);
module.exports = CVE
