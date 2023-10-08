const CVEYears = [
    {
        id: "6508e705359254328ad76f38",
        year: 2021,
        notes: 'While no CVEs are recorded for 2021, I undertook a mammoth reverse engineering task in an enterprise backup/restore application and privately disclosed 5-10 vulnerabilities with severities ranging from medium-critical.',
        products: []
    },
    {
        id: "6508e74f51b57d77c8db358d",
        year: 2022,
        notes: 'This was the year that I got my <b>first</b> ever CVE, a high severity path traversal flaw in KubeVirt.<br/><br/>This year actually marked an important milestone in my professional growth. Prior to 2022, CVEs felt like this absurd hurdle that could only be obtained by the most elite of security researchers. It felt almost arrogant to even try to go after them for some reason.. That mental block was broken and I rapidly became obsessed with independent security research.',
        products: ["6508e7c330030e1a044c573a"]
    },
    {
        id: "6508e74f51b57d77c8db358e",
        year: 2023,
        notes: 'Vulnerability research in 2023 was laser focused solely on <b>Remote Monitoring and Management (RMM)</b> tools. As a security researcher, RMM tools fascinate me; when they are compromised an attacker\'s scope grows exponentially from one compromised server to the potential compromise of every \'agent\' which is managed by the RMM server.<br/><br/>I set myself a stretch goal in 2023 to register 1 CVE per month, and I\'m proud to say that that goal was thoroughly obliterated, with 40+ CVEs being registered over the year.<br/><br/>I have a few interesting (in my biased opinion) observations from my research this year, and I\'m planning on delivering a conference talk in 2024 which discusses the state of this product domain.',
        products: ["6508e7c330030e1a044c573b","6508e7c330030e1a044c573c", "6508e7c330030e1a044c573d"]
    }

];

const CVEProducts = [
    {
        id :"6508e7c330030e1a044c573a",
        productName: "KubeVirt",
        productVersion: "0.56",
        notes: "Through code review of the KubeVirt source code, I identified a potential path traversal flaw. Researchers at Google were able to weaponise my finding into a full high severity path traversal vulnerability, then led the charge with responsibly disclosing my finding to the KubeVirt team.",
        state: "public",
        cves: ["6508e7c330030e1a044c5340"],
        privateNotes: ""
    },
    {
        id: "6508e7c330030e1a044c573b",
        productName: "Faronics Insight",
        productVersion: "v11.21.2100.262",
        notes: "Faronics Insight is a feature rich software platform which is deployed on premises in schools. The application enables teachers to administer, control and interact with student devices. The application contains numerous features, including allowing teachers to transfer files to/from students and remotely viewing the contents of student screens.<br/><br/> I had an amazing time researching this product, and it was an excellent experience working with the Faronics team to coordinate disclosure.",
        state: "public",
        cves: ["6508e7c330030e1a044c5350","6508e7c330030e1a044c5351","6508e7c330030e1a044c5352","6508e7c330030e1a044c5353","6508e7c330030e1a044c5354","6508e7c330030e1a044c5355","6508e7c330030e1a044c5356","6508e7c330030e1a044c5357","6508e7c330030e1a044c5358","6508e7c330030e1a044c5359","6508e7c330030e1a044c535a"],
        privateNotes: ""
    },
    {
        id: "6508e7c330030e1a044c573c",
        productName: "?????? 🤫",
        productVersion: "?????? 🤫",
        notes: "?????? 🤫 is a large, mature, high-quality RMM tool which allows administrators to register agents which can be monitored and controlled remotely through a central server. I am incredibly impressed and humbled by my experience reporting vulnerabilities to the ?????? 🤫 team, they were responsive/proactive/professional throughout the disclosure process and I have a lot of respect for them as an organization.",
        state: "private",
        cves: [],
        privateNotes: "Coming soon - the projected public disclosure date is 10/31/2023 (🎃)"
    },
    {
        id: "6508e7c330030e1a044c573d",
        productName: "?????? 🤫",
        productVersion: "?????? 🤫",
        notes: "?????? 🤫 is a popular, market leading RMM tool which has become something of a household name amongst Systems Adminstrators over the last couple of decades. Their security posture is excellent at this point, their communication was professional and warm and their proactive approach to bugfixing is genuinely inspiring. I had an excellent time finding and reporting vulnerabilities in this product alongside a talented NCC Group colleague.",
        state: "private",
        cves: [],
        privateNotes: "Coming soon - the projected public disclosure date is 11/30/2023, although this may change."
    },
];

const CVEs = [
    {
        id: "6508e7c330030e1a044c5340",
        cveId: "CVE-2022-1798",
        vulnName: "Arbitrary file read on host",
        vulnDescription: "A path traversal vulnerability in the noted KubeVirt versions on all platforms allows a user able to configure the kubevirt to read arbitrary files on the host filesystem which are publicly readable or which are readable for UID 107 or GID 107.",
        vulnSeverity: "High",
        vulnNotes: "Credit to Roman Mohr and Diane Dubois of Google for helping with vulnerability weaponization and coordinating disclosure, credit to Jim Klopchic who was undertaking the KubeVirt assessment alongside myself",
        vulnState: "public",
        pubURLs: "https://github.com/kubevirt/kubevirt/security/advisories/GHSA-qv98-3369-g364|https://nvd.nist.gov/vuln/detail/CVE-2022-1798#ok",
    },
    {
        id: "6508e7c330030e1a044c5350",
        vulnName: "RCE As SYSTEM Via Unauthenticated File Upload API",
        cveId: "CVE-2023-28353",
        vulnDescription: "An unauthenticated attacker is able to upload any type of file to any location on the Teacher Console's computer, enabling a variety of different exploitation paths including code execution. It is also possible for the attacker to chain this vulnerability with others to cause a deployed DLL file to immediately execute as NT AUTHORITY/SYSTEM.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "Critical",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5351",
        vulnName: "RCE as SYSTEM via Artificial Student Console and XSS",
        cveId: "CVE-2023-28347",
        vulnDescription: "By abusing the Insight UDP broadcast discovery system, an attacker-controlled artificial Student Console can connect to and attack a Teacher Console even after Enhanced Security Mode has been enabled.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "Critical",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5352",
        vulnName: "RCE as SYSTEM via Artificial Teacher Console",
        cveId: "CVE-2023-28349",
        vulnDescription: "It is possible for an attacker to create a crafted program that functions similarly to the Teacher Console. This can compel Student Consoles to connect and put themselves at risk automatically. Connected Student Consoles can be compelled to write arbitrary files to arbitrary locations on disk with NT AUTHORITY/SYSTEM level permissions, enabling remote code execution.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "Critical",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5353",
        vulnName: "Numerous DLL Hijacking Vulnerabilities in Teacher and Student Consoles",
        cveId: "Not assigned (Mitre policy)",
        vulnDescription: "The Teacher Console Server and Student Console Agents both attempt to load a variety of system DLLs in an unsafe manner.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "High",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5354",
        vulnName: "Systemic Stored and Reflected Cross Site Scripting Flaws",
        cveId: "CVE-2023-28350",
        vulnDescription: "Attacker-supplied input is not validated/sanitized before being rendered in both the Teacher and Student Console applications, enabling an attacker to execute JavaScript in these applications. Due to the rich and highly privileged functionality offered by the Teacher Console, the ability to silently exploit Cross Site Scripting (XSS) on the Teacher Machine enables remote code execution on any connected student machine (and the teacher's machine).",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "High",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5355",
        vulnName: "All Data Transmitted in Plaintext Enabling MITM",
        cveId: "CVE-2023-28348",
        vulnDescription: "A suitably positioned attacker could perform a man-in-the-middle attack on either a connected student or teacher, enabling them to intercept student keystrokes or modify executable files being sent from teachers to students.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "High",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5356",
        vulnName: "Enhanced Security Mode May Be Bypassed",
        cveId: "CVE-2023-28352",
        vulnDescription: "By abusing the Insight UDP broadcast discovery system, an attacker-controlled artificial Student Console can connect to and attack a Teacher Console even after Enhanced Security Mode has been enabled.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "High",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5357",
        vulnName: "Keystroke Logs Are Stored in Plaintext in a World Readable Directory",
        cveId: "CVE-2023-28351",
        vulnDescription: "Every keystroke made by any user on a computer with the Student application installed is logged to a world-readable directory. A local attacker can trivially extract these cleartext keystrokes, potentially enabling them to obtain PII and/or to compromise personal accounts owned by the victim.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "Medium",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5358",
        vulnName: "Lack of Access Controls on Student APIs",
        cveId: "CVE-2023-28344",
        vulnDescription: "The Insight Teacher Console application allows unauthenticated attackers to view constantly updated screenshots of student desktops and to submit falsified screenshots on behalf of students. Attackers are able to view screenshots of student desktops without their consent. These screenshots may potentially contain sensitive/personal data. Attackers can also rapidly submit falsified images, hiding the actual contents of student desktops from the Teacher Console.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "Medium",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c5359",
        vulnName: "Teacher Console Credentials Exposed via API Endpoint",
        cveId: "CVE-2023-28345",
        vulnDescription: " The Insight Teacher Console application exposes the teacher's Console password in cleartext via an API endpoint accessible from localhost. Attackers with physical access to the Teacher Console can open a web browser, navigate to the affected endpoint and obtain the teacher's password. This enables them to log into the Teacher Console and begin trivially attacking student machines.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "Medium",
        vulnNotes: ""
    },
    {
        id: "6508e7c330030e1a044c535a",
        vulnName: "Virtual Host Routing Can Be Defeated",
        cveId: "CVE-2023-28346",
        vulnDescription: "It is possible for a remote attacker to communicate with the private API endpoints exposed at /login, /consoleSettings, /console, etc. despite Virtual Host Routing being used to block this access. Remote attackers can interact with private pages on the web server, enabling them to perform privileged actions such as logging into the console and changing console settings if they have valid credentials.",
        vulnState: "public",
        pubURLs: "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
        vulnSeverity: "Low",
        vulnNotes: ""
    },
]

module.exports = {
    CVEYears,
    CVEProducts,
    CVEs,
};