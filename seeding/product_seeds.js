module.exports.kubevirtProductID = "6508e7c330030e1a044c573a"
module.exports.faronicsProductID = "6508e7c330030e1a044c573b"
module.exports.thirdProductID = "6508e7c330030e1a044c573c"
module.exports.fourthProductID = "6508e7c330030e1a044c573d"

module.exports.CVEProducts = [
    {
      id: this.kubevirtProductID,
      productName: "KubeVirt",
      productVersion: "v0.56",
      notes:
        "Through code review of the KubeVirt source code, I identified a potential path traversal flaw. Researchers at Google were able to weaponise my finding into a full high severity path traversal vulnerability, then led the charge with responsibly disclosing my finding to the KubeVirt team.",
      state: "public",
      cves: ["6508e7c330030e1a044c5340"],
      privateNotes: "",
    },
    {
      id: this.faronicsProductID,
      productName: "Faronics Insight",
      productVersion: "v11.21.2100.262",
      notes:
        "Faronics Insight is a feature rich software platform which is deployed on premises in schools. The application enables teachers to administer, control and interact with student devices. The application contains numerous features, including allowing teachers to transfer files to/from students and remotely viewing the contents of student screens.<br/><br/> I had an amazing time researching this product, and it was an excellent experience working with the Faronics team to coordinate disclosure.",
      state: "public",
      cves: [
        "6508e7c330030e1a044c5350",
        "6508e7c330030e1a044c5351",
        "6508e7c330030e1a044c5352",
        "6508e7c330030e1a044c5353",
        "6508e7c330030e1a044c5354",
        "6508e7c330030e1a044c5355",
        "6508e7c330030e1a044c5356",
        "6508e7c330030e1a044c5357",
        "6508e7c330030e1a044c5358",
        "6508e7c330030e1a044c5359",
        "6508e7c330030e1a044c535a",
      ],
      privateNotes: "",
    },
    {
      id: this.thirdProductID,
      productName: "?????? 🤫",
      productVersion: "?????? 🤫",
      notes:
        "?????? 🤫 is a large, mature, high-quality RMM tool which allows administrators to register agents which can be monitored and controlled remotely through a central server. I enjoyed working with the ?????? 🤫 team, they were open and professional throughout the disclosure process and I have a lot of respect for them as an organization.",
      state: "private",
      cves: [
        "6508e7c330030e1a044c6401",
        "6508e7c330030e1a044c6402",
        "6508e7c330030e1a044c6403",
        "6508e7c330030e1a044c6404",
        "6508e7c330030e1a044c6405",
        "6508e7c330030e1a044c6406",
        "6508e7c330030e1a044c6407",
        "6508e7c330030e1a044c6408",
        "6508e7c330030e1a044c6409",
        "6508e7c330030e1a044c640a",
        "6508e7c330030e1a044c640b",
        "6508e7c330030e1a044c640c",
        "6508e7c330030e1a044c640d",
        "6508e7c330030e1a044c640e",
        "6508e7c330030e1a044c640f",
        "6508e7c330030e1a044c6410",
        "6508e7c330030e1a044c6411",
      ],
      privateNotes:
        "Coming soon - the projected public disclosure date is 10/31/2023 (🎃)",
    },
    {
      id: this.fourthProductID,
      productName: "?????? 🤫",
      productVersion: "?????? 🤫",
      notes:
        "?????? 🤫 is a popular, market leading RMM tool which has become something of a household name amongst Systems Adminstrators over the last couple of decades. Their security posture is excellent at this point, their communication was professional and warm and their proactive approach to bugfixing is genuinely inspiring. I had an excellent time finding and reporting vulnerabilities in this product alongside my talented friend and colleague Colin Brum.",
      state: "private",
      cves: [],
      privateNotes:
        "Coming soon - the projected public disclosure date is 11/30/2023, although this may change.",
    },
  ];