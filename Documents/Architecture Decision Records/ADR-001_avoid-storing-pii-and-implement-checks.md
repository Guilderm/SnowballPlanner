# Decision to Avoid Storing PII and Implement Checks for Accidental Submission

- Date: 2024-09-20

## Status

- Accepted

## Lineage

- Independent

### Context

- **Problem**:
  - Our product, DebtFreePlanner, collects user input related to financial data. However, storing Personally Identifiable Information (PII), including Social Security Numbers (SSNs), full names, and bank account details, introduces significant compliance and security risks.
  - DebtFreePlanner, also has fiels that leand themself to the tentering of these information, such as 'loan name' and 'notes'.
  - To comply with **GDPR**, **CCPA**, and other privacy regulations, we must ensure that the system does not store or process any unnecessary PII.
- **Need**:
  - We do **not need most of this sensitive data** (e.g., SSNs, bank account numbers, full names) to effectively create debt-free plans. The essential information for a debt repayment strategy, such as debts, interest rates, and payment schedules, does not require storing personally identifiable information.
  - By not storing PII, we will **greatly benefit** from reducing the security risk of being viewed as a **"honeypot"** for attackers who target databases containing sensitive personal data.

### Decision

- The system **will not store any PII** such as:

  1. Full names
  2. Social Security Numbers (SSNs)
  3. Bank account details
  4. Other sensitive personal data that can be used to identify individuals.

- **Checks for Accidental Submission**:
  - **JavaScript Content Moderation Package**: Instead of using regex filters, we will leverage a content moderation library or service (such as **`PII-Detector`** or **`Google Cloud Data Loss Prevention (DLP)`**) to automatically detect and handle any PII submitted by users. These packages are more sophisticated than regex and provide better accuracy for detecting sensitive information.
  - **User Warnings**: If any potential PII is detected, the user will be alerted with a **warning message** and asked to remove it before submission.
  - **Data Scrubbing**: Implement checks to reject or scrub submissions containing flagged patterns, ensuring no PII is stored in the database.
- **PII Policies and Privacy Notices**: Clear privacy policies will be shown to users, informing them not to submit sensitive PII and outlining the steps taken to protect their data.

### Alternatives Considered

1. **Allow Storing PII with Encryption**:
   - Storing PII and encrypting it at rest was considered but rejected due to the increased regulatory compliance burden (e.g., auditing, reporting, and user rights to data access and deletion).
   - Encryption alone does not eliminate risks like unauthorized access or breaches.
2. **Rely on User Education Alone**:
   - Relying solely on privacy policies and user education to inform users not to submit PII was considered but dismissed as insufficient. Users may still accidentally input sensitive information, requiring proactive technical measures like content moderation.

### Consequences

- **Positive**:

  - **Compliance**: By not storing PII, the system will remain compliant with GDPR, CCPA, and other data protection regulations.
  - **Security**: Eliminating the storage of sensitive PII reduces the risk of exposure in the event of a data breach.
  - **User Trust**: Users will have greater trust in the platform, knowing that it does not store or require sensitive personal information.
  - **Reduced Risk**: By avoiding the collection of PII, we reduce the likelihood of becoming a **"honeypot"** for attackers who specifically target systems with sensitive data, decreasing the overall security threat to the platform.
  - **Efficiency**: Using a specialized content moderation package reduces false positives and offers a more sophisticated and accurate detection system compared to regex-based solutions.

- **Negative**:
  - **User Friction**: Implementing content moderation and warnings may introduce slight friction in the user experience, especially if false positives are detected, leading to frustration.
  - **Limitation in Services**: By avoiding PII storage, certain future features requiring personal details (such as more personalized financial recommendations) may be harder to implement.

### Related ADRs

- N/A

### Links and References

- [General Data Protection Regulation (GDPR)](https://gdpr-info.eu/)
- [California Consumer Privacy Act (CCPA)](https://oag.ca.gov/privacy/ccpa)
- [Google Cloud Data Loss Prevention (DLP)](https://cloud.google.com/dlp)
- [PII-Detector JavaScript Library](https://www.npmjs.com/package/pii-detector)

### Notes

- Continuous improvement in the content moderation algorithm will be necessary to reduce false positives and improve user experience.
- Regular audits will be conducted to ensure no accidental PII is stored in the database.
