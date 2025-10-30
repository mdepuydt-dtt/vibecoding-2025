# Vibe Coding Workshop - Introduction

This repository contains 4 sample web applications: a hotel booking system, personal blog, social media feed, and webshop. Each app features a simple React frontend with data managed through local JSON files (no backend or database required).

**Getting started options:**
- **With VS Code + Copilot**: Clone this repo and use GitHub Copilot Agent for AI-assisted modifications
- **Without Copilot**: Copy the `repomix-output.xml` file from any app folder into Gemini or ChatGPT for direct code assistance.


## Getting Started with VS Code and Github Copilot Agent
- Clone the repository and pull from main: `git pull origin main`

- _(optional) Create a new branch_: `git checkout -b vibe/yourbranch`

- Navigate to the app you want to modify: `cd hotel-booking`

- Install the dependencies: `npm install`
 
- Run the application: `npm run dev`

- Test the app in your browser: Open `http://localhost:5173`

- Make a change and see if it is automatically reflected, for example in `index.html` change the Title with Your Name `<title>Your Name</title>`

You're all set! Use the Copilot `Agent Mode` to get started on the changes!

## Getting Started with ChatGPT or Gemini
- Copy the `repomix-output.xml` file from the app you want to change/modify
- Open https://www.chatgpt.com or https://gemini.google.com and sign in with your account
- **/!\ Important: enable the `Canvas` mode**
- Add the `repomix-output.xml` file to the chat
- Start your prompt with the following text:
`I have this app that I want to modify. Can you load the full codebase in a single file in the Canvas and make the necessary changes? Here is what I want: <ADD YOUR INSTRUCTIONS HERE>`

### Inspiration ideas
- Change the color scheme / theme of the app to something flashy or exotic, for example a Cyberpunk theme, Hawaii, Old Western style, Barbie inspired, Disco, ...
- Add additional features to the app, such as new menu items, pages, dashboards, ...
- Change the app into something else (e.g instead of a Hotel Booking platform, make it into a Car Rental platform)
- .. Or ask AI to come up with ideas for you!

### Tips
- Try not to ask for too many changes at once, its better to iterate 
- If you encounter errors, ask AI to fix it for you!

### Common issues in VS Code
Repository not found when trying to pull from the Main branch on the remote repository
```
remote: Repository not found.
fatal: repository 'https://github.com/Deloitte-Belgium/vibecoding2025.git/' not found
```
Fix: Reset your Git Windows Credentials:
1) Open `Control Panel` > `Manage Windows Credentials`
2) In the `Generic Credentials` list, look for `Git:...` entries and remove them
3) Once removed, try to pull from Main again. It should prompt to login with your browser.
