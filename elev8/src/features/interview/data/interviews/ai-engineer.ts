import { PredefinedInterview } from "../../types/predefined-interview";

export const ai_engineer: PredefinedInterview = {
  "id": "ai-engineer",
  "role": "AI Engineer",
  "type": "TECHNICAL",
  "description": "Evaluates the candidate technical proficiency in core machine learning concepts, modern LLM architecture, dynamic AI application design, and scalable production AI deployment.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "Explain the difference between supervised, unsupervised, and reinforcement learning in the context of building AI applications.",
          "category": "Machine Learning Fundamentals",
          "expectedTopics": [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "What is overfitting in machine learning models, and what are two common techniques to prevent it?",
          "category": "Model Evaluation & Generalization",
          "expectedTopics": [
            "Overfitting",
            "Regularization",
            "Cross-Validation"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "Describe how tokenization works in Natural Language Processing (NLP) and why it is necessary.",
          "category": "NLP Fundamentals",
          "expectedTopics": [
            "Tokenization",
            "Subword Algorithms",
            "Vocabulary"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What is the purpose of an activation function in a neural network, and how does ReLU differ from Sigmoid?",
          "category": "Deep Learning",
          "expectedTopics": [
            "Activation Functions",
            "ReLU",
            "Non-linearity"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "Explain the difference between precision and recall, and when you would prioritize one over the other.",
          "category": "Model Evaluation",
          "expectedTopics": [
            "Precision",
            "Recall",
            "Evaluation Metrics"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What are vector embeddings, and why are they essential for modern LLM applications?",
          "category": "LLM & Vector Representation",
          "expectedTopics": [
            "Embeddings",
            "Vector Spaces",
            "Semantic Search"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "What is the primary function of the learning rate in gradient descent optimization?",
          "category": "Optimization",
          "expectedTopics": [
            "Learning Rate",
            "Gradient Descent",
            "Convergence"
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
          "question": "How would you design a Retrieval-Augmented Generation (RAG) pipeline to reduce hallucinations in a customer support chatbot?",
          "category": "RAG & Architecture",
          "expectedTopics": [
            "RAG",
            "Hallucination Reduction",
            "Vector DB"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "Explain the architecture of the Transformer model, focusing on the mechanism of Multi-Head Self-Attention.",
          "category": "Deep Learning & Transformers",
          "expectedTopics": [
            "Transformers",
            "Self-Attention",
            "Multi-Head Attention"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "What strategies would you use to fine-tune a pre-trained Large Language Model on a domain-specific dataset with limited GPU resources?",
          "category": "Model Fine-Tuning",
          "expectedTopics": [
            "PEFT",
            "LoRA",
            "GPU Memory Optimization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "Compare Vector Databases like Pinecone with traditional databases using vector extensions like pgvector for semantic search.",
          "category": "Data Storage & Retrieval",
          "expectedTopics": [
            "Vector Search",
            "pgvector",
            "Vector Databases"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "How do you evaluate the performance and safety of an LLM application beyond standard metrics like BLEU or ROUGE?",
          "category": "LLM Evaluation & Safety",
          "expectedTopics": [
            "LLM-as-a-Judge",
            "Guardrails",
            "Toxicity Detection"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "Explain the concept of model quantization (e.g., INT8/INT4) and its impact on latency, throughput, and accuracy.",
          "category": "Model Inference & Optimization",
          "expectedTopics": [
            "Quantization",
            "INT8/INT4",
            "Inference Speed"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "Describe how semantic caching works in an AI application and how it reduces API costs and response latency.",
          "category": "AI Systems Engineering",
          "expectedTopics": [
            "Semantic Caching",
            "Similarity Thresholds",
            "Latency Reduction"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "How would you implement a guardrail system to prevent prompt injection attacks and toxic outputs in an enterprise AI system?",
          "category": "AI Security",
          "expectedTopics": [
            "Prompt Injection",
            "Guardrails",
            "Input Sanitization"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "Explain the difference between LoRA (Low-Rank Adaptation) and QLoRA, and how they optimize parameter-efficient fine-tuning.",
          "category": "Model Fine-Tuning",
          "expectedTopics": [
            "LoRA",
            "QLoRA",
            "Quantization"
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
          "question": "Architect an end-to-end real-time AI agent system that can perform multi-step web research, tool execution, and self-correction.",
          "category": "AI Agents & System Design",
          "expectedTopics": [
            "Autonomous Agents",
            "Tool Use",
            "Self-Correction Loops"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "How do you design and optimize an LLM serving infrastructure for low latency and high concurrency using continuous batching and PagedAttention?",
          "category": "Inference Infrastructure",
          "expectedTopics": [
            "PagedAttention",
            "Continuous Batching",
            "vLLM"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "Discuss the trade-offs between dense model architectures versus Mixture of Experts (MoE) models in terms of training cost, routing, and memory footprint.",
          "category": "Model Architecture",
          "expectedTopics": [
            "Mixture of Experts",
            "Routing",
            "Memory Bandwidth"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "How would you debug and mitigate catastrophic forgetting when continually fine-tuning a foundational model on new domain data?",
          "category": "Continual Learning",
          "expectedTopics": [
            "Catastrophic Forgetting",
            "Replay Buffers",
            "EWC"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "Design a scalable data ingestion and chunking strategy for dynamic enterprise knowledge bases with millions of heterogeneous documents.",
          "category": "Data Engineering for AI",
          "expectedTopics": [
            "Chunking Strategies",
            "Document Parsing",
            "Hybrid Search"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "Compare RLHF (Reinforcement Learning from Human Feedback) with DPO (Direct Preference Optimization) regarding complexity and stability.",
          "category": "LLM Alignment",
          "expectedTopics": [
            "RLHF",
            "DPO",
            "Preference Tuning"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How do you handle context window scaling and long-context retrieval challenges like the 'needle in a haystack' problem in production LLM systems?",
          "category": "Context & Attention",
          "expectedTopics": [
            "Long-Context Windows",
            "Attention Scaling",
            "RoPE Embeddings"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "Explain how speculative decoding speeds up LLM inference and the operational trade-offs involved in selecting draft models.",
          "category": "Inference Acceleration",
          "expectedTopics": [
            "Speculative Decoding",
            "Draft Models",
            "Acceptance Rate"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "Design a distributed AI training setup across multiple GPU clusters, explaining Tensor Parallelism, Pipeline Parallelism, and Data Parallelism (ZeRO).",
          "category": "Distributed Training",
          "expectedTopics": [
            "Tensor Parallelism",
            "Pipeline Parallelism",
            "DeepSpeed ZeRO"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "How would you implement robust observability, telemetry, and hallucination monitoring for complex multi-agent workflows in production?",
          "category": "AI Observability",
          "expectedTopics": [
            "Tracing",
            "Telemetry",
            "Hallucination Metrics"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "Discuss the architectural strategies for optimizing dynamic function calling and structured JSON generation in LLMs with minimal latency overhead.",
          "category": "Structured Generation",
          "expectedTopics": [
            "Function Calling",
            "Grammar-Based Decoding",
            "JSON Schema Enforcement"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
