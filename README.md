Here's an English version of the README formatted for `.md` file:

---

# React Project Rewrite

This project was originally written using **SASS** and **JavaScript**. It has now been rewritten using **React**, where each section of the site is broken down into individual **components** found in the `components` folder. The project uses **Vite** for development, and you can run it locally using the command `npm run dev`. 

## Features
- **React** for building components
- **Vite** for fast development environment
- Rewritten JavaScript code into reusable React components
- **SASS** used for styling, with final compilation into a single **CSS** file

## Project Structure
The project is organized as follows:
- **components**: Contains all the individual components of the site.
- **scss**: Contains separate **SASS** files for each section of the site. These files are imported into the main `style.scss` file.
- **style.scss**: The main styling file that compiles all required styles for the project.

In this project, all the **SASS** files are compiled into one **CSS** file, so there’s no need for the `scss` files in the main project. However, the `scss` folder is still included for you to use or modify if needed.

## Getting Started

### Prerequisites
Make sure you have **Node.js** and **npm** installed. If you don't have them installed, you can get them here:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Running the Project
1. First, clone the repository:
   ```bash
   git clone https://github.com/username/repository-name.git
   ```

2. Navigate into the project folder:
   ```bash
   cd repository-name
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the project locally:
   ```bash
   npm run dev
   ```

Once the project is running, it should be available at `http://localhost:3000`.

---

## Additional Information
- The original project had separate SASS files for each section, all of which are imported into the `style.scss` file.
- This rewritten version with React provides better management of components and scalability for the project.

---

## Contributing
If you're interested in contributing to this project, we welcome your help! Please submit your changes via **Pull Requests**.

---

With this structure, you'll have a clear and professional README for your project. Feel free to modify it if you want to add more specific details about the project.
