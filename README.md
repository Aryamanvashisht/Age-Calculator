# Age Calculator

The **Age Calculator** is a simple web application that determines the age or interval between two dates. It calculates the current age based on a given date of birth and displays it in years.

## Features
- User-friendly interface to input Date of Birth.
- Displays the calculated age in years.
- Uses modern web development technologies including ReactJS, TypeScript, and Tailwind CSS.

## Technologies Used
- **ReactJS**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.

## Screenshot
![AgeCalculator](https://github.com/user-attachments/assets/08bf5789-f64e-4d49-814a-ddbae8523316)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (>= v14)
- npm (>= v6) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Aryamanvashisht/Age-Calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd age-calculator
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Application

To start the development server, run the following command:

```bash
npm start
```

or

```bash
yarn start
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build of the project:

```bash
npm run build
```

or

```bash
yarn build
```

This will generate optimized static files in the `build/` folder.

## Usage

1. Open the app in your browser.
2. Input your date of birth in the format `dd-mm-yyyy` using the date picker.
3. Click on the **Calculate Age** button to see your age displayed in years.

### Reset Functionality

Click the **Reset** button to clear the input field and the displayed age.

## Project Structure

```bash
├── public/
│   ├── index.html
├── src/
│   ├── assets/        # Static assets like images
│   ├── components/    # Reusable UI components
│   ├── App.tsx        # Main application file
│   ├── main.tsx       # Entry point for React
│   └── index.css      # Tailwind CSS directives
├── package.json       # Project configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # Documentation
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
