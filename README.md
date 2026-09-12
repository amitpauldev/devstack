# Dev Stack

Dev Stack is a responsive web application where developers can explore different technologies and build their own personalized tech stack. Users can browse technologies and add or remove technologies from their stack.

## 🔗 **Live Demo:** https://mydevstack.netlify.app/

---

## Technologies Used

- React.js
- Tailwind CSS, DaisyUI
- TypeScript
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite

## Features

- Add technologies to your personal stack
- Remove individual and all technologies from your stack
- Toast notifications for user actions

## Project Structure

```text
src/
├── assets/
│   ├── banner-stack.png
│   └── logo-text.png
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Technology.tsx
│   ├── TechnologyGrid.tsx
│   ├── TechnologyCard.tsx
│   ├── StackBar.tsx
│   ├── StackItem.tsx
│   └── Footer.tsx
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── data/
    └── technologies.json
```

## 🚀 Getting Started

Clone the repository

- `git clone` https://github.com/amitpauldev/devstack

Go to the project folder

- `cd dev-stack`

Install dependencies

- `npm install`

Run the development server

- `npm run dev`

The project will run at:

- `http://localhost:5173`

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent to a child component. **State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and update component state. I used it to manage data and UI changes in my project.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch and load the JSON data when the component loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It allows React to update the list efficiently when items change.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it to show an **empty stack message** when there were no items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**. A child can send data back by calling a **function passed through props** from the parent.
