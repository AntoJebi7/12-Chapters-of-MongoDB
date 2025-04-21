# ✅ Steps to Verify MongoDB Installation (Windows)

After installation, follow these steps to verify and configure MongoDB properly.

---

## 🧪 1. Test the MongoDB Server

Open **Command Prompt** and type:


mongod
📌 Note:
If you installed using Complete Setup, this should work immediately.

If you chose Custom Setup, you might get an error. Here's how to fix it ⬇️

## 🔧 2. Configure Environment Variables

Press Win + S and search "Environment Variables"

Click Edit the system environment variables

In the System Properties window, click Environment Variables

Under System Variables, select Path > click Edit

Click New and Browse to:

C:\Program Files\MongoDB\Server\<version>\bin
Click OK to save everything

## ⚠️ 3. Fix "data/db not found" Error

By default, mongod looks for a data\db directory. If not found, it exits.

You can manually specify the path using:

mongod --dbpath="C:\your\custom\data\db"
📎 Make sure to:

Create the folder manually if it doesn't exist

Run Command Prompt as Administrator to avoid permission issues

## 🛎️ 4. Check MongoDB Service

Search "Services" in the Start Menu

Look for MongoDB Server

Confirm that it's Running

This means the server is installed and active as a background service.

## 💬 5. Install MongoDB Shell (mongosh)

To interact with MongoDB using a modern CLI:

Go to: MongoDB Shell

Download the latest shell for Windows

Extract the files

Create a folder named shell inside your MongoDB directory

Move the extracted contents there

## 🧭 6. Add Shell to PATH
Go back to Environment Variables

Again edit the Path variable

Click New and browse to:


C:\Program Files\MongoDB\Server\<version>\shell\bin

## 🚀 7. Run the Shell

Open a new terminal and type:

mongosh
