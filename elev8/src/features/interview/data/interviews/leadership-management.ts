import { PredefinedInterview } from "../../types/predefined-interview";

export const leadership_management: PredefinedInterview = {
  id: "leadership-management",
  role: "Leadership & Management",
  type: "BEHAVIORAL",
  description: "Evaluates leadership, strategic thinking, and team management skills.",
  levels: {
    EASY: {
      estimatedDuration: "20-25 minutes",
      questions: {
        "q1": { id: "q1", question: "What is your leadership style?", answer: "", category: "Leadership", expectedTopics: ["Style", "Approach"], estimatedAnswerTime: 3 },
        "q2": { id: "q2", question: "How do you motivate a team?", answer: "", category: "Motivation", expectedTopics: ["Incentives", "Vision"], estimatedAnswerTime: 3 },
        "q3": { id: "q3", question: "Tell me about a time you had to delegate a task.", answer: "", category: "Delegation", expectedTopics: ["Trust", "Empowerment"], estimatedAnswerTime: 3 },
        "q4": { id: "q4", question: "How do you handle an underperforming employee?", answer: "", category: "Management", expectedTopics: ["Feedback", "Support"], estimatedAnswerTime: 4 },
        "q5": { id: "q5", question: "Describe a time you had to build a new team.", answer: "", category: "Team Building", expectedTopics: ["Hiring", "Culture"], estimatedAnswerTime: 3 },
        "q6": { id: "q6", question: "How do you measure success as a manager?", answer: "", category: "Metrics", expectedTopics: ["KPIs", "Growth"], estimatedAnswerTime: 3 },
        "q7": { id: "q7", question: "What is the hardest part of being a leader?", answer: "", category: "Self Awareness", expectedTopics: ["Challenges", "Empathy"], estimatedAnswerTime: 3 }
      }
    },
    MEDIUM: {
      estimatedDuration: "25-35 minutes",
      questions: {
        "q8": { id: "q8", question: "Tell me about a time you had to lead a team through a difficult transition.", answer: "", category: "Change Management", expectedTopics: ["Change", "Communication"], estimatedAnswerTime: 4 },
        "q9": { id: "q9", question: "Describe a situation where you had to resolve a conflict between two team members.", answer: "", category: "Conflict Resolution", expectedTopics: ["Mediation", "Fairness"], estimatedAnswerTime: 4 },
        "q10": { id: "q10", question: "How do you align your team's goals with the company's strategic vision?", answer: "", category: "Strategy", expectedTopics: ["Alignment", "Communication"], estimatedAnswerTime: 4 },
        "q11": { id: "q11", question: "Tell me about a time you had to make a difficult decision that impacted your team.", answer: "", category: "Decision Making", expectedTopics: ["Impact", "Transparency"], estimatedAnswerTime: 4 },
        "q12": { id: "q12", question: "How do you foster a culture of innovation and risk-taking?", answer: "", category: "Culture", expectedTopics: ["Safety", "Encouragement"], estimatedAnswerTime: 4 },
        "q13": { id: "q13", question: "Describe a time you had to manage a project with tight resources.", answer: "", category: "Resource Management", expectedTopics: ["Efficiency", "Prioritization"], estimatedAnswerTime: 4 },
        "q14": { id: "q14", question: "How do you handle pushback from your team on a new initiative?", answer: "", category: "Influence", expectedTopics: ["Listening", "Persuasion"], estimatedAnswerTime: 4 },
        "q15": { id: "q15", question: "Tell me about a time you developed a high-potential employee.", answer: "", category: "Mentorship", expectedTopics: ["Growth", "Opportunity"], estimatedAnswerTime: 4 },
        "q16": { id: "q16", question: "How do you balance tactical execution with strategic planning?", answer: "", category: "Time Management", expectedTopics: ["Balance", "Delegation"], estimatedAnswerTime: 3 }
      }
    },
    HARD: {
      estimatedDuration: "35-45 minutes",
      questions: {
        "q17": { id: "q17", question: "Describe a time you inherited a failing team and how you turned it around.", answer: "", category: "Turnaround", expectedTopics: ["Assessment", "Action"], estimatedAnswerTime: 5 },
        "q18": { id: "q18", question: "Tell me about a time you had to let someone go. How did you handle it?", answer: "", category: "Difficult Conversations", expectedTopics: ["Empathy", "Process"], estimatedAnswerTime: 5 },
        "q19": { id: "q19", question: "How do you manage relationships with senior leadership and board members?", answer: "", category: "Stakeholder Management", expectedTopics: ["Communication", "Expectations"], estimatedAnswerTime: 5 },
        "q20": { id: "q20", question: "Describe a time you failed as a leader and what you learned from it.", answer: "", category: "Accountability", expectedTopics: ["Failure", "Reflection"], estimatedAnswerTime: 5 },
        "q21": { id: "q21", question: "How do you scale a team rapidly without losing the core culture?", answer: "", category: "Scaling", expectedTopics: ["Growth", "Values"], estimatedAnswerTime: 5 },
        "q22": { id: "q22", question: "Tell me about a time you had to pivot your strategy due to external market forces.", answer: "", category: "Strategy", expectedTopics: ["Adaptability", "Vision"], estimatedAnswerTime: 5 },
        "q23": { id: "q23", question: "Describe your approach to creating and managing a departmental budget.", answer: "", category: "Finance", expectedTopics: ["Allocation", "ROI"], estimatedAnswerTime: 4 },
        "q24": { id: "q24", question: "How do you handle a situation where a top performer is toxic to the team culture?", answer: "", category: "Culture", expectedTopics: ["Boundaries", "Action"], estimatedAnswerTime: 5 },
        "q25": { id: "q25", question: "Tell me about a time you had to lead a cross-functional initiative with conflicting agendas.", answer: "", category: "Influence", expectedTopics: ["Collaboration", "Negotiation"], estimatedAnswerTime: 5 },
        "q26": { id: "q26", question: "How do you ensure diversity, equity, and inclusion are prioritized within your team?", answer: "", category: "DEI", expectedTopics: ["Hiring", "Belonging"], estimatedAnswerTime: 4 },
        "q27": { id: "q27", question: "Describe a time you had to make a decision with significant ethical implications.", answer: "", category: "Ethics", expectedTopics: ["Integrity", "Values"], estimatedAnswerTime: 5 }
      }
    }
  }
};
