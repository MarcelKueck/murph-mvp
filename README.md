# Murph MVP

Murph is a platform that connects patients with medical students for accessible medical guidance, explanation, and appropriate triage. This repository contains the MVP (Minimum Viable Product) implementation of the Murph platform.

## Project Overview

Murph addresses a significant strain in the healthcare market by leveraging medical students as a resource for addressing patient questions, explaining medical concepts, and determining when professional medical intervention is truly necessary.

### Key Features

- **Multi-Channel Communication**: Video, audio, text, and asynchronous messaging
- **Document Analysis**: Upload and review medical documents with annotations
- **Consultation Management**: Request, schedule, and manage consultations
- **User Profiles**: Separate interfaces for patients and medical students

## Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/murph-mvp.git
   cd murph-mvp
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in both the backend and frontend directories
   - Update the values according to your local environment

5. Set up the database:
   ```bash
   cd ../backend
   npm run db:migrate
   npm run db:seed
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Access the application at `http://localhost:3000`

## Project Structure

```
murph-mvp/
├── backend/                  # Node.js/Express backend
│   ├── src/
│   │   ├── config/           # Configuration files
│   │   ├── controllers/      # Request handlers
│   │   ├── database/         # Migrations and seeders
│   │   ├── middleware/       # Express middleware
│   │   ├── models/           # Database models
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   └── utils/            # Utility functions
│   └── tests/                # Backend tests
├── frontend/                 # React frontend
│   ├── public/               # Static files
│   └── src/
│       ├── components/       # Reusable components
│       ├── context/          # React context providers
│       ├── hooks/            # Custom React hooks
│       ├── pages/            # Page components
│       ├── services/         # API services
│       └── utils/            # Utility functions
└── docs/                     # Documentation
```

## Technologies Used

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Sequelize ORM
- Socket.IO for real-time communication
- JWT authentication

### Frontend
- React with TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- Socket.IO client for real-time communication
- React Router for navigation

## Contributing

Please read the contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License.