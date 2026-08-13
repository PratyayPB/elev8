import { PredefinedInterview } from "../../types/predefined-interview";

export const business_analyst: PredefinedInterview = {
  "id": "business-analyst",
  "role": "Business Analyst",
  "type": "NON_TECHNICAL",
  "description": "Evaluates non-technical business analysis capabilities including stakeholder management, requirements gathering, process mapping, and strategic trade-off analysis.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "How do you distinguish between functional and non-functional requirements when interviewing business stakeholders?",
          "category": "Requirements Elicitation",
          "expectedTopics": [
            "Functional Requirements",
            "Non-Functional Requirements",
            "Stakeholder Interviews"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "What is the purpose of a swimlane diagram in process mapping, and when would you choose it over a standard flowchart?",
          "category": "Process Mapping",
          "expectedTopics": [
            "Process Mapping",
            "Swimlane Diagrams",
            "BPMN"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "How do you perform stakeholder analysis at the beginning of a new business initiative?",
          "category": "Stakeholder Management",
          "expectedTopics": [
            "Stakeholder Analysis",
            "RACI Matrix",
            "Power Interest Grid"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What are the key components of a well-written user story and its acceptance criteria?",
          "category": "Agile Requirements",
          "expectedTopics": [
            "User Stories",
            "INVEST Criteria",
            "Acceptance Criteria"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "Can you explain the basic steps involved in conducting a gap analysis for an operational business process?",
          "category": "Business Analysis Techniques",
          "expectedTopics": [
            "Gap Analysis",
            "As-Is To-Be",
            "Business Process"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "How do you handle scope creep when a stakeholder requests additional features during project execution?",
          "category": "Scope Management",
          "expectedTopics": [
            "Scope Creep",
            "Change Control",
            "Prioritization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "What technique would you use to identify the root cause of an operational efficiency problem reported by business users?",
          "category": "Problem Solving",
          "expectedTopics": [
            "Root Cause Analysis",
            "5 Whys",
            "Fishbone Diagram"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        }
      }
    },
    "MEDIUM": {
      "estimatedDuration": "25-35 minutes",
      "questions": {
        "q8": {
          "id": "q8",
          "question": "How would you decide between competing stakeholder priorities when using frameworks like MoSCoW or WSJF?",
          "category": "Prioritization Frameworks",
          "expectedTopics": [
            "Prioritization",
            "MoSCoW",
            "WSJF",
            "Stakeholder Alignment"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Describe a scenario where key business stakeholders strongly disagree on project objectives. How would you facilitate consensus?",
          "category": "Stakeholder Management",
          "expectedTopics": [
            "Conflict Resolution",
            "Negotiation",
            "Consensus Building"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "How do you translate vague business goals into measurable Key Performance Indicators (KPIs) for operational dashboards?",
          "category": "Performance Metrics",
          "expectedTopics": [
            "KPI Definition",
            "Business Metrics",
            "Outcome Measurement"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "What strategy would you employ to manage user resistance when introducing a redesigned enterprise workflow?",
          "category": "Change Management",
          "expectedTopics": [
            "Change Management",
            "User Adoption",
            "Training Strategy"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "How do you evaluate operational feasibility before submitting a business case for executive approval?",
          "category": "Business Case Development",
          "expectedTopics": [
            "Feasibility Analysis",
            "ROI Analysis",
            "Business Case"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "How do you validate gathered requirements to ensure they accurately represent business needs without imposing unstated assumptions?",
          "category": "Requirement Validation",
          "expectedTopics": [
            "Requirements Validation",
            "Traceability Matrix",
            "Requirement Verification"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Walk through how you would optimize a manual, error-prone approval process in a finance department.",
          "category": "Process Improvement",
          "expectedTopics": [
            "Process Optimization",
            "Workflow Redesign",
            "Operational Efficiency"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "What criteria and evaluation matrix would you create to assess third-party software vendors against business requirements?",
          "category": "Vendor Selection",
          "expectedTopics": [
            "RFP Process",
            "Vendor Evaluation",
            "Selection Matrix"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "How do you identify and mitigate business risks associated with a major organizational process overhaul?",
          "category": "Risk Management",
          "expectedTopics": [
            "Risk Assessment",
            "Risk Mitigation",
            "Impact Analysis"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        }
      }
    },
    "HARD": {
      "estimatedDuration": "35-45 minutes",
      "questions": {
        "q17": {
          "id": "q17",
          "question": "When evaluating enterprise software replacement, how do you balance cost, operational disruption, and strategic flexibility?",
          "category": "Strategic Trade-offs",
          "expectedTopics": [
            "Total Cost of Ownership",
            "Strategic Alignment",
            "Enterprise Architecture"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "How do you construct a unified domain taxonomy for an enterprise business ecosystem with conflicting data definitions across departments?",
          "category": "Domain Modeling",
          "expectedTopics": [
            "Data Governance",
            "Domain Modeling",
            "Taxonomy Harmonization"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How would you structure a business transformation roadmap for migrating a multi-regional operation to a single digital ecosystem?",
          "category": "Enterprise Transformation",
          "expectedTopics": [
            "Transformation Strategy",
            "Roadmapping",
            "Change Leadership"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "How do you conduct a Value Stream Mapping exercise across cross-functional silos to remove systemic organizational waste?",
          "category": "Value Stream Analysis",
          "expectedTopics": [
            "Value Stream Mapping",
            "Waste Elimination",
            "Cross-functional Alignment"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "Describe how you present complex cost-benefit trade-offs under high business uncertainty to C-suite executives to secure project funding.",
          "category": "Executive Communication",
          "expectedTopics": [
            "Executive Presentation",
            "Decision Trees",
            "Cost Benefit Analysis"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "How do you integrate dynamic regulatory compliance mandates into an ongoing business transformation strategy without halting delivery?",
          "category": "Regulatory Governance",
          "expectedTopics": [
            "Regulatory Compliance",
            "Strategic Agility",
            "Governance Framework"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "If a core project budget is cut by 30% mid-execution, how do you re-scope and realign objectives to preserve core business value?",
          "category": "Crisis Management",
          "expectedTopics": [
            "Budget Rationalization",
            "Re-scoping",
            "Value Realization"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "How do you approach radical Business Process Re-engineering (BPR) when incremental process improvements are no longer effective?",
          "category": "Business Process Re-engineering",
          "expectedTopics": [
            "Disruptive Innovation",
            "Process Re-engineering",
            "Transformation Strategy"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "In an enterprise platform shared by distinct business units, how do you design a governance model to manage core vs customized feature requests?",
          "category": "Governance Modeling",
          "expectedTopics": [
            "Governance Model",
            "Platform Strategy",
            "Multi-tenant Alignment"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "How do you establish a continuous benefits realization framework to measure whether a newly deployed process achieves business goals 12 months post-launch?",
          "category": "Benefits Realization",
          "expectedTopics": [
            "Benefits Realization",
            "Post-Implementation Review",
            "Outcome Tracking"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "How do you align business processes and operational models during the post-merger integration of two competing business units?",
          "category": "Post-Merger Integration",
          "expectedTopics": [
            "M&A Integration",
            "Process Harmonization",
            "Operational Alignment"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
