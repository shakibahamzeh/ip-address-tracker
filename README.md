# IP Address Tracker

## Description

The **IP Address Tracker** is a web application designed to provide users with the ability to search for any IP address or domain name and receive its geolocation data. This project, implemented as part of a challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0), integrates multiple APIs to fetch and display the geographical location on an interactive map, along with additional information like the ISP, timezone, and region.

The project aims to enhance skills in building interactive front-end applications, utilizing modern JavaScript frameworks, and integrating third-party APIs. The design is responsive and ensures optimal user experience across various devices.

## Technologies and Packages Used

### Front-End Technologies

- **React.js**: A JavaScript library for building user interfaces. React's component-based architecture allows for a modular and maintainable codebase.
- **Vite**: A build tool that provides fast development with hot module replacement (HMR) and optimized build outputs.
- **Leaflet.js**: An open-source JavaScript library for mobile-friendly interactive maps. It allows easy integration of map functionalities and markers.
- **Axios**: A promise-based HTTP client for making API requests. It simplifies the process of fetching data from external APIs.
- **IP Geolocation API by IPify**: This API provides accurate and comprehensive geolocation data for any given IP address or domain name.
- **React Leaflet**: A React wrapper for Leaflet that makes it easier to use Leaflet maps in React applications.

### Development Tools

- **ESLint**: A tool for identifying and fixing problems in JavaScript code. It helps maintain consistent code quality.
- **Prettier**: An opinionated code formatter that enforces a consistent style by parsing and reprinting code.

## Project Structure

The project follows a typical React application structure, organized to ensure clear separation of concerns and maintainability. Here's an overview of the key folders and files:

```
ip-address-tracker/
│
├── public/                   # Static assets and public files
│   ├── index.html            # HTML template
│   └── favicon.ico           # Favicon for the app
│
├── src/                      # Source code directory
│   ├── assets/               # Assets such as images and fonts
│   ├── components/           # Reusable React components
│   │   ├── Input.jsx         # Component for the IP/domain input field
│   │   └── Card.jsx          # Component for displaying IP information
│   │
│   │   └── style.scss         # Main stylesheet
│   │
│   ├── app.jsx               # Root component
│   ├── index.jsx             # Entry point for the React app
│   └── vite.config.js        # Vite configuration file
│ 
│   ├── services/             
│   │   ├── apiHandlers.js    # Handle http requests
│   │   └── IP.services.js 
│
├── package.json              # Project dependencies and scripts
├── README.md                 # Project README file
└── jsconfig.json             # PReact configuration
```

### Key Components

- **Input.jsx**: A form component where users input an IP address or domain name to search.
- **Card.jsx**: Displays the details of the IP address including location, timezone, and ISP.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shakibahamzeh/ip-address-tracker.git
   cd ip-address-tracker
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   This will start the application on a local development server, typically accessible at `http://localhost:5173`.

## Usage

1. Open the application in your browser.
2. Enter an IP address or a domain name into the search bar and press enter.
3. The map will update to show the location of the IP address, and the details will be displayed below the map.
