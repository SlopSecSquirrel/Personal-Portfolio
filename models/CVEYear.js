const mongoose = require("mongoose");
const uuid = require("uuid")

// const CVEProduct = require("./CVEProduct")
const CVEYearSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuid.v1 },
    year: {type:Number,unique:true},
    notes: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: mongoose.models.CVEProduct }]
  },
  {
    timestamps: true,
  }
);

const CVEYear = mongoose.models.CVEYear || mongoose.model("CVEYear", CVEYearSchema);

module.exports = CVEYear
  
