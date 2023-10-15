
const CVEs = [
    {
      id: "6508e7c330030e1a044c5340",
      cveId: "CVE-2022-1798",
      vulnName: "Arbitrary file read on host",
      vulnDescription:
        "A path traversal vulnerability in the noted KubeVirt versions on all platforms allows a user able to configure the kubevirt to read arbitrary files on the host filesystem which are publicly readable or which are readable for UID 107 or GID 107.",
      vulnSeverity: "High",
      vulnNotes:
        "Credit to Roman Mohr and Diane Dubois of Google for helping with vulnerability weaponization and coordinating disclosure, credit to Jim Klopchic who was undertaking the KubeVirt assessment alongside myself",
      vulnState: "public",
      pubURLs:
        "https://github.com/kubevirt/kubevirt/security/advisories/GHSA-qv98-3369-g364|https://nvd.nist.gov/vuln/detail/CVE-2022-1798#ok",
    },
    {
      id: "6508e7c330030e1a044c5350",
      vulnName: "RCE As SYSTEM Via Unauthenticated File Upload API",
      cveId: "CVE-2023-28353",
      vulnDescription:
        "An unauthenticated attacker is able to upload any type of file to any location on the Teacher Console's computer, enabling a variety of different exploitation paths including code execution. It is also possible for the attacker to chain this vulnerability with others to cause a deployed DLL file to immediately execute as NT AUTHORITY/SYSTEM.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "Critical",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5351",
      vulnName: "RCE as SYSTEM via Artificial Student Console and XSS",
      cveId: "CVE-2023-28347",
      vulnDescription:
        "By abusing the Insight UDP broadcast discovery system, an attacker-controlled artificial Student Console can connect to and attack a Teacher Console even after Enhanced Security Mode has been enabled.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "Critical",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5352",
      vulnName: "RCE as SYSTEM via Artificial Teacher Console",
      cveId: "CVE-2023-28349",
      vulnDescription:
        "It is possible for an attacker to create a crafted program that functions similarly to the Teacher Console. This can compel Student Consoles to connect and put themselves at risk automatically. Connected Student Consoles can be compelled to write arbitrary files to arbitrary locations on disk with NT AUTHORITY/SYSTEM level permissions, enabling remote code execution.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "Critical",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5353",
      vulnName:
        "Numerous DLL Hijacking Vulnerabilities in Teacher and Student Consoles",
      cveId: "Not assigned (Mitre policy)",
      vulnDescription:
        "The Teacher Console Server and Student Console Agents both attempt to load a variety of system DLLs in an unsafe manner.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "High",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5354",
      vulnName: "Systemic Stored and Reflected Cross Site Scripting Flaws",
      cveId: "CVE-2023-28350",
      vulnDescription:
        "Attacker-supplied input is not validated/sanitized before being rendered in both the Teacher and Student Console applications, enabling an attacker to execute JavaScript in these applications. Due to the rich and highly privileged functionality offered by the Teacher Console, the ability to silently exploit Cross Site Scripting (XSS) on the Teacher Machine enables remote code execution on any connected student machine (and the teacher's machine).",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "High",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5355",
      vulnName: "All Data Transmitted in Plaintext Enabling MITM",
      cveId: "CVE-2023-28348",
      vulnDescription:
        "A suitably positioned attacker could perform a man-in-the-middle attack on either a connected student or teacher, enabling them to intercept student keystrokes or modify executable files being sent from teachers to students.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "High",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5356",
      vulnName: "Enhanced Security Mode May Be Bypassed",
      cveId: "CVE-2023-28352",
      vulnDescription:
        "By abusing the Insight UDP broadcast discovery system, an attacker-controlled artificial Student Console can connect to and attack a Teacher Console even after Enhanced Security Mode has been enabled.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "High",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5357",
      vulnName:
        "Keystroke Logs Are Stored in Plaintext in a World Readable Directory",
      cveId: "CVE-2023-28351",
      vulnDescription:
        "Every keystroke made by any user on a computer with the Student application installed is logged to a world-readable directory. A local attacker can trivially extract these cleartext keystrokes, potentially enabling them to obtain PII and/or to compromise personal accounts owned by the victim.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5358",
      vulnName: "Lack of Access Controls on Student APIs",
      cveId: "CVE-2023-28344",
      vulnDescription:
        "The Insight Teacher Console application allows unauthenticated attackers to view constantly updated screenshots of student desktops and to submit falsified screenshots on behalf of students. Attackers are able to view screenshots of student desktops without their consent. These screenshots may potentially contain sensitive/personal data. Attackers can also rapidly submit falsified images, hiding the actual contents of student desktops from the Teacher Console.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c5359",
      vulnName: "Teacher Console Credentials Exposed via API Endpoint",
      cveId: "CVE-2023-28345",
      vulnDescription:
        " The Insight Teacher Console application exposes the teacher's Console password in cleartext via an API endpoint accessible from localhost. Attackers with physical access to the Teacher Console can open a web browser, navigate to the affected endpoint and obtain the teacher's password. This enables them to log into the Teacher Console and begin trivially attacking student machines.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c535a",
      vulnName: "Virtual Host Routing Can Be Defeated",
      cveId: "CVE-2023-28346",
      vulnDescription:
        "It is possible for a remote attacker to communicate with the private API endpoints exposed at /login, /consoleSettings, /console, etc. despite Virtual Host Routing being used to block this access. Remote attackers can interact with private pages on the web server, enabling them to perform privileged actions such as logging into the console and changing console settings if they have valid credentials.",
      vulnState: "public",
      pubURLs:
        "https://research.nccgroup.com/2023/05/30/technical-advisory-multiple-vulnerabilities-in-faronics-insight/",
      vulnSeverity: "Low",
      vulnNotes: "",
    },
    // start of 6508e7c330030e1a044c573c's CVEs
    {
      id: "6508e7c330030e1a044c6401",
      vulnName: "????",
      cveId: "CVE-2023-4677",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Critical",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6402",
      vulnName: "????",
      cveId: "CVE-2023-41786",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "High",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6403",
      vulnName: "????",
      cveId: "CVE-2023-41787",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "High",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6404",
      vulnName: "????",
      cveId: "CVE-2023-41788",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "High",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6405",
      vulnName: "????",
      cveId: "CVE-2023-41789",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6406",
      vulnName: "????",
      cveId: "CVE-2023-41790",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6407",
      vulnName: "????",
      cveId: "CVE-2023-41791",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6408",
      vulnName: "????",
      cveId: "CVE-2023-41792",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6409",
      vulnName: "????",
      cveId: "CVE-2023-41793",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Low",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c640a",
      vulnName: "????",
      cveId: "CVE-2023-41794",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Low",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c640b",
      vulnName: "????",
      cveId: "CVE-2023-41806",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c640c",
      vulnName: "????",
      cveId: "CVE-2023-41807",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c640d",
      vulnName: "????",
      cveId: "CVE-2023-41808",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c640e",
      vulnName: "????",
      cveId: "CVE-2023-41809",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Medium",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c640f",
      vulnName: "????",
      cveId: "CVE-2023-41810",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Low",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6410",
      vulnName: "????",
      cveId: "CVE-2023-41811",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Low",
      vulnNotes: "",
    },
    {
      id: "6508e7c330030e1a044c6411",
      vulnName: "????",
      cveId: "CVE-2023-41813",
      vulnDescription: "????",
      vulnState: "public",
      pubURLs: "????",
      vulnSeverity: "Low",
      vulnNotes: "",
    },
  ];

  module.exports = {CVEs};