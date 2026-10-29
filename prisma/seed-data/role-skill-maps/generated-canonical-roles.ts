import { RoleProfileSeedEntry } from "./types";

export const GENERATED_CANONICAL_ROLES: RoleProfileSeedEntry[] = [
  {
    role: "Software Engineer",
    normalizedRole: "software-engineer",
    skills: [
      { name: "Programming Fundamentals", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Structures & Algorithms", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Frontend Developer",
    normalizedRole: "frontend-developer",
    skills: [
      { name: "HTML", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "CSS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "JavaScript", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "TypeScript", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "React", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Web Performance", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Accessibility", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Backend Developer",
    normalizedRole: "backend-developer",
    skills: [
      { name: "Backend Programming", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "REST APIs", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Database Design", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Authentication & Authorization", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Full Stack Developer",
    normalizedRole: "full-stack-developer",
    skills: [
      { name: "JavaScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "TypeScript", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "React", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Node.js", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "SQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Mobile App Developer",
    normalizedRole: "mobile-app-developer",
    skills: [
      { name: "Mobile Application Development", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Programming", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "REST APIs", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Git", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Mobile UI/UX", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Local Data Storage", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Android Developer",
    normalizedRole: "android-developer",
    skills: [
      { name: "Kotlin", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Android SDK", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Jetpack", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Android UI", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "iOS Developer",
    normalizedRole: "ios-developer",
    skills: [
      { name: "Swift", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "iOS SDK", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SwiftUI", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "UIKit", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "REST APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Software Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "QA Engineer",
    normalizedRole: "qa-engineer",
    skills: [
      { name: "Software Testing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Test Case Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Test Automation", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "API Testing", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Defect Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Automation Test Engineer",
    normalizedRole: "automation-test-engineer",
    skills: [
      { name: "Test Automation", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Selenium", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Playwright", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Programming", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "API Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Test Frameworks", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "DevOps Engineer",
    normalizedRole: "devops-engineer",
    skills: [
      { name: "Linux", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Docker", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Kubernetes", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Infrastructure as Code", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Git", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Monitoring & Observability", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Cloud Engineer",
    normalizedRole: "cloud-engineer",
    skills: [
      { name: "AWS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Azure", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "GCP", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Linux", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Networking", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Infrastructure as Code", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Docker", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Kubernetes", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Site Reliability Engineer",
    normalizedRole: "site-reliability-engineer",
    skills: [
      { name: "Linux", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Kubernetes", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Computing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Monitoring & Observability", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Incident Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Automation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Networking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Distributed Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Platform Engineer",
    normalizedRole: "platform-engineer",
    skills: [
      { name: "Kubernetes", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Computing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Infrastructure as Code", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "CI/CD", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Developer Platforms", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Networking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Observability", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Solutions Architect",
    normalizedRole: "solutions-architect",
    skills: [
      { name: "System Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Networking", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Security Architecture", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Distributed Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Database Architecture", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Solution Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Data Engineer",
    normalizedRole: "data-engineer",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Modeling", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "ETL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "ELT", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Warehousing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Apache Spark", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Data Platforms", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Data Pipelines", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Data Scientist",
    normalizedRole: "data-scientist",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Statistics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Visualization", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Experimental Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Feature Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Machine Learning Engineer",
    normalizedRole: "machine-learning-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Deep Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Engineering", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model Deployment", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "MLOps", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Software Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "AI Engineer",
    normalizedRole: "ai-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Deep Learning", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Generative AI", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "LLM APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model Deployment", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Software Engineering", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Generative AI Engineer",
    normalizedRole: "generative-ai-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Large Language Models", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Prompt Engineering", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Retrieval-Augmented Generation", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Vector Databases", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model APIs", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "AI Evaluation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "AI Application Development", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "MLOps Engineer",
    normalizedRole: "mlops-engineer",
    skills: [
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Machine Learning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Docker", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Kubernetes", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "CI/CD", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Model Deployment", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Monitoring", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Data Analyst",
    normalizedRole: "data-analyst",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Excel", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Analysis", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Statistics", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Power BI", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Tableau", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Visualization", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Python", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Business Intelligence Analyst",
    normalizedRole: "business-intelligence-analyst",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Power BI", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Tableau", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Data Modeling", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Visualization", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Excel", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "ETL", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Business Analysis", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Database Administrator",
    normalizedRole: "database-administrator",
    skills: [
      { name: "SQL", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Database Administration", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "PostgreSQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "MySQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Database Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Backup & Recovery", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Performance Tuning", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Databases", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Cybersecurity Analyst",
    normalizedRole: "cybersecurity-analyst",
    skills: [
      { name: "Network Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Security Monitoring", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Vulnerability Management", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Incident Response", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "SIEM", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security Fundamentals", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Risk Assessment", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Cybersecurity Engineer",
    normalizedRole: "cybersecurity-engineer",
    skills: [
      { name: "Network Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Cloud Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Security Architecture", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Identity & Access Management", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Vulnerability Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Incident Response", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security Automation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Cloud Security Engineer",
    normalizedRole: "cloud-security-engineer",
    skills: [
      { name: "Cloud Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "AWS", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Azure", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "GCP", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "IAM", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Network Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Infrastructure as Code", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Container Security", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Application Security Engineer",
    normalizedRole: "application-security-engineer",
    skills: [
      { name: "Application Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Secure Coding", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "OWASP", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Vulnerability Assessment", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Threat Modeling", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Penetration Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "CI/CD Security", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Security", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Penetration Tester",
    normalizedRole: "penetration-tester",
    skills: [
      { name: "Penetration Testing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Network Security", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Web Application Security", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Vulnerability Assessment", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "OWASP", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security Tools", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Scripting", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "SOC Analyst",
    normalizedRole: "soc-analyst",
    skills: [
      { name: "Security Monitoring", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SIEM", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Incident Response", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Network Security", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Threat Detection", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Log Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Windows", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Network Engineer",
    normalizedRole: "network-engineer",
    skills: [
      { name: "TCP/IP", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Routing & Switching", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Network Security", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "DNS", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "DHCP", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "VPN", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Network Monitoring", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Linux", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Network Architect",
    normalizedRole: "network-architect",
    skills: [
      { name: "Network Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "TCP/IP", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Routing & Switching", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Cloud Networking", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Network Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "WAN", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "LAN", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Network Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "High Availability", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Systems Analyst",
    normalizedRole: "systems-analyst",
    skills: [
      { name: "Requirements Analysis", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Systems Analysis", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Business Analysis", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Process Modeling", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Documentation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "IT Support Specialist",
    normalizedRole: "it-support-specialist",
    skills: [
      { name: "Troubleshooting", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Windows", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Networking", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Hardware Support", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Operating Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Active Directory", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "IT Service Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Customer Support", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Product Manager",
    normalizedRole: "product-manager",
    skills: [
      { name: "Product Strategy", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Market Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Product Roadmapping", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "User Research", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Agile", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Technical Product Manager",
    normalizedRole: "technical-product-manager",
    skills: [
      { name: "Product Strategy", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Software Development Fundamentals", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "API & Systems Understanding", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Product Roadmapping", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Agile", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "AI Product Manager",
    normalizedRole: "ai-product-manager",
    skills: [
      { name: "Product Strategy", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "AI/ML Fundamentals", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Generative AI", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Product Analytics", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "User Research", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "AI Evaluation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Product Roadmapping", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Project Manager",
    normalizedRole: "project-manager",
    skills: [
      { name: "Project Planning", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Stakeholder Management", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Risk Management", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Budget Management", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Scheduling", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Agile", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Scrum", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Project Tracking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Business Analyst",
    normalizedRole: "business-analyst",
    skills: [
      { name: "Requirements Analysis", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Business Process Modeling", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Data Analysis", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Documentation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Problem Solving", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Engineering Manager",
    normalizedRole: "engineering-manager",
    skills: [
      { name: "Engineering Leadership", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Software Engineering", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Project Management", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "People Management", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "System Design", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Strategy", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Performance Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Stakeholder Management", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "UX Designer",
    normalizedRole: "ux-designer",
    skills: [
      { name: "User Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Interaction Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Wireframing", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Prototyping", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Usability Testing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Information Architecture", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Figma", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Design Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "UI Designer",
    normalizedRole: "ui-designer",
    skills: [
      { name: "Visual Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Typography", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Color Theory", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Figma", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Design Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Prototyping", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Responsive Design", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Accessibility", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Product Designer",
    normalizedRole: "product-designer",
    skills: [
      { name: "UX Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "UI Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "User Research", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Prototyping", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Design Systems", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Figma", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Usability Testing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Product Thinking", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "UX Researcher",
    normalizedRole: "ux-researcher",
    skills: [
      { name: "User Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Qualitative Research", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Quantitative Research", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Usability Testing", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Interviewing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Research Synthesis", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Technical Writer",
    normalizedRole: "technical-writer",
    skills: [
      { name: "Technical Writing", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Documentation", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Information Architecture", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "API Documentation", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Editing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Research", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Markdown", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Communication", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Solutions Engineer",
    normalizedRole: "solutions-engineer",
    skills: [
      { name: "Technical Communication", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Solution Architecture", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "APIs", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Cloud Computing", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Product Knowledge", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Customer Discovery", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Presentations", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Troubleshooting", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Sales Engineer",
    normalizedRole: "sales-engineer",
    skills: [
      { name: "Technical Sales", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Solution Design", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Product Demonstration", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Technical Communication", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Customer Discovery", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Negotiation", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Presentation", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "CRM", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Forward Deployed Engineer",
    normalizedRole: "forward-deployed-engineer",
    skills: [
      { name: "Software Engineering", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Customer Problem Solving", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "System Integration", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "APIs", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Technical Communication", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Rapid Prototyping", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "FinTech Engineer",
    normalizedRole: "fintech-engineer",
    skills: [
      { name: "Software Engineering", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Financial Systems", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "SQL", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "APIs", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Cloud Computing", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Security", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Distributed Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Quantitative Analyst",
    normalizedRole: "quantitative-analyst",
    skills: [
      { name: "Mathematics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Statistics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Python", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Financial Modeling", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "Probability", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Data Analysis", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Machine Learning", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Financial Markets", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
  {
    role: "Robotics Engineer",
    normalizedRole: "robotics-engineer",
    skills: [
      { name: "Robotics", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "Python", minimumProficiency: "ADVANCED", importance: "CORE", estimatedHours: 60 },
      { name: "C++", minimumProficiency: "INTERMEDIATE", importance: "CORE", estimatedHours: 40 },
      { name: "Control Systems", minimumProficiency: "INTERMEDIATE", importance: "IMPORTANT", estimatedHours: 40 },
      { name: "ROS", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Computer Vision", minimumProficiency: "BASIC", importance: "IMPORTANT", estimatedHours: 20 },
      { name: "Sensors", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
      { name: "Embedded Systems", minimumProficiency: "BASIC", importance: "SUPPORTING", estimatedHours: 20 },
    ]
  },
];