# Architecture Decision Record (ADR) Guidelines

- [Introduction](#introduction)
- [File Structure](#file-structure)
  - [ADR Contents](#adr-contents)
  - [ADR Folder Structure](#adr-folder-structure)
  - [Naming Convention](#naming-convention)
  - [Numbering](#numbering)
  - [Title](#title)
- [When to Create an ADR](#when-to-create-an-adr)
- [Lifecycle of an ADR](#lifecycle-of-an-adr)
  - [Statuses](#statuses)
  - [Modifying an ADR](#modifying-an-adr)
- [ADR Template](#adr-template)
- [ADR Example](#adr-example)
- [References](#refences)

---

## Introduction

An [Architecture Decision Record (ADR)](https://en.wikipedia.org/wiki/Architectural_decision) captures [Architecturally Significant Requirements (ASRs)](https://en.wikipedia.org/wiki/Architecturally_significant_requirements) along with the context, rationale, and consequences of each decision. The primary goal of ADRs is to maintain a clear, accessible history of ASRs and the reasoning behind them.

## File structure

### ADR Contents

Each ADR focuses on one specific decision, documenting its context, rationale, consequences, and any alternatives considered. uring the [ADR Template](#adr-template)

### ADR Folder Structure

Each ADR will live in its own markdown file in the `Documents/Architecture Decision Records/` directory.

### Naming Convention

The file name for each ADR should follow this format:

`ADR-<number>_<Abreciated-_decision-title>.md`

### Numbering

- Each ADR should have a unique number, incrementing from `001`.
- Numbers are assigned sequentially and should not be reused, even if an ADR is replaced by another decision. See [Lifecycle of an ADR](#lifecycle-of-an-adr).

### Title

- The title should briefly describe the decision being documented, written in **kebab-case**.
- Keep the title concise but descriptive.

#### Examples

- `ADR-001-database-choice.md`
- `ADR-002-authentication-strategy.md`
- `ADR-003-api-gateway.md`

---

## When to Create an ADR

An ADR should be created whenever an [Architecturally Significant Requirement (ASR)](https://en.wikipedia.org/wiki/Architecturally_significant_requirements) is made. An ASR is any decision that affects the system’s structure, non-functional requirements (such as performance, scalability, or security).

Some examples of decisions that require ADRs:

- Choosing between different databases (e.g., MongoDB vs. PostgreSQL)
- Selecting an authentication mechanism (e.g., JWT vs. OAuth)
- Deciding on a messaging system for microservices
- Choosing a cloud platform (e.g., AWS vs. Google Cloud)
- Implementing a monolithic vs. microservices architecture
- Picking a testing strategy (e.g., TDD vs. BDD)

---

## Lifecycle of an ADR

Each ADR has a lifecycle that follows the development process of the project.

### Statuses

- **Proposed**: The decision has been documented, but it has not yet been finalized.
- **Accepted**: The decision has been reviewed and accepted.
- **Deprecated**: The decision is no longer valid but remains in the record for historical reference.
- **Superseded**: The decision has been replaced by another ADR (reference the new ADR).

### Modifying an ADR

ADRs are to be kept immutable after acceptance. If a decision requires updating, supersede it with a new ADR. Both the new and old ADR should reference each other, facilitating a historical chain of reference.

---

## ADR Template

Each ADR follows a standardized format. Below is the template you should use for all ADRs:

```markdown
# Title of the Decision

- Date: YYYY-MM-DD

### Status

- Accepted | Proposed | Deprecated | Superseded

### Lineage

- **Superseded By**: [ADR-XX](link to the superseding ADR) (If applicable)
- **Preceded By**: [ADR-XX](link to the preceding ADR) (If applicable)
- **Independent**: This ADR stands alone, with no predecessors or successors.

### Context

- Describe the context and background information that led to this decision.
- What problem are you trying to solve?
- Any relevant constraints, technical or business considerations, and trade-offs that must be made.

### Decision

- State the decision clearly.
- Describe the solution or approach that was chosen.
- Highlight any key details of the implementation.

### Alternatives Considered

- List the other options that were considered and rejected.
  1. **Option 1:** Describe it briefly and why it wasn't chosen.
  2. **Option 2:** Another alternative and why it was not selected.
  3. **Option 3:** etc.

### Consequences

- Describe the positive and negative consequences of this decision.
- What trade-offs are being made? Are there any risks, technical debt, or future implications?

### Related ADRs

- Mention any related ADRs or previous decisions that this ADR builds on or supersedes.
- Example: Supersedes [ADR-001: Initial Database Choice](link)

### Links and References

- Provide any links to external references, documentation, or discussions that influenced the decision.

### Notes

- Any additional comments, follow-ups, or caveats.
```

## ADR Example

Here’s an example of an ADR for database selection:

```markdown
# Database Choice: MongoDB vs. PostgreSQL

- Date: 2024-09-20

### Status

- Accepted

### Context

- Our application requires a flexible schema to store financial data, including transactions, user profiles, and repayment plans.
- We need scalability to handle potential growth in user numbers.
- Performance during querying and writing operations is critical.

### Decision

- We have chosen **MongoDB** as our primary database for the project.
  - MongoDB's document-oriented storage is well-suited for our needs, as it allows flexibility in handling various types of data without complex migrations.
  - MongoDB offers horizontal scalability and high availability, which aligns with our growth projections.
  - Strong community support and mature tooling available for the Node.js ecosystem made this choice more practical.

### Alternatives Considered

1. **PostgreSQL**: A robust, relational database with strong ACID compliance.
   - Rejected because our data does not require complex relational operations and PostgreSQL's rigid schema could slow development.
2. **Firebase**: A NoSQL database integrated with Google's services.
   - Rejected due to vendor lock-in and concerns over handling more complex queries as the app scales.

### Consequences

- **Positive**:
  - Flexibility in data storage and schema management, allowing for rapid iteration on the data model.
  - Seamless integration with our Node.js backend.
- **Negative**:
  - No strong consistency guarantees like those provided by relational databases (eventual consistency model).
  - Learning curve for the team due to the document-based approach.

### Related ADRs

- None

### Links and References

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Comparison: MongoDB vs. PostgreSQL](https://www.mongodb.com/nosql-explained/nosql-vs-sql)

### Notes

- We will monitor performance as the user base grows and may reevaluate this decision if performance degrades.
```

## Refences

[Architectural Decision Records](https://adr.github.io/)
[Architectural Decision Records](https://github.com/joelparkerhenderson/architecture-decision-record)
