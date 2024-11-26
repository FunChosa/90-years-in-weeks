# 90-years-in-weeks

This React application visualizes 90 years of a user's life in weeks, displaying a grid of cells representing the total number of weeks and highlighting those already lived.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/90-years-in-weeks.git`
2. **Navigate to the project directory:** `cd 90-years-in-weeks`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Features

* **Date of Birth Input:** Users enter their birthdate using an input field.
* **Week Grid Visualization:** A grid visually represents 90 years in weeks.  Lived weeks are highlighted.
* **Details View:** A "Details" button displays the user's age in years, months, weeks, and days.
* **Error Handling:**  Displays an error message if the entered date is in the future or more than 90 years in the past.

## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.10
* dayjs: ^1.11.13 (for date calculations)
* CSS

## State Management

The application's state is managed using the `useState` hook.

## Date Calculations

The application uses `dayjs` to calculate the difference between the user's birthdate and the current date in days, weeks, months, and years.

## Grid Representation
The 90-year grid is represented internally as a two-dimensional array.

## Deployment
Deployed on Netlify: https://funchosa-90-years-in-weeks.netlify.app

## Future Enhancements
Improve performance for rendering the large grid.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.