# PokeConsult

This is the frontend of a Pokémon Team Consulting website, designed to help users build and optimize their Pokémon teams. The platform offers account registration, paid services through various subscription plans, and features a range of pages including Home, Login, Pricing, Contact, and Admin (accessible only to admins).

## Table of Contents

- [Roadmap](#roadmap)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Roadmap

### ✅ Features Implemented
- **Subscription Plans**: Access to consulting services through different subscription tiers.
- **Admin Page**: Restricted access page for site administrators.
- **User-friendly Interface**: Easy-to-navigate interface using Material UI components.

### 🚧 Features In Progress / To Do
- **Account Registration**: Users can create and manage their accounts.
  - Implement user registration with basic email/password authentication.
  - Add support for Google account registration and login.
- **Responsive Design**: Optimized for various devices and screen sizes.
  - Ensure all pages are fully responsive and accessible on mobile, tablet, and desktop devices.

### 🆕 Upcoming Features
- **Google Login/Register**: Allow users to log in and register using their Google accounts.
  - Integrate Google OAuth for seamless authentication.
  - Ensure proper handling of Google account data and user sessions.

## Technologies Used

- **React (TypeScript)**: Core library for building the user interface.
- **Material UI**: Component library for a consistent and modern look.
- **React Router Dom**: For managing client-side routing.
- **React Toastify**: For notifications and alerts.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **npm**: npm comes with Node.js, but ensure you have the latest version by running:
  ```bash
  npm install -g npm
  ```
- **Yarn**: This project uses Yarn as the package manager. Install Yarn by running:
  ```bash
  npm install -g yarn
  ```

### Steps

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nicolasfmc/poke_consulting.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   yarn start
   ```

## Usage

Once the server is running, you can access the website at `http://localhost:3000`. From there, you can explore the different pages and features, such as:

- **Home**: Overview of the services offered.
- **Login**: Access your account or register a new one.
- **Pricing**: View the different subscription plans available.
- **Contact**: Get in touch with the support team.
- **Admin**: Administrative page for managing the site (only accessible to admins).

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
