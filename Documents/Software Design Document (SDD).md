# Software Design Document (SDD)

## Technology Stack

### Infrastructure

#### Compute

- **Compute Service:** **Google App Engine (GAE)**
  - Utilizing GAE's built-in load balancing and auto-scaling features.
  - **Infrastructure as Code (IaC):** **Google Cloud Deployment Manager**
    - Keeps IaC templates version-controlled using GitHub.
  - **Budget Monitoring:** Utilizes GCP's budget monitoring tools to prevent unexpected costs.

#### Secrets Management

- **Tool:** **Google Cloud Secret Manager**
  - Integrated into GitHub Actions for CI/CD pipelines.
  - Ensures secrets are securely managed and access is restricted via IAM roles.

### Networking

#### DNS and Content Delivery

- **DNS Hosting, CDN, and WAF:** **Cloudflare**
  - Provides DNS management, caching, security features, and SSL certificates.
- **SSL Certificates:** Cloudflare (with fallback to Let's Encrypt)

### Monitoring, Logging, and Alerting

- **Monitoring Dashboard:** **Grafana Cloud**
  - Centralizes logs, telemetry, and tracing from Cloudflare, GCP, and GitHub Actions.
- **Error Tracking and Performance Monitoring:** **Sentry**
  - Integrated into Grafana Cloud for comprehensive monitoring.
- **Alerting and Incident Management:** **PagerDuty**
  - For alerting and potentially hosting a status page.

### Databases

- **NoSQL Database:** **MongoDB Atlas (Free Tier)**
  - For unstructured data and document storage.
- **SQL Database:** **Oracle Free Tier**
  - For structured data requiring relational database features.

### Version Control and CI/CD

- **Version Control:** **GitHub**
- **CI/CD Pipelines:** **GitHub Actions**
  - Automated builds, tests, and deployments.
- **Infrastructure as Code (IaC):** **Google Cloud Deployment Manager**
  - Manages infrastructure configurations declaratively.

### Email Service

- **Transactional Emails:** **Mailjet**
  - Chosen for its generous free tier in the long run.
  - Ensures proper email authentication (SPF, DKIM, DMARC) is set up.

### Authentication and Authorization

- **Identity Provider (IdP):** **Auth0**
  - Provides robust authentication and authorization features.
  - Utilizes security features like anomaly detection and enables Multi-Factor Authentication (MFA).

### Application Frameworks and Languages

#### System Architecture and Design

- **System Architecture:** **3-Tier Architecture**
- **Design Philosophy:** **Local-First Approach**

#### Frontend

- **Language:** **JavaScript**
- **Framework:** **React**
- **Design Methodology:** **Atomic Design**
- **UI Libraries and Tools:** **Tailwind CSS**
- **State Management:** **Redux** or **Context API** (as needed)

#### Backend

- **Language:** **JavaScript**
- **Framework:** **Node.js with Express.js**
- **Design Methodology:** **Layered Architecture**
- **API Design Style:** **RESTful**

### Testing and Code Quality

- **Testing Frameworks:** **Jest**
  - For unit and integration testing.
- **Linting and Formatting:** **ESLint**, **Prettier**
- **Code Quality Analysis:** **SonarQube**
- **Security Testing:**
  - **Tools:** **npm audit**, **Snyk**, **GitHub Dependabot**
    - To identify and fix vulnerabilities in dependencies.
- **Content Moderation and PII Detection:**
  - **Libraries/Services:**
    - **PII Detection Library:** **`pii-detector`** npm package or similar.
    - **Alternative:** **Google Cloud Data Loss Prevention (DLP) API**
  - **Purpose:** To detect and prevent accidental submission of PII in user inputs.
  - **Implementation:**
    - Integrate PII detection in both frontend and backend validation processes.
    - Provide user warnings and prevent storage of sensitive data.

### Web Analytics

- **Web Analytics:** **Google Analytics**
  - To track user interactions and gather insights.
  - Ensures compliance with privacy regulations by implementing consent mechanisms.

### Static Asset Hosting

- **Current Hosting:** **Google App Engine**
  - For serving frontend assets.
- **Future Consideration:** Potentially move static asset hosting to **Cloudflare** for CDN benefits.

### Backup and Disaster Recovery

- **Strategy:** Back up repositories and databases to local storage (old computer) via scripts or tools yet to be defined.
  - **Repositories:** Regularly clone or pull updates to local storage using scripts or tools like `git cron jobs`.
  - **Databases:** Schedule backups and download snapshots.
    - **MongoDB Atlas:** Use built-in backup tools or schedule exports.
    - **Oracle Free Tier:** Utilize Oracle's backup features or export data regularly.
- **Automation Tools:** Consider using automation tools or scripts to schedule and manage backups.

### Project Management

- **Issue Tracking and Roadmapping:** Managed using [**Linear.app**](https://linear.app/)
  - **Purpose:** Organize user stories, manage the product backlog, and plan sprints effectively.
  - **Features Used:**
    - User Story Management
    - Sprint Planning
    - Roadmap Visualization

## Conflict Detection, Resolution, and Prevention Strategy

## 1. Initial Synchronization

### Data Retrieval

- **Upon connection**, the client retrieves the latest MongoDB document, ensuring it is under 0.03 MB in size.
- Each record (row) within the document includes a **"version number"** to facilitate tracking and conflict detection.
- The entire document is stamped with a **"last updated at"** timestamp to monitor overall changes.

## 2. User Modification

### Local Changes

- **Optimistic Updates:** Users' local changes are applied immediately using optimistic updates to enhance responsiveness.
- **Temporary Storage:** These changes are temporarily stored locally and queued for synchronization with the backend.

### Reconciliation During Sync

- **Synchronization Process:** When synchronization occurs, local changes are reconciled with the latest data from the server.
- **Data Consistency:** The system ensures that updates are merged appropriately, maintaining data consistency.

## 3. Mid-Flight Conflict Handling

### User Interaction

- **Continuous Updates:** Users are permitted to continue making updates while synchronization is in progress.
- **Version Verification:** After completing an update, the system verifies the version number of the affected records.

### Conflict Detection

- **Version Change Detection:** If the version number has changed during the update process, indicating a conflict, both versions of the record are presented to the user for manual resolution.
- **User Resolution Interface:** The user is shown the conflicting versions side by side with highlighted differences, allowing them to choose which version to retain.

## 4. Conflict Detection and Resolution

### Version Comparison

#### Local Version < Database Version

- **Action:** Log a warning and prompt the user for manual resolution.
- **Reason:** Indicates that the server has a more recent update than the local copy.

#### Local Version == Database Version

- **Action:** Log informational message and proceed with the update.
- **Reason:** No conflict detected; versions are in sync.

#### Local Version > Database Version

- **Action:** Log an error and prompt the user for manual resolution.
- **Reason:** Indicates potential data inconsistency or corruption, requiring user intervention.

## 5. Post-Update Procedures

### Notification

- **Pub/Sub Pattern:** The backend notifies all active online devices via a publish-subscribe (pub/sub) pattern to ensure data consistency across sessions.

### Fail-Safe Synchronization

- **Automatic Sync:** The application performs an automatic sync every 30 minutes, regardless of detected changes, to maintain data integrity.
- **Sync Cease Conditions:** If there are three consecutive syncs with no changes detected, the application assumes the user has left the application open without active work and ceases further synchronization to prevent unnecessary backend load.

## 6. Synchronization Process

### Full Document Sync

- **Download Entire Document:** The entire document (under 0.03 MB) is downloaded during each synchronization event.

#### Advantages

- **Data Integrity:** Ensures that the entire dataset is consistent, preventing partial or corrupted data states.
- **Simplicity:** Avoids the complexity associated with delta synchronization due to the small size of the document.

## 7. Additional Notes

### Pre-Sync Validation

- **Difference Check:** Before initiating reconciliation, the system checks for any differences between the local and server versions to determine if synchronization is necessary.

### Conflict Resolution Interface

- **Highlight Differences:** When conflicts arise, differences between records are highlighted and displayed side by side.
- **User Prompt:** Users are prompted to select which version to keep, ensuring informed decision-making.

### Soft Delete Implementation

- **Soft Delete:** Records marked for deletion are retained for up to 90 days before permanent removal.
- **Purpose:** Allows users to recover accidentally deleted records or those deleted erroneously by the synchronization process.

### User Notifications

- **Real-Time Updates:** Users receive toast notifications informing them of any updates to their records, ensuring they are aware of changes in real-time.

### Scope Limitation

- **Focus Area:** This strategy exclusively addresses Conflict Detection, Resolution, and Prevention.
- **Other Processes:** Other critical processes, such as data sanitation and validation, are covered in the Data Management Strategy.

erorr log if manual sync results in a documente that needed synking, or a row with a more updated version
apps coming on line that has a data entry older than 45 days in restpect to the on that is on the database, that data will be soft deleted and the user notifyed, given that it is not likely that the user intented for this data to still be use. only delte those that have a difence

[Optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control)
