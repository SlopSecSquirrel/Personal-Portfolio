import dbConnect from "@/lib/dbConnect"
import CVEYear from "@/models/CVEYear"
import CVEProduct from "@/models/CVEProduct"; // this needs to stay, otherwise the populate calls fail below.
import CVE  from "@/models/CVE"; // this needs to stay, otherwise the populate calls fail below.

export async function getAllCVEYearsAsJSON(deeplyPopulate = false) {
    await dbConnect();
    let years = [];
    if (deeplyPopulate === true) {
      years = await CVEYear.find().populate({
        path: "products",
        model: "CVEProduct",
        populate: {
          path: "cves",
          model: "CVE",
        },
      });
    } else {
      years = await CVEYear.find();
    }
  
    // Reverse the years, so the most recent ones come first.
    years.reverse();
  
    // This is unfortunate, but I can't see a way around it. Basically because Mongoose returns an object with a prototype full of fun methods etc.
    // For whatever reason, NextJS/React is getting sad that the object isn't a plain ol' serialized JSON object and it's throwing endless maximum call stack errors,
    // We mitigate this flaw by making a basic "POJO" clone of the object to pass to the Navbar here.
    let yearsCloned = JSON.parse(JSON.stringify(years));
    return yearsCloned;
  }
  
  export async function getAllCVEsForProductID(productID) {
    await dbConnect();
    let product = {}
      product = await CVEProduct.findById(productID).populate({
          path: "cves",
          model: "CVE",
      });
    
    // This is ugly and unfortunate, but I can't see a way around it. see note above.
    let productCloned = JSON.parse(JSON.stringify(product));
    return productCloned;
  }
  
  