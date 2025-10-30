# Introduction
Each sample application has the same basic elements:
- Simple React Frontend
- No Backend system or Database
- Data is managed via local JSON file


# Getting Started
Clone the repository and pull from main
`git pull origin main`

Create a new branch
`git checkout -b vibe/yourbranch`

Navigate to the app you want to modify
`cd hotel-booking`

Install the dependencies
`npm install`
 
Run the application
`npm run dev`

Test the app in your browser
Open `http://localhost:5173`

Make a change and see if it is automatically reflected, for example in `index.html` change the Title with Your Name `<title>Your Name</title>`

You're all set! Use the Copilot `Agent Mode` to get started on the changes!


# Common issues
Repository not found when trying to pull from the Main branch on the remote repository
```
remote: Repository not found.
fatal: repository 'https://github.com/Deloitte-Belgium/vibecoding2025.git/' not found
```
Fix: Reset your Git Windows Credentials:
1) Open `Control Panel` > `Manage Windows Credentials`
2) In the `Generic Credentials` list, look for `Git:...` entries and remove them
3) Once removed, try to pull from Main again. It should prompt to login with your browser.