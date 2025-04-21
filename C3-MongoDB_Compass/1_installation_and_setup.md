# 🧭 MongoDB Compass – Installation & Setup Guide

MongoDB Compass is the official GUI for MongoDB. This guide helps you get started.

---

## 📥 1. Download & Install Compass

1. Go to: [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)
2. Choose your OS and download the installer
3. Run the installer and complete the setup

---

## 🔗 2. Create a New Connection

1. Open MongoDB Compass
2. Click **"New Connection"**
3. Use the default connection string or modify as needed:
```
mongodb://localhost:27017
```
4. Click **Save & Connect**

---

## 🗂️ 3. Explore Your Databases

- After connecting, you'll see a list of your databases.
- Click on any database to view its collections.

---

## ➕ 4. Insert Data

Inside any collection:

- Click **"Add Data"**
- Choose **"Insert Document"** to add manually  
- Or select **"Import File"** to load a `.json` file

---

## 🧬 5. Schema Tab (Overview)

The **Schema** tab analyzes your documents and shows:

- Field types
- Frequency
- Distributions

Great for understanding data structure at a glance.

---

## 🔄 6. Aggregation Tab (Intro)

The **Aggregation** tab helps you:

- Build and run aggregation pipelines visually
- Filter, transform, and reshape data

Handy for exploring complex queries without writing raw shell commands.