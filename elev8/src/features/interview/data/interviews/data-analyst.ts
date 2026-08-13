import { PredefinedInterview } from "../../types/predefined-interview";

export const data_analyst: PredefinedInterview = {
  "id": "data-analyst",
  "role": "Data Analyst",
  "type": "TECHNICAL",
  "description": "This technical interview evaluates candidates on core SQL proficiency, statistical reasoning, data modeling, A/B testing methodologies, and advanced analytical problem-solving for data analyst roles.",
  "levels": {
    "EASY": {
      "estimatedDuration": "20-25 minutes",
      "questions": {
        "q1": {
          "id": "q1",
          "question": "What is the difference between WHERE and HAVING clauses in SQL, and when would you use each?",
          "category": "SQL & Databases",
          "expectedTopics": [
            "SQL",
            "Filtering",
            "Aggregation",
            "HAVING"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q2": {
          "id": "q2",
          "question": "Explain the difference between an INNER JOIN and a LEFT JOIN with a practical example.",
          "category": "SQL & Databases",
          "expectedTopics": [
            "SQL Joins",
            "Data Manipulation",
            "Relational Databases"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q3": {
          "id": "q3",
          "question": "When analyzing a dataset with extreme outliers, why might you prefer the median over the mean?",
          "category": "Statistics & Analytics",
          "expectedTopics": [
            "Descriptive Statistics",
            "Data Skew",
            "Outliers"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q4": {
          "id": "q4",
          "question": "What are Primary Keys and Foreign Keys, and why are they essential in relational database design?",
          "category": "Data Modeling",
          "expectedTopics": [
            "Primary Key",
            "Foreign Key",
            "Database Design"
          ],
          "estimatedAnswerTime": 2,
          "answer": ""
        },
        "q5": {
          "id": "q5",
          "question": "What is a Common Table Expression (CTE) in SQL, and what advantages does it offer over nested subqueries?",
          "category": "SQL & Databases",
          "expectedTopics": [
            "CTE",
            "SQL Readability",
            "Subqueries"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q6": {
          "id": "q6",
          "question": "What common techniques do you use to identify and clean missing or duplicate data in a tabular dataset?",
          "category": "Data Cleaning",
          "expectedTopics": [
            "Data Wrangling",
            "Missing Values",
            "Deduplication"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q7": {
          "id": "q7",
          "question": "In the context of business intelligence and reporting, what is the distinction between a dimension and a metric?",
          "category": "Business Intelligence",
          "expectedTopics": [
            "Dimensions",
            "Metrics",
            "Data Warehousing"
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
          "question": "Explain the differences between ROW_NUMBER(), RANK(), and DENSE_RANK() SQL window functions using a concrete ranking example.",
          "category": "SQL & Databases",
          "expectedTopics": [
            "Window Functions",
            "Ranking",
            "SQL"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q9": {
          "id": "q9",
          "question": "How would you write a query or workflow to calculate 30-day user retention rates from a table of raw user activity logs?",
          "category": "Data Analytics",
          "expectedTopics": [
            "Retention Analysis",
            "SQL",
            "Cohort Analysis"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q10": {
          "id": "q10",
          "question": "Compare the trade-offs of imputing missing numerical values using mean/median vs forward-fill/backward-fill in time-series data.",
          "category": "Data Cleaning",
          "expectedTopics": [
            "Imputation",
            "Time Series",
            "Data Quality"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q11": {
          "id": "q11",
          "question": "How do you explain statistical significance and p-values to non-technical business stakeholders following an A/B test?",
          "category": "A/B Testing & Statistics",
          "expectedTopics": [
            "A/B Testing",
            "P-values",
            "Stakeholder Communication"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q12": {
          "id": "q12",
          "question": "What steps would you take to diagnose and optimize a slow-performing SQL query running on a large dataset?",
          "category": "SQL & Databases",
          "expectedTopics": [
            "Query Optimization",
            "Indexing",
            "Execution Plans"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q13": {
          "id": "q13",
          "question": "How do you approach designing an executive dashboard to ensure key performance indicators (KPIs) are clear, actionable, and uncluttered?",
          "category": "Business Intelligence",
          "expectedTopics": [
            "Dashboard Design",
            "KPIs",
            "Data Visualization"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q14": {
          "id": "q14",
          "question": "How would you structure a cohort analysis to identify drop-off trends across different user acquisition channels over time?",
          "category": "Data Analytics",
          "expectedTopics": [
            "Cohort Analysis",
            "User Acquisition",
            "Funnel Metrics"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q15": {
          "id": "q15",
          "question": "Describe how you would use Interquartile Range (IQR) or Z-score methods to detect anomalies in continuous data.",
          "category": "Statistics & Analytics",
          "expectedTopics": [
            "IQR",
            "Z-score",
            "Outlier Detection"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q16": {
          "id": "q16",
          "question": "How would you construct and analyze a conversion funnel to pinpoint friction points in an e-commerce checkout flow?",
          "category": "Product Analytics",
          "expectedTopics": [
            "Conversion Funnels",
            "E-commerce",
            "User Drop-off"
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
          "question": "How would you design a scalable dimensional schema (star schema) for a multi-tenant e-commerce platform with frequent product catalog updates?",
          "category": "Data Modeling",
          "expectedTopics": [
            "Star Schema",
            "Dimensional Modeling",
            "Slowly Changing Dimensions"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q18": {
          "id": "q18",
          "question": "Describe Simpson's Paradox and provide a real-world scenario where aggregated metrics could lead to erroneous business decisions in A/B testing.",
          "category": "A/B Testing & Statistics",
          "expectedTopics": [
            "Simpson's Paradox",
            "A/B Testing",
            "Segmentation Bias"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q19": {
          "id": "q19",
          "question": "How would you architect an automated data quality framework to detect schema drifts, volume anomalies, and NULL spikes in real-time pipelines?",
          "category": "Data Engineering & Governance",
          "expectedTopics": [
            "Data Observability",
            "Data Quality",
            "Pipeline Monitoring"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q20": {
          "id": "q20",
          "question": "Compare the trade-offs between Star Schema and Snowflake Schema regarding query performance, storage efficiency, and maintenance in modern cloud data warehouses like BigQuery or Snowflake.",
          "category": "Data Warehousing",
          "expectedTopics": [
            "Star Schema",
            "Snowflake Schema",
            "Cloud Data Warehouses"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q21": {
          "id": "q21",
          "question": "When controlled A/B testing is ethically or technically impossible, what quasi-experimental methods (e.g., Difference-in-Differences, Propensity Score Matching) can be used to evaluate causal impact?",
          "category": "Causal Inference",
          "expectedTopics": [
            "Causal Inference",
            "Difference-in-Differences",
            "Propensity Score Matching"
          ],
          "estimatedAnswerTime": 5,
          "answer": ""
        },
        "q22": {
          "id": "q22",
          "question": "How do partitioning and clustering strategies differ in modern data warehouses, and how would you apply them to optimize costs and performance for multi-terabyte query workloads?",
          "category": "Data Warehousing",
          "expectedTopics": [
            "Partitioning",
            "Clustering",
            "Query Performance"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q23": {
          "id": "q23",
          "question": "How would you define, validate, and monitor guardrail metrics vs primary success metrics when launching a major overhaul of a core recommendation algorithm?",
          "category": "Product Analytics",
          "expectedTopics": [
            "Metrics Framework",
            "Guardrail Metrics",
            "Algorithm Evaluation"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q24": {
          "id": "q24",
          "question": "How do you identify and resolve data skew issues in distributed processing frameworks when performing large-scale table joins?",
          "category": "Distributed Computing",
          "expectedTopics": [
            "Data Skew",
            "Broadcast Joins",
            "Distributed Systems"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q25": {
          "id": "q25",
          "question": "How do you handle situations where two business units have conflicting definitions for a key metric (e.g., Active User) and demand separate reporting views?",
          "category": "Data Governance",
          "expectedTopics": [
            "Data Governance",
            "Metric Standardization",
            "Stakeholder Management"
          ],
          "estimatedAnswerTime": 3,
          "answer": ""
        },
        "q26": {
          "id": "q26",
          "question": "How would you model and analyze retention for a product with irregular usage cycles (e.g., tax filing or travel booking apps) where standard 7-day or 30-day retention windows fail?",
          "category": "Product Analytics",
          "expectedTopics": [
            "Retention Modeling",
            "Irregular Cycles",
            "Behavioral Clustering"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        },
        "q27": {
          "id": "q27",
          "question": "What are the architectural and operational trade-offs of using automated machine learning anomaly detection versus static threshold alerting for business metrics?",
          "category": "Analytics Engineering",
          "expectedTopics": [
            "Anomaly Detection",
            "Machine Learning",
            "Alerting Trade-offs"
          ],
          "estimatedAnswerTime": 4,
          "answer": ""
        }
      }
    }
  }
};
