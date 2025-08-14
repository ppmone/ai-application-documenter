AI-Powered Solution Documentation Generator for SharePoint
This repository contains a set of tools to accelerate the process of creating and publishing comprehensive solution documentation to a SharePoint Online site. The workflow uses an AI assistant (like GitHub Copilot) to analyze a codebase and a web application to upload the generated content to SharePoint.

Project Structure
/capture-script: Contains a JavaScript template (docs-capture.js) designed to be used within an IDE to gather and structure information about a software solution.

/uploader-app: Contains a standalone single-page web application (index.html) that authenticates to Microsoft 365 and uploads the captured documentation to a specified SharePoint site.

Workflow Overview
The process is broken down into three main stages:

Configuration: A one-time setup of an Azure App Registration to allow the uploader application to securely access SharePoint.

Documentation Capture: Using the docs-capture.js script inside your solution's codebase to generate a solution-data.json file.

Upload to SharePoint: Using the index.html web app to read the solution-data.json file and create the pages in SharePoint.

Step-by-Step Guide
Step 1: Configure Azure App Registration (One-Time Setup)
Before using the uploader app, you must register an application in Microsoft Entra ID (Azure AD).

Navigate to Azure Portal: Go to portal.azure.com and sign in.

Go to Microsoft Entra ID: Search for and select "Microsoft Entra ID".

App Registrations: Select App registrations from the left menu, then click + New registration.

Register an Application:

Name: Give it a descriptive name, like SharePoint Docs Uploader.

Supported account types: Select "Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)".

Redirect URI: Select Single-page application (SPA) from the dropdown and enter http://localhost:8080.

Click Register.

Note the Client ID: On the overview page of your new app registration, copy the Application (client) ID. You will need this to sign into the uploader app.

API Permissions:

Go to the API permissions tab.

Click + Add a permission, then select Microsoft Graph.

Select Delegated permissions.

Search for and add the following permissions:

User.Read

Sites.ReadWrite.All

Click Add permissions. You may need to grant admin consent.

Step 2: Capture Your Solution's Documentation
Copy the Script: Copy the capture-script/docs-capture.js file into the root directory of the solution you want to document.

Fill Out the Script:

Open the file in VS Code.

Fill in all the placeholders marked with [HUMAN INPUT].

Use an AI assistant like GitHub Copilot Chat to help populate the code-related sections. For example, you can ask: @workspace can you analyze my package.json and list the key dependencies in my docs-capture.js file?

Generate the Data File:

Once the script is complete, uncomment the final line (console.log(...)).

Open a terminal in VS Code and run the script using Node.js: node docs-capture.js > solution-data.json.

This will create a solution-data.json file containing all your documented information.

Step 3: Upload to SharePoint
Run the Uploader App Locally:

Navigate to the /uploader-app directory in your terminal.

Start a simple local web server. The easiest way is with Python: python -m http.server 8080.

Open your web browser and go to http://localhost:8080.

Authenticate:

Paste the Application (client) ID from Step 1 into the input box.

Click Sign In & Grant Consent and follow the Microsoft login prompts.

Connect to Site:

Enter your SharePoint site's host name (e.g., yourtenant.sharepoint.com).

Enter the site path (e.g., /sites/MySolutionDocs).

Click Connect to Site.

Upload and Create Pages:

Click the file input and select the solution-data.json file you created in Step 2.

Click the Upload to SharePoint button.

The application will log its progress as it creates or updates the documentation pages on your SharePoint site.
