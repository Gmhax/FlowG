# 🚀 Flow3 Registration & Farming Automation

Welcome to the **Flow3 Automation**! This tool provides an automated and streamlined approach to **registering accounts** and **farming rewards** on the Flow3 network. Designed with an intuitive interface and step-by-step guidance, this suite ensures an optimized user experience.

---

## 🔍 Overview
The **Flow3 Registration** is developed to:
- ✅ **Automate Account Creation** – Generate wallets and register accounts effortlessly.
- ✅ **Use Referral Codes** – Seamlessly integrate referral codes during registration.
- ✅ **Optimize Farming Operations** – Automate farming tasks for maximum efficiency.
- ✅ **Support Proxy Integration** – Protect against IP bans by using proxies.
- ✅ **Log Account Data** – Store generated account details in `accounts.txt` for future use.

The **Flow3 Auto Bandwidth Sharing & Farming** tool allows users to:
- ✅ **Share bandwidth** to earn Flow3 tokens.
- ✅ **Run multiple accounts simultaneously.**
- ✅ **Use proxies** to avoid IP bans and limitations.
- ✅ **Automate the process** for ease of use and efficiency.
---

## ✨ Features

### 🔑 Registration
- 🔹 **Automated Wallet Generation** – Accounts are created instantly.
- 🔹 **Seamless Referral Code Input** – Easily add a referral code during setup.
- 🔹 **Integrated Proxy Support** – Use proxies to maintain anonymity.
- 🔹 **Activity Logging** – All newly created accounts are saved in `accounts.txt`.

### 🚜 Farm
- 🔹 **Multi-Account Support** – Run multiple accounts for higher rewards.
- 🔹 **Proxy Integration** – Use proxies to prevent IP bans.
- 🔹 **Automated Farming** – The script runs seamlessly in the background.
- 🔹 **Optimized Performance** – Efficiently utilizes system resources for bandwidth sharing.

---

## 🛠 Installation

### 📌 Prerequisites
- **Node.js:** v18.20.6 LTS (or later) – [Download Node.js](https://nodejs.org/)
- **Python:** Version 3.x (for extracting private keys)

### 🐧 Linux / 🍏 macOS
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/rpchubs/Flow3-Automation.git
   cd Flow3-Automation
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   npm run build
   ```
3. **Configure Proxy (if needed):**
   - Create a file named `proxy.txt` in the root directory.
   - Add proxies in this format:
     ```
     http://user:pass@host:port
     http://user:pass@host:port
     ```
4. **Run Registration:**
   ```sh
   npm run start
   ```
   - Follow the on-screen instructions to input your referral code.
5. **Extract Private Keys:**
   ```sh
   python3 getPrivateKey.py
   ```
   - This script reads `accounts.txt` and generates `privatekey.txt`.

### 🖥️ Windows Installation
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/rpchubs/Flow3-Automation.git
   cd Flow3-Automation
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   npm run build
   ```
3. **Configure Proxy (if needed):**
   - Create a `proxy.txt` file and add your proxies.
4. **Run Registration:**
   ```sh
   npm run start
   ```
   - Follow the prompts to enter your referral code.
5. **Extract Private Keys:**
   ```sh
   python getPrivateKey.py
   ```
   - This script creates `privatekey.txt` with extracted keys.

---

## 📖 Usage Instructions

### 🔹 Running the Registration Process
1. **Start the registration script:**
   ```sh
   npm run start
   ```
2. **Input your referral code** when prompted.
3. **The system automatically generates wallets** and stores data in `accounts.txt`.

### 🔹 Extracting Private Keys
After registration, extract your private keys using:
```sh
python getPrivateKey.py
```
- This script scans `accounts.txt` and exports private keys to `privatekey.txt`.

### 🔹 Using the Farm Feature
1. **Navigate to the `Flow3-Bot` folder** within the project directory.
2. **Follow on-screen instructions** to activate and manage farming operations.
3. **Optimize rewards** using an intuitive, automated farming mechanism.

---

## 🔗 Additional Resources
- 🌐 **Official Flow3 Dashboard:** [Click Here](https://dashboard.flow3.tech?ref=v4yScgtXV)
- 📢 **Community & Support:**
  - [Telegram Channel](https://t.me/RPC_Hubs)
  - [Community Chat](https://t.me/chat_RPC_Community)
- ❓ **Need Help?** Feel free to reach out via our community channels!

---

## ⚠️ Disclaimer
**This tool is for educational purposes only.**

Use it responsibly and at your own risk. The authors are not liable for any misuse or unintended consequences of using this project.

---

✨ **Happy Automating!** Maximize your Flow3 experience 🚀