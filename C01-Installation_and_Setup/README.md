# MongoDB Installation SetUp

## Introduction
This repository provides a step-by-step guide for installing MongoDB on various operating systems. MongoDB is a popular NoSQL database used for high-performance, high availability, and easy scalability.

---

## Prerequisites

- **Operating System:** Windows, macOS, or Linux.
- **System Requirements:** Minimum 2 GB of RAM, 4 GB of available disk space.
- **Internet Access:** Needed to download MongoDB binaries.

---

## Installation Steps

### 1. **Install MongoDB on Windows**

#### Step 1: Download MongoDB Installer
- Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and download the latest stable version for Windows.

#### Step 2: Run the Installer
- Launch the downloaded `.msi` file and follow the installation wizard.

#### Step 3: Choose Setup Type
- Select **Complete** installation during the setup process.

#### Step 4: Add MongoDB to the System Path
- During installation, check the option to **Install MongoDB as a Service** and add MongoDB to your system PATH.

#### Step 5: Start MongoDB
- After installation, MongoDB should start automatically. If not, you can start it manually by running the following command in the command prompt:
  ```bash
  net start MongoDB
