# Software Design Document (SDD)

## Introduction

The purpose of the Software Design Document (SDD) is to provide a comprehensive overview of the system's structure, components, and data design, facilitating a clear understanding among stakeholders and guiding the development process. It is developed based on the Product Requirements Document (PRD) following the Engineering Standards Guide.

Architecturally significant decisions are documented in an Architecture Decision Record (ADR).

## Table of Contents

1. [Infrastructure](#infrastructure)
   1. [Compute](#compute)
      1. [Frontend Hosting: Cloudflare Pages](#frontend-hosting-cloudflare-pages)
      2. [Backend Service: Google Cloud Run](#backend-service-google-cloud-run)
      3. [Infrastructure as Code (IaC): Google Cloud Deployment Manager](#infrastructure-as-code-iac-google-cloud-deployment-manager)
   2. [Secure Access Service Edge](#secure-access-service-edge)
   3. [Data Persistence](#data-persistence)
   4. [Observability](#observability)
   5. [Repository and CI/CD Pipeline](#repository-and-cicd-pipeline)
   6. [Email Service](#email-service)
   7. [Authentication and Authorization](#authentication-and-authorization)
   8. [Other Services](#other-services)
   9. [Backup and Disaster Recovery](#backup-and-disaster-recovery)
2. [Application Frameworks, Languages, and Libraries](#application-frameworks-languages-and-libraries)
   1. [System Architecture and Design](#system-architecture-and-design)
   2. [Frontend](#frontend)
   3. [Backend](#backend)
3. [Caching Strategy](#caching-strategy)
   1. [PRPL Strategy](#prpl-strategy)
   2. [SWR Strategy](#swr-strategy)
   3. [Client-Side Caching](#client-side-caching)
   4. [CDN Caching](#cdn-caching)
   5. [Optimization via Build Tools](#optimization-via-build-tools)
   6. [Summary of Caching Headers](#summary-of-caching-headers)
4. [Content Moderation and PII Detection](#content-moderation-and-pii-detection)
5. [Data Security and Privacy](#data-security-and-privacy)
   1. [No Storage of PII](#no-storage-of-pii)
   2. [Secure Protocols](#secure-protocols)
   3. [Data Sanitization and Validation](#data-sanitization-and-validation)
   4. [Data Encryption](#data-encryption)
   5. [Data Deletion](#data-deletion)
6. [Data Synchronization and Conflict Resolution Strategy](#data-synchronization-and-conflict-resolution-strategy)
   1. [Context](#context)
   2. [Data Structure](#data-structure)
      1. [Version Tracking](#version-tracking)
      2. [Timestamping](#timestamping)
   3. [User Modification](#user-modification)
      1. [Local Changes](#local-changes)
   4. [Conflict Resolution](#conflict-resolution)
      1. [Conflict Resolution Interface](#conflict-resolution-interface)
      2. [Version Comparison Scenarios](#version-comparison-scenarios)
      3. [Mid-Flight Conflict Handling](#mid-flight-conflict-handling)
   5. [Synchronization Process](#synchronization-process)
      1. [Notification Mechanism](#notification-mechanism)
      2. [Rate Limiting Strategy](#rate-limiting-strategy)
      3. [Retry Policies When Backend Is Down](#retry-policies-when-backend-is-down)
      4. [Fail-Safe Synchronization](#fail-safe-synchronization)
      5. [Data Retrieval](#data-retrieval)
   6. [Additional Considerations](#additional-notes)
      1. [Soft Delete Implementation](#soft-delete-implementation)
      2. [Handling Aged Datasets](#handling-aged-datasets)
      3. [User Notifications](#user-notifications)
7. [Licensing Overview](#licensing-overview)
   1. [Licensing Tiers](#licensing-tiers)
      1. [Free Tier](#free-tier)
      2. [Premium Tier](#premium-tier)
      3. [Professional Tier](#professional-tier)
   2. [Additional Notes](#additional-notes)
8. [Domains and Main Components](#domains-and-main-components)
   1. [User Domain](#user-domain)
      1. [User Management](#user-management)
      2. [Subscription Management](#subscription-management)
   2. [Plan Domain](#plan-domain)
      1. [Plan Management](#plan-management)
      2. [Plan Generation Engine](#plan-generation-engine)
      3. [Report Generation Engine](#report-generation-engine)
   3. [Data Domain](#data-domain)
      1. [Synchronization Management](#synchronization-management)
      2. [Conflict Management](#conflict-management)
      3. [PII Management](#pii-management)
      4. [Data Portability Management](#data-portability-management)
      5. [Third-Party Integration](#third-party-integration)
9. [Architecture Diagrams](#architecture-diagrams)
   1. [C4 Context Diagram](#c4-context-diagram)
   2. [C4 Container Diagram](#c4-container-diagram)
   3. [C4 Component Diagram](#c4-component-diagram)
   4. [C4 Code Diagram](#c4-code-diagram)
   5. [C4 Deployment Diagram](#c4-deployment-diagram)
10. [Data Design](#data-design)
    1. [Database Schemas](#database-schemas)
       1. [Loans Data Storage](#loans-data-storage)

## Infrastructure

### Compute

#### Frontend Hosting: Cloudflare Pages

**Rationale**:

- Speed: Cloudflare Pages, combined with Cloudflare’s CDN, is one of the fastest SaaS solutions for serving static web pages.
- Cost: Cloudflare's free tier is among the most generous in the industry.
- Performance Optimization: Ensures frontend performance is not affected by backend load or cold starts.
- Cost Reduction: Avoids additional costs associated with origin hits and keeping backend services warm during idle periods.
- Analytics and Monitoring: Leverages Cloudflare Web Analytics, particularly Core Web Vitals.
- Local-First Approach: Hosting on Cloudflare Pages ensures a responsive user experience independent of backend performance.
- Simplified Deployment: Seamlessly integrates with GitHub for automated builds and deployments.

#### Backend Service: Google Cloud Run

**Rationale**:

- Scalability and Flexibility: Provides scalable, serverless container execution suitable for backend services.
- Cost Management: Pay-as-you-go pricing eliminates the need to keep instances warm.
- Support for Node.js: Supports longer execution times and resource-intensive operations.
- Separation of Concerns: Allows independent scaling and optimization of frontend and backend services.
- Integration with GCP Services: Enhances functionality and ease of management.

**Why Not Google App Engine**:

- Flexibility: Cloud Run allows greater customization and control over the runtime environment.
- Scalability Control: Provides more granular control over scaling parameters and resource allocation.
- Cost Efficiency: More cost-effective for workloads with variable traffic.
- Deployment Workflow: Integrates seamlessly with modern CI/CD pipelines.
- Performance Considerations: Avoids performance limitations like longer cold start times.

#### Infrastructure as Code (IaC): Google Cloud Deployment Manager

**Features**:

- Version-Controlled Templates: Utilizes GitHub for maintaining infrastructure templates.
- Budget Monitoring: Leverages GCP’s budget monitoring tools to prevent unexpected costs.

### Secure Access Service Edge

#### Cloudflare Services

- DNS Hosting: Manages domain name resolution.
- Content Delivery Network (CDN): Delivers frontend assets quickly.
- Web Application Firewall (WAF): Protects against common web vulnerabilities.
- SSL Certificates: Ensures secure communication.
- Domain Name Registration: Simplifies domain management.

### Data Persistence

- NoSQL Database: MongoDB Atlas (Free Tier)
  - Handles unstructured data and document storage.
- SQL Database: Oracle (Free Tier)
  - Manages structured data requiring relational features.
- Browser Storage: IndexedDB (Alternatively, SQLite)
  - Supports local-first approach by enabling efficient local data storage.

### Observability

- Monitoring Dashboard: Grafana Cloud
  - Centralizes logs, telemetry, and tracing.
- Error Tracking and Performance Monitoring: Sentry
  - Provides real-time error tracking and performance monitoring.
- Alerting and Incident Management: PagerDuty
  - Manages alerts and incidents.

### Repository and CI/CD Pipeline

- Version Control: GitHub
  - Hosts the codebase with robust version control.
- CI/CD Pipelines: GitHub Actions
  - Automated builds, testing, and deployments.
- Automated Testing and Code Quality Tools:
  - Unit and Integration Testing: Jest
  - UI Component Testing: Storybook
  - End-to-End (E2E) Testing: Playwright
  - Linting and Formatting: ESLint, Prettier
  - Code Quality Analysis: SonarQube, Snyk
  - Dependency Management Tools: npm audit and GitHub Dependabot
    - Monitors and updates dependencies.
  - Efficient Builds: Vite (Cache Busting, Tree Shaking, Code Splitting, Minification, Compression)

### Email Service

- Transactional Emails: Mailjet
  - Manages the sending of transactional emails.

### Authentication and Authorization

- Identity Provider (IdP): Auth0
  - Handles user authentication and authorization.

### Other Services

- Secrets Management: Google Cloud Secret Manager
  - Securely stores API keys, tokens, and other sensitive information.

### Backup and Disaster Recovery

- Repositories:
  - Regularly clone or pull updates to local storage.
- Databases:
  - MongoDB Atlas: Built-in backup tools or scheduled exports.
  - Oracle Free Tier: Built-in backup or export functionality.
- Automation Tools:
  - Scripts for backup scheduling and management.

## Application Frameworks, Languages, and Libraries

### System Architecture and Design

- System Architecture: 3-Tier Architecture
- Design Philosophy: Local-First Approach with Optimistic Updates

**Rationale**:

- Enhanced User Experience: Allows offline functionality and synchronization.
- Reduced Dependency on Backend Availability: Ensures frontend responsiveness.
- Cost Reduction: Minimizes backend infrastructure usage.
- Scalability: Facilitates easier scaling as the application grows.

### Frontend

- Language: JavaScript
- Framework: React
- Hosting Platform: Cloudflare Pages

**Rationale**:

- Performance Optimization: Ensures frontend performance is not affected by backend load.
- Cost Efficiency: Eliminates costs associated with origin hits.
- Analytics and Monitoring: Utilizes Cloudflare Web Analytics.
- Limitations of Cloudflare Workers: Necessitates separation of frontend and backend services.
- Design Methodology: Layered Architecture with Atomic Design

- UI Libraries and Tools: Tailwind CSS
- Routing: React Router

**Key Features**:

- Optimistic UI Updates
- Service Workers

### Backend

- Language: JavaScript
- Framework: Node.js with Express.js
- Hosting Platform: Google Cloud Run

**Rationale**:

- Scalability and Flexibility
- Cost Management
- Support for Node.js
- Separation of Concerns
- Integration with GCP Services

**Why Not Google App Engine**:

- Flexibility
- Scalability Control
- Cost Efficiency
- Deployment Workflow
- Performance Considerations

- Design Methodology: Layered Architecture
- API Design Style: RESTful

**Security Middleware**:

- Helmet
- Express-Rate-Limit

**Additional Middleware**:

- CORS Handling
- Body Parsing

## Caching Strategy

We will utilize the stale-while-revalidate (SWR) strategy, complemented by the PRPL strategy.

### PRPL Strategy

- Push: Use HTTP/2 Server Push or Preload.
- Render: Prioritize initial view rendering.
- Pre-cache: Cache assets and routes in the background.
- Lazy-load: Load non-critical resources when needed.

### SWR Strategy

Serves content immediately while fetching the latest version in the background.

**Rationale**:

- Static Assets: Infrequent changes make cache-busting ideal.
- HTML Documents: Short cache lifetime for timely updates.
- API Responses and Dynamic Content: No caching to ensure current data.

### Client-Side Caching

Cache-Control Headers for Static Assets:

Cache-Control: max-age=31536000, immutable

### CDN Caching

Utilize Cloudflare’s CDN and Cloudinary for image optimization.

Cache-Control Headers for Cloudflare:

Cache-Control: max-age=3600, s-maxage=86400, stale-while-revalidate=86400

### Optimization via Build Tools

Utilize Vite for efficient builds.

- Cache Busting
- Tree Shaking
- Code Splitting
- Minification
- Compression

### Summary of Caching Headers

- Static Assets:

Cache-Control: max-age=31536000, immutable

- HTML Pages (Client):

Cache-Control: max-age=300, stale-while-revalidate=3600

- HTML Pages (Cloudflare):

Cache-Control: max-age=3600, s-maxage=86400, stale-while-revalidate=86400

## Content Moderation and PII Detection

**Libraries/Services**:

- pii-detector npm package on the frontend.
- Google Cloud Data Loss Prevention (DLP) API on the backend.

## Data Security and Privacy

### No Storage of PII

The system shall not store any Personally Identifiable Information (PII), including:

- Full names
- Social Security Numbers (SSNs)
- Bank account details

### Secure Protocols

- HTTP/3 with fallback to HTTP/2
- TLS 1.3 with fallback to TLS 1.2

### Data Sanitization and Validation

- Frontend Checks: Verifies data validity and absence of PII before submission.
- Backend Checks: Performs additional checks using external services like Google's Sensitive Data Protection.

### Data Encryption

- Data at Rest:
  - Encrypted using AES-256 encryption.
  - Client-side data stored securely using encryption mechanisms.
- Data in Transit:
  - TLS 1.2 or higher encryption for all data transmission.

### Data Deletion

- Soft Delete: Data is soft-deleted and permanently deleted after 90 days.

## Data Synchronization and Conflict Resolution Strategy

### Context

Implements Optimistic Concurrency Control to manage concurrent data access and modifications.

### Data Structure

#### Version Tracking

Each record and document includes a version number.

#### Timestamping

Timestamps are recorded as epoch time.

**Example Data Structure**:

```json
{
  "documentId": "doc123",
  "versionNumber": 5,
  "lastUpdatedAt": 1698754800,
  "records": [
    {
      "loanId": "loan001",
      "userId": "user123",
      "balance": 5000,
      "interestRate": 5.5,
      "monthlyPayment": 150,
      "currency": "USD",
      "versionNumber": 3,
      "lastUpdatedAt": 1698751200,
      "data": {
        /* Loan data */
      }
    }
    /* More records */
  ]
}
```

### User Modification

#### Local Changes

- Optimistic Updates: Changes made by loan recipients are applied immediately using optimistic updates, enhancing responsiveness by reflecting changes in the user interface without waiting for server confirmation.
- Temporary Storage: Local changes are temporarily stored on the client, encrypted, and queued for synchronization with the backend once the network connection is available or at scheduled intervals.

### Conflict Resolution

#### Conflict Resolution Interface

Conflicting record versions are displayed side by side, with differences highlighted. Loan recipients are prompted to select which version to retain, enabling manual conflict resolution and ensuring informed decision-making.

#### Version Comparison Scenarios

- Case 1: Local Version < Database Version

  - Action: Log a warning and prompt the loan recipient for manual resolution.
  - Reason: The server has a more recent update than the local version.

- Case 2: Local Version == Database Version

  - Action: Log an informational message and proceed with the update.
  - Reason: No conflict detected; versions are in sync.

- Case 3: Local Version > Database Version
  - Action: Log an error and prompt the loan recipient for manual resolution.
  - Reason: Indicates potential data inconsistency or corruption, requiring user intervention.

#### Mid-Flight Conflict Handling

- Continue Updating: Loan recipients can continue to make updates to a record, even if newer versions are received.
- Version Change Detection: If a new version of a record is received before initializing a synchronization process, the system checks for differences and initiates manual resolution if conflicts are detected.

### Synchronization Process

#### Notification Mechanism

- Publish-Subscribe Pattern: The backend notifies all active online devices using a publish-subscribe (pub/sub) pattern to ensure data consistency across sessions. When changes are made to the dataset, all active devices are notified to update their local records accordingly.

#### Rate Limiting Strategy

- Fixed Window: Up to six synchronization requests are allowed every five minutes.
- Burst Capacity: Two additional synchronization requests are allowed every ten minutes.
- Cooldown Period: After the synchronization request limit is exceeded, the system enters a five-minute cooldown period before allowing more requests.

#### Retry Policies When Backend Is Down

- Initial Retry Delay: 30 seconds.
- Exponential Backoff Factor: 2.
- Maximum Retry Attempts: 3 attempts.
- Maximum Retry Delay: 2 minutes.
- Randomized Cooldown: Between 5 and 15 minutes after maximum attempts are reached.

#### Fail-Safe Synchronization

- Automatic Synchronization: The application performs an automatic synchronization every 30 minutes, regardless of detected changes.
- Error Logging: If the client receives a dataset that is younger than three minutes compared to its own, it logs an error, indicating a potential failure in the publish-subscribe mechanism.
- Data Corruption Handling: If the dataset timestamps match but a record is out of sync, the system logs an error due to potential data corruption. A soft delete is performed on those records, and the loan recipient is notified.
- Synchronization Cease Conditions: After three consecutive synchronizations with no changes detected, the application assumes the loan recipient is inactive and ceases further synchronization to prevent unnecessary backend load.

#### Data Retrieval

- Upon Connection: When the client reconnects to the network, it retrieves the latest version of the document from the server.
- Download Entire Document: The entire document (expected size: 0.01 to 0.03 MB) is downloaded during each synchronization event.

**Advantages**:

- Data Integrity: Ensures the entire dataset remains consistent with the source of truth, preventing partial or corrupted data states.
- Simplicity: Given the small data size, full synchronization is more efficient than implementing complex synchronization techniques like delta synchronization or conflict-free replicated data types (CRDTs).

#### Soft Delete Implementation

- Soft Delete: Records marked for deletion are retained for up to 90 days before permanent removal.
- Purpose: Allows recovery of accidentally deleted records or those erroneously deleted by the synchronization process.

#### Handling Aged Datasets

- Old Data Deletion: Clients coming online with data entries older than 45 days compared to the persistent layer will have those entries soft deleted, and the loan recipient will be notified.
- Rationale: It is unlikely the loan recipient still intends to use this outdated data, especially if they have worked with an updated dataset. However, the data is soft deleted in case it is still useful.

#### User Notifications

- Real-Time Updates: Loan recipients receive toast notifications for any updates to their records, ensuring real-time awareness.
- Deferred Notifications: In cases of soft deletes or suspected data corruption, an email notification is sent to the loan recipient.

## Licensing Overview

DebtFreePlanner offers a tiered licensing model to accommodate the varying needs of loan recipients. The licensing is structured to provide essential features in the free version while offering enhanced capabilities in the paid tiers. This section outlines the limitations and features associated with each licensing level.

### Monorepo Structure

#### 4.1 Overview

The DebtFreePlanner application adopts a monorepo (monolithic repository) architecture to manage its codebase. Following this structure:

debtfreeplanner/
├── apps/
│ ├── public-site/
│ │ ├── src/
│ │ ├── package.json
│ │ ├── README.md
│ │ └── ... (config files)
│ ├── web-app/
│ │ ├── src/
│ │ ├── package.json
│ │ ├── README.md
│ │ └── ... (config files)
│ ├── api-server/
│ │ ├── src/
│ │ ├── package.json
│ │ ├── README.md
│ │ └── ... (config files)
│ └── ... (additional apps or services)
├── libs/
│ ├── ui-components/
│ ├── types/
│ ├── utils/
│ └── ... (additional libraries)
├── tools/
├── scripts/
├── config/
├── package.json
├── tsconfig.base.json
├── .gitignore
└── README.md

#### 4.2 Directory Details

##### 4.2.1 `apps/` Directory

The `apps/` directory houses all deployable applications and services.

- **public-site/**

  - **Purpose**: Hosts the static marketing website, including landing pages, blog posts, and documentation.
  - **Technology Stack**: Implemented using a Static Site Generator (e.g., VuePress) and hosted on Cloudflare Pages.
  - **Structure**:
    - `src/`: Source code for the static site.
    - `package.json`: Defines dependencies and scripts specific to the public site.
    - `README.md`: Documentation and setup instructions for the public site.
    - Config Files: Configuration for the static site generator and deployment settings.

- **web-app/**

  - **Purpose**: Contains the private frontend, a Progressive Web App (PWA) that users interact with for debt management and planning.
  - **Technology Stack**: Built with Next.js and hosted on Google Cloud Platform (GCP) App Engine.
  - **Structure**:
    - `src/`: Source code for the PWA.
    - `package.json`: Defines dependencies and scripts specific to the web app.
    - `README.md`: Documentation and setup instructions for the web app.
    - Config Files: Configuration for Next.js, environment variables, and deployment settings.

- **api-server/**

  - **Purpose**: Manages backend RESTful APIs that handle business logic, data processing, and interactions with databases.
  - **Technology Stack**: Developed using Node.js with Express or Deno, deployed on Google Cloud Run.
  - **Structure**:
    - `src/`: Source code for the backend API.
    - `package.json`: Defines dependencies and scripts specific to the API server.
    - `README.md`: Documentation and setup instructions for the API server.
    - Config Files: Configuration for the server environment, Dockerfile for containerization, and deployment settings.

- **... (Additional Apps or Services)**: Future applications or microservices can be added as separate subdirectories within `apps/`, ensuring scalability and organized growth.

##### 4.2.2 `libs/` Directory

The `libs/` directory contains shared libraries and modules that promote code reuse across different applications and services. By centralizing common functionalities, the monorepo enhances maintainability and reduces duplication.

- **ui-components/**

  - **Purpose**: Stores reusable UI components (e.g., buttons, forms, modals) that can be utilized by both the `public-site` and `web-app`.
  - **Structure**:
    - `src/`: Source code for UI components.
    - Exports: Centralized exports for easy import into applications.
    - `package.json`: Defines dependencies and export configurations.

- **types/**

  - **Purpose**: Houses shared TypeScript type definitions and interfaces to ensure type safety and consistency across the codebase.
  - **Structure**:
    - `src/`: Type definitions.
    - `package.json`: Minimal configuration for type sharing.

- **utils/**

  - **Purpose**: Contains utility functions and helpers (e.g., date formatting, data validation) that can be leveraged by multiple applications and services.
  - **Structure**:
    - `src/`: Source code for utility functions.
    - `package.json`: Defines dependencies and export configurations.

- **... (Additional Libraries)**: Additional shared libraries (e.g., `shared-services/`, `shared-hooks/`) can be added to support evolving application needs.

##### 4.2.3 `tools/` Directory

The `tools/` directory is designated for custom development tools, generators, or plugins that assist in building, maintaining, and enhancing the monorepo. This may include scripts for code generation, linters, or other development utilities.

##### 4.2.4 `scripts/` Directory

The `scripts/` directory contains automation scripts for various tasks such as deployment, database migrations, data seeding, or other repetitive operations. Centralizing scripts promotes consistency and ease of use across the development team.

##### 4.2.5 `config/` Directory

The `config/` directory holds centralized configuration files for various tools and services, ensuring uniformity and consistency across all applications and libraries.

- **Configuration Examples**:
  - ESLint: Linting rules and settings.
  - Prettier: Code formatting rules.
  - Jest: Testing configurations.
  - TypeScript: Base TypeScript configurations.

##### 4.2.6 Root-Level Files

- **package.json**

  - **Purpose**: Defines root-level dependencies, scripts, and workspace configurations. It often includes shared dependencies and scripts that affect the entire monorepo.

- **.gitignore**

  - **Purpose**: Specifies files and directories to be ignored by Git, ensuring that unnecessary or sensitive files are not tracked.

- **README.md**
  - **Purpose**: Provides an overview of the monorepo.

#### 4.3 Rationale and Benefits

##### 4.3.1 Clear Separation of Concerns

- **Isolation of Applications and Services**: By segregating frontend applications (`public-site`, `web-app`) and backend services (`api-server`), each component can be developed, tested, and deployed independently, enhancing modularity.
- **Shared Libraries**: Centralizing shared code in `libs/` promotes reuse and reduces duplication, leading to a more maintainable codebase.

##### 4.3.2 Scalability and Maintainability

- **Ease of Expansion**: The flat structure within `apps/` allows for straightforward addition of new applications or microservices without deep nesting, facilitating scalability as the application grows.
- **Consistent Naming Conventions**: Descriptive and uniform naming across directories and projects improves clarity, making it easier for developers to navigate and understand the repository.

##### 4.3.3 Streamlined Development Processes

- **Unified Tooling**: Centralized configurations in the `config/` directory ensure that all projects adhere to the same development standards, simplifying tooling management.
- **Efficient Dependency Management**: A monorepo allows for easier management of dependencies across projects, reducing version conflicts and simplifying updates.

##### 4.3.4 Enhanced Collaboration

- **Single Source of Truth**: Having all projects within a single repository fosters better collaboration among team members, as changes across different parts of the application can be managed cohesively.
- **Consistent Coding Standards**: Shared configurations and libraries enforce consistent coding practices, improving code quality and reducing the learning curve for new developers.

### Licensing Tiers

#### Free Tier

- Number of Plans: Users can create up to one debt repayment plan.
- Number of Loans per Plan: Each plan can include up to three loans.
- Collaborators per Plan: Collaboration features are not available in the free tier.

**Features Available**:

- Access to basic repayment strategies (Snowball, Avalanche).
- Basic reporting and visualizations.
- Snowflake payments.
- Data import/export functionality.
- Basic email support.

#### Premium Tier

- Number of Plans: Users can create up to five debt repayment plans.
- Number of Loans per Plan: Each plan can include up to 25 loans.
- Collaborators per Plan: Users can invite up to five collaborators per plan.

**Features Available**:

- All features from the Free Tier.
- Access to additional repayment strategies (Debt-to-Interest Ratio, Cash Flow Index, Custom Strategies).
- Multicurrency support with automatic exchange rate updates.
- Integration with financial tools like YNAB and Firefly III.
- Priority email support.

#### Professional Tier

- Number of Plans: Users can create up to ten debt repayment plans.
- Number of Loans per Plan: Each plan can include up to 50 loans.
- Collaborators per Plan: Users can invite up to 10 collaborators per plan.

**Features Available**:

- All features from the Premium Tier.
- Multi-user support with role-based access control.
- Phone and email support.

### Additional Notes

- Free 45-Day Trial for Premium Tier:
  - Users will receive a free 45-day trial of the Premium Tier upon signing up.
- Beta vs. Production Access:
  - While the product is in beta, all users will have access to the Premium Tier. Once the product moves to production, users will have 90 days to choose a suitable licensing plan.

## Domains and Main Components

### User Domain

#### User Management

Manages user accounts, including creation, updates, and deletion of user accounts.

#### Subscription Management

Manages subscriptions, billing cycles, and payment processing, ensuring users have access to the appropriate features based on their subscription tier.

### Plan Domain

#### Plan Management

Manages the lifecycle of debt repayment plans.

#### Plan Generation Engine

Generates debt repayment plans.

#### Report Generation Engine

Generates reports for debt repayment plans.

### Data Domain

#### Synchronization Management

Synchronizes data between all clients and the backend.

#### Conflict Management

Resolves data conflicts that may arise during synchronization.

#### PII Management

Prevents Personally Identifiable Information (PII) from being stored in the debt repayment plan.

#### Data Portability Management

Manages manual data import/export processes.

#### Third-Party Integration

Imports and updates loan information from third-party sources such as YNAB.

### Mangement Domain

## Architecture Diagrams

### C4 Context Diagram

[Diagram code or image would be placed here.]

### C4 Container Diagram

Provides a high-level overview of the software architecture.

[Diagram code or image would be placed here.]

### C4 Component Diagram

Details the internal structure of frontend and backend components.

[Diagram code or image would be placed here.]

### C4 Code Diagram

Shows classes, interfaces, and their relationships within the codebase.

[Diagram code or image would be placed here.]

### C4 Deployment Diagram

Illustrates the deployment environment.

[Diagram code or image would be placed here.]

## Data Design

### Database Schemas

#### Loans Data Storage

- Database: MongoDB Atlas

**Loan Document Structure**:

- loanId: Unique identifier
- userId: Reference to the user (non-PII)
- balance: Remaining balance
- interestRate: Annual interest rate
- monthlyPayment: Current payment amount
- currency: Currency code
- versionNumber: For conflict detection
- lastUpdatedAt: Timestamp for synchronization
