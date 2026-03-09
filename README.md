Instructions to run the project:

1. Prerequisites
Make sure the following are installed on your system:
Node.js
npm (comes with Node)
Expo CLI (optional but recommended)
You should also install the Expo Go app on your mobile device.
2. Download / Extract the Project
If you received the project as a zip file:
Extract the zip file
Open the project folder in your terminal
check the path in the terminal if any path need to be added use 'cd'
Example:
cd learning-app
4. Install Dependencies
Run the following command to install all required packages:
npm install
4. Start the Application
Run the project using:
npx expo start
This will start the Expo development server.
5. Run the App
You can run the app in several ways:
On Mobile Device
Install the Expo Go app.
Scan the QR code

Brief explanation of the project structure:

This project is a simple React Native learning management application that supports three user roles:
* Parent
* Student
* Mentor
The app allows parents to create student accounts, mentors to view students and lessons, and students to access their learning sessions.
The project uses React Native with Expo, React Navigation, and React Context API for state management.

Assumptions Made During Development:
Mock data is used instead of a backend API for users, lessons, and sessions.
The login system assumes that users already exist in the mockData file.
Student creation is handled locally using React Context instead of a database.
Password authentication is simplified and does not include encryption or secure authentication.
