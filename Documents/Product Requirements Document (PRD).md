# Product Requirements Document (PRD)

This PRD lays the groundwork for the DebtFreePlanner by clearly defining the product’s purpose and target audience. The structure and content of this document are guided by the principles and methodologies outlined in [_Design a Better Business: New Tools, Skills, and Mindset for Strategy and Innovation_](https://designabetterbusiness.com/) by Pijl, Lokitz, and Solomon (2016). Additionally, insights from the [Product Mastery Now](https://productmasterynow.com/mastery/) podcast shape the approach, particularly within the "design and development" knowledge area of the "product innovation management" framework.

## Table of Contents

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Objectives and Key Results (OKRs)](#2-objectives-and-key-results-okrs)
   - 2.1. [Objective 1: Empower users to create debt elimination plans](#21-objective-1-empower-users-to-create-debt-elimination-plans)
   - 2.2. [Objective 2: Develop a MERN stack Portfolio](#22-objective-2-develop-a-mern-stack-portfolio)
3. [Project Overview and Context](#3-Context-and-Overview)
   - 3.1. [Problem Statement](#31-problem-statement)
   - 3.2. [Proposed Solution](#32-proposed-solution)
     - 3.2.1. [On the Roadmap](#321-on-the-roadmap)
     - 3.2.2. [Future Considerations](#322-future-considerations)
   - 3.3. [Competitive Landscape](#33-competitive-landscape)
     - 3.3.1. [Direct Competitors](#331-direct-competitors)
     - 3.3.2. [Indirect Competitors](#332-indirect-competitors)
   - 3.4. [Out of Scope](#34-out-of-scope)
     - 3.4.1. [Budgeting and Expense Tracking](#341-budgeting-and-expense-tracking)
     - 3.4.2. [Non-Conventional Loan Types](#342-non-conventional-loan-types)
     - 3.4.3. [Advanced Loan Features](#343-advanced-loan-features)
   - 3.5. [Assumptions and Limitations](#35-assumptions-and-limitations)
     - 3.5.1. [Assumptions](#351-assumptions)
     - 3.5.2. [Constraints](#352-constraints)
     - 3.5.3. [Risks](#353-risks)
   - 3.6. [User Personas](#36-user-personas)
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

## 3. Project Overview and Context

### 3.1. Problem Statement

Individuals struggle to manage multiple debts, leading to prolonged financial strain. This challenge arises from a lack of tools and knowledge that support practical debt management strategies such as Snowball, Avalanche, and Snowflake, as well as multicurrency support. Loan recipients need resources to create debt repayment plans that reduce the interest paid and increase their amortization, thereby shortening the time required to become debt-free.

#### 3.2. **Proposed Solution**
A web-based tool for managing a debt repayment plan.

- **Multiple Repayment Strategies:** Supports the Snowball, Avalanche, Debt-to-Interest Ratio, Cash Flow Index (CFI), Highest Monthly Payment, and Custom Strategies, allowing users to select the approach that best aligns with their financial goals.

- **Snowflake Payments:** Allows users to make small, irregular payments towards their debts whenever extra funds are available. This strategy helps reduce the principal faster, decreasing the overall interest paid and shortening the repayment period.

- **Multicurrency Support:** With automatic exchange rate updates to meet global needs.

- **Reporting:** Will generate reports to help users understand their debt repayment journey.

- **Integration with YNAB:** The application will integrate with YNAB (You Need A Budget) and possibly Firefly III, facilitating updates to users’ plans.

#### 3.2.2. **Future Considerations**

The following features are planned for future updates:

- **Multi-User Support:** DebtFreePlanner will include multi-user support, allowing households or financial advisors to manage multiple users’ debts under a single account.

- **AI-Driven Reports:** Will use artificial intelligence (AI) to create reports that use data storytelling techniques to help users understand their debt repayment journey.

- **Multi-Device Support:** DebtFreePlanner will support seamless use across various devices, including Web, Android, and iOS platforms.

### 3.3. Competitive Landscape

#### 3.3.1. **Direct Competitors:**

[Debt Payoff Planner](https://www.debtpayoffplanner.com/), [Undebt.it](https://undebt.it/), [unbury.me](https://unbury.me/), and [Vertex42 Debt Reduction Calculator](https://www.vertex42.com/Calculators/debt-reduction-calculator.html) help users manage and pay down debt using strategies like Snowball and Avalanche. However, these tools lack multicurrency support and the ability to customize debt repayment plans as extensively as DebtFreePlanner.

### 3.3.2. **Indirect Competitors:**

Mint, [YNAB](https://www.youneedabudget.com/), [Quicken](https://www.quicken.com/), [Personal Capital](https://www.personalcapital.com/), and [Simplifi](https://www.quicken.com/simplifi) offer a broad range of financial management features, including budgeting and expense tracking, but do not support creating debt repayment plans. Notably, YNAB offers a well-documented official API that can be used to pull the loans into DebtFreePlanner. While Mint does not have an official public API, unofficial third-party APIs are available. These APIs can be leveraged to create a symbiotic relationship.

### 3.4. **Out of Scope**

##### 3.4.1. **Budgeting and Expense Tracking**
- The DebtFreePlanner will not include features for general budgeting or expense tracking. This also includes loan payment history tracking, which will not be maintained within the application.
- **Integration with YNAB:** To satisfy users' needs for budgeting and tracking expenses, including detailed loan payment histories, the DebtFreePlanner will integrate with YNAB (You Need A Budget), a well-established tool that excels in these areas. However, it should be noted that this integration does not fully align with YNAB's philosophy, as they emphasize a different approach to debt management.

##### 3.4.2. **Non-Conventional Loan**
- The scope is limited to traditional conventional loans that are:
  - Paid on a monthly basis.
  - Have interest rates compounded monthly.
  - Do not have penalties for early repayment.
  - Do not include balloon payments.
- **Exclusions:** Loans with variable interest rates, interest-only payments, or those with irregular payment schedules will not be supported. Additionally, complex loan types like mortgages with balloon payments or lines of credit are out of scope for this project.

##### 3.4.3. **Advanced Loan Features**
- The application will not support:
  - Refinancing or consolidation of existing loans.
  - Handling of overpayments beyond the scheduled extra payment configurations.
  - Detailed amortization schedules beyond simple monthly breakdowns.

##### 3.4.3. **Business-Oriented Features**
- The app will not offer features designed for business owners or provide little benefit in the context of personal finances.


### 3.5. Assumptions and Limitations

### 3.5.1. Assumptions

- **Basic Financial Literacy:** Users are expected to have a basic understanding of personal finance, including compound interest, but they are not expected to be financial experts.
- **Basic Technology Proficiency:** Users are expected to be comfortable using online banking and personal finance apps and are not expected to be tech-savvy or have advanced technical knowledge.
- **Basic Computer Setup:** The application will primarily be used on a laptop with internet access, though it should be simple enough to use on other devices like tablets.

##### 3.5.2. **Constraints**:

- The application must comply with GDPR and CCPA regulations.
- The GitHub repository needs to be public so that recruiters can access it.

##### 3.5.3. **Risks**:

- Because the repository is public, there is an increased likelihood of a successful attack.
- Since financial data is managed, the app is an attractive target (honeypot).


### 3.6. User Personas

> **Note:** At a later stage, we will create a user persona in [Figma](https://www.figma.com/community/search?resource_type=files&sort_by=relevancy&query=user+persona).


### 3.6.1. Taylor, The Debt-Strapped Professional
- **Age:** Millennial (Gen Y)
- **Occupation:** Mid-Level Manager in IT
- **Economic Status:** Upper Middle Class
- **Region:** Western Europe
- **Financial Status:** Living paycheck to paycheck
- **Financial Goals:** Pay off student loans and credit card debt within five years and a mortgage within ten years.
- **Challenges:**
  - Struggles with multiple high-interest loans and credit card debts.
  - Finds it challenging to prioritize payments and manage cash flow effectively.
- **Behavior:**
  - Uses YNAB to manage personal finances.
  - Regularly visits financial advice blogs and YouTube channels for tips on managing debt.
- **Needs:**
  - A simple, user-friendly tool that assists in planning a debt-free journey.
  - Guidance on how to prioritize payments to reduce overall interest.
  - Integration with existing budgeting tools, like YNAB.
- **Motivations:**
  - Desire to become debt-free within a reasonable time frame.
  - Seeking a sense of control over financial future.
  - Aims to avoid late fees and interest hikes.

### 3.6.2. Casey, The Organized Homemaker
- **Age:** Generation Z
- **Occupation:** Stay-at-Home Parent
- **Economic Status:** Middle Class
- **Region:** North America
- **Financial Status:** In debt but managing
- **Financial Goals:** Improve cash flow by paying off credit cards and car loans ahead of schedule to start saving for a home down payment.
- **Challenges:**
  - Manages multiple loans, including car loans, credit cards, student loans, and a personal loan.
  - Balancing loan repayments with household expenses, such as groceries, utilities, and children’s education, is a challenge.
- **Behavior:**
  - Uses an online banking app to monitor spending.
  - Manages the budget in Excel.
  - Frequently compares financial products to ensure access to the best rates.
- **Needs:**
  - A streamlined tool to manage and optimize loan payments, with clear insights into interest savings from additional payments.
  - The ability to project future loan payments and the impact of different payment strategies.
- **Motivations:**
  - Seeks to reduce financial stress by managing debts efficiently.
  - Aims to achieve financial freedom and security for the family.
  - Values simplicity and reliability in financial tools.

---

## 4. Value Proposition Canvas

> **Note:** At a later stage, we will create a Value Proposition Canvas in [Figma](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=Value+Proposition+Canvas).

Jobs-to-be-Done (JTBD)
### 4.1. Core Jobs

- **Core Job 1: Create and manage a debt repayment plan.**

  - **Description:** Users need to generate a personalized debt repayment plan that suits their financial situation. This includes selecting the best strategy (e.g., Snowball or Avalanche), customizing payment schedules, and adapting the plan as circumstances change.

- **Core Job 2: Compare different debt repayment strategies.**

  - **Description:** Users need to evaluate different repayment strategies to determine the most efficient path to debt freedom. This involves analyzing interest rates, payment timelines, and total costs associated with each strategy.

- **Core Job 3: Track progress towards financial goals.**
  - **Description:** Users need a clear way to monitor their progress as they work toward becoming debt-free. This includes tracking payments, visualizing reductions in debt over time, and receiving updates on milestones.

### 4.2. Supporting Jobs

- **Supporting Job 1: Visualize debt repayment timelines.**

  - **Description:** Users benefit from visual tools that help them understand the impact of their payments over time, such as charts and graphs that show how their debt will decrease.

- **Supporting Job 2: Receive recommendations and insights.**

  - **Description:** Users need guidance on optimizing their debt repayment strategy. This could include automated suggestions for extra payments, alerts for upcoming deadlines, or tips on how to stay motivated.

- **Supporting Job 3: Multicurrency support and global considerations.**

  - **Description:** For users in different financial regions, the ability to manage debt in multiple currencies and understand the impact of exchange rates is crucial. This job ensures that the DebtFreePlanner is adaptable to a global audience.

- **Supporting Job 4: Generate detailed reports and export data.**

  - **Description:** Users might require the ability to generate detailed reports on their debt repayment progress for personal records, financial advisors, or lenders. This includes exporting data in various formats (e.g., PDF, CSV).

- **Supporting Job 5: Sync with external financial accounts.**

  - **Description:** To streamline data entry and ensure accuracy, users may benefit from the ability to sync the DebtFreePlanner with their bank accounts or other financial institutions. This job ensures that payment records, balances, and transaction histories are automatically updated.

- **Supporting Job 6: Provide educational resources and financial literacy tools.**
  - **Description:** Users might appreciate access to educational content, such as articles, videos, or interactive tools, that help them better understand debt management, budgeting, and personal finance.

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
