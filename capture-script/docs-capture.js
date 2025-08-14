/*
 * SOLUTION DOCUMENTATION CAPTURE SCRIPT
 * -----------------------------------------
 * Instructions:
 * 1. Save this file in the root of your project (e.g., as `docs-capture.js`).
 * 2. Use your AI assistant in your IDE (like GitHub Copilot Chat) to help fill this out.
 * For example, open the chat and ask: "@workspace can you help me fill out the dependencies in my docs-capture.js file?"
 * 3. Fill in all the placeholders marked with [HUMAN INPUT].
 * 4. Once complete, copy the final JSON object at the bottom and save it as `solution-data.json`.
 * This file will be used by the SharePoint Uploader App.
 */

// --- SECTION 1: PROJECT OVERVIEW ---
const projectOverview = {
    projectName: "autotask-dashboard",
    description: "[HUMAN INPUT: Provide a one-paragraph summary of what this solution does and the business problem it solves.]",
    keyFeatures: [
        "[HUMAN INPUT: List a key feature, e.g., 'Real-time dashboard visualization of tasks']",
        "[HUMAN INPUT: List another key feature, e.g., 'User authentication with Microsoft Entra ID']",
        "[HUMAN INPUT: Add more features as needed...]"
    ]
};

// --- SECTION 2: TECHNOLOGY STACK ---
// Use your AI assistant to help populate these dependency lists.
const technologyStack = {
    frontend: {
        language: "JavaScript/TypeScript",
        framework: "React",
        keyDependencies: [
            { name: "react", purpose: "UI library" },
            { name: "@azure/msal-react", purpose: "Microsoft Authentication Library for handling user sign-in." },
            { name: "axios", purpose: "HTTP client for calling the backend API." },
            // AI: Analyze frontend/package.json and list other important packages here.
        ]
    },
    backend: {
        language: "JavaScript/TypeScript",
        framework: "Node.js with Express",
        keyDependencies: [
            { name: "express", purpose: "Web server framework." },
            { name: "@azure/identity", purpose: "Provides Managed Identity authentication to Azure services." },
            { name: "tedious", purpose: "Database driver for Azure SQL." },
            // AI: Analyze autotask-dashboard-backend/package.json and list other important packages here.
        ]
    },
    infrastructure: {
        tool: "Bicep",
        description: "Infrastructure as Code is defined using Bicep templates."
    }
};

// --- SECTION 3: ENVIRONMENT & DEPLOYMENT ---
const environments = {
    development: {
        url: "http://localhost:3000",
        configurationNotes: "Frontend runs on localhost:3000, backend API is expected to be running on its configured port. Environment variables are managed in the `.env` file."
    },
    production: {
        url: "[HUMAN INPUT: Enter the public URL of the production frontend, e.g., https://autotask-dashboard.azurewebsites.net]",
        azureResourceGroup: "[HUMAN INPUT: Enter the name of the production Azure Resource Group, e.g., rg-autotask-prod-australiaeast]",
        deploymentProcess: "Continuous deployment is configured via GitHub Actions. A push to the `main` branch triggers a workflow that builds and deploys the frontend to a Static Web App and the backend to an App Service."
    }
};

// --- SECTION 4: ARCHITECTURE & COMPONENTS ---
const architecture = {
    frontendComponents: [
        { name: "Dashboard.jsx", purpose: "Main view displaying charts and data. Fetches data from the backend API." },
        { name: "Header.jsx", purpose: "Top navigation bar, contains user sign-in/out controls." },
        // AI: Analyze the `frontend/src/components` and `frontend/src/pages` directories and list other key components.
    ],
    backendServices: [
        { name: "tasks-api.js", purpose: "API endpoint for fetching and managing tasks. Connects to the Azure SQL database." },
        { name: "auth-middleware.js", purpose: "Validates the bearer token from the frontend to secure API endpoints." },
        // AI: Analyze the `autotask-dashboard-backend/src` directory and list other key services/files.
    ]
};

// --- SECTION 5: AUTHENTICATION & SECURITY ---
const security = {
    userAuthentication: {
        method: "Microsoft Entra ID (Azure AD)",
        implementation: "The frontend uses the MSAL (Microsoft Authentication Library) for React to handle the OAuth 2.0 Authorization Code Flow. Users are redirected to the Microsoft login page.",
        appRegistrationName: "[HUMAN INPUT: Enter the name of the App Registration in Azure, e.g., 'autotask-dashboard-prod']",
        keyConfigFile: "`frontend/src/authConfig.js` contains the MSAL configuration, including the Client ID and tenant details."
    },
    backendAuthentication: {
        method: "System-Assigned Managed Identity",
        implementation: "The backend App Service has a Managed Identity enabled. This identity is granted permissions (e.g., 'db_datareader') on the Azure SQL database. The `@azure/identity` library is used in the code to acquire a token for the database connection without needing any secrets.",
        keyVaultUsage: "The Key Vault URI is stored as an App Setting in the App Service. The Managed Identity is granted 'Get' permissions on secrets in the Key Vault."
    },
    multiTenancy: {
        strategy: "[HUMAN INPUT: Describe the data protection strategy. e.g., 'Data is segregated at the database level. Every table has a `tenantId` column, and all queries are filtered by the tenantId claim present in the user's validated JWT.']"
    }
};


// --- FINAL OUTPUT ---
// This JSON object bundles all the collected information.
// Copy this entire object to your clipboard and save it as `solution-data.json`.
const solutionDocumentation = {
    projectOverview,
    technologyStack,
    environments,
    architecture,
    security,
    lastUpdated: new Date().toISOString()
};

// To see the output in your console, you can uncomment the line below.
// console.log(JSON.stringify(solutionDocumentation, null, 2));