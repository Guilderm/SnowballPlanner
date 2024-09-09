# Development and Documentation Standards

## Table of Contents

- [1. Supplementary Guidelines](#1-supplementary-guidelines)
- [2. Diagrams as Code (DaC)](#2-diagrams-as-code-dac)
- [3. Writing Tone](#3-writing-tone)
  - [3.1 Modestly Confident](#31-modestly-confident)
  - [3.2 Neutral Perspective](#32-neutral-perspective)
  - [3.3 Plain and Concise](#33-plain-and-concise)
- [4. Consistent Terminology](#4-consistent-terminology)
  - [4.1 Overview](#41-overview)
  - [4.2 Standards](#42-standards)
- [5. Feedback Driven Development (FDD)](#5-feedback-driven-development-fdd)
- [6. User-Centered Design (UCD) Principles](#6-user-centered-design-ucd-principles)
  - [6.1 Overview](#61-overview)
  - [6.2 Standards](#62-standards)
- [7. Domain-Driven Design (DDD) Principles](#7-domain-driven-design-ddd-principles)
  - [7.1 Overview](#71-overview)
  - [7.2 Standards](#72-standards)
- [8. User Story Guidelines](#8-user-story-guidelines)
  - [8.1 User-Centric Approach](#81-user-centric-approach)
  - [8.2 INVEST Principle](#82-invest-principle)
- [9. Sample Stories Showcasing the Guidelines](#9-sample-stories-showcasing-the-guidelines)
  - [9.1 Story 1](#91-story-1)
  - [9.2 Story 2](#92-story-2)
- [10. User Story Template](#10-user-story-template)

## 1. Supplementary Guidelines

If something is not covered by the Project-Specific Guidelines, refer to these Supplementary Guidelines:

- **Google Developer Documentation Style Guide**: This guide serves as the foundational reference for all documentation-related practices.
- **Airbnb JavaScript Style Guide**: This guide is the primary reference for all coding standards within the project.

## 2. Diagrams as Code (DaC)

- **Purpose**: Maintain diagrams, charts, and wireframes as part of the codebase using PlantUML to facilitate easy updates. This practice ensures that visual elements are version-controlled and consistent with the project’s code.
- **Implementation**:
  - Store PlantUML files in a dedicated diagrams directory within the `Documents/Media` repository path.
  - Use predictable naming conventions for diagram files, e.g., `class-diagram.puml`.
  - Link the generated diagrams within markdown documents using relative paths.

## 3. Writing Tone

The tone of the document should convey authority, professionalism, and clarity.

### 3.1 Modestly Confident

Statements should be assertive without sounding overbearing. Avoid passive language to ensure strong yet respectful communication.

- **Example**:
  - **Do**: “This guideline is essential for maintaining code quality.”
  - **Don’t**: “It might be helpful to follow this guideline for maintaining code quality.”

### 3.2 Neutral Perspective

The language should focus on the processes and outcomes rather than the individuals performing the tasks. Refrain from using “I,” “we,” “you,” or any other personal pronouns.

- **Example**:
  - **Do**: “The documents are written in a third-person neutral perspective.”
  - **Don’t**: “We use a third-person perspective when we write documentation.”

### 3.3 Plain and Concise

Use simple, straightforward language. Avoid ornate language or purple prose (i.e., excessive adjectives, adverbs, and lengthy descriptions).

- **Example**:
  - **Do**: “Ensure that documentation is clear and concise.”
  - **Don’t**: “Strive to craft documentation that is a paragon of clarity and conciseness.”

## 4. Consistent Terminology

### 4.1 Overview

Consistency in terminology is crucial for clear communication across the project. This section outlines the standard terms to be used when referring to key concepts, roles, and entities in all project documentation.

### 4.2 Standards

- **End User Terminology**:
  - The term **"loan recipients"** should be used consistently when referring to the end users of the application.
  - Alternatively, when discussing specific user scenarios or use cases, refer to the end user by the name of the relevant **persona** (e.g., Taylor, The Debt-Strapped Professional).

## 5. Feedback Driven Development (FDD)

We will incorporate Feedback Driven Development (FDD) as a core practice by the following principles:

- **Continuous Feedback Loop**: Regularly gather feedback at all stages, from design to post-release, using both direct (e.g., user testing) and indirect (e.g., analytics) methods.
- **Iterative Improvement**: Utilize the feedback to make continuous and incremental improvements to the product, ensuring it meets user needs and expectations.
- **User-Centered Design**: Prioritize feedback that enhances the end-user experience, leveraging user personas and stories to guide decisions.
- **Rapid Prototyping**: Develop and test prototypes or MVPs early to validate ideas and adjust the course as needed.
- **Data-Driven Decisions**: Use quantitative feedback and analytics to inform feature prioritization and refinements.
- **Collaboration**: Ensure effective communication among all team members to act upon feedback appropriately and maintain alignment with the product vision.

## 6. User-Centered Design (UCD) Principles

### 6.1 Overview

User-Centered Design (UCD) is a methodology that prioritizes the needs, preferences, and limitations of the end-users throughout the development process. The goal is to create solutions that are not only functional but also intuitive, accessible, and satisfying to use.

### 6.2 Standards

- **User Personas**: Develop user personas that represent key segments of the target audience. These personas should be referenced throughout the development process to ensure that the application meets the needs of the intended users.
- **Iterative Design Process**: Employ an iterative design process that includes prototyping, usability testing, and feedback loops. Adjustments should be made based on user feedback to continuously improve the user experience.
- **Usability Testing**: Perform usability testing with real users at various stages of development. The findings should directly inform design improvements to enhance the overall user experience.
- **Accessibility**: Adhere to accessibility standards (e.g., WCAG) to ensure the application is usable by all individuals, including those with disabilities.
- **User Experience Metrics**: Establish and monitor key UX metrics such as task completion rates, error rates, time-on-task, and user satisfaction scores. These metrics should be used to assess the effectiveness of the design and identify areas for further improvement.

## 7. Domain-Driven Design (DDD) Principles

### 7.1 Overview

Domain-Driven Design (DDD) is an approach to software development that emphasizes the importance of aligning the software model with the core business domain. It focuses on understanding the business domain deeply and using that knowledge to drive the design and architecture of the application.

### 7.2 Standards

- **Domain Modeling**: Collaborate closely with domain experts to create a shared understanding of the business domain. Develop a domain model that accurately reflects the core concepts and relationships within the domain.
- **Ubiquitous Language**: Establish and use a common, consistent language that is shared between developers and domain experts. This language should be used in code, documentation, and discussions to ensure clear communication and reduce misunderstandings.
- **Bounded Contexts**: Identify and define bounded contexts within the application, where a particular domain model is applied. Each bounded context should have clearly defined boundaries, responsibilities, and interfaces.
- **Entities, Value Objects, and Aggregates**: Use the concepts of entities, value objects, and aggregates to model the domain. Entities should have a unique identity, value objects should be immutable, and aggregates should enforce consistency within their boundaries.
- **Repositories**: Implement repositories to manage the persistence of aggregates. Repositories should provide an interface for accessing and managing aggregates while abstracting the underlying data storage.
- **Domain Events**: Capture and model significant events within the domain as domain events. These events should be used to communicate changes within and across bounded contexts.
- **Context Mapping**: Create context maps to visualize the relationships and interactions between different bounded contexts. Use context maps to manage dependencies and integration points between contexts.

## 8. User Story Guidelines

### 8.1 User-Centric Approach

Ensure each story is written from the user's perspective, focusing on their needs and goals. The format should be:

- **As a [type of user], I want to [perform an action] so that [I achieve a goal].**

This ensures that stories are focused on delivering value to the user.  
For example:

- _As a user, I want to delete a debt from my repayment plan so that I can keep my plan accurate._

### 8.2 INVEST Principle

When breaking down stories, follow the **INVEST** criteria:

- **I**ndependent: Each story should be self-contained, without dependencies on other stories.
- **N**egotiable: Stories should be open to discussion and refinement with the team.
- **V**aluable: Each story should deliver clear value to the user.
- **E**stimable: The team should be able to estimate the effort required to complete the story.
- **S**mall: The story should be small enough to complete within a sprint or be further divided.
- **T**estable: The story should have clear acceptance criteria to ensure it can be tested and verified when completed.

This approach ensures that stories are clear, actionable, and easy to prioritize.

## 9. Sample Stories Showcasing the Guidelines

### 9.1 Story 1

**As a user, I want to edit a debt so that I can update it with the latest information.**

### 9.2 Story 2

**As a user, I want to delete a debt from my plan so that I can remove debts that are no longer active.**

## 10. User Story Template

**As a** [type of user],  
**I want to** [perform an action],  
**so that** [I achieve a goal].
