import { PredefinedInterview } from "../../types/predefined-interview";

export const cybersecurity_analyst: PredefinedInterview = {
  "id": "cybersecurity-analyst",
  "role": "Cybersecurity Analyst",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates the candidate's core knowledge of cybersecurity principles, threat analysis capabilities, network security controls, and incident response strategies.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "What is the difference between symmetric and asymmetric encryption?",
          "category": "Cryptography",
          "expectedTopics": [
            "Cryptography",
            "PKI",
            "Symmetric Encryption",
            "Asymmetric Encryption"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "Explain the CIA triad and how each component applies to data protection.",
          "category": "Fundamentals",
          "expectedTopics": [
            "CIA Triad",
            "Security Principles",
            "Confidentiality",
            "Integrity"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "What is the primary role of a firewall in network security?",
          "category": "Network Security",
          "expectedTopics": [
            "Firewalls",
            "Network Security",
            "Packet Filtering",
            "Traffic Control"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "How does vulnerability scanning differ from penetration testing?",
          "category": "Security Assessment",
          "expectedTopics": [
            "Vulnerability Scanning",
            "Penetration Testing",
            "Risk Assessment",
            "Security Audit"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "What is phishing and what common controls can organizations implement to mitigate it?",
          "category": "Social Engineering",
          "expectedTopics": [
            "Phishing",
            "Social Engineering",
            "Email Security",
            "Security Awareness"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What is a SIEM system and why is it essential for a SOC?",
          "category": "Security Operations",
          "expectedTopics": [
            "SIEM",
            "Log Management",
            "Security Monitoring",
            "Threat Detection"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "Explain the concept of Least Privilege and why it is critical for identity management.",
          "category": "Access Control",
          "expectedTopics": [
            "Least Privilege",
            "Access Control",
            "Authorization",
            "Identity Management"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        }
      }
    },
    "MEDIUM": {
      "estimatedDuration": "25-35 minutes",
      "questions": {
        "q8": {
          "id": "q8",
          "question": "How would you investigate a suspicious outbound HTTP POST request containing encoded payload?",
          "category": "Incident Response",
          "expectedTopics": [
            "Traffic Analysis",
            "PCAP",
            "Incident Response",
            "HTTP Analysis"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Describe how SQL Injection works and how software developers can effectively prevent it.",
          "category": "Application Security",
          "expectedTopics": [
            "SQL Injection",
            "Web Security",
            "Input Sanitization",
            "Parameterized Queries"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "Explain the steps in the Cyber Kill Chain framework during an incident response process.",
          "category": "Threat Intelligence",
          "expectedTopics": [
            "Cyber Kill Chain",
            "Threat Intelligence",
            "Incident Response",
            "Threat Detection"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "How do you differentiate between a false positive and a true positive alert in a SIEM?",
          "category": "Security Operations",
          "expectedTopics": [
            "Alert Triage",
            "SIEM",
            "SOC Operations",
            "Threat Analysis"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "What is Kerberoasting and how can it be detected in an Active Directory environment?",
          "category": "Identity & Active Directory",
          "expectedTopics": [
            "Kerberos",
            "Active Directory",
            "Credential Dumping",
            "Security Event Logs"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "How does Cross-Site Scripting (XSS) differ from Cross-Site Request Forgery (CSRF)?",
          "category": "Application Security",
          "expectedTopics": [
            "XSS",
            "CSRF",
            "Web Application Security",
            "Token Validation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Explain how the TLS handshake works and how server certificate validation is performed.",
          "category": "Network Security",
          "expectedTopics": [
            "TLS/SSL",
            "Public Key Infrastructure",
            "Handshake",
            "Network Protocols"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How would you respond to an endpoint flagged for active ransomware execution?",
          "category": "Incident Response",
          "expectedTopics": [
            "Ransomware",
            "Endpoint Isolation",
            "Incident Response",
            "Forensics"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "What controls would you implement to secure containerized applications in Kubernetes?",
          "category": "Cloud & Infrastructure",
          "expectedTopics": [
            "Kubernetes Security",
            "Container Security",
            "RBAC",
            "Network Policies"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    },
    "HARD": {
      "estimatedDuration": "35-45 minutes",
      "questions": {
        "q17": {
          "id": "q17",
          "question": "Design a zero-trust architecture for a enterprise hybrid cloud environment.",
          "category": "Security Architecture",
          "expectedTopics": [
            "Zero Trust",
            "Cloud Security",
            "Microsegmentation",
            "IAM"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Explain advanced techniques for detecting DNS tunneling in high-volume enterprise traffic without payload decryption.",
          "category": "Network Forensics",
          "expectedTopics": [
            "DNS Tunneling",
            "Anomaly Detection",
            "Traffic Analysis",
            "Network Forensics"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How would you analyze a heavily obfuscated PowerShell script used in a fileless malware attack?",
          "category": "Malware Analysis",
          "expectedTopics": [
            "Fileless Malware",
            "PowerShell Deobfuscation",
            "Reverse Engineering",
            "Threat Hunting"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Compare behavioral detection vs signature-based detection in EDR solutions when facing supply chain attacks.",
          "category": "Endpoint Security",
          "expectedTopics": [
            "EDR",
            "Behavioral Analysis",
            "Supply Chain Risk",
            "Threat Detection"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "How do you secure service mesh architectures against lateral movement and insider threats?",
          "category": "Cloud & Infrastructure",
          "expectedTopics": [
            "Service Mesh",
            "Mutual TLS",
            "Microservices Security",
            "Access Control"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "Walk through the process of conducting memory forensics on a compromised Linux server to find injected shared libraries.",
          "category": "Digital Forensics",
          "expectedTopics": [
            "Memory Forensics",
            "Volatility",
            "Linux Security",
            "Malware Analysis"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "Evaluate trade-offs between SSL/TLS inspection at the perimeter versus end-to-end encryption for privacy and visibility.",
          "category": "Security Architecture",
          "expectedTopics": [
            "TLS Inspection",
            "Security Controls",
            "Privacy",
            "Network Architecture"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "How would you establish a threat hunting program using MITRE ATT&CK mappings across structured security telemetry?",
          "category": "Threat Hunting",
          "expectedTopics": [
            "MITRE ATT&CK",
            "Threat Hunting",
            "Detection Engineering",
            "SOC Strategy"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Explain the mechanics of a BGP hijacking attack and mitigation strategies using RPKI.",
          "category": "Infrastructure & Routing",
          "expectedTopics": [
            "BGP Hijacking",
            "Routing Security",
            "RPKI",
            "Network Infrastructure"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "Design an automated SOAR playbook for credential dumping detections on critical domain controllers.",
          "category": "Security Automation",
          "expectedTopics": [
            "SOAR Automation",
            "Active Directory",
            "Incident Response",
            "Playbook Design"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "How do you mitigate hardware side-channel attacks in multi-tenant cloud environments?",
          "category": "Cloud Security",
          "expectedTopics": [
            "Side-Channel Attacks",
            "Cloud Isolation",
            "CPU Vulnerabilities",
            "Virtualization Security"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
