# 🚀 Playwright Automation Suite

A scalable and maintainable end-to-end test automation framework built using **Playwright** for both **UI and API testing**. This project demonstrates modern automation practices including Page Object Model (POM), data-driven testing, and environment-based configuration.

---

## 📌 Overview

This framework is designed to validate web applications through:

- ✅ UI Automation (Cross-browser)
- ✅ API Testing (REST endpoints)
- ✅ Data-driven test execution
- ✅ Reusable and modular architecture
- ✅ Scalable structure for real-world projects

---

## 🛠️ Tech Stack

- **Framework:** Playwright
- **Language:**  TypeScript
- **Test Runner:** Playwright Test
- **API Testing:** Playwright Request Context
- **Assertions:** Built-in Playwright expect
- **Reporting:** HTML Reports (default)

---

## 📁 Project Structure

```
playwright-automation-suite/
│
├── tests/ # Test files (UI + API)
├── pages/ # Page Object Models
├── utils/ # Utility functions
├── fixtures/ # Custom fixtures (if implemented)
├── test-data/ # JSON / data-driven inputs
├── playwright.config.ts # Global configuration
└── package.json
```

---

## ⚙️ Features

### 🔹 UI Automation
- Cross-browser testing (Chromium, Firefox, WebKit)
- Page Object Model (POM) implementation
- Auto-waiting and stable selectors

### 🔹 API Automation
- REST API validation using Playwright request context
- Response status and data validation
- API + UI combined test scenarios

### 🔹 Data-Driven Testing
- External JSON-based test data
- Parameterized test execution

### 🔹 Configuration Management
- Environment-based execution (dev / stage / prod ready)
- Centralized configuration using `playwright.config`

---

## ▶️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/AfsalRehmanSDET/playwright-automation-suite.git
cd playwright-automation-suite
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Install Playwright Browsers
```bash
npx playwright install
```

---

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/example.spec.ts
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
```

---

## 📊 Test Reports

After execution, view the HTML report:

```bash
npx playwright show-report
```

---

## 🔄 Data-Driven Testing Example

```javascript
testData.forEach((data) => {
test(`Validate user login for ${data.username}`, async ({ page }) => {
// test logic here
});
});
```

---

## 🧱 Design Principles

- Separation of concerns (Tests vs Page Objects)
- Reusable and maintainable code
- Reduced flakiness using Playwright auto-waits
- Scalable for enterprise-level automation

---

## 🚧 Future Enhancements

- 🔹 CI/CD integration (GitHub Actions)
- 🔹 Advanced reporting (Allure)
- 🔹 Test tagging (smoke, regression)
- 🔹 Parallel execution optimization
- 🔹 API schema validation

---

## 👨‍💻 Author

**Afsal Rehman**
SDET | Automation Engineer
