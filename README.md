
# Legistai

## Description
Legistai is a legal system designed to streamline legal processes and provide a user-friendly interface for managing legal documentation, user profiles, and interactions. The application offers registration, profile management, and efficient data handling through a robust backend.

## Features
- User registration
- Profile management with user details
- Integration with Azure SQL Database for data storage
- Responsive frontend built with Next.js

## Technologies Used
- **Frontend**: Next.js, React
- **Backend**: Django, Django REST Framework
- **Database**: Azure SQL Database
- **Styling**: CSS Modules
- **HTTP Requests**: Axios

## Installation

### Prerequisites

- Python 3.8 or higher
- Node.js (for the frontend)
- An Azure SQL Database

### Backend Setup

1. Clone the repository:
   
   git init
   cd backend
   

2. Create a virtual environment:
   
   python -m venv venv
   

3. Activate the virtual environment:
   - On Windows:
     
     venv\Scripts\activate
     
   - On macOS/Linux:
     
     source venv/bin/activate
     

4. Install the required packages:
   
   pip install -r requirements.txt
   

5. Set up the database:

   - Update the database connection settings in `settings.py`.

6. Run migrations:
   
   python manage.py migrate
   

7. Start the development server:
   
   python manage.py runserver
   

### Frontend Setup

1. Navigate to the frontend directory:
   
   cd frontend
   

2. Install the dependencies:
   
   npm install
   

3. Start the development server:
   
   npm run dev
   

## Usage
1. Navigate to `http://localhost:3000` to access the application.
2. Use the registration form to create a new user profile.
3. Access your profile after registration.

## License
This project is licensed under the MIT License.

## Author
Nadeen Shbayeh
