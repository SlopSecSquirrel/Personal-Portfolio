const { kubevirtProductID, faronicsProductID, thirdProductID, fourthProductID } = require("./product_seeds");

const CVEYears = [
    {
      id: "6508e705359254328ad76f38",
      year: 2021,
      notes:
        "While no CVEs are recorded for 2021, I undertook a mammoth reverse engineering task in an enterprise backup/restore application and privately disclosed 5-10 vulnerabilities with severities ranging from medium-critical.",
      products: [],
    },
    {
      id: "6508e74f51b57d77c8db358d",
      year: 2022,
      notes:
        "This was the year that I got my <b>first</b> ever CVE, a high severity path traversal flaw in KubeVirt.<br/><br/>This year actually marked an important milestone in my professional growth. Prior to 2022, CVEs felt like this absurd hurdle that could only be obtained by the most elite of security researchers. It felt almost arrogant to even try to go after them for some reason.. That mental block was broken and I rapidly became obsessed with independent security research.",
      products: [kubevirtProductID],
    },
    {
      id: "6508e74f51b57d77c8db358e",
      year: 2023,
      notes:
        "Vulnerability research in 2023 was laser focused solely on <b>Remote Monitoring and Management (RMM)</b> tools. As a security researcher, RMM tools fascinate me; when they are compromised an attacker's scope grows exponentially from one compromised server to the potential compromise of every 'agent' which is managed by the RMM server.<br/><br/>I set myself a stretch goal in 2023 to register 1 CVE per month, and I'm proud to say that that goal was thoroughly obliterated, with 40+ CVEs being registered over the year.<br/><br/>I have a few interesting (in my biased opinion) observations from my research this year, and I'm planning on delivering a conference talk in 2024 which discusses the state of this product domain.",
      products: [
        faronicsProductID,
        thirdProductID,
        fourthProductID,
      ],
    },
  ];

  module.exports = {CVEYears};
