import { PredefinedInterview } from "../../types/predefined-interview";

export const data_scientist: PredefinedInterview = {
  "id": "data-scientist",
  "role": "Data Scientist",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidates on core data science competencies including statistical inference, machine learning fundamentals, experimental design, and large-scale AI system architecture.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "Explain the bias-variance tradeoff in machine learning algorithms.",
          "category": "Machine Learning",
          "expectedTopics": [
            "Bias",
            "Variance",
            "Overfitting"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "What is the key difference between L1 and L2 regularization?",
          "category": "Machine Learning",
          "expectedTopics": [
            "Lasso",
            "Ridge",
            "Regularization"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "How do you handle missing values in a structured tabular dataset?",
          "category": "Data Wrangling",
          "expectedTopics": [
            "Imputation",
            "Data Cleaning",
            "Feature Engineering"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "Explain the difference between Precision and Recall, and when you would prioritize one over the other.",
          "category": "Evaluation Metrics",
          "expectedTopics": [
            "Precision",
            "Recall",
            "Confusion Matrix"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "What are the main assumptions required for Linear Regression?",
          "category": "Statistics",
          "expectedTopics": [
            "Linearity",
            "Homoscedasticity",
            "Multicollinearity"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "How does a p-value help in statistical hypothesis testing?",
          "category": "Statistics",
          "expectedTopics": [
            "Null Hypothesis",
            "P-Value",
            "Significance Level"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "Explain how a Decision Tree splits nodes for classification vs regression tasks.",
          "category": "Machine Learning",
          "expectedTopics": [
            "Gini Impurity",
            "Information Gain",
            "MSE"
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
          "question": "How would you deal with a severely imbalanced dataset when training a fraud detection model?",
          "category": "Applied ML",
          "expectedTopics": [
            "SMOTE",
            "Class Weights",
            "ROC-AUC"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Explain how Gradient Boosting works and how it differs from Random Forest.",
          "category": "Machine Learning",
          "expectedTopics": [
            "Boosting",
            "Bagging",
            "Ensemble Methods"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "What approaches would you use to detect and address multicollinearity in a multi-variable regression model?",
          "category": "Statistics",
          "expectedTopics": [
            "VIF",
            "Correlation Matrix",
            "Dimensionality Reduction"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "How do you design an A/B test to evaluate a new recommendation feature, including sample size determination?",
          "category": "Experimentation",
          "expectedTopics": [
            "A/B Testing",
            "Power Analysis",
            "Sample Size"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "Explain the concept of cross-validation and why standard K-Fold might fail on time-series data.",
          "category": "Model Evaluation",
          "expectedTopics": [
            "K-Fold",
            "Time-Series Split",
            "Data Leakage"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "How does Principal Component Analysis (PCA) reduce dimensionality, and how do you choose the number of components?",
          "category": "Machine Learning",
          "expectedTopics": [
            "Dimensionality Reduction",
            "Eigenvalues",
            "Variance Explained"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Describe how you would monitor a deployed machine learning model for data drift and concept drift over time.",
          "category": "MLOps",
          "expectedTopics": [
            "Data Drift",
            "Concept Drift",
            "Model Monitoring"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How do SHAP (Shapley Additive exPlanations) values work for interpreting complex black-box models?",
          "category": "Explainable AI",
          "expectedTopics": [
            "SHAP",
            "Shapley Values",
            "Model Interpretability"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "Explain ROC-AUC versus Precision-Recall AUC and state when you should prefer PR-AUC.",
          "category": "Evaluation Metrics",
          "expectedTopics": [
            "ROC-AUC",
            "PR-AUC",
            "Imbalanced Data"
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
          "question": "How would you design a large-scale real-time recommendation system handling millions of active users?",
          "category": "System Design",
          "expectedTopics": [
            "Candidate Generation",
            "Ranking",
            "Feature Store"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Explain the mathematical intuition behind the Self-Attention mechanism in Transformer architectures.",
          "category": "Deep Learning",
          "expectedTopics": [
            "Self-Attention",
            "Query Key Value",
            "Transformers"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How do you address cold-start problems in collaborative filtering algorithms for new users and items?",
          "category": "Applied ML",
          "expectedTopics": [
            "Cold Start",
            "Hybrid Recommenders",
            "Content-Based"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Compare Causal Inference methods like Propensity Score Matching and Synthetic Controls for observational data.",
          "category": "Causal Inference",
          "expectedTopics": [
            "Propensity Score",
            "Synthetic Control",
            "Confounding"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "How do you optimize hyperparameter search for computationally expensive deep learning models?",
          "category": "ML Optimization",
          "expectedTopics": [
            "Bayesian Optimization",
            "Hyperband",
            "Grid Search"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "Explain how Multi-Armed Bandits differ from traditional A/B testing and when to use Thompson Sampling.",
          "category": "Experimentation",
          "expectedTopics": [
            "Multi-Armed Bandit",
            "Thompson Sampling",
            "Exploration vs Exploitation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How do you handle high-cardinality categorical features in large-scale gradient boosting models without causing overfitting?",
          "category": "Feature Engineering",
          "expectedTopics": [
            "Target Encoding",
            "Categorical Embeddings",
            "Frequency Encoding"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "Explain contrastive learning and its application in self-supervised representation learning.",
          "category": "Deep Learning",
          "expectedTopics": [
            "Contrastive Learning",
            "SimCLR",
            "Representation Learning"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "How would you design a distributed training pipeline for a multi-billion parameter Large Language Model?",
          "category": "Deep Learning",
          "expectedTopics": [
            "Data Parallelism",
            "Tensor Parallelism",
            "ZeRO"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "What strategies can be used to audit and mitigate algorithmic bias in automated hiring or lending systems?",
          "category": "AI Ethics",
          "expectedTopics": [
            "Fairness Metrics",
            "Demographic Parity",
            "Disparate Impact"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "How do variance reduction techniques like CUPED work to increase sensitivity in A/B testing analysis?",
          "category": "Experimentation",
          "expectedTopics": [
            "CUPED",
            "Variance Reduction",
            "Covariate Adjustment"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
