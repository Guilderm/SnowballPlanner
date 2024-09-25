# User Story Guidance

## Introduction

This document provides guidelines for writing effective user stories within our organization. It emphasizes a user-centric approach and outlines best practices to ensure that user stories are clear, valuable, and actionable.

## Table of Contents

1. [User Story Guidelines](#user-story-guidelines)
2. [User-Centric Approach](#user-centric-approach)
3. [Format](#format)
4. [Focus](#focus)
5. [INVEST Principle](#invest-principle)
6. [User Types](#user-types)
7. [User Story Template](#user-story-template)
8. [Sample User Stories](#sample-user-stories)
   - [Story 1](#story-1)
   - [Story 2](#story-2)

## User Story Guidelines

### User-Centric Approach

#### Format

As a **[type of user]**, I want to **[perform an action]**, so that **[I achieve a goal]**.

#### Focus

Emphasize the user's needs and the value delivered.

### INVEST Principle

- **Independent:** Stories should be self-contained.
- **Negotiable:** Open to discussion and refinement.
- **Valuable:** Deliver clear value to the user.
- **Estimable:** Effort can be estimated.
- **Small:** Sized appropriately for a single sprint.
- **Testable:** Clear acceptance criteria for validation.

## User Types

We consider the following user types:

- **Admin:**
  - Manages the overall system, user management, settings, and reporting.
- **User:**
  - Inputs debt details, calculates repayment plans, and tracks progress.
- **Collaborator:**
  - Assists in managing specific debt plans with limited access based on permissions.
- **Guest:**
  - Visits public-facing parts of the website, such as the landing page or blog.

## User Story Template

### User Story

As a **[type of user]**, I want to **[perform an action]**, so that **[I achieve a goal]**.

### Acceptance Criteria

- **Given** [initial context],
- **When** [event occurs],
- **Then** [ensure some outcome].

## Sample User Stories

### Story 1

**User Story:**

As a **loan recipient**, I want to **edit a debt item** so that I can **update it with the latest balance information**.

**Acceptance Criteria:**

- **Given** a debt item exists,
- **When** I navigate to the debt item's details and choose to edit,
- **Then** I can update the balance and save the changes.

### Story 2

**User Story:**

As a **loan recipient**, I want to **delete a debt item from my plan** so that I can **remove debts that I have fully paid off**.

**Acceptance Criteria:**

- **Given** a debt item exists in my plan,
- **When** I select the option to delete the debt item,
- **Then** the debt item is removed from my plan after confirmation.
