# Software Design Document (SDD)

## Introduction

The purpose of the Software Design Document (SDD) is to provide a comprehensive overview of the system's structure, components, and data design, facilitating a clear understanding among stakeholders and guiding the development process. It is developed based on the Product Requirements Document (PRD) following the Engineering Standards Guide.

Architecturally significant decisions are documented in an Architecture Decision Record (ADR).

## Table of Contents

1. [Infrastructure](#1-infrastructure)
   - [1.1. Compute](#11-compute)
   - [1.2. Secure Access Service Edge](#12-secure-access-service-edge)
   - [1.3. Data Persistence](#13-data-persistence)
   - [1.4. Observability](#14-observability)
   - [1.5. Repository and CI/CD Pipeline](#15-repository-and-cicd-pipeline)
   - [1.6. Email Service](#16-email-service)
   - [1.7. Authentication and Authorization](#17-authentication-and-authorization)
   - [1.8. Other Services](#18-other-services)
   - [1.9. Backup and Disaster Recovery](#19-backup-and-disaster-recovery)
2. [Application Frameworks, Languages, and Libraries](#2-application-frameworks-languages-and-libraries)
   - [2.1. System Architecture and Design](#21-system-architecture-and-design)
   - [2.2. Frontend](#22-frontend)
   - [2.3. Backend](#23-backend)
   - [2.4. Content Moderation and PII Detection](#24-content-moderation-and-pii-detection)
3. [Data Security and Privacy](#3-data-security-and-privacy)
   - [3.1. No Storage of PII](#31-no-storage-of-pii)
   - [3.2. Data Sanitization and Validation](#32-data-sanitization-and-validation)
   - [3.3. Data Encryption](#33-data-encryption)
   - [3.4. Data Deletion](#34-data-deletion)
4. [Data Synchronization](#4-data-synchronization)
   - [4.1. Context](#41-context)
   - [4.2. Initial Synchronization](#42-initial-synchronization)
   - [4.3. User Modification](#43-user-modification)
   - [4.4. Mid-Flight Conflict Handling](#44-mid-flight-conflict-handling)
   - [4.5. Conflict Detection and Resolution](#45-conflict-detection-and-resolution)
   - [4.6. Post-Update Procedures](#46-post-update-procedures)
   - [4.7. Synchronization Process](#47-synchronization-process)
   - [4.8. Additional Notes](#48-additional-notes)
5. [Architecture Diagrams](#5-architecture-diagrams)
   - [5.1. Context Diagram](#51-context-diagram)
   - [5.2. Container Diagram](#52-container-diagram)
   - [5.3. Component Diagram](#53-component-diagram)
   - [5.4. Code Diagram](#54-code-diagram)
6. [Data Design](#6-data-design)
   - [6.1. Database Schemas](#61-database-schemas)
7. [Related Documents](#7-related-documents)

---

## 1. Infrastructure

### 1.1. Compute

**Compute Service:** Google App Engine (GAE)

- Built-in load balancing and auto-scaling features.

**Infrastructure as Code (IaC):** Google Cloud Deployment Manager

- Version-controlled templates using GitHub.
- GCP's budget monitoring tools to prevent unexpected costs.

### 1.2. Secure Access Service Edge

**Cloudflare Services:**

- DNS Hosting
- CDN
- WAF
- SSL Certificates (with fallback to Let's Encrypt)
- Domain name registration

### 1.3. Data Persistence

**NoSQL Database:** MongoDB Atlas (Free Tier)

- For unstructured data and document storage.

**SQL Database:** Oracle (Free Tier)

- For structured data requiring relational database features.

**SQLite:**

- For browser storage; alternatively, use IndexedDB.

### 1.4. Observability

**Monitoring Dashboard:** Grafana Cloud

- Centralizes logs, telemetry, and tracing from Cloudflare, GCP, and GitHub Actions.

**Error Tracking and Performance Monitoring:** Sentry

- Integrated into Grafana Cloud for comprehensive monitoring.

**Alerting and Incident Management:** PagerDuty

- For alerting and possibly hosting a status page.

### 1.5. Repository and CI/CD Pipeline

**Version Control:** GitHub

**CI/CD Pipelines:** GitHub Actions

- Automated builds, tests, and deployments.

**Automated Testing and Code Quality Tools:**

- Unit and Integration Testing: Jest
- Linting and Formatting: ESLint, Prettier
- Code Quality Analysis: SonarQube, Snyk

**Dependency Management Tools:** `npm audit` and GitHub Dependabot

### 1.6. Email Service

**Transactional Emails:** Mailjet

### 1.7. Authentication and Authorization

**Identity Provider (IdP):** Auth0

### 1.8. Other Services

**Web Analytics:** Google Analytics

**Secrets Management:** Google Cloud Secret Manager

- Integrated into GitHub Actions for CI/CD pipelines.

### 1.9. Backup and Disaster Recovery

**Repositories:**

- Regularly clone or pull updates to local storage using automated tools like `git` cron jobs.

**Databases:**

- **MongoDB Atlas:** Built-in backup tools or scheduled exports.
- **Oracle Free Tier:** Built-in backup or export functionality.

**Automation Tools:**

- Scripts for backup scheduling and management.

---

## 2. Application Frameworks, Languages, and Libraries

### 2.1. System Architecture and Design

**System Architecture:** 3-Tier Architecture

**Design Philosophy:** Local-First Approach

### 2.2. Frontend

**Language:** JavaScript

**Framework:** React

**Design Methodology:** Atomic Design

**UI Libraries and Tools:** Tailwind CSS

**Routing:** React Router

### 2.3. Backend

**Language:** JavaScript

**Framework:** Node.js with Express.js

**Design Methodology:** Layered Architecture

**API Design Style:** RESTful

**Security Middleware:** Helmet, Express-Rate-Limit

### 2.4. Content Moderation and PII Detection

**Libraries/Services:**

- `pii-detector` npm package or similar on the frontend.
- Google Cloud Data Loss Prevention (DLP) API on the backend.

---

## 3. Data Security and Privacy

### 3.1. No Storage of PII

The system shall not store any Personally Identifiable Information (PII), including:

- Full names
- Social Security Numbers (SSNs)
- Bank account details, including name and number

### 3.2. Data Sanitization and Validation

- **Frontend Checks:** The frontend checks for PII and ensures that the data is valid before submission. It verifies that all information needed to calculate a loan is present and performs calculations locally to ensure values are correct.
- **Backend Checks:** The backend performs additional checks before saving, using external entities such as Google's Sensitive Data Protection.

### 3.3. Data Encryption

**Data at Rest:**

- All data stored in MongoDB Atlas and Oracle databases is encrypted using AES-256 encryption.
- Client-side data persisted locally is stored securely using encryption mechanisms provided by the browser or additional libraries.

**Data in Transit:**

- TLS 1.2 or higher encryption for all data transmission between client and server.

### 3.4. Data Deletion

- **Soft Delete:** Data is soft-deleted and permanently deleted after 90 days, allowing users to recover accidentally deleted data.

---

## 4. Data Synchronization

### 4.1. Context

Users are expected to take 3 to 5 minutes entering a loan and about 1 minute updating a record. They would be doing this once or twice a month. The application will follow the [Optimistic Concurrency Control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) model.

### 4.2. Initial Synchronization

#### Data Retrieval

- **Upon Connection:** The client retrieves the latest MongoDB document, ensuring it is under 0.03 MB in size.
- Each record within the document includes a **"version number"** to facilitate tracking and conflict detection.
- The entire document is stamped with a **"last updated at"** timestamp to monitor overall changes.

### 4.3. User Modification

#### Local Changes

- **Optimistic Updates:** Users' local changes are applied immediately to enhance responsiveness.
- **Temporary Storage:** Changes are temporarily stored locally and queued for synchronization with the backend.

#### Reconciliation During Sync

- **Synchronization Process:** During synchronization, local changes are reconciled with the latest data from the server.
- **Data Consistency:** The system ensures updates are merged appropriately, maintaining data consistency.

### 4.4. Mid-Flight Conflict Handling

#### User Interaction

- **Continuous Updates:** Users can continue making updates while synchronization is in progress.
- **Version Verification:** After completing an update, the system verifies the version number of the affected records.

#### Conflict Detection

- **Version Change Detection:** If the version number has changed during the update process, indicating a conflict, both versions of the record are presented to the user for manual resolution.
- **User Resolution Interface:** Conflicting versions are displayed side by side with highlighted differences, allowing users to choose which version to retain.

### 4.5. Conflict Detection and Resolution

#### Version Comparison

- **Local Version < Database Version**
  - **Action:** Log a warning and prompt the user for manual resolution.
  - **Reason:** Indicates the server has a more recent update than the local copy.
- **Local Version == Database Version**
  - **Action:** Log informational message and proceed with the update.
  - **Reason:** No conflict detected; versions are in sync.
- **Local Version > Database Version**
  - **Action:** Log an error and prompt the user for manual resolution.
  - **Reason:** Indicates potential data inconsistency or corruption, requiring user intervention.

### 4.6. Post-Update Procedures

#### Notification

- **Publish-Subscribe Pattern:** The backend notifies all active online devices via a publish-subscribe (pub/sub) pattern to ensure data consistency across sessions.

#### Fail-Safe Synchronization

- **Automatic Sync:** The application performs an automatic sync every 30 minutes, regardless of detected changes.
- **Sync Cease Conditions:** If there are three consecutive syncs with no changes detected, the application assumes the user has left the application open without active work and ceases further synchronization to prevent unnecessary backend load.

### 4.7. Synchronization Process

#### Rate Limiting Strategy

- **Fixed Window:** 6 sync requests every 5 minutes
- **Burst Capacity:** 2 additional requests every 10 minutes
- **Cooldown Period:** 5 minutes after exceeding the limit

#### Retry Policies When Backend Is Down

- **Initial Retry Delay:** 30 seconds
- **Exponential Backoff Factor:** 2
- **Max Retry Attempts:** 3
- **Max Retry Delay:** 2 minutes
- **Randomized Cooldown:** Between 5 and 15 minutes after max attempts are reached

#### Full Document Sync

- **Download Entire Document:** The entire document (under 0.03 MB) is downloaded during each synchronization event.

##### Advantages

- **Data Integrity:** Ensures the entire dataset is consistent with the source of truth (the data persistence layer), preventing partial or corrupted data states.
- **Simplicity:** Given the small size (0.01 to 0.03 MB), a full synchronization is performed, avoiding the complexity of techniques like Delta Synchronization or Conflict-Free Replicated Data Types (CRDTs).

### 4.8. Additional Notes

#### Pre-Sync Validation

- **Difference Check:** Before initiating reconciliation, the system checks for differences between local and server versions to determine if synchronization is necessary.

#### Conflict Resolution Interface

- **Highlight Differences:** Differences between records are highlighted and displayed side by side when conflicts arise.
- **User Prompt:** Users are prompted to select which version to keep, ensuring informed decision-making.

#### Soft Delete Implementation

- **Soft Delete:** Records marked for deletion are retained for up to 90 days before permanent removal.
- **Purpose:** Allows users to recover accidentally deleted records or those deleted erroneously by the synchronization process.

#### Aged Datasets

- **Old Data Handling:** Clients that come online with data entries older than 45 days compared to the persistent layer will have those entries soft-deleted, and the user will be notified. This is based on the assumption that users have already worked with a more updated dataset.

#### User Notifications

- **Real-Time Updates:** Users receive toast notifications informing them of any updates to their records.
- **Deferred Notifications:** When there is a soft delete or suspected data corruption, an email is sent to the customer.

#### Scope Limitation

- **Focus Area:** This strategy exclusively addresses conflict detection, resolution, and prevention.
- **Other Processes:** Data sanitation and validation are covered elsewhere.

---

## 5. Architecture Diagrams

### 5.1. Context Diagram

Illustrates the system's scope and interactions with users and external systems, such as:

- **Users:** Loan Recipients, Administrators
- **External Systems:** Auth0, Mailjet, Cloudinary, MongoDB Atlas, Oracle Free Tier

### 5.2. Container Diagram

Depicts the high-level technical architecture, including:

- **Frontend:** React application in the user's browser.
- **Backend:** Node.js with Express.js on Google App Engine.
- **Databases:** MongoDB Atlas and Oracle.
- **External Services:** Auth0, Mailjet, Cloudinary.

### 5.3. Component Diagram

Details the components within each container, focusing on backend services and frontend modules.

### 5.4. Code Diagram

Shows classes, interfaces, and their relationships within the codebase.

---

## 6. Data Design

### 6.1. Database Schemas

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

- Loans data is also persisted locally on the client using mechanisms like IndexedDB or Local Storage for offline access and optimistic UI updates.

---

## 7. Related Documents

- **Product Requirements Document (PRD)**
- **Engineering Standards Guide**
- **Architecture Decision Records (ADRs)**
- **Software Test Document (STD)**

---

Thank you for reviewing the updated Software Design Document (SDD). All sections have been proofread, formatted, and numbered appropriately, with an updated Table of Contents for easy navigation.
