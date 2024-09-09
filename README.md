# DebtFreePlanner

_A MERN stack application for strategic debt payoff planning using Snowball and other methods._

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Learn More](#learn-more)
- [Objectives and Key Results (OKRs)](#objectives-and-key-results-okrs)
  - [Objective 1: Full-Stack Development](#objective-1-develop-a-mern-stack-application-to-demonstrate-full-stack-development)
  - [Objective 2: Best Engineering Practices](#objective-2-adhere-to-best-engineering-practices-to-ensure-a-maintainable-scalable-and-high-quality-codebase)
  - [Objective 3: Frontend Development Skills](#objective-3-demonstrate-frontend-development-skills-by-delivering-a-polished-user-friendly-interface)
  - [Objective 4: Security and Data Protection](#objective-4-demonstrate-devsecops-by-implementing-nist-csf-and-other-industry-best-security-practices)
    - [Objective 5: Technical Writing](#objective-5-demonstrate-technical-writing-by-documentating-the-debtfreeplanner-application)
  - [Objective 6: DevOps Practices](#objective-6-demonstrate-devops-practices-to-ensure-cidc)
  - [Objective 7: Software Architecture](#objective-7-demonstrate-software-architecture-skills-by-designing-a-scalable-maintainable-and-extensible-system)
  - [Objective 8: Public API Development](#objective-8-develop-a-public-api-to-enable-third-party-developers-to-integrate-with-debtfreeplanner)
  - [Keymap](#keymap)
- [Documentation](#documentation)
  - [Product Requirements Document (PRD)](#product-requirements-document-prd)
  - [Software Requirements Specification (SRS)](#software-requirements-specification-srs)
  - [Software Design Document (SDD)](#software-design-document-sdd)
  - [Software Test Document (STD)](#software-test-document-std)
  - [User Guide](#user-guide)
- [Installation](#installation)
- [Meet the Developer](#meet-the-developer)
- [License](#license)

---

## Introduction

This is a portfolio project showcasing a web app built with MongoDB, Express, React, and Node.js (MERN). DebtFreePlanner offers a web-based solution for loan recipients to create debt repayment plans that accelerate their journey to financial freedom.

### Key Features

- **[Multiple Repayment Strategies](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md#multiple-repayment-strategies>)**: Choose from several debt repayment methods to find the one that best suits your financial goals.
- **[Snowflake Payments](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md#snowflake-payments>)**: Make small, irregular payments whenever extra funds are available.
- **[Multicurrency Support](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md#multicurrency-support>)**: Manage debts in different currencies with automatic exchange rate updates.
- **[Reporting](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md#reporting>)**: Generate reports to track your progress and understand your repayment plans.
- **[Secure Data Handling](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md#secure-data-handling>)**: All sensitive user data is encrypted both at rest and in transit.

### Learn More

To see how DebtFreePlanner works in detail, visit the [project documentation](https://github.com/Guilderm/DebtFreePlanner/blob/main/README.md#documentation) for a comprehensive overview of features, architecture, and implementation.

## Objectives and Key Results (OKRs)

These OKRs are are not in any particular order.

### **Keymap:**

- **✔️** Completed
- **⏳** In Progress
- **🔜** Not Started
- **❌** No Longer Considered

### Objective 1: Develop a MERN Stack Application to Demonstrate Full-Stack Development

- **Key Result 1.1 [🔜]:** Achieve 90% code coverage with unit tests across both backend and frontend components.
- **Key Result 1.2 [🔜]:** Implement CI/CD pipelines using GitHub Actions for automated testing and deployment.
- **Key Result 1.3 [🔜]:** Optimize the application to handle at least 100 concurrent users with no significant performance degradation, verified through load testing.
- **Key Result 1.4 [🔜]:** Integrate at least two third-party financial APIs to enhance functionality.

### Objective 2: Adhere to Best Engineering Practices to Ensure a Maintainable, Scalable, and High-Quality Codebase

- **Key Result 2.1 [🔜]:** Design a modular system architecture with clear boundaries for independent development and testing.
- **Key Result 2.2 [🔜]:** Ensure each module has a single, well-defined responsibility, leading to a cohesive codebase.
- **Key Result 2.3 [🔜]:** Implement application layers to separate concerns, reducing overlap and enhancing maintainability.
- **Key Result 2.4 [🔜]:** Encapsulate implementation details within modules, exposing only necessary interfaces to enhance abstraction and reduce complexity.
- **Key Result 2.5 [🔜]:** Minimize dependencies between modules by implementing loose coupling, ensuring flexibility and resilience.
- **Key Result 2.6 [🔜]:** Design fault-tolerant architectures to maintain security and reliability, even during third-party service failures.
- **Key Result 2.7 [🔜]:** Implement vendor-agnostic development techniques to avoid being locked into a vendor that does not meet our needs.

### Objective 3: Demonstrate Frontend Development Skills by Delivering a Polished, User-Friendly Interface

- **Key Result 3.1 [🔜]:** Develop and deploy accessible UI components using React and Tailwind CSS, adhering to WCAG 2.1 standards.
- **Key Result 3.2 [🔜]:** Ensure full responsiveness of the application across mobile devices, tablets, small laptops, and large desktops.
- **Key Result 3.3 [🔜]:** Implement a real-time, interactive dashboard using React, D3.js, or Chart.js.
- **Key Result 3.4 [🔜]:** Achieve a Lighthouse performance score of 90 or above on both mobile and desktop.
- **Key Result 3.5 [🔜]:** Incorporate features to mitigate the intention-action gap, such as progress tracking, personalized reminders, and gamification.
- **Key Result 3.6 [🔜]:** Provide tutorials and embedded learning to help users overcome initial barriers.

### Objective 4: Demonstrate DevSecOps by Implementing NIST CSF and Other Industry Best Security Practices

- **Key Result 4.1 [🔜]:** **GOVERN**: Establish robust governance to enforce security policies, ensure compliance, and manage risks effectively.
- **Key Result 4.2 [🔜]:** **IDENTIFY**: Conduct comprehensive risk assessments to identify vulnerabilities, assets, and threats within the application environment.
- **Key Result 4.3 [🔜]:** **PROTECT**: Implement proactive measures to safeguard against threats, including data encryption, access control, and secure coding practices.
- **Key Result 4.4 [🔜]:** **DETECT**: Deploy continuous monitoring and anomaly detection systems to quickly identify and respond to security incidents.
- **Key Result 4.5 [🔜]:** **RESPOND**: Develop and maintain incident response plans to effectively mitigate and manage security breaches or attacks.
- **Key Result 4.6 [🔜]:** **RECOVER**: Establish recovery strategies to restore services and minimize downtime following a security incident.
- **Key Result 4.7 [🔜]:** Minimize the collection of Personally Identifiable Information (PII) by avoiding unnecessary data such as bank account numbers, Social Security numbers, or full names, reducing the application's attractiveness as a target for cybercriminals.

### Objective 5: Demonstrate Technical Writing by Documentating the DebtFreePlanner Application

- **Key Result 5.1 [🔜]:** Develop a Product Requirements Document (PRD) detailing the business case, product vision, and roadmap.
- **Key Result 5.2 [🔜]:** Develop a Software Requirements Specification (SRS) translating the PRD into functional and non-functional requirements.
- **Key Result 5.3 [🔜]:** Develop a Software Design Document (SDD) outlining software architecture, design patterns, and data structures.
- **Key Result 5.4 [🔜]:** Develop a Software Test Document (STD) detailing the testing strategy, including test plans, test cases, and results.
- **Key Result 5.5 [🔜]:** Develop a User Guide that provides a detailed explanation of how to use the Debt-Free Planner application, ensuring clarity and accessibility for end users.

### Objective 6: Demonstrate DevOps Practices to Ensure CI/DC

- **Key Result 6.1 [🔜]:** Implement infrastructure as code (IaC) using Terraform to automate the provisioning of cloud resources.
- **Key Result 6.2 [🔜]:** Achieve automated monitoring and logging setup using tools like Prometheus and Grafana, ensuring real-time visibility into system performance and uptime.
- **Key Result 6.3 [🔜]:** Implement automated scaling policies for the application, ensuring seamless handling of traffic spikes without manual intervention.
- **Key Result 6.4 [🔜]:** Ensure the deployment pipeline supports blue-green deployments or canary releases to minimize downtime and risk during updates.

### Objective 7: Demonstrate Software Architecture Skills by Designing a Scalable, Maintainable, and Extensible System

- **Key Result 7.1 [🔜]:** Develop a modular monolithic architecture, ensuring that each module is self-contained and can be independently developed, tested, and maintained.
- **Key Result 7.2 [🔜]:** Implement a Model-View-Controller (MVC) pattern on the frontend to separate concerns and enhance maintainability, ensuring a clean separation between the user interface, business logic, and data handling.
- **Key Result 7.3 [🔜]:** Design the backend using an n-layer architecture, including layers for presentation, business logic, and data access, to promote separation of concerns and make the system easier to scale and maintain.
- **Key Result 7.4 [🔜]:** Implement a three-tier architecture to further separate the user interface, application processing, and data management, enhancing scalability and flexibility.
- **Key Result 7.5 [🔜]:** Develop RESTful APIs to facilitate communication between the frontend and backend, ensuring that the APIs are well-documented, versioned, and follow best practices for security and performance.
- **Key Result 7.6 [🔜]:** Use client-side rendering to improve user experience by delivering faster page loads and more interactive UIs.
- **Key Result 7.7 [🔜]:** Ensure that the Software Design Document (SDD) comprehensively covers the modular monolithic architecture, including detailed component diagrams, data flow diagrams, and explanations of the MVC and n-layer patterns.

### Objective 8: Develop a Public API to Enable Third-Party Developers to Integrate with DebtFreePlanner

- **Key Result 8.1 [🔜]:** Develop API endpoints that enable full CRUD (Create, Read, Update, Delete) operations.
- **Key Result 8.2 [🔜]:** Implement a system that authenticates developer applications and allows for revocation.
- **Key Result 8.3 [🔜]:** Implement authorization mechanisms that enable end-users to authorize and revoke access for the developer applications.
- **Key Result 8.4 [🔜]:** Implement access control mechanisms to ensure developers only access accounts for which users have provided consent.
- **Key Result 8.5 [🔜]:** Implement rate limiting to prevent abuse, including improperly configured applications and DOS attacks.
- **Key Result 8.6 [🔜]:** Properly document the API, including usage examples and best practice recommendations.

---

---

## Documentation

This project prioritizes "working software over comprehensive documentation" in accordance with Agile principles while also recognizing the important role that documentation plays in creating a "shared understanding," especially in the context of a portfolio project.

To this end, the project includes documents that explain the "why," "what," and "how" of the application, showcasing not only programming expertise but also the ability to convey a 'shared understanding'—a skill critical in software development.

The project's documentation is guided by the book _Docs for Developers: An Engineer's Field Guide to Technical Writing_ by Jared Bhatti and others, alongside other industry standards.

### [Product Requirements Document (PRD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Product%20Requirements%20Document%20(PRD).md>)

The PSD details the "why" of the project by providing an overview of the business case, product vision, and roadmap.
The PSD demonstrates product management skills, including market analysis, vision setting, and strategic thinking.

### [Software Requirements Specification (SRS)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Requirements%20Specification%20(SRS).md>)

The SRS details the "what" of the project, translating the product vision into functional and non-functional requirements that define what the software should do and how it should perform.
The SRS highlights expertise in requirements engineering and systems analysis.

### [Software Design Document (SDD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Design%20Document%20(SDD).md>)

The SDD explains the project's "how" by outlining the software architecture, design patterns, and data structures.
The SDD illustrates software architecture and design skills, focusing on creating robust, scalable, and maintainable systems.

### [Software Test Document (STD)](<https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/Software%20Test%20Document%20(STD).md>)

The STD outlines the project's testing strategy, including detailed test plans, test cases, and results, ensuring that the software meets the specified requirements and is defect-free.
The STD highlights quality assurance and testing skills, demonstrating a commitment to delivering high-quality software.

### [User Guide](https://github.com/Guilderm/DebtFreePlanner/blob/main/Documents/User%20Guide.md)

The User Guide provides a detailed explanation of how to use the Debt Free Planner application. It showcases technical writing and user education skills, demonstrating the ability to communicate complex technical concepts in a way that is accessible and useful to end users.

## Installation

[Instructions on how to set up and run the project locally.]

## Meet the Developer

This project was developed by [Guilder W. Millner](https://www.linkedin.com/in/guilder/), a seasoned Senior Application Support Engineer transitioning into software development. With over 15 years of experience in troubleshooting and customer management, Guilder brings a deep understanding of both the technical and user-facing aspects of software.

Currently completing a BA in Software Engineering, Guilder is passionate about building tools that make a difference. Connect with Guilder on [LinkedIn](https://www.linkedin.com/in/guilder/) or via email at [guilderw@gmail.com](mailto:guilderw@gmail.com) to learn more about his journey into software development.

## License

This project is licensed under the terms of the [MIT License](https://github.com/Guilderm/DebtFreePlanner/blob/main/LICENSE) file.
