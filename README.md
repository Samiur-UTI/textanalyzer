# Text Analyzer Application Setup

This document outlines the steps required to set up the Text Analyzer application on your local development environment.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- Docker and Docker Compose

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine using:

```bash
git clone <repository-url>
```
Navigate to the cloned directory:

```bash
cd <repository-name>
```
### 2. Environment Configuration
Copy the env.example file and rename it to .env:

```bash
cp env.example .env
```
Open the .env file and adjust the credentials and other configuration settings according to your environment.

### 3. Database Setup
Ensure Docker is running on your system. Set up the database using Docker Compose:

```bash
sudo docker-compose up -d
```
This command starts the required database services in detached mode.

### 4. Install Dependencies
Install the necessary Node.js dependencies:

```bash
npm install
```
### 5. Starting the Application
To start the application in a development environment, run:

```bash
npm run dev
```
For a production environment, use:

```bash
npm start
```
The application should now be running and accessible on the specified port (default: 5000).

## Additional Information
Ensure that the ports specified in the Docker Compose and .env files are free and not being used by other applications.
For detailed API documentation, refer to the docs directory (if applicable).
For any issues or contributions, please open an issue or pull request in the repository.
