# Playwright Automation Tests

Hi, I'm Srikanth a QA Engineer passionate about test automation.
This repository contains my Playwright automation projects built using TypeScript.

## 🔴 Live Test Report

 👉 [Click here to view Test Execution Report](https://incomparable-empanada-45b9ae.netlify.app)

## 🛠️ Tools & Technologies Used
- Playwright
- TypeScript
- Node.js
- VS Code

## 📁 Projects Overview

### 1️⃣ IoT Dashboard — UI Automation
App: http://localhost:4200/pages/iot-dashboard

In this project I have automated the following steps:
- Opening the IoT Dashboard application
- Navigating to Forms and Form Layouts page
- Filling Email and Password with random values
- Selecting Option 2 from the Radio button
- Navigating to Tables and Data section
- Searching for a name in the Smart Table

### 2️⃣ Conduit — API + UI Automation
App: https://conduit.bondaracademy.com

In this project I have automated the following steps:
- Logging in with valid credentials
- Creating a new article with title and content
- Validating the article is published on Home page
- Navigating to my profile and deleting the article
- Validating the article is no longer visible

### 3️⃣ PW Practice App — POM Navigation Framework
App: http://localhost:4200

In this project I have automated the following steps:
- Navigating to Form Layouts page
- Navigating to Datepicker page
- Navigating to Smart Table page
- Navigating to Toast page
- Navigating to Tooltip page

Built using Page Object Model (POM) design pattern with reusable NavigationPage class.

## ▶️ How to Run the Tests

Install dependencies:
```bash
npm install
npx playwright install
```

Run all tests:
```bash
npx playwright test --headed
```

Run IoT Dashboard test only:
```bash
npx playwright test iot-dashboard-test.spec.ts --headed
```

Run Conduit test only:
```bash
npx playwright test conduit-article-management.spec.ts --headed
```

Run POM Navigation test only:
```bash
npx playwright test usepageobjects.spec.ts --headed
```

View HTML Report:
```bash
npx playwright show-report
```