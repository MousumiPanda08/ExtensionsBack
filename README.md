#  CHROME EXTENSION FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: MOUSUMI PANDA

*INTERN ID*: CITS0D641

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH

*DESCRIPTION* 

This project is a Chrome Extension for time tracking and productivity analytics, created as part of the CODTECH Internship Task 4. It allows users to monitor how much time they spend on each website they visit and provides insights into their daily browsing behavior. The extension communicates with a backend server built using Node.js, Express.js, and MongoDB, and is deployed live on Render.

**Development Process:**
1. Setting Up the Backend (Node.js + MongoDB):
The backend was built using Node.js and Express.js to handle HTTP requests and interact with MongoDB. Here's how it was done:

A basic index.js (server file) was created using the Node HTTP Server template on CodeSandbox.

The MongoDB URI was configured using CodeSandbox DevTool Environment Variables to connect securely.

Two routes were created:

/api/track: to receive time tracking data from the extension.

/api/report: to retrieve the stored data for analytics.

The MongoDB schema was defined using Mongoose to store:

website: name of the site

totalTime: time spent in seconds

category: (defaulted to "unclassified" but can be extended)

The backend was then deployed on Render, giving a live endpoint:

https://extensionsback.onrender.com

2. Building the Chrome Extension (Frontend):
The frontend Chrome Extension consisted of several components:

manifest.json: Defined extension metadata, permissions, and script files.

background.js: The core script that tracked active tabs, detected tab changes, and calculated time spent on each site using Chrome API (chrome.tabs.onActivated, chrome.windows.onFocusChanged, etc.). The data was then sent to the backend using the Fetch API.

popup.html: A simple interface shown when the extension icon is clicked.

popup.js: Fetches the /api/report data from the backend and dynamically displays it in the popup.

style.css: Provides basic styling for the popup interface.

Icons and permissions were correctly set in the manifest file, and CORS was handled on the backend to allow the extension to communicate smoothly.

3. Testing and Deployment:
The backend was deployed first and tested using Postman and browser requests.

The extension was loaded in Chrome via chrome://extensions by enabling Developer Mode and clicking "Load unpacked".

The extension was tested by browsing multiple websites. The backend successfully stored the time spent, and the popup displayed the usage history from /api/report.

Use in Day-to-Day Life:
This extension is highly useful for anyone wanting to analyze and improve their digital habits:

Students can use it to check how much time they spend studying vs. browsing social media.

Remote workers and freelancers can monitor time spent on productive tools like GitHub, Jira, Stack Overflow.

It promotes self-awareness and digital wellbeing by helping users reduce unproductive time.

Over time, it can help build a report of time distribution and identify productivity patterns.

For example:

You visited chatgpt.com for 22 seconds, github.com for 9 seconds, and newtab for 28 seconds.

All these are stored and retrievable from the backend at /api/report.

You could extend this by categorizing websites automatically and creating visual charts using Chart.js.

How to Run the Project:
Clone or Download the Extension Folder:

Contains manifest.json, background.js, popup.html, etc.

Load the Extension in Chrome:

Go to chrome://extensions

Enable Developer Mode (top right)

Click "Load unpacked" and select your extension folder

Start Using:

Pin the extension icon

Browse different websites

Click the icon to see the tracked data

Monitor Analytics:

Visit the live backend endpoint:

https://extensionsback.onrender.com/api/report

Or view the data directly in the extension popup

Conclusion:
This Chrome extension project combines web development and browser automation in a practical way. It’s lightweight, functional, and scalable. You’ve successfully built a full-stack productivity tool that not only meets the internship requirements but also has real-world usefulness. It can be further enhanced with dashboards, category classification, and weekly summary reports.

#OUTPUT

<img width="1919" height="909" alt="Image" src="https://github.com/user-attachments/assets/59dee64e-03c5-4550-b7bf-17d6db00196b" />

