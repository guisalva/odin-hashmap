# Odin - HashMap

![Status Badge](https://img.shields.io/badge/status-concluded-brightgreen?style=for-the-badge)

This project was built to practice implementing a **HashMap** data structure as a part of the **A Bit of Computer Science** curriculum from [The Odin Project](https://www.theodinproject.com).

The goal of this project was to understand how hash tables work internally, including hashing algorithms, bucket management, collision handling, and dynamic resizing.

To organize data inside the buckets, I used another custom implementation that was developed by me, a [Linked Lists](https://github.com/guisalva/odin-linked-lists) solution.

## 🛠️ Tech Stack

- JS
- Jest (testing)
- Linked Lists (custom implementation)

## 🚀 Installation and Usage

Clone the repository:

```bash
git clone https://github.com/guisalva/odin-hashmap.git

cd odin-hashmap
```

Install the dependencies:

```bash
npm install
```

Run the entry point with Node:

```bash
node src/index.js
```

Or run tests:

```bash
npm test
```

## 📚 What I Learned

- How hash maps works internally
- How hash functions convert keys into numerical codes
- Handling with data structures and discovering how they can be used
- How we could combine two data structures (HashMap + Linked Lists)
