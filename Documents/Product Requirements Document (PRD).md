# Product Requirements Document (PRD)

This PRD lays the groundwork for the DebtFreePlanner by clearly defining the product’s purpose and target audience.
The structure and content of this document are guided by the principles and methodologies outlined in [*Design a Better Business: New Tools, Skills, and Mindset for Strategy and Innovation*](https://designabetterbusiness.com/) by Pijl, Lokitz, and Solomon (2016).
Additionally, insights from the [Product Mastery Now](https://productmasterynow.com/mastery/) podcast shape the approach, particularly within the "design and development" knowledge area of the "product innovation management" framework.

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Objectives and Key Results (OKRs)](#2-objectives-and-key-results-okrs)
3. [Background](#background)
   - 3.1. [Problem Statement](#problem-statement)
   - 3.2. [Competitive Landscape](#competitive-landscape)
   - 3.3. [Solution and Value Proposition](#solution-and-value-proposition)
   - 3.4. [User Personas](#user-personas)
3. [Market and User Insights](#2-market-and-user-insights)
   - [2.1. Problem Statement](#21-problem-statement)
   - [2.2. Market Opportunity](#22-market-opportunity)
   - [2.3. Value Proposition](#23-value-proposition)
   - [2.4. Competitive Landscape](#24-competitive-landscape)
   - [2.5. Assumptions and Risks](#25-assumptions-and-risks)
   - [2.6. User Personas](#26-user-personas)
4. [Jobs to Get Done](#3-jobs-to-get-done)
   - [3.1. Core Jobs](#31-core-jobs)
   - [3.2. Supporting Jobs](#32-supporting-jobs)
5. [Design and User Experience](#4-design-and-user-experience)
   - [4.1. User Flow](#41-user-flow)
   - [4.2. Wireframes/Mockups](#42-wireframesmockups)
6. [User Stories](#5-user-stories)
   - [5.1. User Stories](#51-user-stories)
7. [Legal and Compliance](#6-legal-and-compliance)
   - [6.1. Data Privacy](#61-data-privacy)
   - [6.2. Regulatory Compliance](#62-regulatory-compliance)
   - [6.3. International Regulations](#63-international-regulations)
   - [6.4. Terms of Service & User Agreements](#64-terms-of-service--user-agreements)
   - [6.5. Record Keeping and Audit Trails](#65-record-keeping-and-audit-trails)
   - [6.6. Legal Risk Management](#66-legal-risk-management)
   - [6.7. Protection of Intellectual Property (IP)](#67-protection-of-intellectual-property-ip)
8. [Shared Appendix](#7-shared-appendix)
9. [Related Documents](#8-related-documents)

---

## 1. Executive Summary

**Product Name:** Debt Free Planner  
**Product Motto:** Precision Planning for Debt-Free Living

1. **Product Vision**  
   DebtFreePlanner aims to empower individuals and families to achieve financial freedom by providing a user-friendly tool for managing and paying off debt using the Snowball and Avalanche strategies.

2. **Key Objectives**  
   - Enable users to create and manage debt repayment plans with various strategies.
   - Develop a robust MERN stack portfolio project that demonstrates full-stack development, security, and DevOps capabilities.

3. **Target Audience**  
   Individuals and families seeking effective debt repayment strategies with varying levels of financial literacy.

4. **Problem Statement**  
   Many individuals struggle with managing multiple debts, leading to prolonged financial strain due to a lack of effective tools and knowledge.

5. **Proposed Solution**  
   DebtFreePlanner provides a web-based application for users to organize their debts and choose between various repayment methods, including Snowball, Avalanche, and Snowflake strategies.

6. **Portfolio Impact**  
   This project will showcase advanced front-end and back-end development skills, security measures, and DevOps practices, positioning you as a well-rounded software developer with a strong focus on financial technology.

7. **Career Alignment**  
   The project aligns with your career goal of transitioning into a Backend programmer role, demonstrating proficiency in the MERN stack, software architecture, and industry best practices.

8. **Product Principles**

> **Note:** the Product Principles section was identified as potentially redundant, as the principles surfaced during the review felt either generic or unnecessary. It will be kept as a placeholder for now, in case a more meaningful principle emerges in the future.

---

## 2. Objectives and Key Results (OKRs)

### 2.1. Objective 1: Empower users to create debt elimination plans.
- **Key Result 2.1.1:** Implement the Snowball and Avalanche strategies.
- **Key Result 2.1.2:** Enable users to create custom debt repayment strategies.
- **Key Result 2.1.3:** Integrate multicurrency support.
- **Key Result 2.1.4:** Implement the Snowflake strategy, allowing users to apply one-time or recurring extra payments to their debt plan.

### 2.2. Objective 2: Develop a MERN Stack Portfolio.
- **Key Result 2.2.1:** Demonstrate advanced front-end development skills by delivering a polished, user-friendly interface.
- **Key Result 2.2.2:** Implement security measures to protect against common web vulnerabilities, showcasing SecOps skills.
- **Key Result 2.2.3:** Set up CI/CD pipelines to automate testing, deployment, and monitoring, demonstrating DevOps skills.
- **Key Result 2.2.4:** Showcase software architecture skills through the successful design and implementation of a modular, scalable application structure.
- **Key Result 2.2.5:** Create clear, comprehensive, and professional documentation for all aspects of the project, showcasing documentation skills.
- **Key Result 2.2.6:** Demonstrate testing and quality assurance skills through comprehensive unit, integration, and end-to-end testing coverage.

---

## Background

### 3.1. Problem Statement
Individuals struggle to manage multiple debts, leading to prolonged financial strain. This challenge arises from a lack of tools and knowledge that support practical debt management strategies such as Snowball, Avalanche, and Snowflake, as well as multicurrency support. Loan recipients need resources to create debt repayment plans that reduce the interest paid and increase their amortization, thereby shortening the time required to become debt-free.

### 3.2. Competitive Landscape
The Debt Free Planner faces competition from both general financial management apps and dedicated debt repayment tools.

**Direct Competitors:** Tools like Debt Payoff Planner, Undebt.it, unbury.me, and Vertex42 Debt Reduction Calculator focus on helping users manage and pay down debt using popular strategies like Snowball and Avalanche. However, these tools lack multicurrency support and do not offer the same level of customization for debt repayment plans as the Debt Free Planner. They are primarily designed for users seeking straightforward debt repayment solutions but do not provide the advanced features offered by the Debt Free Planner.

**General Competitors:** Popular financial management tools such as Mint, YNAB, Quicken, Personal Capital, and Simplifi offer a broad range of financial management features, including budgeting, expense tracking, and investment management. However, they do not support the creation of specialized debt repayment strategies. YNAB is the only tool among these with an official, well-documented API that could be used to integrate data into the Debt Free Planner. Mint lacks a public API, though unofficial third-party APIs exist.

**Differentiation:** The Debt Free Planner distinguishes itself by offering a specialized tool tailored specifically for debt repayment. It features advanced debt repayment strategies, including the unique Hybrid Debt Repayment Strategy, multicurrency support, and highly customizable debt plans. This specialization provides a unique value proposition that is not fully addressed by existing mainstream financial management tools, positioning the Debt Free Planner as the preferred solution for users dedicated to optimizing their debt repayment and achieving financial freedom.

### 3.3. Solution and Value Proposition
Unlike general budgeting apps, the Debt Free Planner focuses exclusively on debt repayment, combining advanced features that are rarely found together:

- **Multiple Repayment Strategies:** The tool includes the Snowball, Avalanche, and Snowflake strategies, allowing users to select the approach that best aligns with their financial goals. This flexibility ensures users can adopt a strategy that maximizes their debt repayment efficiency.
  
- **Multicurrency Support:** Recognizing the global nature of debt, the Debt Free Planner provides multicurrency support, making it suitable for users with loans in various currencies. This feature is especially valuable for expatriates, international students, and professionals managing debts across borders.
  
- **Customizable Debt Plans:** Users can create and modify debt repayment plans according to their specific needs. The tool allows for one-time or recurring extra payments, adjustment of repayment priorities, and real-time progress tracking.

### 3.4. User Personas
- **Emily Thompson - Young Professional**
  - **Location:** Austin, Texas, USA
  - **Financial Goals:** Efficiently manage student loan debt while saving for future goals.
  - **Challenges:** Balancing debt repayment with other financial priorities.
  - **Needs:** A personalized debt repayment tool that integrates with existing financial accounts and provides insights into long-term financial health.

- **Michael Harris - Pre-Retiree**
  - **Location:** Toronto, Canada
  - **Financial Goals:** Pay off the remaining mortgage and small personal loans to achieve a debt-free retirement.
  - **Challenges:** Managing multiple types of debt while preparing for retirement.
  - **Needs:** A straightforward tool that aligns with his retirement timeline and offers minimal technical complexity.

- **Sofia Ramirez - Debt Consolidation Seeker**
  - **Location:** Mexico City, Mexico
  - **Financial Goals:** Simplify financial obligations by consolidating debt and improving cash flow.
  - **Challenges:** Juggling multiple loans with inconsistent business income.
  - **Needs:** A debt consolidation tool tailored to the Mexican market, supporting local currency and language.

- **Javier García - Financially Engaged User**
  - **Location:** Barcelona, Spain
  - **Financial Goals:** Optimize debt repayment while investing in long-term goals like retirement and education.
  - **Challenges:** Balancing debt repayment with investments and managing currency fluctuations.
  - **Needs:** A customizable, data-driven tool that integrates with existing financial tools, supports multiple currencies, and offers advanced analytics.

- **Lucia Torres - Tech-Savvy User**
  - **Location:** Buenos Aires, Argentina
  - **Financial Goals:** Pay off student loans and credit card debt while saving for travel and a future home.
  - **Challenges:** Managing inconsistent income as a freelancer.
  - **Needs:** A mobile-friendly, cloud-based tool that offers budgeting for variable income and tracks debt repayment.




**User Personas**  
1. **Persona A: The Overwhelmed Debtor**
   - **Demographics**: 30-45 years old, middle-income, juggling multiple debts (credit cards, loans).
   - **Goals**: To find a simple, effective way to manage and pay off debts without feeling overwhelmed.
   - **Pain Points**: Struggles with prioritizing debts, lacks confidence in managing finances.

2. **Persona B: The Financial Planner**
   - **Demographics**: 25-35 years old, tech-savvy, keen on financial independence.
   - **Goals**: To efficiently plan and accelerate debt repayment, using advanced strategies.
   - **Pain Points**: Frustrated with the lack of tools that offer advanced, customizable repayment strategies.

**User Needs and Pain Points**  
- **Simplified Debt Management**: Users need a tool that can consolidate their debt information in one place and offer clear, actionable steps to pay off debts.
- **Customizable Repayment Strategies**: Many users are looking for more than just the standard Snowball and Avalanche methods; they want to be able to customize their approach based on their financial situation.
- **Emotional Support**: Users often feel overwhelmed by their debt; they need a tool that not only offers technical solutions but also motivates and reassures them.

3. [Market and User Insights](#3-market-and-user-insights)
   1. [Market Overview](#31-market-overview)
   2. [User Personas](#32-user-personas)
   3. [User Research](#33-user-research)
   4. [Opportunities and Gaps](#34-opportunities-and-gaps)


## 3. Jobs to Get Done

### 3.1. Core Jobs
- **Job 1: Create and manage a debt repayment plan.**
  - **Description:** Users need to generate a personalized debt repayment plan that suits their financial situation. This includes selecting the best strategy (e.g., Snowball or Avalanche), customizing payment schedules, and adapting the plan as circumstances change.

- **Job 2: Compare different debt repayment strategies.**
  - **Description:** Users need to evaluate different repayment strategies to determine the most efficient path to debt freedom. This involves analyzing interest rates, payment timelines, and total costs associated with each strategy.

- **Job 3: Track progress towards financial goals.**
  - **Description:** Users need a clear way to monitor their progress as they work toward becoming debt-free. This includes tracking payments, visualizing reductions in debt over time, and receiving updates on milestones.

### 3.2. Supporting Jobs
- **Job 1: Visualize debt repayment timelines.**
  - **Description:** Users benefit from visual tools that help them understand the impact of their payments over time, such as charts and graphs that show how their debt will decrease.

- **Job 2: Receive recommendations and insights.**
  - **Description:** Users need guidance on optimizing their debt repayment strategy. This could include automated suggestions for extra payments, alerts for upcoming deadlines, or tips on how to stay motivated.

- **Job 3: Multicurrency support and global considerations.**
  - **Description:** For users in different financial regions, the ability to manage debt in multiple currencies and understand the impact of exchange rates is crucial. This job ensures that the Debt Free Planner is adaptable to a global audience.

- **Job 4: Generate detailed reports and export data.**
  - **Description:** Users might require the ability to generate detailed reports on their debt repayment progress for personal records, financial advisors, or lenders. This includes exporting data in various formats (e.g., PDF, CSV).

- **Job 5: Sync with external financial accounts.**
  - **Description:** To streamline data entry and ensure accuracy, users may benefit from the ability to sync the Debt Free Planner with their bank accounts or other financial institutions. This job ensures that payment records, balances, and transaction histories are automatically updated.

- **Job 6: Provide educational resources and financial literacy tools.**
  - **Description:** Users might appreciate access to educational content, such as articles, videos, or interactive tools, that help them better understand debt management, budgeting, and personal finance.

---

## 4. Design and User Experience

### 4.1. User Flow
A high-level overview of the primary user journeys within the Debt Free Planner, including how users will navigate through the application to achieve their goals (e.g., creating a debt repayment plan, viewing progress, making adjustments).

### 4.2. Key Wireframes/Mockups
A brief summary and visual examples of critical screens or interactions, illustrating the intended user experience and design approach. For detailed wireframes and design specifications, refer to the Software Design Document (SDD).

---

## 5. User Stories

### 5.1. User Stories
User stories should be:
- User-Centric Focus
- INVEST Criteria
- Have an Acceptance Criteria
- Prioritization

- **Story 1:** As a [user], I want to [action], so that [benefit].
- **Story 2:** As a [user], I want to [action], so that [benefit].

---

## 6. Legal and Compliance

### 6.1. Data Privacy
- **Overview**: Outline the commitment to protecting user data and complying with relevant data privacy regulations.
- **Key Regulations**:
  - **GDPR (General Data Protection Regulation)**: Describe how the product will ensure compliance with GDPR, including data collection, processing, storage, and user rights.
  - **CCPA (California Consumer Privacy Act)**: Outline how the product will meet CCPA requirements, focusing on consumer rights to privacy and data protection.
- **User Rights**:
  - **Data Access**: Explain how users will be able to access their data.
  - **Data Deletion**: Describe the process for users to request the deletion of their data.
  - **Data Portability**: Outline the mechanisms for providing users with their data in a portable format.

### 6.2. Regulatory Compliance
- **Industry-Specific Regulations**: 
  - **Financial Regulations**: If applicable, discuss any financial regulations that must be adhered to, such as anti-money laundering (AML) or Know Your Customer (KYC) guidelines.
  - **Health Regulations**: If the product deals with health data, outline compliance with regulations like HIPAA (Health Insurance Portability and Accountability Act).
- **Compliance Monitoring**: Describe how ongoing compliance will be monitored and maintained throughout the product lifecycle.
- **Audit and Reporting**: Explain any auditing mechanisms that will be in place to ensure compliance and to report on compliance status.

### 6.3. International Regulations
- **Global Compliance Strategy**: 
  - Describe the approach to ensuring the product complies with legal requirements in all countries where it will be available.
- **Local Data Privacy Laws**: 
  - Highlight any country-specific data privacy laws that go beyond GDPR and CCPA, and how the product will adhere to these regulations.
- **Cross-Border Data Transfers**: 
  - Discuss how data will be handled when transferring across borders, particularly in compliance with regulations like GDPR's data transfer restrictions.

### 6.4. Terms of Service & User Agreements
- **User Agreements**: 
  - Outline the key terms that will be included in the end-user agreements, such as acceptable use policies, limitations of liability, and dispute resolution processes.
- **Terms of Service**: 
  - Provide an overview of the terms of service that users must agree to when using the product. This should include disclaimers, intellectual property notices, and the governing law.

### 6.5. Record Keeping and Audit Trails
- **Record Keeping Requirements**: 
  - Detail the types of records that must be maintained for compliance purposes, including user consent records, transaction logs, and access records.
- **Audit Trails**: 
  - Describe how audit trails will be maintained to track access to sensitive data, changes in data, and compliance with regulatory requirements.
- **Retention Policies**: 
  - Explain the data retention policies, including how long different types of data will be stored and when they will be purged or anonymized.

### 6.6. Legal Risk Management
- **Risk Identification**: 
  - Identify potential legal risks associated with the product, such as non-compliance with data privacy laws, intellectual property disputes, or liability issues.
- **Mitigation Strategies**: 
  - Outline strategies to mitigate identified risks, including insurance, legal reviews, and contingency plans.
- **Legal Reviews**: 
  - Describe the process for regular legal reviews of the product to ensure ongoing compliance with evolving laws and regulations.

### 6.7. Protection of Intellectual Property (IP)
- **Overview**: 
  - Describe the steps that will be taken to protect the intellectual property associated with the product, particularly in preparation for potential monetization.
- **Patents**: 
  - Discuss any patentable inventions or processes that are part of the product and outline the strategy for securing patents.

---

## 7. Shared Appendix

The glossary, data dictionary, and additional references are available in the [Shared Appendix](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Shared%20Appendix.md) document.

---

## 8. Related Documents

- [Product Requirements Document (PRD)](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md)
- [Software Requirements Specification (SRS)](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Requirements%20Specification%20(SRS).md)
- [Software Design Document (SDD)](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Design%20Document%20(SDD).md)
- [Software Test Document (STD)](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Test%20Document%20(STD).md)
- [User Guide](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/User%20Guide.md)
- [Architecture Decision Record (ADR)](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Architecture%20Decision%20Record%20(ADR).md).
- [Shared Appendix](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Shared%20Appendix.md)
