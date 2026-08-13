import { PredefinedInterview } from "../../types/predefined-interview";

export const swe_behavioral: PredefinedInterview = {
  "id": "swe-behavioral",
  "role": "Software Engineer (Behavioral)",
  "type": "BEHAVIORAL",
  "description": "Evaluates key soft skills, interpersonal dynamics, leadership, problem-solving, and adaptability of software engineers through past behavioral experiences and situational responses.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "Can you describe a time when you had to learn a new technology or framework quickly to complete a project feature?",
          "category": "Adaptability",
          "expectedTopics": [
            "Continuous Learning",
            "Technology Adoption",
            "Time Management"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "Tell me about a situation where you received constructive feedback on your code during a pull request review. How did you handle it?",
          "category": "Feedback & Growth",
          "expectedTopics": [
            "Code Reviews",
            "Constructive Feedback",
            "Professional Growth"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "Describe a project where you had to collaborate closely with a team member who had a different working style.",
          "category": "Collaboration",
          "expectedTopics": [
            "Teamwork",
            "Communication",
            "Interpersonal Skills"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "Give an example of how you prioritize your daily tasks when faced with multiple competing bug fixes and feature requests.",
          "category": "Time Management",
          "expectedTopics": [
            "Prioritization",
            "Task Management",
            "Efficiency"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "Tell me about a time when you made a mistake in production or introduced a bug. How did you communicate and resolve it?",
          "category": "Accountability",
          "expectedTopics": [
            "Ownership",
            "Incident Management",
            "Transparency"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "Describe a scenario where you helped a fellow developer who was struggling with a technical challenge.",
          "category": "Mentorship & Support",
          "expectedTopics": [
            "Knowledge Sharing",
            "Empathy",
            "Team Collaboration"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "Can you share an experience where you had to explain a complex technical concept to a non-technical stakeholder?",
          "category": "Communication",
          "expectedTopics": [
            "Stakeholder Communication",
            "Technical Translation",
            "Clarity"
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
          "question": "Describe a situation where you strongly disagreed with an architectural or technical decision made by your lead or team. How did you address it?",
          "category": "Conflict Resolution",
          "expectedTopics": [
            "Technical Disagreement",
            "Constructive Debate",
            "Consensus Building"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Tell me about a time when project requirements changed significantly mid-sprint. How did you adjust your approach and keep deliverables on track?",
          "category": "Agility & Adaptability",
          "expectedTopics": [
            "Requirement Changes",
            "Agile Adaptation",
            "Risk Mitigation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "Give an example of a time when you had to balance delivering code quickly versus maintaining high code quality and test coverage.",
          "category": "Trade-off Decisioning",
          "expectedTopics": [
            "Technical Debt",
            "Quality vs Speed",
            "Pragmatic Engineering"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "Describe a situation where you had to work with a difficult or uncooperative team member to deliver a critical milestone.",
          "category": "Interpersonal Relations",
          "expectedTopics": [
            "Conflict Management",
            "Professionalism",
            "Goal Alignment"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "Tell me about a time when you took initiative to refactor legacy code or improve engineering process without explicit direction from management.",
          "category": "Ownership & Initiative",
          "expectedTopics": [
            "Proactiveness",
            "Engineering Excellence",
            "Refactoring"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "Describe a time when a critical bug or outage occurred during off-hours. How did you coordinate the response and post-mortem?",
          "category": "Incident Management",
          "expectedTopics": [
            "Crisis Response",
            "Blameless Post-Mortem",
            "Root Cause Analysis"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Give an example of a project where cross-team dependencies caused delays. How did you manage expectations and unblock your team?",
          "category": "Cross-Functional Collaboration",
          "expectedTopics": [
            "Dependency Management",
            "Cross-Team Communication",
            "Problem Solving"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "Tell me about a time when you were tasked with leading a feature execution without formal authority over the team members involved.",
          "category": "Leadership",
          "expectedTopics": [
            "Leadership Without Authority",
            "Influence",
            "Delegation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "Describe a situation where you had to make a technical compromise to meet a strict product release deadline.",
          "category": "Pragmatism",
          "expectedTopics": [
            "Scope Negotiation",
            "Release Management",
            "Trade-offs"
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
          "question": "Tell me about a time when you led a major technical initiative that faced strong pushback from executive leadership or product management.",
          "category": "Strategic Influence",
          "expectedTopics": [
            "Executive Communication",
            "Stakeholder Alignment",
            "Strategic Vision"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Describe a situation where a major system architectural failure occurred under high load, and you had to manage both technical recovery and stakeholder trust.",
          "category": "Crisis Leadership",
          "expectedTopics": [
            "High-Stakes Incident",
            "Stakeholder Management",
            "Resilience"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "Tell me about a time when you had to advocate for sunsetting a legacy platform or rewriting a critical service despite high business risk and cost.",
          "category": "Long-Term Vision",
          "expectedTopics": [
            "Platform Migration",
            "Risk Assessment",
            "Business Justification"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Give an example of how you navigated conflicting priorities between Engineering, Product, and Business teams during a high-stakes launch.",
          "category": "Cross-Functional Leadership",
          "expectedTopics": [
            "Conflict Negotiation",
            "Priority Alignment",
            "Decision Making"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "Describe a scenario where you identified systemic cultural or technical deficiencies across engineering teams and drove organization-wide change.",
          "category": "Organizational Impact",
          "expectedTopics": [
            "Engineering Culture",
            "Process Improvement",
            "Scale"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "Tell me about a time when you coached or mentored an underperforming engineer, helping them improve or transition their role effectively.",
          "category": "Talent Development",
          "expectedTopics": [
            "Mentorship",
            "Performance Management",
            "Empathy"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "Describe a situation where incomplete data or extreme ambiguity forced you to make a high-consequence architectural commitment.",
          "category": "Decision Making Under Uncertainty",
          "expectedTopics": [
            "Ambiguity",
            "Calculated Risk",
            "Architectural Governance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "Give an example of a time when a security vulnerability or compliance issue required immediate re-prioritization of an entire quarterly roadmap.",
          "category": "Risk & Compliance",
          "expectedTopics": [
            "Security First",
            "Roadmap Adjustment",
            "Crisis Execution"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Tell me about a scenario where you deliberately accepted high technical debt to capture an urgent market opportunity, and how you subsequently managed its repayment.",
          "category": "Technical Strategy",
          "expectedTopics": [
            "Strategic Technical Debt",
            "Market Timing",
            "Debt Governance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "Describe a time when you had to rebuild team morale and trust following a failed project launch or major organizational restructuring.",
          "category": "Team Leadership & Resilience",
          "expectedTopics": [
            "Morale Building",
            "Change Management",
            "Empathetic Leadership"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "Tell me about a situation where you had to balance short-term customer feature requests with long-term infrastructure scalability investments.",
          "category": "Resource & Strategy Balancing",
          "expectedTopics": [
            "Scalability vs Features",
            "Roadmap Strategy",
            "Value Delivery"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
