# Product Requirements Document (PRD)

This PRD lays the groundwork for the DebtFreePlanner by clearly defining the product’s purpose and target audience. The structure and content of this document are guided by the principles and methodologies outlined in [_Design a Better Business: New Tools, Skills, and Mindset for Strategy and Innovation_](https://designabetterbusiness.com/) by Pijl, Lokitz, and Solomon (2016). Additionally, insights from the [Product Mastery Now](https://productmasterynow.com/mastery/) podcast shape the approach, particularly within the "design and development" knowledge area of the "product innovation management" framework.

## Table of Contents

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Objectives and Key Results (OKRs)](#2-objectives-and-key-results-okrs)
   - 2.1. [Objective 1: Empower users to create debt elimination plans](#21-objective-1-empower-users-to-create-debt-elimination-plans)
   - 2.2. [Objective 2: Develop a MERN stack Portfolio](#22-objective-2-develop-a-mern-stack-portfolio)
3. [Project Overview and Context](#3-project-overview-and-context)
   - 3.1. [Problem Statement](#31-problem-statement)
   - 3.2. [Value Proposition](#32-value-proposition)
     - 3.2.1. [Planned Features](#321-planned-features)
     - 3.2.2. [Potential Features](#322-potential-features)
   - 3.3. [Excluded Features](#33-excluded-features)
     - 3.3.1. [Budgeting and Expense Tracking](#331-budgeting-and-expense-tracking)
     - 3.3.2. [Non-Conventional Loan Types](#332-non-conventional-loan-types)
     - 3.3.3. [Advanced Loan Features](#333-advanced-loan-features)
     - 3.3.4. [Business-Oriented Features](#334-business-oriented-features)
   - 3.4. [Market Analysis](#34-market-analysis)
     - 3.4.1. [Direct Competitors](#341-direct-competitors)
     - 3.4.2. [Indirect Competitors](#342-indirect-competitors)
     - 3.4.3. [Strategic Opportunities](#343-strategic-opportunities)
   - 3.5. [Assumptions and Limitations](#35-assumptions-and-limitations)
     - 3.5.1. [Assumptions](#351-assumptions)
     - 3.5.2. [Limitations](#352-limitations)
     - 3.5.3. [Risks](#353-risks)
   - 3.6. [User Personas](#36-user-personas)
     - 3.6.1. [Taylor, The Debt-Strapped Professional](#361-taylor-the-debt-strapped-professional)
     - 3.6.2. [Casey, The Organized Homemaker](#362-casey-the-organized-homemaker)
4. [Jobs-to-be-Done (JTBD)](#4-jobs-to-be-done-jtbd)
   - 4.1. [Core Jobs](#41-core-jobs)
   - 4.2. [Supporting Jobs](#42-supporting-jobs)
5. [User Interface and User Experience (UI/UX)](#5-user-interface-and-user-experience-uiux)
   - 5.1. [User Flows](#51-user-flows)
   - 5.2. [Wireframes/Mockups](#52-wireframesmockups)
6. [User Stories](#6-user-stories)
   - 6.1. [User Stories](#61-user-stories)
7. [Legal and Compliance](#7-legal-and-compliance)
   - 7.1. [Data Privacy](#71-data-privacy)
   - 7.2. [Regulatory Compliance](#72-regulatory-compliance)
   - 7.3. [International Regulations](#73-international-regulations)
   - 7.4. [Terms of Service & User Agreements](#74-terms-of-service--user-agreements)
   - 7.5. [Record Keeping and Audit Trails](#75-record-keeping-and-audit-trails)
   - 7.6. [Legal Risk Management](#76-legal-risk-management)
   - 7.7. [Protection of Intellectual Property (IP)](#77-protection-of-intellectual-property-ip)
8. [Related Documents](#8-related-documents)

---

## 1. Executive Summary

**Product Name:** DebtFreePlanner  
**Product Motto:** Strategically plan your journey to a Debt-Free Living

**Problem Statement**  
Loan recipients struggle to manage debts efficiently, leading to a prolonged financial burden.

**Value Proposition**  
DebtFreePlanner provides loan recipients with a web-based tool to manage debt repayment plans, helping them achieve a Debt-Free Life faster.

**Target Audience**  
 Individuals and families managing multiple loans, especially those who would benefit from an online debt repayment planner with multicurrency support

**Key Objectives**
- Empower loan recipients to effectively manage their debt repayment plans.
- Develop a robust MERN stack portfolio project that demonstrates full-stack development, security, and DevOps capabilities.

---


## 2. Objectives and Key Results (OKRs)

### 2.1. Objective 1: Empower users to create debt elimination plans.

- **Key Result 2.1.1:** Implement the Snowball and Avalanche strategies.
- **Key Result 2.1.2:** Enable users to create custom debt repayment strategies.
- **Key Result 2.1.3:** Integrate multicurrency support.
- **Key Result 2.1.4:** Implement the Snowflake strategy, allowing users to apply one-time or recurring extra payments to their debt plan.

### 2.2. Objective 2: Develop a MERN stack Portfolio.

- **Key Result 2.2.1:** Demonstrate advanced front-end development skills by delivering a polished, user-friendly interface.
- **Key Result 2.2.2:** Implement security measures to protect against common web vulnerabilities, showcasing SecOps skills.
- **Key Result 2.2.3:** Set up CI/CD pipelines to automate testing, deployment, and monitoring, demonstrating DevOps skills.
- **Key Result 2.2.4:** Showcase software architecture skills through the successful design and implementation of a modular, scalable application structure.
- **Key Result 2.2.5:** Create clear, comprehensive, and professional documentation for all aspects of the project, showcasing documentation skills.
- **Key Result 2.2.6:** Demonstrate testing and quality assurance skills through comprehensive unit, integration, and end-to-end testing coverage.

---


## 3. Market and Context

### 3.1. Problem Statement

Loan recipients struggle to manage multiple debts, leading to prolonged financial strain. This challenge arises from a lack of tools and knowledge that support practical debt management strategies such as Snowball, Avalanche, and Snowflake, as well as multicurrency support.

### 3.2. Market Analysis

#### 3.2.1. Direct Competitors

Direct competitors like [Debt Payoff Planner](https://www.debtpayoffplanner.com/), [Undebt.it](https://undebt.it/), [unbury.me](https://unbury.me/), and [Vertex42 Debt Reduction Calculator](https://www.vertex42.com/Calculators/debt-reduction-calculator.html) help users manage and pay down debt using strategies like Snowball and Avalanche. However, these tools lack multicurrency support and the ability to customize debt repayment plans as extensively as DebtFreePlanner.

#### 3.2.2. Indirect Competitors

Indirect competitors such as [Mint](https://www.mint.com/), [YNAB](https://www.youneedabudget.com/), [Quicken](https://www.quicken.com/), [Personal Capital](https://www.personalcapital.com/), and [Simplifi](https://www.quicken.com/simplifi) offer a broad range of financial management features, including budgeting and expense tracking, but do not support creating debt repayment plans.

#### 3.2.3. Strategic Opportunities

1. **Multicurrency Support**: None of the direct competitors offer multicurrency support or localization. DebtFreePlanner addresses this gap, making it uniquely suited for a global user base and providing a significant advantage in catering to diverse financial needs across different regions.

2. **AI-Driven Insights**: The use of AI for personalized recommendations and predictive analytics is an emerging area that none of the competitors have yet to fully embrace. While AI-driven insights are currently not on the roadmap, if implemented, DebtFreePlanner would be the first in the market to offer such advanced functionality, further solidifying its position as an innovative leader in debt management.

3. **API Integrations**: YNAB offers a well-documented official API that can be used to pull loans into DebtFreePlanner. This integration can be leveraged to create a symbiotic relationship, enhancing the overall user experience and data synchronization between the two tools.

### 3.3. Assumptions and Limitations

#### 3.3.1. Assumptions

- **Basic Financial Literacy:** Users have a basic understanding of financial concepts, such as compound interest and loan terms.
- **Basic Technology Proficiency:** Users are comfortable using online banking and personal finance apps.
- **Basic Computer Setup:** The application is primarily used on a laptop with an internet connection.
- **Data Accuracy:** Users will input correct financial information to ensure accurate calculations.

#### 3.3.2. Limitations

- **Data Privacy:** In addition to standard data privacy measures, DebtFreePlanner must implement GDPR and CCPA.
- **Platform Limitations:** DebtFreePlanner is designed as a web-based tool, which may limit its functionality on certain devices or when used offline.

#### 3.3.3. Risks

- **External Service Dependency Risks:** The tool may face challenges with the integration and reliability of third-party APIs and services.
- **Public Repository Exposure:** Because this is a portfolio project, the repository is public, increasing the likelihood of a successful cyberattack.
- **Attractiveness as a Target:** Since the app manages financial data, it is an attractive target (honeypot) for cybercriminals.

---

## 4. User Profiles

### 4.1. Market Segmentation
DebtFreePlanner targets retail loan recipients who are motivated to pay off their debts efficiently. This audience includes [established professionals managing significant debt loads](#51-taylor-the-debt-strapped-professional) and [younger individuals focused on building a stable financial future](#52-casey-the-organized-homemaker).


### 4.2. Jobs-to-be-Done (JTBD)

#### 4.2.1. Functional Jobs
 - Identify the most beneficial debt repayment strategy.
 - Minimize the total interest paid across all debts.
 - Estimate the timeline for becoming completely debt-free.

#### 4.2.2. Emotional Jobs

- Be empowered and in control of financial future.
- Gain peace of mind by having a clear path to becoming debt-free.
- Reduce stress and anxiety by providing practical guidance on managing multiple debts.

#### 4.2.3. Social Jobs

- Enhance financial reputation among peers and loved ones.
- Serve as a financial role model influencing financial behaviors.

### 4.3. User Pains

- Lack of clarity and confidence in devising an effective debt repayment strategy.
- Persistent anxiety and stress due to the uncertainty of managing multiple debts.

### 4.4. User Gains

- Gain control over finances with clear, actionable repayment plans.
- Integrates with budgeting tools like YNAB for a seamless data entry.
- Achieving financial independence by becoming debt-free within a reasonable time frame.

---


## 5. Personas

> **Note:** At a later stage, we will create a user persona in [Figma Template](https://www.figma.com/community/search?resource_type=files&sort_by=relevancy&query=user+persona).

### 5.1. Taylor, The Debt-Strapped Professional

- **Age:** Millennial (Gen Y)
- **Occupation:** Mid-Level Manager in IT
- **Economic Status:** Upper Middle Class
- **Region:** Western Europe
- **Financial Status:** Living paycheck to paycheck

- **Jobs to Be Done:**
  - Identify the most beneficial debt repayment strategy.
  - Minimize the total interest paid across all debts.
  - Estimate the timeline for becoming completely debt-free.

- **Pains:**
  - Lack of clarity and confidence in prioritizing debt payments.
  - Persistent stress and anxiety due to uncertainty in managing multiple debts.
  - Difficulty in finding practical tools to streamline debt management.

- **Gains:**
  - Regaining control over finances with clear, actionable repayment plans.
  - Achieving financial independence by becoming debt-free within a reasonable time frame.
  - Seamless integration with budgeting tools like YNAB for efficient data management.

- **Behavior:**
  - Recently started using YNAB to manage personal finances.
  - Frequently visits financial advice blogs and YouTube channels for tips on debt management.
  - Prefers using financial tools on a laptop but occasionally uses mobile devices for quick checks.

- **Needs:**
  - A tool that provides clear guidance on debt prioritization and repayment strategies.
  - Features that minimize interest paid and accurately project debt-free dates.
  - Seamless integration with existing budgeting tools like YNAB.

- **Quote:** "I want to be in control of my finances, not the other way around."

### 5.2. Casey, The Organized Homemaker

- **Age:** Generation Z
- **Occupation:** Stay-at-Home Parent
- **Economic Status:** Middle Class
- **Region:** North America
- **Financial Status:** In debt but managing

- **Jobs to Be Done:**
  - Manage multiple loans while balancing household expenses.
  - Minimize the total interest paid across all debts.
  - Optimize loan payments to improve cash flow.

- **Pains:**
  - Overwhelm and stress from juggling multiple loans and household expenses.
  - Uncertainty in how to effectively manage debt repayment alongside daily financial obligations.
  - Anxiety over financial decisions impacting the family's long-term security.

- **Gains:**
  - Reducing financial stress and achieving financial freedom for the family.
  - Successfully managing debts to save for a home down payment.
  - Using a tool that integrates with other financial tools, providing clear insights into interest savings and payment strategies.

- **Behavior:**
  - Regularly uses an online banking app to monitor spending and manage finances.
  - Maintains the household budget in Excel.
  - Actively compares financial products online to ensure access to the best interest rates and terms.

- **Needs:**
  - A streamlined tool to manage and optimize loan payments, providing clear insights into interest savings from additional payments.
  - The ability to project future loan payments and visualize the impact of different payment strategies.

- **Motivations:**
  - Seeks to reduce financial stress by managing debts efficiently and ensuring the family's financial stability.
  - Aims to achieve financial freedom and security for the family.
  - Values simplicity, reliability, and transparency in financial tools.

- **Quote:** "I need a tool that helps me see the bigger picture and ensures our family's financial well-being."

---

## 6. Value Proposition

DebtFreePlanner offers a web-based solution for loan recipients to create debt repayment plans that accelerate their journey to financial freedom.

### 6.1. Feature Set

#### 6.1.1. Primary Features

- **Multiple Repayment Strategies**
  - Supports a variety of debt repayment methods, including Snowball, Avalanche, Debt-to-Interest Ratio, Cash Flow Index (CFI), Highest Monthly Payment, and Custom Strategies.

- **Snowflake Payments**
  - Enables small, irregular payments towards debts whenever extra funds are available, helping to reduce the principal faster.

- **Multicurrency Support**
  - Provides seamless handling of multiple currencies with automatic exchange rate updates, catering to a global user base.

- **Basic Reporting**
  - Generates essential reports and visualizations to help loan recipients understand and track their repayment plans.

#### 6.1.2. Secondary Features

- **Integration with Financial Tools**
  - Synchronizes with budgeting applications like YNAB and possibly Firefly III for seamless data management.

- **Advanced Reporting**
  - Offers enhanced reporting and visualizations that incorporate data storytelling techniques to provide deeper insights.

#### 6.1.3. Potential Features
The following features are under consideration for future development but are not yet confirmed or scheduled for implementation.

- **Multi-User Support**
  - Allows collaboration on debt management under a single account, ideal for households and financial advisors.

- **AI-Driven Insights**
  - Provides personalized recommendations and predictive analytics to optimize repayment strategies.

- **Cross-Platform Accessibility**
  - Ensures accessibility across multiple devices, enhancing usability and engagement wherever the user is.

#### 6.1.4. Excluded Features
To ensure DebtFreePlanner remains focused on fulfilling its intended purpose, the following features and functionalities were deemed unviable due to the complexity of their implementation or specific market needs.

- **Budgeting and Expense Tracking**
  - DebtFreePlanner will not include general budgeting or expense tracking features, including loan payment history tracking. These functionalities are excluded because many established applications already perform them well, and these features are complementary rather than central to the problem DebtFreePlanner is addressing. Users are encouraged to use tools like YNAB (You Need A Budget) or Firefly III, which may be integrated with DebtFreePlanner in the future.

- **Non-Conventional Loan Types**
  - DebtFreePlanner will only support the most common loan types (e.g., mortgages, student loans, and credit card debt). Non-conventional loan types, such as payday loans, interest-only loans, or cryptocurrency loans, are not supported due to a lack of market demand.

- **Advanced Loan Features**
  - Advanced loan features, such as variable interest rates and early termination fees, are out of scope due to the complexity of accommodating all possible business rules of financial institutions. Users will need to update loan terms manually when they change.

- **Business-Oriented Features**
  - DebtFreePlanner will not offer features intended primarily for business owners, given that large businesses would likely not trust this tool, and features targeting personal finances can typically meet the needs of small business owners.

### 6.2. Gain Creators

- Reduce interest payments, accelerating the journey to financial independence.
- Provide clear, actionable insights to improve financial health.

### 6.3. Pain Relievers

- Simplify the process of managing multiple debts, reducing financial stress.
- Integrate with existing financial tools for a seamless user experience.

---


## 7. Value Proposition Canvas Summary

> **Note:** At a later stage, we will create a Value Proposition Canvas in [Figma](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=Value+Proposition+Canvas).

---


## 5. User Interface and User Experience (UI/UX)

### 5.1. User Flows

1. **Session Management:**

   - Users create an account or log in to access their debt repayment plans.

   ![alt text](image.png)

   ```plantuml:
    @startuml
    title Session Management User Flow

    start
    :Open Application;

    if (Existing Account?) then (Yes)
      :Login;
      :Enter Credentials;
      :Submit Login Form;
      if (Authentication Successful?) then (Yes)
        :Access Dashboard;
      else (No)
        :Show Error Message;
      endif
    else (No)
      :Sign Up;
      :Enter Email and Password;
      :Submit Sign Up Form;
      :Confirmation Email Sent;
      :Click Confirmation Link;
      :Account Created;
      :Access Dashboard;
    endif

    @enduml
   ```

### 2. **Plan Management:**

#### 2.1. **Debt Management:**

- The Debt Management sub-flow allows users to manage their debts, including the following aspects:
  - **Loan Amount (Remaining Principal):** The total remaining balance that needs to be repaid.
  - **Interest Rate:** The annual percentage rate (APR) charged on the remaining principal.
  - **Loan Term:** The length of time over which the loan will be repaid, typically expressed in years or months.
  - **Repayment Frequency:** The schedule for payments (e.g., monthly, bi-weekly).
  - **Start Date:** The date when the loan was disbursed or when the repayment schedule began.
  - **Interest Type:** Indicates whether the interest rate is fixed (remains constant) or variable (can change over time).
  - **Amortization Type:** Specifies whether the loan is fully amortizing, interest-only, or includes a balloon payment at the end.
  - **Fees and Penalties:** Any additional charges, such as origination fees, prepayment penalties, or late payment fees.

#### 2.2. **Snowflake Management:**

- The Snowflake Management sub-flow enables users to manage their snowflake payments, focusing on:
  - **Extra Payment Amount:** Any additional payments made beyond the regularly scheduled payments.
  - **Payment Frequency:** How often these extra payments are made (e.g., monthly, bi-weekly).
  - **Start Date:** The date when the extra payments begin.

#### 2.3. **Payment Management:**

- The Payment Management sub-flow is where users define their minimum global monthly payments. This involves setting the total amount they are willing to allocate each month towards debt repayment, which will then be distributed according to their chosen debt reduction strategy (e.g., snowball method).

3. **Profile Management:**

   - Users update their personal information, change passwords, adjust notification preferences, and delete their account if desired.

4. **Data Management:**

   - Users export and import their debt repayment data for personal records or to share with financial advisors.

5. **Report Management:**
   - Users view, print, and gain insights from their reports on debt repayment progress and strategies.

### 5.2. Wireframes/Mockups

- **Dashboard:** Displays key metrics, repayment progress, and quick actions.
- **Plan Creation:** Forms for entering debt details and selecting repayment strategies.
- **Plan Customization:** Interface for adjusting repayment priorities and adding extra payments.
- **Progress Tracking:** Visual representations of repayment progress and milestones.

## 6. User Stories

User stories should be:

- User-Centric Focus
- INVEST Criteria
- Have an Acceptance Criteria
- Prioritization

### 6.1. User Stories

- **As a user, I want to create a debt repayment plan using the Snowball strategy so that I can pay off my smallest debts first and gain motivation.**
- **As a user, I want to see a summary of my debt repayment progress so that I can track my achievements and stay motivated.**
- **As a user, I want to customize my repayment plan by adding extra payments so that I can pay off my debts faster.**
- **As a user, I want to import my financial data from external accounts so that I don't have to manually enter all my debt information.**

---

## 7. Legal and Compliance

### 7.1. Data Privacy

- **Overview**: Outline the commitment to protecting user data and complying with relevant data privacy regulations.
- **Key Regulations**:
  - **GDPR (General Data Protection Regulation)**: Describe how the product will ensure compliance with GDPR, including data collection, processing, storage, and user rights.
  - **CCPA (California Consumer Privacy Act)**: Outline how the product will meet CCPA requirements, focusing on consumer rights to privacy and data protection.
- **User Rights**:
  - **Data Access**: Explain how users will be able to access their data.
  - **Data Deletion**: Describe the process for users to request the deletion of their data.
  - **Data Portability**: Outline the mechanisms for providing users with their data in a portable format.

### 7.2. Regulatory Compliance

- **Industry-Specific Regulations**:
  - **Financial Regulations**: If applicable, discuss any financial regulations that must be adhered to, such as anti-money laundering (AML) or Know Your Customer (KYC) guidelines.
  - **Health Regulations**: If the product deals with health data, outline compliance with regulations like HIPAA (Health Insurance Portability and Accountability Act).
- **Compliance Monitoring**: Describe how ongoing compliance will be monitored and maintained throughout the product lifecycle.
- **Audit and Reporting**: Explain any auditing mechanisms that will be in place to ensure compliance and to report on compliance status.

### 7.3. International Regulations

- **Global Compliance Strategy**:
  - Describe the approach to ensuring the product complies with legal requirements in all countries where it will be available.
- **Local Data Privacy Laws**:
  - Highlight any country-specific data privacy laws that go beyond GDPR and CCPA, and how the product will adhere to these regulations.
- **Cross-Border Data Transfers**:
  - Discuss how data will be handled when transferring across borders, particularly in compliance with regulations like GDPR's data transfer restrictions.

### 7.4. Terms of Service & User Agreements

- **User Agreements**:
  - Outline the key terms that will be included in the end-user agreements, such as acceptable use policies, limitations of liability, and dispute resolution processes.
- **Terms of Service**:
  - Provide an overview of the terms of service that users must agree to when using the product. This should include disclaimers, intellectual property notices, and the governing law.

### 7.5. Record Keeping and Audit Trails

- **Record Keeping Requirements**:
  - Detail the types of records that must be maintained for compliance purposes, including user consent records, transaction logs, and access records.
- **Audit Trails**:
  - Describe how audit trails will be maintained to track access to sensitive data, changes in data, and compliance with regulatory requirements.
- **Retention Policies**:
  - Explain the data retention policies, including how long different types of data will be stored and when they will be purged or anonymized.

### 7.6. Legal Risk Management

- **Risk Identification**:
  - Identify potential legal risks associated with the product, such as non-compliance with data privacy laws, intellectual property disputes, or liability issues.
- **Mitigation Strategies**:
  - Outline strategies to mitigate identified risks, including insurance, legal reviews, and contingency plans.
- **Legal Reviews**:
  - Describe the process for regular legal reviews of the product to ensure ongoing compliance with evolving laws and regulations.

### 7.7. Protection of Intellectual Property (IP)

- **Overview**:
  - Describe the steps that will be taken to protect the intellectual property associated with the product, particularly in preparation for potential monetization.
- **Patents**:
  - Discuss any patentable inventions or processes that are part of the product and outline the strategy for securing patents.

---

## 8. Related Documents

- [Product Requirements Document (PRD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md>)
- [Software Requirements Specification (SRS)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Requirements%20Specification%20(SRS).md>)
- [Software Design Document (SDD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Design%20Document%20(SDD).md>)
- [Software Test Document (STD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Test%20Document%20(STD).md>)
- [User Guide](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/User%20Guide.md)
- [Architecture Decision Record (ADR)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Architecture%20Decision%20Record%20(ADR).md>)
- [README](https://github.com/Guilderm/DebtFreePlanner/blob/main/README.md)
- [Shared Appendix](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Shared%20Appendix.md)
