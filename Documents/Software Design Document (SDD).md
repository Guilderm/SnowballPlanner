# Software Design Document (SDD)

## Introduction

The purpose of the Software Design Document (SDD) is to provide a comprehensive overview of the system's structure, components, and data design, facilitating a clear understanding among stakeholders and guiding the development process. It is developed based on the Product Requirements Document (PRD) following the Engineering Standards Guide.

Architecturally significant decisions are documented in an Architecture Decision Record (ADR).

## Table of Contents

1. [Infrastructure](#1-infrastructure)
   1. [Compute](#11-compute)
      1. [Frontend Hosting: Cloudflare Pages](#111-frontend-hosting-cloudflare-pages)
      2. [Backend Service: Google Cloud Run](#112-backend-service-google-cloud-run)
      3. [Infrastructure as Code (IaC): Google Cloud Deployment Manager](#113-infrastructure-as-code-iac-google-cloud-deployment-manager)
   2. [Secure Access Service Edge](#12-secure-access-service-edge)
   3. [Data Persistence](#13-data-persistence)
   4. [Observability](#14-observability)
   5. [Repository and CI/CD Pipeline](#15-repository-and-cicd-pipeline)
   6. [Email Service](#16-email-service)
   7. [Authentication and Authorization](#17-authentication-and-authorization)
   8. [Other Services](#18-other-services)
   9. [Backup and Disaster Recovery](#19-backup-and-disaster-recovery)
2. [Application Frameworks, Languages, and Libraries](#2-application-frameworks-languages-and-libraries)
   1. [System Architecture and Design](#21-system-architecture-and-design)
   2. [Frontend](#22-frontend)
   3. [Backend](#23-backend)
   4. [Caching Strategy](#24-caching-strategy)
      1. [PRPL Strategy](#241-prpl-strategy)
      2. [SWR Strategy](#242-swr-strategy)
      3. [Client-Side Caching](#243-client-side-caching)
      4. [CDN Caching](#244-cdn-caching)
      5. [Optimization via Build Tools](#245-optimization-via-build-tools)
      6. [Summary of Caching Headers](#246-summary-of-caching-headers)
      7. [Additional Considerations](#247-additional-considerations)
      8. [Potential Gotchas to Watch For](#248-potential-gotchas-to-watch-for)
      9. [Final Recommendations](#249-final-recommendations)
   5. [Content Moderation and PII Detection](#25-content-moderation-and-pii-detection)
3. [Data Security and Privacy](#3-data-security-and-privacy)
   1. [No Storage of PII](#31-no-storage-of-pii)
   2. [Secure Protocols](#32-secure-protocols)
   3. [Data Sanitization and Validation](#33-data-sanitization-and-validation)
   4. [Data Encryption](#34-data-encryption)
   5. [Data Deletion](#35-data-deletion)
4. [Data Synchronization and Conflict Resolution Strategy](#4-data-synchronization-and-conflict-resolution-strategy)
   1. [Context](#41-context)
   2. [Data Structure](#42-data-structure)
      1. [Version Tracking](#421-version-tracking)
      2. [Timestamping](#422-timestamping)
   3. [User Modification](#43-user-modification)
      1. [Local Changes](#431-local-changes)
   4. [Conflict Resolution](#44-conflict-resolution)
      1. [Conflict Resolution Interface](#441-conflict-resolution-interface)
      2. [Version Comparison Scenarios](#442-version-comparison-scenarios)
      3. [Mid-Flight Conflict Handling](#443-mid-flight-conflict-handling)
   5. [Synchronization Process](#45-synchronization-process)
      1. [Notification Mechanism](#451-notification-mechanism)
      2. [Rate Limiting Strategy](#452-rate-limiting-strategy)
      3. [Retry Policies When Backend Is Down](#453-retry-policies-when-backend-is-down)
      4. [Fail-Safe Synchronization](#454-fail-safe-synchronization)
      5. [Data Retrieval](#455-data-retrieval)
   6. [Additional Considerations](#46-additional-considerations)
      1. [Soft Delete Implementation](#461-soft-delete-implementation)
      2. [Handling Aged Datasets](#462-handling-aged-datasets)
      3. [User Notifications](#463-user-notifications)
5. [Licensing Overview](#5-licensing-overview)
   1. [Licensing Tiers](#51-licensing-tiers)
      1. [Free Tier](#511-free-tier)
      2. [Premium Tier](#512-premium-tier)
      3. [Professional Tier](#513-professional-tier)
   2. [Additional Notes](#52-additional-notes)
6. [Architecture Diagrams](#6-architecture-diagrams)
   1. [C4 Context Diagram](#61-c4-context-diagram)
   2. [C4 Container Diagram](#62-c4-container-diagram)
   3. [C4 Component Diagram](#63-c4-component-diagram)
   4. [C4 Code Diagram](#64-c4-code-diagram)
   5. [C4 Deployment Diagram](#65-c4-deployment-diagram)
7. [Data Design](#7-data-design)
   1. [Database Schemas](#71-database-schemas)

## 1. Infrastructure

### 1.1. Compute

#### 1.1.1. Frontend Hosting: Cloudflare Pages

**Rationale:**

- **Speed:** Cloudflare Pages, combined with Cloudflare’s CDN, is one of the fastest SaaS solutions for serving static web pages.
- **Cost:** Cloudflare's free tier is among the most generous in the industry.
- **Performance Optimization:** Ensures frontend performance is not affected by backend load or cold starts.
- **Cost Reduction:** Avoids additional costs associated with origin hits and keeping backend services warm during idle periods.
- **Analytics and Monitoring:** Leverages Cloudflare Web Analytics, particularly Core Web Vitals.
- **Local-First Approach:** Hosting on Cloudflare Pages ensures a responsive user experience independent of backend performance.
- **Simplified Deployment:** Seamlessly integrates with GitHub for automated builds and deployments.

#### 1.1.2. Backend Service: Google Cloud Run

**Rationale:**

- **Scalability and Flexibility:** Provides scalable, serverless container execution suitable for backend services.
- **Cost Management:** Pay-as-you-go pricing eliminates the need to keep instances warm.
- **Support for Node.js:** Supports longer execution times and resource-intensive operations.
- **Separation of Concerns:** Allows independent scaling and optimization of frontend and backend services.
- **Integration with GCP Services:** Enhances functionality and ease of management.

**Why Not Google App Engine:**

- **Flexibility:** Cloud Run allows greater customization and control over the runtime environment.
- **Scalability Control:** Provides more granular control over scaling parameters and resource allocation.
- **Cost Efficiency:** More cost-effective for workloads with variable traffic.
- **Deployment Workflow:** Integrates seamlessly with modern CI/CD pipelines.
- **Performance Considerations:** Avoids performance limitations like longer cold start times.

#### 1.1.3. Infrastructure as Code (IaC): Google Cloud Deployment Manager

**Features:**

- **Version-Controlled Templates:** Utilizes GitHub for maintaining infrastructure templates.
- **Budget Monitoring:** Leverages GCP’s budget monitoring tools to prevent unexpected costs.

### 1.2. Secure Access Service Edge

**Cloudflare Services:**

- **DNS Hosting:** Manages domain name resolution.
- **Content Delivery Network (CDN):** Delivers frontend assets quickly.
- **Web Application Firewall (WAF):** Protects against common web vulnerabilities.
- **SSL Certificates:** Ensures secure communication.
- **Domain Name Registration:** Simplifies domain management.

### 1.3. Data Persistence

- **NoSQL Database:** **MongoDB Atlas** (Free Tier)
  - Handles unstructured data and document storage.
- **SQL Database:** **Oracle** (Free Tier)
  - Manages structured data requiring relational features.
- **Browser Storage:** **IndexedDB** (Alternatively, SQLite)
  - Supports local-first approach by enabling efficient local data storage.

### 1.4. Observability

- **Monitoring Dashboard:** **Grafana Cloud**
  - Centralizes logs, telemetry, and tracing.
- **Error Tracking and Performance Monitoring:** **Sentry**
  - Provides real-time error tracking and performance monitoring.
- **Alerting and Incident Management:** **PagerDuty**
  - Manages alerts and incidents.

### 1.5. Repository and CI/CD Pipeline

- **Version Control:** **GitHub**
  - Hosts the codebase with robust version control.
- **CI/CD Pipelines:** **GitHub Actions**
  - Automated builds, testing, and deployments.
- **Automated Testing and Code Quality Tools:**
  - **Unit and Integration Testing:** Jest
  - **UI Component Testing:** Storybook
  - **End-to-End (E2E) Testing:** Playwright
  - **Linting and Formatting:** ESLint, Prettier
  - **Code Quality Analysis:** SonarQube, Snyk
- **Dependency Management Tools:** npm audit and GitHub Dependabot
  - Monitors and updates dependencies.

### 1.6. Email Service

- **Transactional Emails:** **Mailjet**
  - Manages the sending of transactional emails.

### 1.7. Authentication and Authorization

- **Identity Provider (IdP):** **Auth0**
  - Handles user authentication and authorization.

### 1.8. Other Services

- **Secrets Management:** **Google Cloud Secret Manager**
  - Securely stores API keys, tokens, and other sensitive information.

### 1.9. Backup and Disaster Recovery

- **Repositories:**
  - Regularly clone or pull updates to local storage.
- **Databases:**
  - **MongoDB Atlas:** Built-in backup tools or scheduled exports.
  - **Oracle Free Tier:** Built-in backup or export functionality.
- **Automation Tools:**
  - Scripts for backup scheduling and management.

## 2. Application Frameworks, Languages, and Libraries

### 2.1. System Architecture and Design

- **System Architecture:** **3-Tier Architecture**
- **Design Philosophy:** **Local-First Approach with Optimistic Updates**

  **Rationale:**

  - **Enhanced User Experience:** Allows offline functionality and synchronization.
  - **Reduced Dependency on Backend Availability:** Ensures frontend responsiveness.
  - **Cost Reduction:** Minimizes backend infrastructure usage.
  - **Scalability:** Facilitates easier scaling as the application grows.

### 2.2. Frontend

- **Language:** **JavaScript**
- **Framework:** **React**
- **Hosting Platform:** **Cloudflare Pages**

  **Rationale:**

  - **Performance Optimization:** Ensures frontend performance is not affected by backend load.
  - **Cost Efficiency:** Eliminates costs associated with origin hits.
  - **Analytics and Monitoring:** Utilizes Cloudflare Web Analytics.
  - **Limitations of Cloudflare Workers:** Necessitates separation of frontend and backend services.

- **Design Methodology:** **Layered Architecture with Atomic Design**
- **UI Libraries and Tools:** **Tailwind CSS**
- **Routing:** **React Router**
- **Key Features:**
  - **Optimistic UI Updates**
  - **Service Workers**

### 2.3. Backend

- **Language:** **JavaScript**
- **Framework:** **Node.js with Express.js**
- **Hosting Platform:** **Google Cloud Run**

  **Rationale:**

  - **Scalability and Flexibility**
  - **Cost Management**
  - **Support for Node.js**
  - **Separation of Concerns**
  - **Integration with GCP Services**

  **Why Not Google App Engine:**

  - **Flexibility**
  - **Scalability Control**
  - **Cost Efficiency**
  - **Deployment Workflow**
  - **Performance Considerations**

- **Design Methodology:** **Layered Architecture**
- **API Design Style:** **RESTful**
- **Security Middleware:**
  - **Helmet**
  - **Express-Rate-Limit**
- **Additional Middleware:**
  - **CORS Handling**
  - **Body Parsing**

### 2.4. Caching Strategy

We will utilize the **stale-while-revalidate (SWR)** strategy, complemented by the **PRPL** strategy.

#### 2.4.1. PRPL Strategy

- **Push:** Use HTTP/2 Server Push or Preload.
- **Render:** Prioritize initial view rendering.
- **Pre-cache:** Cache assets and routes in the background.
- **Lazy-load:** Load non-critical resources when needed.

#### 2.4.2. SWR Strategy

Serves content immediately while fetching the latest version in the background.

**Rationale:**

- **Static Assets:** Infrequent changes make cache-busting ideal.
- **HTML Documents:** Short cache lifetime for timely updates.
- **API Responses and Dynamic Content:** No caching to ensure current data.

#### 2.4.3. Client-Side Caching

**Cache-Control Headers for Static Assets:**

Cache-Control: max-age=31536000, immutable

#### 2.4.4. CDN Caching

Utilize **Cloudflare’s CDN** and **Cloudinary** for image optimization.

**Cache-Control Headers for Cloudflare:**

Cache-Control: max-age=3600, s-maxage=86400, stale-while-revalidate=86400

#### 2.4.5. Optimization via Build Tools

Utilize **Vite** for efficient builds.

- **Cache Busting**
- **Tree Shaking**
- **Code Splitting**
- **Minification**
- **Compression**

#### 2.4.6. Summary of Caching Headers

- **Static Assets:**

Cache-Control: max-age=31536000, immutable

- **HTML Pages (Client):**
  Cache-Control: max-age=300, stale-while-revalidate=3600

- **HTML Pages (Cloudflare):**
  Cache-Control: max-age=3600, s-maxage=86400, stale-while-revalidate=86400

#### 2.4.7. Additional Considerations

- **Content Hashing**
- **Service Workers**
- **Monitoring and Analytics**
- **Security**

#### 2.4.8. Potential Gotchas to Watch For

1. **CORS Misconfigurations**
2. **Over-Caching Dynamic Content**
3. **Cache Invalidation for Non-Hashed Assets**
4. **Service Worker Conflicts**
5. **Authentication Token Exposure**

#### 2.4.9. Final Recommendations

- **Implement a Robust Build Process**
- **Leverage Cloudflare’s Caching Capabilities**
- **Ensure Secure and Efficient Authentication**
- **Regularly Monitor and Adjust**
- **Consider Future Scalability**

### 2.5. Content Moderation and PII Detection

**Libraries/Services:**

- `pii-detector` npm package on the frontend.
- Google Cloud Data Loss Prevention (DLP) API on the backend.

## 3. Data Security and Privacy

### 3.1. No Storage of PII

The system shall not store any Personally Identifiable Information (PII), including:

- Full names
- Social Security Numbers (SSNs)
- Bank account details

### 3.2. Secure Protocols

- **HTTPS/3** with fallback to **HTTPS/2**
- **TLS 1.3** with fallback to **TLS 1.2**

### 3.3. Data Sanitization and Validation

- **Frontend Checks:** Verifies data validity and absence of PII before submission.
- **Backend Checks:** Performs additional checks using external services like Google's Sensitive Data Protection.

### 3.4. Data Encryption

**Data at Rest:**

- Encrypted using AES-256 encryption.
- Client-side data stored securely using encryption mechanisms.

**Data in Transit:**

- TLS 1.2 or higher encryption for all data transmission.

### 3.5. Data Deletion

- **Soft Delete:** Data is soft-deleted and permanently deleted after 90 days.

## 4. Data Synchronization and Conflict Resolution Strategy

### 4.1. Context

Implements **Optimistic Concurrency Control** to manage concurrent data access and modifications.

### 4.2. Data Structure

#### 4.2.1. Version Tracking

- Each record and document includes a version number.

#### 4.2.2. Timestamping

- Timestamps are recorded as epoch time.

json
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

### 4.3. User Modification

#### 4.3.1. Local Changes

- **Optimistic Updates:** Changes made by loan recipients are applied immediately using optimistic updates, enhancing responsiveness by reflecting changes in the user interface without waiting for server confirmation.
- **Temporary Storage:** Local changes are temporarily stored on the client, encrypted, and queued for synchronization with the backend once the network connection is available or at scheduled intervals.

### 4.4. Conflict Resolution

#### 4.4.1. Conflict Resolution Interface

Conflicting record versions are displayed side by side, with differences highlighted. Loan recipients are prompted to select which version to retain, enabling manual conflict resolution and ensuring informed decision-making.

#### 4.4.2. Version Comparison Scenarios

- **Case 1:** Local Version < Database Version  
  **Action:** Log a warning and prompt the loan recipient for manual resolution.  
  **Reason:** The server has a more recent update than the local version.

- **Case 2:** Local Version == Database Version  
  **Action:** Log an informational message and proceed with the update.  
  **Reason:** No conflict detected; versions are in sync.

- **Case 3:** Local Version > Database Version  
  **Action:** Log an error and prompt the loan recipient for manual resolution.  
  **Reason:** Indicates potential data inconsistency or corruption, requiring user intervention.

#### 4.4.3. Mid-Flight Conflict Handling

- **Continue Updating:** Loan recipients can continue to make updates to a record, even if newer versions are received.
- **Version Change Detection:** If a new version of a record is received before initializing a synchronization process, the system checks for differences and initiates manual resolution if conflicts are detected.

### 4.5. Synchronization Process

#### 4.5.1. Notification Mechanism

**Publish-Subscribe Pattern:** The backend notifies all active online devices using a publish-subscribe (pub/sub) pattern to ensure data consistency across sessions. When changes are made to the dataset, all active devices are notified to update their local records accordingly.

#### 4.5.2. Rate Limiting Strategy

- **Fixed Window:** Up to six synchronization requests are allowed every five minutes.
- **Burst Capacity:** Two additional synchronization requests are allowed every ten minutes.
- **Cooldown Period:** After the synchronization request limit is exceeded, the system enters a five-minute cooldown period before allowing more requests.

#### 4.5.3. Retry Policies When Backend Is Down

- **Initial Retry Delay:** 30 seconds.
- **Exponential Backoff Factor:** 2.
- **Maximum Retry Attempts:** 3 attempts.
- **Maximum Retry Delay:** 2 minutes.
- **Randomized Cooldown:** Between 5 and 15 minutes after maximum attempts are reached.

#### 4.5.4. Fail-Safe Synchronization

- **Automatic Synchronization:** The application performs an automatic synchronization every 30 minutes, regardless of detected changes.
- **Error Logging:** If the client receives a dataset that is younger than three minutes compared to its own, it logs an error, indicating a potential failure in the publish-subscribe mechanism.
- **Data Corruption Handling:** If the dataset timestamps match but a record is out of sync, the system logs an error due to potential data corruption. A soft delete is performed on those records, and the loan recipient is notified.
- **Synchronization Cease Conditions:** After three consecutive synchronizations with no changes detected, the application assumes the loan recipient is inactive and ceases further synchronization to prevent unnecessary backend load.

#### 4.5.5. Data Retrieval

- **Upon Connection:** When the client reconnects to the network, it retrieves the latest version of the document from the server.
- **Download Entire Document:** The entire document (expected size: 0.01 to 0.03 MB) is downloaded during each synchronization event.

**Advantages:**

- **Data Integrity:** Ensures the entire dataset remains consistent with the source of truth, preventing partial or corrupted data states.
- **Simplicity:** Given the small data size, full synchronization is more efficient than implementing complex synchronization techniques like delta synchronization or conflict-free replicated data types (CRDTs).

### 4.6. Additional Considerations

#### 4.6.1. Soft Delete Implementation

- **Soft Delete:** Records marked for deletion are retained for up to 90 days before permanent removal.
- **Purpose:** Allows recovery of accidentally deleted records or those erroneously deleted by the synchronization process.

#### 4.6.2. Handling Aged Datasets

- **Old Data Deletion:** Clients coming online with data entries older than 45 days compared to the persistent layer will have those entries soft deleted, and the loan recipient will be notified.
- **Rationale:** It is unlikely the loan recipient still intends to use this outdated data, especially if they have worked with an updated dataset. However, the data is soft deleted in case it is still useful.

#### 4.6.3. User Notifications

- **Real-Time Updates:** Loan recipients receive toast notifications for any updates to their records, ensuring real-time awareness.
- **Deferred Notifications:** In cases of soft deletes or suspected data corruption, an email notification is sent to the loan recipient.

## 5. Licensing Overview

DebtFreePlanner offers a tiered licensing model to accommodate the varying needs of loan recipients. The licensing is structured to provide essential features in the free version, while offering enhanced capabilities in the paid tiers. This section outlines the limitations and features associated with each licensing level.

### 5.1. Licensing Tiers

#### 5.1.1. Free Tier

- **Number of Plans:** Users can create up to **one debt repayment plan**.
- **Number of Loans per Plan:** Each plan can include up to **three loans**.
- **Collaborators per Plan:** Collaboration features are **not available** in the free tier.
- **Features Available:**
  - Access to basic repayment strategies (**Snowball**, **Avalanche**).
  - Basic reporting and visualizations.
  - **Snowflake payments**.
  - Data import/export functionality.
  - Basic **email support**.

#### 5.1.2. Premium Tier

- **Number of Plans:** Users can create up to **five debt repayment plans**.
- **Number of Loans per Plan:** Each plan can include up to **25 loans**.
- **Collaborators per Plan:** Users can invite up to **five collaborators** per plan.
- **Features Available:**
  - All features from the **Free Tier**.
  - Access to additional repayment strategies (**Debt-to-Interest Ratio**, **Cash Flow Index**, **Custom Strategies**).
  - **Multicurrency support** with automatic exchange rate updates.
  - Integration with financial tools like **YNAB** and **Firefly III**.
  - **Snowflake payments**.
  - Data import/export functionality.
  - **Priority email support**.

#### 5.1.3. Professional Tier

- **Number of Plans:** Users can create up to **ten debt repayment plans**.
- **Number of Loans per Plan:** Each plan can include up to **50 loans**.
- **Collaborators per Plan:** Users can invite up to **10 collaborators** per plan.
- **Features Available:**
  - All features from the **Premium Tier**.
  - Integration with financial tools like **YNAB** and **Firefly III**.
  - **Multi-user support** with **role-based access control**.
  - **Phone and email support**.

### 5.2. Additional Notes

- **Free 45-Day Trial for Premium Tier:**  
  Users will receive a **free 45-day trial** of the **Premium Tier** upon signing up.
- **Beta vs. Production Access:**  
  While the product is in **beta**, all users will have access to the **Premium Tier**. Once the product moves to **production**, users will have **90 days** to choose a suitable licensing plan.

## 6. Architecture Diagrams

### 6.1. C4 Context Diagram

### 6.2. C4 Container Diagram

Provides a high-level overview of the software architecture.

[Diagram code or image would be placed here.]

### 6.3. C4 Component Diagram

Details the internal structure of frontend and backend components.

[Diagram code or image would be placed here.]

### 6.4. C4 Code Diagram

Shows classes, interfaces, and their relationships within the codebase.

[Diagram code or image would be placed here.]

### 6.5. C4 Deployment Diagram

Illustrates the deployment environment.

[Diagram code or image would be placed here.]

## 7. Data Design

### 7.1 Database Schemas

#### Loans Data Storage

**Database:** MongoDB Atlas

**Loan Document Structure:**

- `loanId`: Unique identifier
- `userId`: Reference to the user (non-PII)
- `balance`: Remaining balance
- `interestRate`: Annual interest rate
- `monthlyPayment`: Current payment amount
- `currency`: Currency code
- `versionNumber`: For conflict detection
- `lastUpdatedAt`: Timestamp for synchronization

**Client-Side Persistence:**

- Loans data is also persisted locally on the client using mechanisms like IndexedDB or LocalStorage for offline access and optimistic UI updates.
