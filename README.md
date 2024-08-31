# Karmunity

## Overview
Karmunity is a web application designed to connect elderly individuals with community members who can assist with everyday tasks, such as attending medical appointments or grocery shopping. The platform aims to alleviate loneliness and improve the quality of life for elderly users by fostering social interaction and providing practical support.

## Deployed Application
Access the live application at [Karmunity](https://karmunity.vercel.app/landing).

### User Roles
- **Admin (Organizations)**: Manages tasks and oversees the platform.
  - **Login**: `admin@example.com`
  - **Password**: `admin123`
- **Elderly/Taskees**: Users who request tasks.
  - **Login**: Any credentials
- **Community Members**: Users who accept tasks.

## Features
- **Task Posting**: Elderly users or organizations can post tasks via the web app or a chatbot.
- **Task Notification**: Real-time notifications to community members about new tasks using Firebase Cloud Messaging (FCM).
- **Task Acceptance and Assignment**: Community members can accept tasks through the app or chatbot.
- **Karma Points and Rewards**: Community members earn 'Karma' points for task completion, which can be redeemed for rewards and contribute to a leaderboard.

## Impact
- **Enhanced Quality of Life**: Easier access to assistance for elderly individuals.
- **Increased Social Engagement**: Facilitates intergenerational interactions.
- **Resource Optimization**: Identifies areas with high demand for assistance.
- **Community Involvement**: Incentivizes volunteering with 'Karma' points.

## Running the Project Locally

### Prerequisites
- **Node.js** and **npm** installed
- **Python** environment

### Setup Instructions

1. **Backend Setup:**
   - Open a terminal and navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     node app.js
     ```

2. **Frontend Setup:**
   - Open a second terminal and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Run the frontend development server:
     ```bash
     npm run dev
     ```

### Running the Project
- Ensure both terminals are running simultaneously for the backend (`node app.js`) and the frontend (`npm run dev`).

## Key Challenges Addressed
- **Mobility Issues**: Provides direct assistance with tasks requiring physical mobility.
- **Social Isolation**: Increases social interaction to combat loneliness.
- **Limited Resources**: Enables task-sharing among community members to minimize costly professional services.

## License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Contact
For further information, please contact [your-email@example.com].
