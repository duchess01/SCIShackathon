
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
- Install the required packages:
  ```bash
  pip install -r requirements.txt
