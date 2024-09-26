# Software Design Document (SDD)


decicion that we has been taken
System Architecture:	3-Tier Architecture
 design philosophy: Local-First Approach
Frontend Framework:	React
Frontend Design Methodology:	Atomic Design
UI Libraries and Tools: Tailwind CSS
Backend Framework:	Node.js with Express.js
Backend Design Methodology: layered architecture
API Design Style: RESTfull
Database Choice:	MongoDB
Cloud Provider:	Google Cloud Platform (GCP)
Deployment Architecture:	Serverless
CI/CD Tools:	GitHub Actions
Testing Frameworks:	Jest
Autenticaton: Auth0

Authentication and Authorization:	JWT with OAuth 2.0 Enhancements
Version Control and Collaboration:	GitHub
Monitoring and Logging:	Prometheus and Grafana

# Conflict Detection, Resolution, and Prevention Strategy

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
