# Product Requirements Document (PRD)

This PRD lays the groundwork for the DebtFreePlanner by clearly defining the product’s purpose and target audience. The structure and content of this document are guided by the principles and methodologies outlined in [_Design a Better Business: New Tools, Skills, and Mindset for Strategy and Innovation_](https://designabetterbusiness.com/) by Pijl, Lokitz, and Solomon (2016). Additionally, insights from the [Product Mastery Now](https://productmasterynow.com/mastery/) podcast shape the approach, particularly within the "design and development" knowledge area of the "product innovation management" framework.

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Objectives and Key Results (OKRs)](#2-objectives-and-key-results-okrs)
   - [Objective 1: Deliver a web-based solution](#21-objective-1-deliver-a-web-based-solution-that-loan-recipients-can-use-to-create-debt-repayment-plans)
   - [Objective 2: Ensure accessibility, usability, and security](#22-objective-2-ensure-accessibility-usability-and-security-for-all-users)
   - [Objective 3: Provide comprehensive user education and support](#23-objective-3-provide-comprehensive-user-education-and-support-features)
3. [Market and Context](#3-market-and-context)
   - [Problem Statement](#31-problem-statement)
   - [Market Analysis](#32-market-analysis)
     - [Direct Competitors](#321-direct-competitors)
     - [Indirect Competitors](#322-indirect-competitors)
     - [Strategic Opportunities](#323-strategic-opportunities)
   - [Assumptions and Limitations](#33-assumptions-and-limitations)
   - [Risks](#34-risks)
4. [User Profiles](#4-user-profiles)
   - [Market Segmentation](#41-market-segmentation)
   - [Jobs-to-be-Done (JTBD)](#42-jobs-to-be-done-jtbd)
   - [User Pains](#43-user-pains)
   - [User Gains](#44-user-gains)
5. [Personas](#5-personas)
   - [Taylor, The Debt-Strapped Professional](#51-taylor-the-debt-strapped-professional)
   - [Casey, The Organized Homemaker](#52-casey-the-organized-homemaker)
6. [Value Proposition](#6-value-proposition)
   - [Feature Set](#61-feature-set)
     - [Primary Features](#611-primary-features)
     - [Secondary Features](#612-secondary-features)
     - [Potential Features](#613-potential-features)
     - [Excluded Features](#614-excluded-features)
   - [Gain Creators](#62-gain-creators)
   - [Pain Relievers](#63-pain-relievers)
7. [Value Proposition Canvas](#7-value-proposition-canvas)
   - [Value Proposition Canvas](#71-value-proposition-canvas)
8. [User Interface and User Experience (UI/UX)](#8-user-interface-and-user-experience-uiux)
   - [User Flows](#81-user-flows)
     - [Key Map](#key-map)
     - [User Session](#811-user-session)
       - [Single-User Context](#8111-single-user-context)
       - [Multi-User Context](#8112-multi-user-context)
     - [Subscription Process](#812-subscription-process)
     - [User Profile](#813-user-profile)
   - [Plan Management Flow](#813-plan-management-flow)
     - [Debt Management](#8131-debt-management)
     - [Snowflake Management](#8132-snowflake-management)
     - [Payment Management](#8133-payment-management)
   - [Data Management](#815-data-management)
   - [Wireframes](#82-wireframes)
9. [User Stories](#9-user-stories)
   - [9.1 User Types](#91-user-types)
     - [9.1.1 Admin](#911-admin)
     - [9.1.2 Users](#912-users)
     - [9.1.3 Collaborator](#913-collaborator)
     - [9.1.4 Guest](#914-guest)
   - [9.2 Initiative 1: Foundation and Architecture](#92-initiative-1-foundation-and-architecture)
     - [9.2.1 Epic 1: Technical Prototype & Architecture Validation](#921-epic-1-technical-prototype--architecture-validation)
     - [9.2.2 Epic 2: Product Ideation Validation](#922-epic-2-product-ideation-validation)
   - [9.3 Initiative 2: Core Features and Functionality](#93-initiative-2-core-features-and-functionality)
     - [9.3.1 Epic 3: Core Web Pages](#931-epic-3-core-web-pages)
     - [9.3.2 Epic 4: DebtFreePlanner Data Inputs & Basic Data Validation](#932-epic-4-debtfreeplanner-data-inputs--basic-data-validation)
     - [9.3.3 Epic 5: DebtFreePlanner Initial Calculations & Advanced Data Validation](#933-epic-5-debtfreeplanner-initial-calculations--advanced-data-validation)
     - [9.3.4 Epic 6: DebtFreePlanner Engine](#934-epic-6-debtfreeplanner-engine)
     - [9.3.5 Epic 7: DebtFreePlanner Reporting and Data Visualization](#935-epic-7-debtfreeplanner-reporting-and-data-visualization)
     - [9.3.6 Epic 8: Security Enhancements](#936-epic-8-security-enhancements)
     - [9.3.7 Epic 9: End User Testing (First Round)](#937-epic-9-end-user-testing-first-round)
     - [9.3.8 Epic 10: Technical Debt Payment](#938-epic-10-technical-debt-payment)
   - [9.4 Initiative 3: User Experience and Secondary Features](#94-initiative-3-user-experience-and-secondary-features)
     - [9.4.1 Epic 11: Collaboration and Multi-User Support](#941-epic-11-collaboration-and-multi-user-support)
     - [9.4.2 Epic 12: Complete User Profile Management](#942-epic-12-complete-user-profile-management)
     - [9.4.3 Epic 13: Complete Admin Dashboard](#943-epic-13-complete-admin-dashboard)
     - [9.4.4 Epic 14: Public-Facing Pages](#944-epic-14-public-facing-pages)
     - [9.4.5 Epic 15: Branding, Style Guide & Marketing](#945-epic-15-branding-style-guide--marketing)
     - [9.4.6 Epic 16: End User Testing (Second Round)](#946-epic-16-end-user-testing-second-round)
     - [9.4.7 Epic 17: Technical Debt Payment](#947-epic-17-technical-debt-payment)
     - [9.5 Initiative 4: Tertiary Features and Application Optimization](#95-initiative-4-tertiary-features-and-application-optimization)
     - [9.5.1 Epic 18: Performance Optimization](#951-epic-18-performance-optimization)
     - [9.5.2 Epic 19: Technical Debt Payment](#952-epic-19-technical-debt-payment)
     - [9.5.3 Epic 20: In-App Help and Assistance](#953-epic-20-in-app-help-and-assistance)
     - [9.5.4 Epic 21: Export Capabilities](#954-epic-21-export-capabilities)
     - [9.5.5 Epic 22: Import Capabilities](#955-epic-22-import-capabilities)
     - [9.5.6 Epic 23: User Feedback and Analytics](#956-epic-23-user-feedback-and-analytics)
     - [9.5.7 Epic 24: Architecture Review and Extensive Testing](#957-epic-24-architecture-review-and-extensive-testing)
     - [9.5.8 Epic 25: Final End-User Testing](#958-epic-25-final-end-user-testing)
10. [Legal and Compliance](#10-legal-and-compliance)
    - [Data Privacy](#101-data-privacy)
    - [Regulatory Compliance](#102-regulatory-compliance)
    - [International Regulations](#103-international-regulations)
    - [Terms of Service & User Agreements](#104-terms-of-service--user-agreements)
    - [Record Keeping and Audit Trails](#105-record-keeping-and-audit-trails)
    - [Legal Risk Management](#106-legal-risk-management)
    - [Protection of Intellectual Property (IP)](#107-protection-of-intellectual-property-ip)
11. [Related Documents](#11-related-documents)

## 1. Executive Summary

**Product Name:** DebtFreePlanner  
**Product Motto:** Strategically plan your journey to a Debt-Free Living

**Problem Statement**  
Loan recipients struggle to manage debts efficiently, leading to a prolonged financial burden.

**Value Proposition**  
DebtFreePlanner provides loan recipients with a web-based tool to manage debt repayment plans, helping them achieve a Debt-Free Life faster.

**Target Audience**  
 Individuals and families managing multiple loans, especially those who would benefit from an online debt repayment planner with multicurrency support

**Key Objective**
Provide loan recipients with a tool that optimizes their debt repayment plans through informed decision-making.

---

## 2. Objectives and Key Results (OKRs)

### 2.1. Objective 1: Deliver a web-based solution that loan recipients can use to create debt repayment plans

- **Key Result 2.1.1:** Implement the Snowball, Avalanche, and Highest Monthly Payment strategies.
- **Key Result 2.1.2:** Implement the Debt-to-Interest Ratio, Cash Flow Index (CFI), and custom strategies.
- **Key Result 2.1.3:** Implement Snowflake payments.
- **Key Result 2.1.4:** Implement multicurrency support.
- **Key Result 2.1.5:** Implement basic reporting features.
- **Key Result 2.1.6:** Integrate with financial tools.
- **Key Result 2.1.7:** Implement advanced reporting features.
- **Key Result 2.1.8:** Ensure data portability across different platforms.

### 2.2. Objective 2: Ensure accessibility, usability, and security for all users

- **Key Result 2.2.1:** Achieve WCAG 2.1 AA compliance for accessibility across all major user interfaces.
- **Key Result 2.2.2:** Implement a responsive design that works seamlessly on mobile, tablet, and desktop devices.
- **Key Result 2.2.3:** Conduct usability testing with at least 10 users and incorporate findings into the final design.
- **Key Result 2.2.4:** Implement security features, including user authentication and data encryption.
- **Key Result 2.2.5:** Ensure GDPR compliance for data handling and user privacy.

### 2.3. Objective 3: Provide comprehensive user education and support features

- **Key Result 2.3.1:** Develop an in-app tutorial or onboarding guide for new users.
- **Key Result 2.3.2:** Create a help center with FAQs, user guides, and video tutorials.
- **Key Result 2.3.3:** Implement in-app tooltips and contextual help for key features.
- **Key Result 2.3.4:** Collect and analyze user feedback to improve educational materials in future iterations.

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

### 3.4 Risks

#### 3.4.1 Risk of Low User Adoption Due to Intention-Action Gap

Loan recipients often intend to manage their finances better but fail to act on this intention due to several psychological factors:

- **Procrastination**: The overwhelming nature of financial management or uncertainty about where to begin can cause significant delays in starting the process.
- **Behavioral Inertia**: Users may struggle to break free from existing habits and routines, even when those habits are detrimental to their financial well-being.
- **Self-Regulation Challenges**: Users may initially be motivated to use the product, but as "Motivational Decline" sets in, maintaining discipline becomes difficult, leading to inconsistent use.
- **Cognitive Dissonance**: Users might avoid creating their debt reduction plan to sidestep confronting uncomfortable financial realities, resulting in disengagement.

**Mitigation Strategies:**

- The product will incorporate features that encourage continuous user engagement, such as progress tracking, personalized reminders, and gamification.
- The UI/UX will implement "embedded learning" and offer tutorials to help users overcome initial barriers and stay committed to their financial goals.

#### 3.4.2 External Service Dependency Risks

The application may encounter challenges with the integration and reliability of third-party APIs and services.

**Mitigation Strategies:**

- Create a Proof of Concept (PoC) to validate technical feasibility before full-scale implementation.
- Design the software to be "fault-tolerant" and use vendor-agnostic development techniques to avoid being locked into a vendor that did not meet our needs.

#### 3.4.3 Public Repository Exposure

Because this is a portfolio project, the repository is public, increasing the likelihood of a successful cyberattack.

**Mitigation Strategies:**

- Implement the NIST Cybersecurity Framework and other SecOps best practices.

#### 3.4.4 Attractiveness as a Target

Since the app manages financial data, it is an attractive target (honeypot) for cybercriminals.

**Mitigation Strategies:**

- Minimize the collection of Personal Identifiable Information (PII) by avoiding unnecessary data such as bank account numbers, Social Security numbers, or full names, reducing the application's attractiveness as a target for cybercriminals.

---

## 4. User Profiles

### 4.1. Market Segmentation

DebtFreePlanner targets retail loan recipients who are motivated to pay off their debts efficiently. This audience includes [established professionals managing significant debt loads](#51-taylor-the-debt-strapped-professional) and [younger individuals focused on building a stable financial future](#52-casey-the-organized-homemaker).

### 4.2. Jobs-to-be-Done (JTBD)

#### 4.2.1. Functional Jobs

- Identify the most beneficial debt repayment strategy.
- Minimize the total interest paid across all debts.
- Estimate the timeline for becoming completely debt-free.
- Automatically update amounts in foreign currencies using up-to-date exchange rates.
- Export data for external manipulation and re-import it.

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

> **Note:** At a later stage, we will create a user persona in [Figma](https://www.figma.com/community/search?resource_type=files&sort_by=relevancy&query=user+persona).
> **Note:** At a later stage, we will create a user persona in [Figma](https://www.figma.com/community/search?resource_type=files&sort_by=relevancy&query=user+persona).

### 5.1. Taylor, The Debt-Strapped Professional

- **Age:** Millennial (Gen Y)
- **Occupation:** Mid-Level Manager in IT
- **Economic Status:** Upper Middle Class
- **Region:** Western Europe
- **Financial Status:** Struggling with cash flow despite a comfortable income

- **Jobs to Be Done:**

  - Identify the most beneficial debt repayment strategy.
  - Minimize the total interest paid across all debts.
  - Automatically update loan in foreign currencies.
  - Estimate the timeline for becoming completely debt-free.

- **Pains:**

  - Lack of clarity and confidence in prioritizing debt payments.
  - Persistent stress and anxiety due to uncertainty in managing multiple debts.
  - Difficulty in finding practical tools to streamline debt management.
  - The burden of manually converting foreign currency loans to the base currency.

- **Gains:**

  - Regaining control over finances with clear, actionable repayment plans.
  - Achieving financial independence by becoming debt-free within a reasonable time frame.
  - Seamless integration with budgeting tools like YNAB for efficient data management.

- **Behavior:**

  - Recently started using YNAB to manage personal finances.
  - Strapped for time, so prefers solutions that integrate well and just works.
  - Prefers using financial tools on a laptop but occasionally uses mobile devices for quick checks.

- **Needs:**

  - A tool that provides clear guidance on debt prioritization and repayment strategies.
  - Ability to manage debts in multiple currencies.
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
  - Is very privacy-focused and prefers doing things manually to maintain a sense of control.
  - Is very budget-conscious and actively seeks out deals and discounts.

- **Needs:**

  - A streamlined tool to manage and optimize loan payments, providing clear insights into interest savings from additional payments.
  - The ability to project future loan payments and visualize the impact of different payment strategies.

- **Motivations:**

  - Seeks to reduce financial stress by managing debts efficiently and ensuring the family's financial stability.
  - Aims to achieve financial freedom and security for the family.
  - Values simplicity, reliability, and transparency in financial tools.

- **Quote:** "I need a tool that helps me see the bigger picture so that I can ensure our family's financial well-being in the long term."

## 6. Value Proposition

DebtFreePlanner offers a web-based solution that loan recipients can use to create a debt repayment plans that accelerate their journey to financial freedom.

[The Kano Model: A Step-By-Step Guide for Doing a Kano Analysis](https://leanscape.io/kano-model-customer-needs/)

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

- **Secure Data Handling:**
  - The application ensures that all sensitive user data is encrypted both at rest and in transit.

#### 6.1.2. Secondary Features

- **Data Portability:**

  - Users can export and import their data, allowing them to maintain control over their information and use it in other financial tools or reports.

- **Integration with Financial Tools**

  - Synchronizes with budgeting applications like YNAB and possibly Firefly III for seamless data management.

- **Advanced Reporting**

  - Offers enhanced reporting and visualizations that incorporate data storytelling techniques to provide deeper insights.

- **Multiple Plan Support**
- Users can create and manage multiple debt repayment plans, each with its own strategy and set of debts. This feature allows for the separate management of different financial goals or scenarios.

- **Multi-User Support**
  - Users can invite others to collaborate on specific debt repayment plans, granting them either read-only or write permissions.
  - Admins can manage user roles within each plan, including the ability to revoke access or elevate users to admin status..

#### 6.1.3. Potential Features

The following features are under consideration for future development but are not yet confirmed or scheduled for implementation.

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

## 7. Value Proposition Canvas

> **Note:** At a later stage, we will create a Value Proposition Canvas in [Figma](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=Value+Proposition+Canvas).

### 7.1. Value Proposition Canvas

ValuePropositionCanvas.png

![Value Proposition Canvas](Media/ValuePropositionCanvas.png)

---

## 8. User Interface and User Experience (UI/UX)

### 8.1. User Flows

The following diagrams and descriptions outline the primary user flows within the **DebtFreePlanner** system. These flows are intended to provide a high-level understanding of how different user types interact with the platform. They are not exhaustive but serve as a general guide to illustrate key interactions and decision points.

#### Key Map

```mermaid
---
title: Key Map
---
flowchart TD
    Start(["Stadium: Represents the start or end of flow"]) --> Rectangle
    Rectangle["Rectangle: Represents a task or procedure"] --> Subroutine
    Subroutine[[Subroutine: Represents a subflow]] --> Decision
    Decision{"Rhombus: Represents a decision point"}
    Decision -- Yes --> Input[/Left Parallelogram: Represents an input/]
    Decision -- No --> Output[\Right Parallelogram: Represents an output\]
    Input --> End
    Output --> End
    End(["End of flow"])
```

For a guide, refer to the [Flowcharts Syntax](https://mermaid.js.org/syntax/flowchart)

---

#### 8.1.1. **User Session**

**Purpose:** This flow outlines how users navigate the authentication process, ensuring a smooth and secure login experience.

#### 8.1.1.1. **Single-User Context:**

Focuses on managing individual user sessions, including login, logout, and maintaining session continuity.

```mermaid
---
title: User Login Process
---
flowchart TD
    OpenApp(["Open Application"])

    OpenApp --> isLoggedIn{"Is user logged in?"}

    isLoggedIn -- Yes --> GrantAccess["Grant Access"]
    isLoggedIn -- No --> HasAccount{"User has account?"}

    ErrorMsg --> HasAccount

    HasAccount -- Yes --> LoginMethod{"Will log in via Identity Provider?"}
    LoginMethod -- No --> EnterLogin[/Enter Email and Password/]
    LoginMethod -- Yes --> RedirectIdP[[Redirect to Identity Provider]]

    EnterLogin --> ProcessLogin["Process Login"]
    RedirectIdP --> ProcessLogin

    ProcessLogin --> AuthSuccess{"Authentication Successful?"}
    AuthSuccess -- Yes --> WelcomeMsg[\Display Welcome Message\]
    AuthSuccess -- No --> ErrorMsg[\Show Error Message\]

    HasAccount -- No --> SignUpMethod{"Will signup via Identity Provider?"}
    SignUpMethod -- Yes --> RedirectIdP
    SignUpMethod -- No --> EnterSignUp[/Enter Email, Password, and Confirm Password/]

    EnterSignUp --> ProcessSignUp["Process Sign Up Form"]
    ProcessSignUp --> ConfirmEmailSent[\Confirmation Email Sent\]
    ConfirmEmailSent --> ClickLink[/Confirmation Link is Clicked/]
    ClickLink --> AccountCreatedMsg[\Show Account Created\]
    AccountCreatedMsg --> GrantAccess

    WelcomeMsg --> GrantAccess
```

#### 8.1.1.2. **Multi-User Context**

🚧 Expands to manage multiple user sessions under a single account, supporting role-based access control and seamless switching between user profiles.

```Mermaid
---
title: User Login Process (Multi-User with Plan Selection)
---
flowchart TD
    OpenApp(["Open Application"])

    OpenApp --> isLoggedIn{"Is user logged in?"}
    isLoggedIn -- Yes --> GrantAccess["Grant Access"]
    isLoggedIn -- No --> HasAccount{"User has account?"}

    ErrorMsg --> HasAccount

    HasAccount -- Yes --> LoginMethod{"Will log in via Identity Provider?"}
    LoginMethod -- No --> EnterLogin[/Enter Email and Password/]
    LoginMethod -- Yes --> RedirectIdP[[Redirect to Identity Provider]]

    EnterLogin --> ProcessLogin["Process Login"]
    RedirectIdP --> ProcessLogin

    ProcessLogin --> AuthSuccess{"Authenticated successfully?"}
    AuthSuccess -- Yes --> HasMultiplePlans{"Has Multiple Plans?"}
    AuthSuccess -- No --> ErrorMsg1[\Show Error Message\]

    HasMultiplePlans -- Yes --> ChoosePlan[/User chooses their plan/]
    HasMultiplePlans -- No --> GrantAccess

    HasAccount -- No --> SignUpMethod{"Choose Sign Up Method"}
    SignUpMethod -- Yes --> RedirectIdP
    SignUpMethod -- No --> EnterSignUp[/Enter Email, Password, and Confirm Password/]

    EnterSignUp --> ProcessSignUp["Process Sign Up Form"]
    ProcessSignUp --> ConfirmEmailSent[\Confirmation Email Sent\]
    ConfirmEmailSent --> ClickLink[/Click Confirmation Link/]

    ClickLink --> AccountCreated{"Is account created?"}
    AccountCreated -- Yes --> AccountCreatedMsg[\Show Account Created\]
    AccountCreated -- No --> ErrorMsg2[\Show Error Message\]

    GrantAccess --> stop([Stop])
    AccountCreatedMsg --> GrantAccess
    ErrorMsg1 --> isLoggedIn
    ErrorMsg2 --> SignUpMethod

```

**Implemented under module:** Session Management

#### 8.1.2. **Subscription Process**

> **Note:**  
> The application will not store bank card information to reduce the app's attractiveness to criminals.  
> The subscription model includes a free trial followed by an annual subscription payment.

This flow outlines how users go through the process of subscribin the paid tier.

**Implemented under module:** Subscription Management

```mermaid
---
title: Subscription Process
---
flowchart TD
    AccessPage["Access Subscription Page"]

    AccessPage --> EnterPayment[/Enter Payment Information/]
    EnterPayment --> SubmitPayment["Submit Payment Details"]
    SubmitPayment --> ProcessPayment["Process Payment via Secure Gateway"]

    ProcessPayment --> IsPaymentSuccessful{"Is Payment Successful?"}
    IsPaymentSuccessful -- No --> RetryPayment["Retry Payment"]
    RetryPayment --> EnterPayment

    IsPaymentSuccessful -- Yes --> ShowConfirmation[\Show Confirmation Screen\]
    ShowConfirmation --> SendEmail[\Send Confirmation Email\]
    SendEmail --> UpdateStatus["Update Account Status"]

    %% Note for informational purposes
    subgraph Note["Note"]
      direction LR
      NoteText["The app does not store bank card information."]
    end
```

---

#### 8.1.3. **User Profile**

**Purpose:** This flow allows users to manage their personal information and account settings.

**Implemented under module:** Profile Management

```mermaid
---
title: Profile Management Process
---
flowchart TD
    Start(["Start"])

    Start --> NavigateToProfilePage["User navigates to the Profile Management page"]

    subgraph GeneralInfo["General Information"]
        DisplayGeneralInfo["Display General Information:\n Name, Email, Base Currency, Subscription Status"]
        DisplayGeneralInfo --> InputChangesGeneralInfo["User inputs changes to personal information"]
        InputChangesGeneralInfo --> ValidateGeneralInfo["System validates inputs"]

        ValidateGeneralInfo --> IsValidGeneralInfo{"Are inputs valid?"}
        IsValidGeneralInfo -- No --> DisplayErrorGeneralInfo["Display error message"]
        DisplayErrorGeneralInfo --> InputChangesGeneralInfo
        IsValidGeneralInfo -- Yes --> SaveChangesGeneralInfo["Save changes"]
        SaveChangesGeneralInfo --> ConfirmationToastGeneralInfo["Display confirmation toast"]
    end

    subgraph SecuritySettings["Security Settings"]
        DisplaySecuritySettings["Display Security Settings:\n Reset Password, Set up MFA, Use Google as IdP, Use Facebook as IdP"]

        DisplaySecuritySettings --> ChooseActionSecurity{"Choose Action?"}

        ChooseActionSecurity -- "Reset Password" --> InputPassword["User enters: current password, new password, confirmation password"]
        InputPassword --> ValidatePassword["System validates inputs"]

        ValidatePassword --> IsValidPassword{"Are inputs valid?"}
        IsValidPassword -- No --> DisplayErrorPassword["Display error message"]
        DisplayErrorPassword --> InputPassword
        IsValidPassword -- Yes --> SaveNewPassword["Save new password"]
        SaveNewPassword --> PasswordResetConfirmation["Display password reset confirmation"]

        ChooseActionSecurity -- "Set up MFA" --> SelectMFAMethod["Prompt user to select MFA method:\n SMS, Authenticator App, Email"]
        SelectMFAMethod --> UserSelectsMFA["User selects preferred MFA method"]
        UserSelectsMFA --> SendVerificationCode["System sends verification code"]
        SendVerificationCode --> UserEntersCode["User enters verification code"]
        UserEntersCode --> ValidateCode["System validates code and enables MFA"]
        ValidateCode --> MFASetupConfirmation["Display MFA setup confirmation"]

        ChooseActionSecurity -- "Use Google as IdP" --> RedirectGoogle["Redirect user to Google login"]
        RedirectGoogle --> AuthenticateGoogle["User authenticates with Google"]
        AuthenticateGoogle --> LinkGoogle["System links Google account as IdP"]
        LinkGoogle --> GoogleSetupConfirmation["Display Google IdP setup confirmation"]

        ChooseActionSecurity -- "Use Facebook as IdP" --> RedirectFacebook["Redirect user to Facebook login"]
        RedirectFacebook --> AuthenticateFacebook["User authenticates with Facebook"]
        AuthenticateFacebook --> LinkFacebook["System links Facebook account as IdP"]
        LinkFacebook --> FacebookSetupConfirmation["Display Facebook IdP setup confirmation"]
    end

    subgraph PrivacyManagement["Privacy Management"]
        DisplayPrivacyOptions["Display Privacy Management Options: \n Manage Data, Export Data, Delete Account"]

        DisplayPrivacyOptions --> ChooseActionPrivacy{"Choose Action?"}

        ChooseActionPrivacy -- "Manage Data" --> DisplayDataOptions["Display data management options"]
        DisplayDataOptions --> UserSelectsData["User selects data to manage"]
        UserSelectsData --> ProcessDataRequest["System processes data management request"]
        ProcessDataRequest --> DataManagementConfirmation["Display data management confirmation"]

        ChooseActionPrivacy -- "Export Data" --> RequestDataExport["User requests data export"]
        RequestDataExport --> PrepareDataExport["System prepares data export file"]
        PrepareDataExport --> NotifyUserDataReady["System notifies user when export is ready"]
        NotifyUserDataReady --> DownloadDataExport["User downloads data export file"]

        ChooseActionPrivacy -- "Delete Account" --> ConfirmAccountDeletion["User confirms account deletion"]
        ConfirmAccountDeletion --> VerifyDeletion["System verifies request"]
        VerifyDeletion --> DeleteAccount["System deletes user account and associated data"]
        DeleteAccount --> DeletionConfirmation["Display account deletion confirmation"]
    end

    NavigateToProfilePage --> GeneralInfo
    GeneralInfo --> SecuritySettings
    SecuritySettings --> PrivacyManagement
    PrivacyManagement --> Stop(["Stop"])

```

---

#### 8.1.3. **Plan Management Flow**

##### **Purpose:**

This flow details how users can create, manage, and collaborate on multiple debt repayment plans effectively.

**Implemented under module:** Plan Management

```plantuml
---
title: Plan Management Flow
---
flowchart TD
    UserNavigates["User navigates to Debt-Free Strategy Page"] --> ManageDebt["User manages their Debt"]
    ManageDebt --> ManageSnowflake["User manages their Snowflake"]
    ManageSnowflake --> ManagePayment["User manages their Payment"]
    ManagePayment --> ViewDebtAnalyst["User views their Debt Analyst"]

    subgraph DebtPlanFlow["Debt Plan Management Flow"]
        NavigateToDebtPage["User navigates to Debt-Free Strategy Page"]

        NavigateToDebtPage --> CreateOrModifyPlan{"Create or modify a New Debt Plan?"}

        CreateOrModifyPlan -- Yes --> EnterPlanName["User enters the name of the new plan"]
        EnterPlanName --> IsNameValid{"Is name valid?"}
        IsNameValid -- No --> ShowErrorMessage1["System shows an error message"]
        ShowErrorMessage1 --> EnterPlanName
        IsNameValid -- Yes --> AddCollaborators{"Add Collaborators?"}

        AddCollaborators -- Yes --> EnterCollaboratorInfo["User enters the name and email of the collaborator"]
        EnterCollaboratorInfo --> IsCollaboratorValid{"Is name and email valid?"}
        IsCollaboratorValid -- No --> ShowErrorMessage2["System shows an error message"]
        ShowErrorMessage2 --> EnterCollaboratorInfo
        IsCollaboratorValid -- Yes --> SelectPermissionLevel["User selects permission levels (read-only, edit, admin)"]
        SelectPermissionLevel --> SendEmailInvites["System sends email invitations to collaborators"]
        SendEmailInvites --> ClickInvitationLink["Invited user clicks on the link in the email"]
        ClickInvitationLink --> AddUserToPlan["System adds the user to the plan"]

        AddCollaborators -- No --> ExistingPlan["User chooses an existing debt plan"]

        ExistingPlan --> ModifyPlan{"Modify Plan?"}
        ModifyPlan -- Yes --> EnterModifications["User enters the modifications"]
        EnterModifications --> AreModificationsValid{"Are modifications valid?"}
        AreModificationsValid -- No --> ShowErrorMessage3["System shows an error message"]
        ShowErrorMessage3 --> EnterModifications
        AreModificationsValid -- Yes --> EndModification
    end

    ManageDebt --> DebtPlanFlow
    DebtPlanFlow --> End(["Stop"])
```

##### **8.1.3.1. Debt Management:**

Focuses on managing individual debts, including loan amounts, interest rates, and repayment terms.

**Implemented under module:** Snowflake Management

```mermaid
---
title: Debt Management - User Flow
---
flowchart TD
    UserNavigatesToStrategy["User navigates to Debt-Free Strategy Page"]

    subgraph DebtManagementFlow["Debt Management"]
        UserNavigatesToDebtSection["User navigates to the Debt Management section"]

        UserNavigatesToDebtSection --> AreThereDebts{"Are there existing debts?"}

        AreThereDebts -- Yes --> ShowDebts["System shows existing debts and options to edit or delete"]
        ShowDebts --> WantsToEditDelete{"User wants to edit or delete?"}

        WantsToEditDelete -- Yes --> EditDebt["User edits the debt details"]
        EditDebt --> UpdateDebt["System updates debt details in the system"]
        WantsToEditDelete -- No --> EndEdit

        AreThereDebts -- No --> DisplayAddDebt["Display option to add a new debt"]
        DisplayAddDebt --> AddDebt["User adds a new debt"]
        AddDebt --> SaveNewDebt["System saves the new debt details"]

        ManageDebtLoop{"Has the user completed managing debts?"}
        SaveNewDebt --> ManageDebtLoop
        UpdateDebt --> ManageDebtLoop
        ManageDebtLoop -- No --> UserNavigatesToDebtSection
    end

    ManageDebtLoop -- Yes --> ManageSnowflakes["User navigates to manage their Snowflakes"]
    ManageSnowflakes --> ManagePayment["User navigates to manage their Payment"]
    ManagePayment --> ViewDebtAnalyst["User views their Debt Analyst"]

    UserNavigatesToStrategy --> DebtManagementFlow
    ViewDebtAnalyst --> Stop(["End"])
```

##### **8.1.3.2. Snowflake Management:**

Manages irregular payments (snowflake payments) to help users reduce their debt faster.

**Implemented under module:** Snowflake Management

```mermaid
---
title: Snowflake Management - User Flow
---

flowchart TD
    UserNavigatesToStrategy["User navigates to Debt-Free Strategy Page"]

    subgraph DebtManagement["Debt Management"]
        UserManagesDebts["User manages their Debts"]
        HasDebts{"User has debts?"}
        UserManagesDebts --> HasDebts
        HasDebts -- No --> EndDebtManagement
    end

    UserNavigatesToSnowflake["User navigates to the Snowflake section"]

    subgraph SnowflakeManagement["Snowflake Management"]
        AreThereSnowflakes{"Are there existing snowflake payments?"}
        UserNavigatesToSnowflake --> AreThereSnowflakes

        AreThereSnowflakes -- Yes --> ShowSnowflakes["System shows Snowflakes and options to edit or delete"]
        ShowSnowflakes --> WantsToEditSnowflake{"User wants to edit or delete?"}

        WantsToEditSnowflake -- Yes --> EditSnowflake["User edits the Snowflake details"]
        EditSnowflake --> UpdateSnowflake["System updates Snowflake details in the system"]
        WantsToEditSnowflake -- No --> EndSnowflakeEdit

        AreThereSnowflakes -- No --> DisplayAddSnowflake["Display option to add a new snowflake payment"]
        DisplayAddSnowflake --> AddSnowflake["User adds a new snowflake payment"]
        AddSnowflake --> SaveSnowflake["System saves the new Snowflake payment"]

        ManageSnowflakeLoop{"Has the user completed managing Snowflakes?"}
        SaveSnowflake --> ManageSnowflakeLoop
        UpdateSnowflake --> ManageSnowflakeLoop
        ManageSnowflakeLoop -- No --> UserNavigatesToSnowflake
    end

    ManageSnowflakeLoop -- Yes --> ManagePayments["User navigates to manage their Payment"]
    ManagePayments --> ViewDebtAnalyst["User views their Debt Analyst"]

    UserNavigatesToStrategy --> DebtManagement
    EndDebtManagement --> SnowflakeManagement
    ViewDebtAnalyst --> Stop(["End"])
```

##### **8.1.3.3. Payment Management:**

Manages the overall allocation of payments across debts, ensuring users stay on track with their repayment goals.

**Implemented under module:** Payment Management

```mermaid
---
title: Payment Management - User Flow
---
flowchart TD
    UserNavigatesToStrategy["User navigates to Debt-Free Strategy Page"]

    subgraph DebtManagement["Debt Management"]
        UserManagesDebts["User manages their Debts"]
        HasDebts{"User has debts?"}
        UserManagesDebts --> HasDebts
        HasDebts -- No --> EndDebtManagement
    end

    subgraph SnowflakeManagement["Snowflake Management"]
        UserManagesSnowflakes["User manages their Snowflakes"]
    end

    UserNavigatesToPayment["User navigates to the Payment Management section"]

    subgraph PaymentManagement["Payment Management"]
        SystemDisplaysPayments["System calculates and displays existing payments based on debts"]

        UserNavigatesToPayment --> SystemDisplaysPayments

        IncreasePayment{"User wants to increase their payment?"}
        SystemDisplaysPayments --> IncreasePayment

        IncreasePayment -- Yes --> EnterNewAmount["User enters a new amount"]
        EnterNewAmount --> AmountLargerThanMinimum{"Is the entered amount larger than the sum of the debts' minimum payments?"}
        AmountLargerThanMinimum -- No --> EnterNewAmount
        AmountLargerThanMinimum -- Yes --> UpdatePayment["System updates payment details in the system"]

        ManagePaymentsLoop{"Has the user completed managing payments?"}
        UpdatePayment --> ManagePaymentsLoop
        ManagePaymentsLoop -- No --> UserNavigatesToPayment
    end

    ManagePaymentsLoop -- Yes --> ViewDebtAnalyst["User views their Debt Analyst"]

    UserNavigatesToStrategy --> DebtManagement
    EndDebtManagement --> SnowflakeManagement
    SnowflakeManagement --> PaymentManagement
    ViewDebtAnalyst --> Stop(["End"])

```

---

#### 8.1.4. **Debt Analyst**

**Purpose:** Provides users with insightful reports and visualizations to track their debt repayment progress, enabling informed decision-making and maintaining motivation.

- **Basic Reporting Context:** Delivers standard reports that help users monitor their debt reduction efforts.
- **🚧 Advanced Reporting Context:** Offers enhanced reporting capabilities with deeper insights and sophisticated visualizations, allowing users to drill down into their debt repayment data.
- **🚧 AI-Driven Insights:** Leverages AI to provide users with personalized recommendations and predictive analytics, helping them optimize their debt repayment strategies.

**Implemented under module:** Reporting Management

```mermaid
---
title: Plan Management Flow
---
flowchart TD
    subgraph PlanCreation["Plan Creation"]
        UserCreatesPlan["User creates a debt repayment plan"]
        DoesUserHavePlan{"Does the user have a plan?"}
        UserCreatesPlan --> DoesUserHavePlan
        DoesUserHavePlan -- No --> UserCreatesPlan
    end

    subgraph DebtManagement["Debt Management"]
        UserManagesDebts["User manages their debts"]
        DoesUserHaveDebts{"Does the user have debts?"}
        UserManagesDebts --> DoesUserHaveDebts
        DoesUserHaveDebts -- No --> UserManagesDebts
    end

    UserManagesSnowflakes["User manages their snowflakes"]
    SystemGeneratesAnalysis["System generates and shows the analysis of their debt"]

    PlanCreation --> DebtManagement
    DebtManagement --> UserManagesSnowflakes
    UserManagesSnowflakes --> SystemGeneratesAnalysis
    SystemGeneratesAnalysis --> End(["End"])
```

---

#### 8.1.5. **Data Management**

**Purpose:** Manages the processes for importing and exporting user data, ensuring that users have full control over their information.

- **8.1.5.1. Import Management:** Facilitates the importing of data from external sources, ensuring that users can seamlessly integrate external financial data.
- **8.1.5.2. Export Management:** Allows users to export their data for use in other financial tools or for backup, ensuring data portability and user control.

**Implemented under module:** Data Management

```mermaid
---
title: Data Management Flow
---
flowchart TD
    UserNavigates["User navigates to Data Management section"]

    subgraph ImportExportFlow["Data Management"]
        SelectImportOrExport{"Select Import or Export?"}

        SelectImportOrExport -- Import --> SelectDataSource["User selects data source (CSV or JSON)"]
        SelectDataSource --> ValidateData["System validates the data in the source"]
        ValidateData --> DataSourceProblems{"Does the data source have problems?"}

        DataSourceProblems -- Yes --> InformProblems["System informs of the problems with the data source"]
        InformProblems --> SelectDataSource
        DataSourceProblems -- No --> ShowImportSummary["System shows summary of import"]

        SelectImportOrExport -- Export --> ChoosePlan["User chooses which plan to export"]
        ChoosePlan --> SelectExportFormat["User selects export format (CSV, JSON, PDF)"]
        SelectExportFormat --> ProcessExport["System processes the export request"]
        ProcessExport --> ExportConfirmation["System provides export confirmation"]
    end

    FurtherTasks{"User has further import/export tasks?"}
    ShowImportSummary --> FurtherTasks
    ExportConfirmation --> FurtherTasks

    FurtherTasks -- Yes --> UserNavigates
    FurtherTasks -- No --> End(["End"])
```

---

#### 8.1.6. **PFS Integration Management**

**Purpose:** Manages the integration of the application with external personal finance software (PFS), allowing users to synchronize their data for a more comprehensive financial overview.

**Note:** The integration with external personal finance software (PFS), such as YNAB and Firefly III, is still under consideration and has not yet been added to the project roadmap. For this reason, a user flow will not be created at this stage. When the integration is addressed, virtually all aspects will be dictated by the APIs of these platforms, reducing the need for custom user flow.

- **🚧 8.1.6.1. YNAB Management:** Handles integration with YNAB, allowing users to import or export budget data.
- **🚧 8.1.6.2. Firefly III Management:** Manages the connection with Firefly III, enabling data synchronization between the two platforms.

**Implemented under module:** Integration Management

---

> **🚧 Note:** Features marked with 🚧 are still under consideration and have not yet been added to the roadmap. The diagrams for these features are rough drafts or do not exist. If the feature is ultimately included, it will be further detailed in this document; otherwise, it will be removed.

### 8.2. Wireframes

Only the wireframes for the **Debt-Free Plan Management** section will be created, as it is the only section with unique and critical user interactions. Other sections, such as the subscription and user profile, follow standard, well-known patterns and will not significantly benefit from the feedback wireframes typically provide.

Additionally, [user flow diagrams](#81-user-flows) have already been established for most of these sections, ensuring that interactions are clearly defined.

In line with the Agile principle of creating **just enough** documentation, wireframes for these standard sections will not be created.

#### 8.2.1. **Debt-Free Plan Management**

- **8.2.1.1. Plan Overview**  
  Displays a list of existing debt plans with quick actions such as "Create New Plan," "Edit," or "Delete." This gives users an overview of their progress and the ability to manage multiple plans.
- **8.2.1.2. Plan Details**  
  Shows comprehensive details of a selected plan, including debt breakdowns, repayment strategies, and a timeline. Users can adjust the plan dynamically, modify strategies, and track their progress in real-time.

- **8.2.1.3. Debt Management**  
  Provides an interface for adding, editing, or deleting individual debts within a plan. Users will input loan details such as amount, interest rate, minimum payment, due dates, and repayment status.

- **8.2.1.4. Snowflake Management**  
  A specialized interface for managing irregular or one-time payments, allowing users to add or adjust payments. This section visualizes how these payments impact overall debt reduction and repayment timelines.

- **8.2.1.5. Plan Collaboration**  
  Allows users to invite collaborators to their debt repayment plan, set permission levels (e.g., read-only, edit, admin), and manage roles. Invitations are sent via email, and the system tracks collaborator activity within the plan.

---

## 9. User Stories

### 9.1 User Types

#### 9.1.1 Admin

Admin users manage the overall system and have control over user management, settings, and reporting. They ensure the platform operates smoothly and securely.

- **Permissions**: Manage users, assign roles, monitor activity, and configure system settings.

#### 9.1.2 Users

Users are the primary users of the DebtFreePlanner platform. They input debt details, calculate repayment plans, and track their progress over time.

- **Permissions**: Create, update, and manage their debt repayment plans. Access profile settings and visualizations.

#### 9.1.3 Collaborator

Collaborators are users who are invited to assist in managing specific debt plans. They may have limited access and roles based on permissions set by the User.

- **Permissions**: View or edit specific debt repayment plans based on permissions (read-only, editor).

#### 9.1.4 Guest

Guests are users who visit the public-facing parts of the website, such as the landing page or blog. They may be potential users interested in learning more about the platform.

- **Permissions**: View only public pages like the blog or product information.

---

### 9.2 Initiative 1: Foundation and Architecture

This initiative focuses on laying the technical groundwork for the project by performing the initial deployments to validate key architectural elements. It includes reviewing key documents to ensure a strong foundation for future development.

#### 9.2.1 Epic 1: Technical Prototype & Architecture Validation

- Deploying the app to the chosen hosting platform.
- Establishing CI/CD pipelines for automated builds, tests, and deployment.
- Basic IdP platform setup.
- Setting up essential testing frameworks (unit, integration, performance, and observability).
- Secondary technologies or non-essential components will not be tested.

#### 9.2.2 Epic 2: Product Ideation Validation

Gather feedback regarding the key documents to validate the product's strategic direction:

- Brand Identity Guidelines (BIG).MD
- Development and Documentation Standards.md
- Market Requirements Document (MRD).md
- Product Requirements Document (PRD).md
- Software Design Document (SDD).md
- Software Requirements Specification (SRS).md
- Software Test Document (STD).md

---

### 9.3 Initiative 2: Core Features and Functionality

This initiative focuses on delivering a **Minimum Viable Product (MVP)** with core features that can be marketed.

#### 9.3.1 Epic 3: Core Web Pages

- **DebtFreePlanner**: Page where a user chooses to create or select a plan (authenticated users only).
- **Coming Soon Page**: Page displaying a coming soon message (email capture and integration with email marketing platforms).
- **User Profile Page** (authenticated users only).
- **Admin Dashboard** (for admins only).
- Implementing user authorization for user/admin roles.

#### 9.3.2 Epic 4: DebtFreePlanner Data Inputs & Basic Data Validation

- Enhancing the DebtFreePlanner page to support the creation of multiple plans.
- Collecting all necessary data to create a plan:
  - Base currency.
  - Debt details (balance, interest rate, monthly payments, bank fees, and insurance).
  - Snowflake payments.
  - Desired minimum monthly payments.
- Establishing input validation and error handling for user data.

#### 9.3.3 Epic 5: DebtFreePlanner Initial Calculations & Advanced Data Validation

- Integrating with an exchange rate API.
- Converting all debts to the base currency.
- Formatting currency and numeric fields properly across the application.
- Validating that monthly payments can be calculated based on the provided data.
- Adding an inline calculator popup for number and currency fields.
- Automatically calculating missing fields when sufficient data is available.

#### 9.3.4 Epic 6: DebtFreePlanner Engine

- Implementing the calculation logic for different repayment methods from the validated input (Snowball, Avalanche, etc.).

#### 9.3.5 Epic 7: DebtFreePlanner Reporting and Data Visualization

- Allowing users to choose the order in which debts will be paid off.
- Allowing users to choose their debt repayment strategy.
- Developing visualizations (charts, graphs) to help users understand their debt repayment plans.
- Providing summaries of savings (total interest saved) and timelines for each repayment strategy.

#### 9.3.6 Epic 8: Security Enhancements

- Implementing two-factor authentication (2FA) for added security.
- Encrypting sensitive user data both in transit and at rest.
- Adding rate limiting to prevent brute-force attacks.
- Ensuring compliance with GDPR or other relevant data protection regulations.
- Conducting security audits and testing (e.g., penetration testing).

#### 9.3.7 Epic 9: End User Testing (First Round)

- Creating an end-user test plan.
- Performing a live test with about 5 users and gathering their feedback.

#### 9.3.8 Epic 10: Technical Debt Payment

- Review code and resolve outstanding technical debt.
- Incorporating user feedback.

---

### 9.4 Initiative 3: User Experience and Secondary Features

This initiative focuses on enhancing user experience and adding secondary features that improve collaboration and user management.

#### 9.4.1 Epic 11: Collaboration and Multi-User Support

- Allowing users to invite others to collaborate on their debt repayment plans.
- Setting up roles and permissions (read-only, editor) for collaborators.
- Implementing admin controls for managing users, revoking access, and promoting users.

#### 9.4.2 Epic 12: Complete User Profile Management

- Allowing users to fully manage their profiles, including updating personal details (name, email, password).
- Adding preferences for notifications and currency.
- Integrating user data with third-party platforms (e.g., email marketing, analytics).

#### 9.4.3 Epic 13: Complete Admin Dashboard

- Adding administrative controls for managing users, plans, and site configurations.
- Implementing tools for monitoring user activity, managing site content, and handling support requests.
- Including reporting features for admins to monitor system performance and user engagement.

#### 9.4.4 Epic 14: Public-Facing Pages

- Creating a landing page for product introduction.
- Creating a blog page for content updates.
- Developing a wiki or user guide page to help users understand the platform.

#### 9.4.5 Epic 15: Branding, Style Guide & Marketing

- Finalizing the Market Requirements Document (MRD).
- Finalizing the Brand Identity Guidelines (BIG).
- Ensuring that all pages comply with the brand style guide.
- Setting up end-to-end testing to validate consistency and UX.

#### 9.4.6 Epic 16: End User Testing (Second Round)

- Revising the end-user test plan based on prior feedback.
- Performing a second live test with about 5 users and gathering feedback.

#### 9.4.7 Epic 17: Technical Debt Payment

- Review code and resolve outstanding technical debt.
- Incorporating user feedback.

---

### 9.5 Initiative 4: Tertiary Features and Application Optimization

This initiative focuses on platform stability, performance optimization, and adding tertiary features.

#### 9.5.1 Epic 18: Performance Optimization

- Optimizing page load times, especially for the DebtFreePlanner.
- Implementing caching for frequently accessed data.
- Minimizing external API requests and improving API response times.
- Ensuring all heavy computations (e.g., calculations) are efficiently processed.

#### 9.5.2 Epic 19: Technical Debt Payment

- Review code and resolve outstanding technical debt.
- Incorporating user feedback for performance and stability improvements.

#### 9.5.3 Epic 20: In-App Help and Assistance

- Implementing in-app help sections and tooltips for key features.
- Providing a knowledge base or FAQ section.
- Creating onboarding guides to help new users navigate the platform.

#### 9.5.4 Epic 21: Export Capabilities

- Implementing export capabilities for debt plans and reports in various formats (e.g., PDF, CSV).
- Ensuring exported files are accessible and easy to read.

#### 9.5.5 Epic 22: Import Capabilities

- Allowing users to import data from other financial tools or spreadsheets.
- Ensuring compatibility with common formats (CSV, Excel).
- Validating imported data to avoid formatting or calculation errors.

#### 9.5.6 Epic 23: User Feedback and Analytics

- Integrating analytics tools to track user behavior and identify usage patterns.
- Adding feedback mechanisms within the app (e.g., feedback forms).
- Tracking feature usage and improving based on user behavior data.
- Implementing A/B testing for UI changes or feature adjustments.

#### 9.5.7 Epic 24: Architecture Review and Extensive Testing

- Review the entire codebase and identify technical debt.
- Validating the app's performance, security, and extensibility.
- Ensuring the site follows the brand style guide, is fully responsive, and accessible.

#### 9.5.8 Epic 25: Final End-User Testing

- Performing a final live test with about 5 users.
- Gathering feedback and finalizing any necessary adjustments.

## 10. Legal and Compliance

### 10.1. Data Privacy

- **Overview**: Outline the commitment to protecting user data and complying with relevant data privacy regulations.
- **Key Regulations**:
  - **GDPR (General Data Protection Regulation)**: Describe how the product will ensure compliance with GDPR, including data collection, processing, storage, and user rights.
  - **CCPA (California Consumer Privacy Act)**: Outline how the product will meet CCPA requirements, focusing on consumer rights to privacy and data protection.
- **User Rights**:
  - **Data Access**: Explain how users will be able to access their data.
  - **Data Deletion**: Describe the process for users to request the deletion of their data.
  - **Data Portability**: Outline the mechanisms for providing users with their data in a portable format.

### 10.2. Regulatory Compliance

- **Industry-Specific Regulations**:
  - **Financial Regulations**: If applicable, discuss any financial regulations that must be adhered to, such as anti-money laundering (AML) or Know Your Customer (KYC) guidelines.
  - **Health Regulations**: If the product deals with health data, outline compliance with regulations like HIPAA (Health Insurance Portability and Accountability Act).
- **Compliance Monitoring**: Describe how ongoing compliance will be monitored and maintained throughout the product lifecycle.
- **Audit and Reporting**: Explain any auditing mechanisms that will be in place to ensure compliance and to report on compliance status.

### 10.3. International Regulations

- **Global Compliance Strategy**:
  - Describe the approach to ensuring the product complies with legal requirements in all countries where it will be available.
- **Local Data Privacy Laws**:
  - Highlight any country-specific data privacy laws that go beyond GDPR and CCPA, and how the product will adhere to these regulations.
- **Cross-Border Data Transfers**:
  - Discuss how data will be handled when transferring across borders, particularly in compliance with regulations like GDPR's data transfer restrictions.

### 10.4. Terms of Service & User Agreements

- **User Agreements**:
  - Outline the key terms that will be included in the end-user agreements, such as acceptable use policies, limitations of liability, and dispute resolution processes.
- **Terms of Service**:
  - Provide an overview of the terms of service that users must agree to when using the product. This should include disclaimers, intellectual property notices, and the governing law.

### 10.5. Record Keeping and Audit Trails

- **Record Keeping Requirements**:
  - Detail the types of records that must be maintained for compliance purposes, including user consent records, transaction logs, and access records.
- **Audit Trails**:
  - Describe how audit trails will be maintained to track access to sensitive data, changes in data, and compliance with regulatory requirements.
- **Retention Policies**:
  - Explain the data retention policies, including how long different types of data will be stored and when they will be purged or anonymized.

### 10.6. Legal Risk Management

- **Risk Identification**:
  - Identify potential legal risks associated with the product, such as non-compliance with data privacy laws, intellectual property disputes, or liability issues.
- **Mitigation Strategies**:
  - Outline strategies to mitigate identified risks, including insurance, legal reviews, and contingency plans.
- **Legal Reviews**:
  - Describe the process for regular legal reviews of the product to ensure ongoing compliance with evolving laws and regulations.

### 10.7. Protection of Intellectual Property (IP)

- **Overview**:
  - Describe the steps that will be taken to protect the intellectual property associated with the product, particularly in preparation for potential monetization.
- **Patents**:
  - Discuss any patentable inventions or processes that are part of the product and outline the strategy for securing patents.

---

## 11. Related Documents

- [Product Requirements Document (PRD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md>)
- [Software Requirements Specification (SRS)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Requirements%20Specification%20(SRS).md>)
- [Software Design Document (SDD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Design%20Document%20(SDD).md>)
- [Software Test Document (STD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Test%20Document%20(STD).md>)
- [User Guide](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/User%20Guide.md)
- [Architecture Decision Record (ADR)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Architecture%20Decision%20Record%20(ADR).md>)
- [README](https://github.com/Guilderm/DebtFreePlanner/blob/main/README.md)
- [Shared Appendix](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Shared%20Appendix.md)
