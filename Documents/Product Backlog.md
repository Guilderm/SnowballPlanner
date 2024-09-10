# Product Backlog

The Product Backlog serves as the central repository for all user stories. It is a dynamic document and will be continuously refined and updated as new requirements emerge, or priorities shift based on user feedback and business needs.

For the guidelines refer to [**Development and Documentation Standards**](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Development%20and%20Documentation%20Standards.md).

1. [User Stories](#1-user-stories)
   - [1.1 User Types](#11-user-types)
     - [1.1.1 Admin](#111-admin)
     - [1.1.2 Users](#112-users)
     - [1.1.3 Collaborator](#113-collaborator)
     - [1.1.4 Guest](#114-guest)
   - [1.2 Initiative 1: Foundation and Architecture](#12-initiative-1-foundation-and-architecture)
     - [1.2.1 Epic 1: Technical Prototype & Architecture Validation](#121-epic-1-technical-prototype--architecture-validation)
     - [1.2.2 Epic 2: Product Ideation Validation](#122-epic-2-product-ideation-validation)
     - [1.3 Initiative 2: Core Features and Functionality](#13-initiative-2-core-features-and-functionality)
     - [1.3.1 Epic 3: Core Web Pages](#131-epic-3-core-web-pages)
     - [1.3.2 Epic 4: DebtFreePlanner Data Inputs & Basic Data Validation](#132-epic-4-debtfreeplanner-data-inputs--basic-data-validation)
     - [1.3.3 Epic 5: DebtFreePlanner Initial Calculations & Advanced Data Validation](#133-epic-5-debtfreeplanner-initial-calculations--advanced-data-validation)
     - [1.3.4 Epic 6: DebtFreePlanner Engine](#134-epic-6-debtfreeplanner-engine)
     - [1.3.5 Epic 7: DebtFreePlanner Reporting and Data Visualization](#135-epic-7-debtfreeplanner-reporting-and-data-visualization)
     - [1.3.6 Epic 8: Security Enhancements](#136-epic-8-security-enhancements)
     - [1.3.7 Epic 9: End User Testing](#137-epic-9-end-user-testing)
     - [1.4 Initiative 3: User Experience and Secondary Features](#14-initiative-3-user-experience-and-secondary-features)
     - [1.4.1 Epic 11: Collaboration and Multi-User Support](#141-epic-11-collaboration-and-multi-user-support)
     - [1.4.2 Epic 12: Complete User Profile Management](#142-epic-12-complete-user-profile-management)
     - [1.4.3 Epic 13: Complete Admin Dashboard](#143-epic-13-complete-admin-dashboard)
     - [1.4.4 Epic 14: Branding, Style Guide & Marketing](#144-epic-14-branding-style-guide--marketing)
     - [1.4.5 Epic 15: Public-Facing Pages](#145-epic-15-public-facing-pages)
     - [1.4.6 Epic 16: UX GUI Optimization](#146-epic-16-ux-gui-optimization)
   - [1.5 Initiative 4: Tertiary Features and Application Optimization](#15-initiative-4-tertiary-features-and-application-optimization)
     - [1.5.1 Epic 19: Performance Optimization](#151-epic-19-performance-optimization)
     - [1.5.2 Epic 20: In-App Help and Help Center](#152-epic-20-in-app-help-and-help-center)
   - [1.6 Initiative 5: B2B Functionality and Niche Features](#16-initiative-5-b2b-functionality-and-niche-features)
     - [1.6.1 Epic 25: License Enforcement](#161-epic-25-license-enforcement)
     - [1.6.2 Epic 26: Multi-User Account Management](#162-epic-26-multi-user-account-management)
     - [1.6.3 Epic 27: Export Capabilities](#163-epic-27-export-capabilities)
     - [1.6.4 Epic 28: Import Capabilities](#164-epic-28-import-capabilities)
     - [1.6.5 Epic 29: Integration with Financial Tools](#165-epic-29-integration-with-financial-tools)
     - [1.6.6 Epic 30: API Development for Third-Party Integration](#166-epic-30-api-development-for-third-party-integration)
     - [1.6.7 Epic 31: End User Testing](#167-epic-24-end-user-testing)
     - [1.6.8 Epic 25: Technical Debt Payment](#168-epic-25-technical-debt-payment)

## 1. User Types

We contemplate the following users:

### 1. Admin

Admin users manage the overall system and have control over user management, settings, and reporting. They ensure the platform operates smoothly and securely.

### 2. Users

Users are the primary users of the DebtFreePlanner platform. They input debt details, calculate repayment plans, and track their progress over time.

### 3. Collaborator

Collaborators are users who are invited to assist in managing specific debt plans. They may have limited access and roles based on permissions set by the User.

### 4. Guest

Guests are users who visit the public-facing parts of the website, such as the landing page or blog. They may be potential users interested in learning more about the platform.

---

## 2. Initiative 1: Foundation and Architecture

### 2.1 Epic 1: Technical Prototype & Architecture Validation

#### 2.1.1. User Story 1: CI/CD Pipeline Setup and Deployment

**Story Points:** 8

As a DevOps Engineer,  
I want to set up CI/CD pipelines for automated builds, testing, and deployments,  
so that the app can be built, tested, and deployed automatically.

**Acceptance Criteria:**

- **Given** a new commit is pushed to the main branch,  
  **When** the CI/CD pipeline is triggered,  
  **Then** the application should be built, tested, and deployed automatically.
  
- **Given** the deployment is complete,  
  **When** I access the app via the provided URL,  
  **Then** the core features (e.g., homepage, login page) should be accessible and functioning correctly.
  
- **Given** the pipeline includes unit, integration, and performance tests,  
  **When** tests are run,  
  **Then** results should show all tests passing or highlight failures with feedback.
  
- **Given** the deployment is complete,  
  **When** I review the monitoring and performance metrics,  
  **Then** no critical errors should appear, and performance should be within acceptable thresholds.

---

#### 2.1.2. User Story 2: Basic Identity Provider (IdP) Setup

**Story Points:** 3

As a DevOps Engineer,  
I want to configure a basic Identity Provider (IdP),  
so that users can securely authenticate and access protected resources.

**Acceptance Criteria:**

- **Given** the IdP platform is integrated,  
  **When** a user logs in with valid credentials,  
  **Then** they should be authenticated.
  
- **Given** invalid credentials,  
  **When** the user attempts to log in,  
  **Then** access should be denied, and an error message should appear.
  
- **Given** a successful login,  
  **When** the user accesses protected resources,  
  **Then** they should have proper authorization to view or modify them.

---

#### 2.1.3. User Story 3: Set Up Essential Testing Frameworks

**Story Points:** 5

As a developer,  
I want to establish effective software testing,  
so that the application's code is of high quality, secure, and reliable.

**Acceptance Criteria:**

- **Given** unit testing is in place,  
  **When** I run tests,  
  **Then** all critical functions should pass.
  
- **Given** integration tests are set up,  
  **When** I run them,  
  **Then** components should work together as expected.
  
- **Given** performance tests are needed,  
  **When** load and response times are tested,  
  **Then** the application should meet performance benchmarks under typical and peak loads.
  
- **Given** observability tools are integrated,  
  **When** I review logs and metrics,  
  **Then** I should identify potential performance bottlenecks or errors.

## 2.2 Epic 2: Product Ideation Validation

### 2.2.1. User Story 4: Validate Brand Identity Guidelines (BIG)

**Story Points:** 3

**As a** Product Manager,  
**I want to** gather feedback on the Brand Identity Guidelines (BIG),  
**so that** I can ensure the visual and communicative elements align with the product's market position.

**Acceptance Criteria:**

- **Given** the Brand Identity Guidelines are shared with the stakeholders,  
  **When** feedback is collected,  
  **Then** the guidelines should be adjusted based on stakeholder input to ensure brand consistency.

- **Given** feedback from marketing and design teams,  
  **When** I review their suggestions,  
  **Then** the BIG document should reflect the unified brand voice and visual identity.

---

### 2.2.2. User Story 5: Validate Development and Documentation Standards

**Story Points:** 3

**As a** Lead Developer,  
**I want to** collect feedback on the Development and Documentation Standards,  
**so that** the team can ensure consistency in coding practices, documentation, and project maintainability.

**Acceptance Criteria:**

- **Given** the Development and Documentation Standards are reviewed by the development team,  
  **When** feedback is provided,  
  **Then** the standards should be updated to address any issues or improvements for better team adherence.

- **Given** a new member joins the development team,  
  **When** they review the standards,  
  **Then** they should easily understand the documentation and follow the established processes without confusion.

---

### 2.2.3. User Story 6: Validate Market Requirements Document (MRD)

**Story Points:** 4

**As a** Product Manager,  
**I want to** validate the Market Requirements Document (MRD) with stakeholders,  
**so that** I can confirm that the product meets market needs and addresses the target audience effectively.

**Acceptance Criteria:**

- **Given** the MRD is reviewed by key stakeholders (sales, marketing, product teams),  
  **When** feedback is gathered,  
  **Then** the document should reflect necessary updates or enhancements to align with market demand.

- **Given** significant changes in market conditions,  
  **When** I revisit the MRD,  
  **Then** the document should be adaptable to reflect evolving customer needs and market opportunities.

---

### 2.2.4. User Story 7: Validate Product Requirements Document (PRD)

**Story Points:** 5

**As a** Product Owner,  
**I want to** validate the Product Requirements Document (PRD) with stakeholders,  
**so that** I can ensure the product features and scope align with user expectations and business goals.

**Acceptance Criteria:**

- **Given** the PRD is shared with cross-functional teams (development, design, and marketing),  
  **When** feedback is gathered,  
  **Then** the document should be revised to address concerns regarding product features, scope, and priorities.

- **Given** changes in business strategy or customer feedback,  
  **When** the PRD is updated,  
  **Then** the revised document should still align with long-term product vision and objectives.

---

### 2.2.5. User Story 8: Validate Software Design Document (SDD)

**Story Points:** 4

**As a** Software Architect,  
**I want to** gather feedback on the Software Design Document (SDD),  
**so that** I can ensure the design is scalable, maintainable, and aligned with the product's technical requirements.

**Acceptance Criteria:**

- **Given** the SDD is reviewed by development and architecture teams,  
  **When** feedback is provided,  
  **Then** the design should be refined to address scalability, performance, and maintainability concerns.

- **Given** new technology or design patterns emerge,  
  **When** I review the SDD,  
  **Then** the document should be adaptable to incorporate these improvements.

---

### 2.2.6. User Story 9: Validate Software Requirements Specification (SRS)

**Story Points:** 4

**As a** Business Analyst,  
**I want to** validate the Software Requirements Specification (SRS) with stakeholders,  
**so that** the software requirements are clear, concise, and meet the product's functional needs.

**Acceptance Criteria:**

- **Given** the SRS is reviewed by the development and QA teams,  
  **When** feedback is provided,  
  **Then** the document should be updated to clarify any ambiguous or incomplete requirements.

- **Given** changes in feature scope,  
  **When** the SRS is revisited,  
  **Then** it should accurately reflect the updated product requirements.

---

### 2.2.7. User Story 10: Validate Software Test Document (STD)

**Story Points:** 3

**As a** QA Lead,  
**I want to** validate the Software Test Document (STD) with the QA team,  
**so that** I can ensure the test coverage is comprehensive and aligns with the product's quality goals.

**Acceptance Criteria:**

- **Given** the STD is reviewed by the QA team,  
  **When** feedback is gathered,  
  **Then** the document should be updated to include additional test cases or scenarios as needed.

- **Given** new features are added to the product,  
  **When** the STD is updated,  
  **Then** the document should reflect the test strategies and cases for those new features.


---

## 3. Initiative 2: Core Features and Functionality

### 3.1 Epic 3:  Core Web Pages stubs

### 3.1.1. User Story 11: DebtFreePlanner Page

**Story Points:** 3

**As a** user,  
**I want to** access the DebtFreePlanner page,  
**so that** I can create or select a debt repayment plan.

**Acceptance Criteria:**

- **Given** a user is authenticated,  
  **When** they navigate to the DebtFreePlanner page,  
  **Then** they should be able to create a new debt repayment plan or select an existing plan.

- **Given** a user has multiple debt plans,  
  **When** they view the page,  
  **Then** they should see a list of all available debt plans and be able to select one.

---

### 3.1.2. User Story 12: Coming Soon Page

**Story Points:** 5

**As a** visitor,  
**I want to** see a "Coming Soon" page,  
**so that** I can sign up for email updates and stay informed about the product launch.

**Acceptance Criteria:**

- **Given** a user visits the site,  
  **When** they land on the Coming Soon page,  
  **Then** they should see a message indicating the upcoming launch and be able to provide their email for updates.

- **Given** an email capture field,  
  **When** a user submits their email,  
  **Then** the email should be integrated with the email marketing platform for future campaigns.

---

### 3.1.3. User Story 13: User Profile Page

**Story Points:** 3

**As an** authenticated user,  
**I want to** access my user profile page,  
**so that** I can manage my account information and preferences.

**Acceptance Criteria:**

- **Given** a user is logged in,  
  **When** they navigate to their profile page,  
  **Then** they should be able to view and update their account details (e.g., name, email, password).

- **Given** a user makes changes to their profile,  
  **When** they save the updates,  
  **Then** the system should reflect the updated information and display a confirmation message.

---

### 3.1.4. User Story 14: Admin Dashboard

**Story Points:** 3

**As an** admin,  
**I want to** access the Admin Dashboard,  
**so that** I can manage users, settings, and platform-wide reports.

**Acceptance Criteria:**

- **Given** an admin is authenticated,  
  **When** they access the Admin Dashboard,  
  **Then** they should have access to administrative functions such as user management, settings configuration, and report generation.

- **Given** an admin performs an action (e.g., updating settings or managing users),  
  **When** they save the changes,  
  **Then** the updates should be reflected across the platform, and the admin should receive a confirmation message.

---

### 3.1.5. User Story 15: Implement User Authorization

**Story Points:** 5

**As a** developer,  
**I want to** implement user authorization for different roles,  
**so that** users with specific roles (user/admin) can access their respective pages and functionalities.

**Acceptance Criteria:**

- **Given** different user roles (admin, user),  
  **When** a user attempts to access restricted pages,  
  **Then** only users with appropriate roles should be able to view or modify those pages (e.g., Admin Dashboard for admins only).

- **Given** an unauthorized user tries to access admin-only pages,  
  **When** they attempt to navigate to those pages,  
  **Then** they should be denied access and redirected to an appropriate page (e.g., 403 error page or homepage).

### 3.2 Epic 4: DebtFreePlanner Data Inputs & Basic Data Validation

- Enhancing the DebtFreePlanner page to support the creation of multiple plans.
- Collecting all necessary data to create a plan:
  - Base currency.
  - Debt details (balance, interest rate, monthly payments, bank fees, and insurance).
  - Snowflake payments.
  - Desired minimum monthly payments.
- Standard input validation and error handling for user data.
- Drag-and-Drop or other methods to create/customize the order in which debts will be paid off.

### 3.3 Epic 5: DebtFreePlanner Initial Calculations & Advanced Data Validation

- Integrating with an exchange rate API.
- Converting all debts to the base currency.
- Formatting currency and numeric fields properly across the application.
- Validating that monthly payments can be calculated based on the provided data.
- Adding an inline calculator popup for number and currency fields.
- Automatically calculating missing fields when sufficient data is available.

### 3.4 Epic 6: DebtFreePlanner Engine

- Implementing the calculation logic for different repayment methods from the validated input:
  - Snowball
  - Avalanche
  - Debt-to-Interest Ratio
  - Cash Flow Index (CFI)
  - Highest Monthly Payment
  - Custom Strategies.

### 3.5 Epic 7: DebtFreePlanner Reporting and Data Visualization

- Allowing users to choose the order in which debts will be paid off.
- Allowing users to choose their debt repayment strategy.
- Developing visualizations (charts, graphs) to help users understand their debt repayment plans.
- Providing summaries of savings (total interest saved) and timelines for each repayment strategy.

### 3.6 Epic 8: Security Enhancements

- Comply with NIST Cybersecurity Framework (CSF):
  - **GOVERN**: Establish governance to enforce security policies, ensure compliance, and manage risks.
  - **IDENTIFY**: Conduct risk assessments to identify vulnerabilities, assets, and threats.
  - **PROTECT**: Implement measures like data encryption, access control, and secure coding practices.
  - **DETECT**: Deploy monitoring and anomaly detection systems to identify security incidents.
  - **RECOVER**: Establish recovery strategies to restore services after a security incident.
  - **RESPOND**: Implement incident response plans and conduct security audits.
- Implementing two-factor authentication (2FA) for added security.
- Adding rate limiting to prevent brute-force attacks.
- Ensuring compliance with GDPR or other relevant data protection regulations.

### 3.7 Epic 9: End User Testing

- **Revise the End-User Test Plan** based on previous feedback.
- **Conduct Live User Testing** with 5 users, focusing on debt input, repayment calculations, and syncing with financial tools.
- **Analyze Feedback** and adjust the product backlog to address remaining concerns.

---

## 4 Initiative 3: User Experience and Secondary Features

### 4.1 Epic 11: Collaboration and Multi-User Support

- Allow users to invite others to collaborate on their debt repayment plans.
- Set up roles and permissions (read-only, editor) for collaborators.
- Implement admin controls for managing users, revoking access, and promoting users.

### 4.2 Epic 12: Complete User Profile Management

- Allow users to manage their profiles, including updating personal details (name, email, password).
- Add preferences for notifications and currency.
- Integrate user data with third-party platforms (e.g., email marketing, analytics).

### 4.3 Epic 13: Complete Admin Dashboard

- Add administrative controls for managing users, plans, and site configurations.
- Implement tools for monitoring user activity, managing site content, and handling support requests.
- Include reporting features for admins to monitor system performance and user engagement.

### 4.4 Epic 14: Branding, Style Guide & Marketing

- Finalize the Market Requirements Document (MRD).
- Finalize the Brand Identity Guidelines (BIG).
- Ensure that all pages comply with the brand style guide.
- Set up end-to-end testing to validate consistency and UX.

### 4.5 Epic 15: Public Facing Pages

- Create a landing page for product introduction.
- Create a blog page for content updates.
- Develop a wiki or user guide page to help users understand the platform.

### 4.6 Epic 16: UX GUI Optimization

- Finalize the Brand Identity Guidelines (BIG).
- Ensure all pages comply with the brand style guide.
- Set up end-to-end testing to validate consistency and UX.
- Validate responsiveness compliance.
- Ensure the platform adheres to **WCAG 2.1 AA compliance**.

---

## 5 Initiative 4: Tertiary Features and Application Optimization

### 5.1 Epic 19: Performance Optimization

- Optimize page load times, especially for the DebtFreePlanner.
- Implement caching for frequently accessed data.
- Minimize external API requests and improve API response times.
- Ensure all heavy computations (e.g., calculations) are efficiently processed.

### 5.2 Epic 20: In-App Help and Help Center

- Implement in-app help sections and tooltips for key features.
- Provide a knowledge base or FAQ section.
- Embed learning features for new users.
- Create onboarding guides to help new users navigate the platform.
- Formalize a ticket creation and management system.

---

## 6 Initiative 5: B2B Functionality and Niche Features

### 6.1 Epic 25: License Enforcement

- Finalize the Pricing Model and Packaging in the Market Requirements Document (MRD).
- Create a pricing page.
- Create a subscription payment mechanism.
- Enforce license restrictions based on the subscription tier.

### 6.2 Epic 26: Multi-User Account Management

- Enable users to buy a subscription where they can distribute licenses to other users.

### 6.3 Epic 27: Export Capabilities

- Implement export capabilities for debt plans and reports in various formats (e.g., PDF, CSV).
- Ensure exported files are accessible and easy to read.

### 6.4 Epic 28: Import Capabilities

- Allow users to import data from other financial tools or spreadsheets.
- Ensure compatibility with common formats (CSV, Excel).
- Validate imported data to avoid formatting or calculation errors.

### 6.5 Epic 29: Integration with Financial Tools

Integrate with external financial tools like **YNAB** and **Firefly III** to allow seamless syncing and data flow.

- **User Story 21.1: YNAB Integration**:
  - Set up OAuth to allow users to securely connect their YNAB accounts.
  - Retrieve debt balances, monthly payments, and budgets from YNAB.
  - Map YNAB data to DebtFreePlanner’s internal structures.
  - Allow users to set a sync schedule or perform manual syncs.
  - Provide notifications for successful syncs or errors.
- **User Story 21.2: Firefly III Integration**:
  - Implement API key-based authentication for Firefly III users.
  - Retrieve debt balances, payment history, and interest rates from Firefly III.
  - Map Firefly III data to DebtFreePlanner’s debt and transaction history.
  - Allow for manual and scheduled syncing with clear notifications.
  - Handle errors and provide feedback on sync success or failure.

---

### 6.6 Epic 30: API Development for Third-Party Integration

- **Create Key Management Systems** for API keys.
- **Re-architect Backend for API Integration** to support CRUD operations.
- **Create API Documentation** covering authentication, endpoints, and error handling.

### 6.7 Epic 24: End User Testing

This epic focuses on conducting a third round of end-user testing after incorporating feedback from earlier test rounds, to ensure that the platform is functioning as expected and is user-friendly.

- **Revise the End-User Test Plan**:

  - Update the test plan based on previous feedback, focusing on areas that had issues or needed improvement.

- **Conduct Live User Testing**:

  - Perform a live test with 5 users, focusing on key features like debt input, repayment calculations, and syncing with financial tools.
  - Gather detailed feedback on usability, performance, and any remaining issues.

- **Analyze Feedback**:
  - Analyze the feedback from the round of testing and adjust the product backlog accordingly to address any remaining concerns.

### 6.8 Epic 25: Technical Debt Payment

- Review the archetecture
- Identify technical debt, including outdated libraries, redundant code, or non-performant algorithms.
- incorporating user feedback
- Refactor and optimize code to improve performance and stability.
