# MilesAhead

MilesAhead is a comprehensive Marathon Management System designed to streamline the process of organizing, managing, and registering for marathons. This full-stack web application provides a dynamic and user-friendly interface for both event organizers and participants.

## Features

### Public Features
- **Home Page**:
  - **Banner Section**: An image carousel with event highlights.
  - **Marathons Section**: Displays 6 marathons with essential details.
  - **Upcoming Marathons Section**: Highlights upcoming marathon events.
  - **Extra Sections**: Two meaningful additional sections related to marathons.
- **Login Page**:
  - Email and password-based authentication.
  - Google or GitHub login integration.
  - Redirect to the Register page if not registered.
  - Validation and meaningful error messages using toast/sweet alert.
- **Register Page**:
  - User registration with name, email, photo URL, and password.
  - Password validation (uppercase, lowercase, minimum 6 characters).
  - Redirect to the Login page after registration.

### Private Features
- **Dashboard**:
  - Add Marathon: Allows organizers to create new marathon events.
  - My Marathon List: Displays marathons created by the logged-in user with update and delete options.
  - My Apply List: Lists marathons the user has applied for with search, update, and delete functionalities.
- **Add Marathons Page**:
  - Create marathons with fields like title, registration dates, start date, location, distance, and description.
  - React-datepicker for date selection.
- **Marathons Page**:
  - Displays all marathons in a grid layout.
  - Sort marathons by newest to oldest using MongoDB's `sort()` method.
- **Marathon Details Page**:
  - Detailed information about a specific marathon.
  - Countdown timer showing time left until the event starts using `react-countdown-circle-timer`.
  - Registration form for users to join the marathon.
  - Updates total registration count upon successful registration.
- **JWT Authentication**:
  - Secure private routes using JWT tokens.
  - Tokens are stored client-side and verified for access.

### Additional Features
- **Dynamic Title**: Website title changes dynamically based on the current route.
- **404 Page**: Custom "Not Found" page for invalid routes.
- **Loading Spinner**: Displays a spinner during data loading states.
- **Toast Notifications**: CRUD operations trigger meaningful toast messages.
- **Dark/Light Theme**: Toggle between dark and light modes for the entire application.
- **Pagination**: Marathon page includes pagination for improved navigation.

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Shadcn/UI
- React Router DOM
- React-CountDown-Circle-Timer
- Toast/Sweet Alert
- React Datepicker

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for Authentication

### Authentication
- Firebase Authentication (Email/Password and Social Login)

## Demo
Check out the live website here: [MilesAhead](https://milesahead-client.web.app/)

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push to the branch.
5. Create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---


