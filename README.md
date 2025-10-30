# Vibe Coding Workshop - Introduction
Each sample application has the same basic elements:
- Simple React Frontend
- No Backend system or Database
- Data is managed via local JSON file


# Getting Started
Clone the repository and pull from main
`git pull origin main`

_(optional) Create a new branch_
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

### Inspiration ideas
- Change the color scheme / theme of the app to something flashy or exotic, for example a Cyberpunk theme, Hawaii, Old Western style, Barbie inspired, Disco, ...
- Add additional features to the app, such as new menu items, pages, dashboards, ...
- Change the app into something else (e.g instead of a Hotel Booking platform, make it into a Car Rental platform)
- .. Or ask AI to come up with ideas for you!


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
