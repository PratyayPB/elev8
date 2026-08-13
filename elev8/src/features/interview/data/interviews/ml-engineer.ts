import { PredefinedInterview } from "../../types/predefined-interview";

export const ml_engineer: PredefinedInterview = {
  "id": "ml-engineer",
  "role": "Machine Learning Engineer",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidates for the Machine Learning Engineer role across core ML algorithms, model evaluation, MLOps, deep learning architectures, and scalable system design.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "Explain the bias-variance tradeoff and how model complexity influences both error components.",
          "category": "ML Fundamentals",
          "expectedTopics": [
            "Bias",
            "Variance",
            "Overfitting",
            "Model Complexity"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "What is the difference between L1 (Lasso) and L2 (Ridge) regularization, and how do they affect model weights?",
          "category": "ML Fundamentals",
          "expectedTopics": [
            "L1 Regularization",
            "L2 Regularization",
            "Sparsity",
            "Weight Decay"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "How do Precision and Recall differ, and in what scenario would you prioritize Precision over Recall?",
          "category": "Model Evaluation",
          "expectedTopics": [
            "Precision",
            "Recall",
            "F1 Score",
            "Evaluation Metrics"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "Compare standard Batch Gradient Descent with Stochastic Gradient Descent (SGD) in terms of convergence speed and computational efficiency.",
          "category": "Optimization",
          "expectedTopics": [
            "Gradient Descent",
            "SGD",
            "Convergence",
            "Optimization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "What strategies can be used to handle missing numerical values and encode high-cardinality categorical variables?",
          "category": "Data Preprocessing",
          "expectedTopics": [
            "Imputation",
            "One-Hot Encoding",
            "Target Encoding",
            "Feature Engineering"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "How can you detect overfitting during model training, and what are three common techniques to reduce it?",
          "category": "ML Fundamentals",
          "expectedTopics": [
            "Overfitting",
            "Early Stopping",
            "Cross-Validation",
            "Regularization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "Explain the difference between supervised and unsupervised learning, providing one representative algorithm for each.",
          "category": "ML Fundamentals",
          "expectedTopics": [
            "Supervised Learning",
            "Unsupervised Learning",
            "Clustering",
            "Classification"
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
          "question": "How would you handle a severe class imbalance (e.g., 99:1 ratio) in a fraud detection binary classification task?",
          "category": "Applied ML",
          "expectedTopics": [
            "Class Imbalance",
            "SMOTE",
            "Class Weights",
            "PR-AUC"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Explain the difference between filter, wrapper, and embedded feature selection methods, giving examples of each.",
          "category": "Feature Engineering",
          "expectedTopics": [
            "Feature Selection",
            "Filter Methods",
            "Wrapper Methods",
            "Embedded Methods"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "Compare Grid Search, Random Search, and Bayesian Optimization for hyperparameter tuning in terms of efficiency and resource usage.",
          "category": "Model Optimization",
          "expectedTopics": [
            "Hyperparameter Tuning",
            "Bayesian Optimization",
            "Grid Search",
            "Random Search"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "How do SHAP (SHapley Additive exPlanations) values help interpret complex black-box machine learning models?",
          "category": "Model Explainability",
          "expectedTopics": [
            "SHAP",
            "Model Interpretability",
            "Feature Importance",
            "Game Theory"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "When would you choose to fine-tune a pre-trained Transformer model instead of training a model from scratch, and what parameters would you unfreeze?",
          "category": "Deep Learning",
          "expectedTopics": [
            "Transfer Learning",
            "Transformers",
            "Fine-Tuning",
            "PEFT"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "Why is standard K-Fold cross-validation inappropriate for time-series forecasting, and how should validation be performed instead?",
          "category": "Validation & Testing",
          "expectedTopics": [
            "Time-Series Validation",
            "Purged Group Time Split",
            "Data Leakage",
            "Backtesting"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Explain quantization techniques (PTQ vs QAT) used to compress deep learning models for low-latency edge deployment.",
          "category": "Model Deployment",
          "expectedTopics": [
            "Quantization",
            "Model Compression",
            "QAT",
            "Post-Training Quantization"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "What is the difference between data drift and concept drift, and how do you monitor and handle them in production ML pipelines?",
          "category": "MLOps",
          "expectedTopics": [
            "Data Drift",
            "Concept Drift",
            "Model Monitoring",
            "KS Test"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "When building a classifier for tabular data, why do Gradient Boosted Decision Trees often outperform deep neural networks?",
          "category": "Applied ML",
          "expectedTopics": [
            "GBDT",
            "Tabular Data",
            "XGBoost",
            "Neural Networks"
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
          "question": "Design an end-to-end real-time recommendation system that scales to 100 million users with sub-50ms latency requirements.",
          "category": "System Design",
          "expectedTopics": [
            "Recommendation Systems",
            "Two-Stage Retrieval",
            "Vector Search",
            "Latency"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Compare Data Parallelism, Tensor Parallelism, and Pipeline Parallelism for distributed training of large scale language models.",
          "category": "Distributed ML",
          "expectedTopics": [
            "Distributed Training",
            "Tensor Parallelism",
            "Pipeline Parallelism",
            "DeepSpeed"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "Explain the architecture and trade-offs of Hierarchical Navigable Small World (HNSW) graphs versus IVF-PQ for vector similarity search in RAG architectures.",
          "category": "Vector Search",
          "expectedTopics": [
            "Vector Search",
            "HNSW",
            "IVF-PQ",
            "ANN Search"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "How do residual connections, layer normalization variants (Pre-LN vs Post-LN vs RMSNorm), and gradient clipping prevent vanishing or exploding gradients in deep networks?",
          "category": "Deep Learning Architecture",
          "expectedTopics": [
            "Gradient Explosion",
            "Layer Normalization",
            "Residual Connections",
            "Transformer Architecture"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "Architect a click-through rate (CTR) prediction system that combines real-time streaming features and static batch features with model updating.",
          "category": "System Design",
          "expectedTopics": [
            "CTR Prediction",
            "Feature Store",
            "Streaming Data",
            "Online Learning"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "How do you design a multi-task learning architecture with dynamic loss weighting (e.g., GradNorm or Uncertainty Weighting) to balance conflicting task gradients?",
          "category": "Deep Learning Architecture",
          "expectedTopics": [
            "Multi-Task Learning",
            "GradNorm",
            "Loss Weighting",
            "Gradient Conflict"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "Describe the architecture of an enterprise Feature Store, explaining how it ensures point-in-time correctness and prevents feature leakage between training and serving.",
          "category": "MLOps",
          "expectedTopics": [
            "Feature Store",
            "Point-in-Time Joins",
            "Data Leakage",
            "Batch and Streaming"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "What causes catastrophic forgetting in neural networks during continual learning, and what techniques (e.g., Elastic Weight Consolidation, Experience Replay) mitigate it?",
          "category": "Advanced Deep Learning",
          "expectedTopics": [
            "Continual Learning",
            "Catastrophic Forgetting",
            "Elastic Weight Consolidation",
            "Replay Buffers"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Design an automated continuous deployment strategy for ML models incorporating shadow deployment, canary analysis, and dynamic traffic splitting.",
          "category": "MLOps",
          "expectedTopics": [
            "Shadow Deployment",
            "Canary Rollout",
            "A/B Testing",
            "CI/CD for ML"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "Explain how PagedAttention and KV cache management optimize GPU memory footprint and throughput during LLM token generation.",
          "category": "LLM Systems",
          "expectedTopics": [
            "PagedAttention",
            "KV Cache",
            "LLM Inference",
            "GPU Memory Management"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "Design a self-supervised representation learning approach (such as Contrastive Learning) for unlabelled multimodal text and image data.",
          "category": "Self-Supervised Learning",
          "expectedTopics": [
            "Self-Supervised Learning",
            "Contrastive Learning",
            "CLIP",
            "Multimodal"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
