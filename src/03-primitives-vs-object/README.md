# Primitives vs Objects in JavaScript

## 📌 Goal

Understand the difference between **primitive values** and **objects** in JavaScript,
specifically how assignment, copying, and mutation behave for each.

This task focuses on recognizing **value copying vs reference sharing** and avoiding
unintended side effects in real applications.

---

## 📚 Concepts Covered

- Primitive data types
- Objects as reference types
- Copy by value vs copy by reference
- Object mutation
- `Object.freeze()` and immutability basics

---

## 🧪 Task Description

### 1️⃣ Primitives (Copy by Value)

Analyze the following behavior:

```js
let a = 10;
let b = a;
b++;
```

Explain why changing b does not affect a.

### 2️⃣ Objects (Copy by Reference)

Analyze the following behavior:

```js
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value++;
```

Explain why changing obj2 does affect obj1.

### 3️⃣ Prevent Mutation

Use:

```js
Object.freeze(obj1);
```

Observe and explain what happens when attempting to modify a frozen object.

### ✅ Expected Outcome

By the end of this task, you should be able to:

- Clearly explain the difference between primitives and objects
- Predict when changes will affect other variables
- Avoid accidental mutations
- Understand why immutability is important in modern JavaScript frameworks

### 📝 Notes

JavaScript does not expose memory addresses directly.
Instead, variables either store values (primitives) or references (objects).

Understanding this distinction is essential for writing predictable, maintainable code,
especially when working with state management and UI frameworks.
