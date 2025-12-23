# Button-wise-color-Typescript 🎨

A simple **TypeScript-only** project that changes the background color of the page based on which button is clicked.  
This project focuses on **clean logic, proper DOM typing, and TypeScript fundamentals**.

---

## ✨ Features

- 🎯 Change background color by clicking buttons
- 🎨 Supports fixed colors: Green, Blue, Red, Yellow
- 🔀 Random RGB color generation
- 🧠 Uses event delegation for cleaner logic
- 🛡️ Type-safe DOM handling with TypeScript
- ❌ No unnecessary if-else nesting

---

## 🧠 What I Learned

- How to safely access DOM elements in TypeScript
- Why `textContent` can be `null` and how to handle it
- Difference between `includes()` and `indexOf()`
- How TypeScript catches logic issues early
- Writing clean, readable frontend logic

---

## 🛠 Tech Stack

- **TypeScript** (no direct JS writing)
- HTML
- CSS

---

## 🚀 How It Works

- A container listens for click events (event delegation)
- Button text is extracted and normalized
- Fixed colors are applied directly
- Non-fixed buttons generate random RGB colors
- Background color updates dynamically

---

## 📁 Project Structure

```
project/
│
├── src/
│ └── script.ts
│
├── dist/
│ └── script.js
│
├── index.html
├── style.css
├── tsconfig.json
└── README.md
```


## 1️⃣ npm init
```
npm init -y
```
### 2️⃣ TypeScript install
```
npm install typescript --save-dev
```
### 3️⃣ TypeScript config generate
```
npx tsc --init
```

### 4️⃣ Compile & run
```
npx tsc --watch
```

### Create vite config file

```
touch vite.config.ts
```

🎯 Why This Project

This project was built to strengthen my TypeScript basics and understand how simple UI logic becomes more reliable with proper typing.

Strong developers are built from strong fundamentals.

❤️ Final Note

This is a learning-focused project, intentionally kept simple.
Clean code > Complex code.

Happy Coding 🚀