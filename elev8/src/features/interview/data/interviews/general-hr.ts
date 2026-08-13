import { PredefinedInterview } from "../../types/predefined-interview";

export const general_hr: PredefinedInterview = {
  id: "general-hr",
  role: "General HR / Behavioral",
  type: "BEHAVIORAL",
  description: "Evaluates cultural fit, communication, and core behavioral traits.",
  levels: {
    EASY: {
      estimatedDuration: "20-25 minutes",
      questions: {
        "q1": { id: "q1", question: "Tell me about yourself.", answer: "", category: "Communication", expectedTopics: ["Background", "Experience"], estimatedAnswerTime: 3 },
        "q2": { id: "q2", question: "What are your greatest strengths?", answer: "", category: "Self Awareness", expectedTopics: ["Strengths", "Examples"], estimatedAnswerTime: 3 },
        "q3": { id: "q3", question: "What are your weaknesses?", answer: "", category: "Self Awareness", expectedTopics: ["Weaknesses", "Improvement"], estimatedAnswerTime: 3 },
        "q4": { id: "q4", question: "Why do you want to work here?", answer: "", category: "Motivation", expectedTopics: ["Company values", "Interest"], estimatedAnswerTime: 3 },
        "q5": { id: "q5", question: "Where do you see yourself in 5 years?", answer: "", category: "Ambition", expectedTopics: ["Goals", "Growth"], estimatedAnswerTime: 3 },
        "q6": { id: "q6", question: "Describe your ideal work environment.", answer: "", category: "Culture Fit", expectedTopics: ["Environment", "Team"], estimatedAnswerTime: 3 },
        "q7": { id: "q7", question: "How do you handle stress?", answer: "", category: "Resilience", expectedTopics: ["Stress management", "Coping"], estimatedAnswerTime: 3 }
      }
    },
    MEDIUM: {
      estimatedDuration: "25-35 minutes",
      questions: {
        "q8": { id: "q8", question: "Tell me about a time you had a conflict at work.", answer: "", category: "Conflict Resolution", expectedTopics: ["Conflict", "Resolution"], estimatedAnswerTime: 4 },
        "q9": { id: "q9", question: "Describe a time you failed.", answer: "", category: "Resilience", expectedTopics: ["Failure", "Learning"], estimatedAnswerTime: 4 },
        "q10": { id: "q10", question: "Tell me about a time you took initiative.", answer: "", category: "Leadership", expectedTopics: ["Initiative", "Impact"], estimatedAnswerTime: 4 },
        "q11": { id: "q11", question: "How do you prioritize your work?", answer: "", category: "Time Management", expectedTopics: ["Prioritization", "Organization"], estimatedAnswerTime: 3 },
        "q12": { id: "q12", question: "Tell me about a time you had to adapt to a major change.", answer: "", category: "Adaptability", expectedTopics: ["Change", "Flexibility"], estimatedAnswerTime: 4 },
        "q13": { id: "q13", question: "Describe a time you worked with a difficult team member.", answer: "", category: "Teamwork", expectedTopics: ["Collaboration", "Empathy"], estimatedAnswerTime: 4 },
        "q14": { id: "q14", question: "Tell me about a time you exceeded expectations.", answer: "", category: "Performance", expectedTopics: ["Achievement", "Dedication"], estimatedAnswerTime: 4 },
        "q15": { id: "q15", question: "How do you handle constructive criticism?", answer: "", category: "Self Awareness", expectedTopics: ["Feedback", "Growth"], estimatedAnswerTime: 3 },
        "q16": { id: "q16", question: "Tell me about a time you had to learn something quickly.", answer: "", category: "Learning", expectedTopics: ["Fast learning", "Resourcefulness"], estimatedAnswerTime: 3 }
      }
    },
    HARD: {
      estimatedDuration: "35-45 minutes",
      questions: {
        "q17": { id: "q17", question: "Tell me about a time you made an unpopular decision.", answer: "", category: "Leadership", expectedTopics: ["Decision making", "Conviction"], estimatedAnswerTime: 5 },
        "q18": { id: "q18", question: "Describe a time you had to deliver negative feedback.", answer: "", category: "Communication", expectedTopics: ["Feedback", "Empathy"], estimatedAnswerTime: 5 },
        "q19": { id: "q19", question: "Tell me about a time you had to manage conflicting priorities from multiple stakeholders.", answer: "", category: "Stakeholder Management", expectedTopics: ["Prioritization", "Negotiation"], estimatedAnswerTime: 5 },
        "q20": { id: "q20", question: "Describe a complex problem you solved.", answer: "", category: "Problem Solving", expectedTopics: ["Complexity", "Analytical thinking"], estimatedAnswerTime: 5 },
        "q21": { id: "q21", question: "Tell me about a time you had to persuade someone who disagreed with you.", answer: "", category: "Influence", expectedTopics: ["Persuasion", "Logic"], estimatedAnswerTime: 5 },
        "q22": { id: "q22", question: "Describe a time you made a significant mistake and how you handled the fallout.", answer: "", category: "Accountability", expectedTopics: ["Mistake", "Ownership"], estimatedAnswerTime: 5 },
        "q23": { id: "q23", question: "Tell me about a time you had to compromise on your values.", answer: "", category: "Ethics", expectedTopics: ["Integrity", "Values"], estimatedAnswerTime: 5 },
        "q24": { id: "q24", question: "Describe a time you led a project with no formal authority.", answer: "", category: "Leadership", expectedTopics: ["Influence", "Drive"], estimatedAnswerTime: 4 },
        "q25": { id: "q25", question: "Tell me about a time you had to work with incomplete information.", answer: "", category: "Ambiguity", expectedTopics: ["Decision making", "Risk"], estimatedAnswerTime: 4 },
        "q26": { id: "q26", question: "Describe a time you successfully managed a crisis.", answer: "", category: "Resilience", expectedTopics: ["Crisis management", "Calmness"], estimatedAnswerTime: 5 },
        "q27": { id: "q27", question: "What is the most difficult professional decision you've had to make?", answer: "", category: "Decision Making", expectedTopics: ["Difficulty", "Impact"], estimatedAnswerTime: 5 }
      }
    }
  }
};
