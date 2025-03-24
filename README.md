# 🚀 Flow3 Registration & Farming Automation

Welcome to the **Flow3 Automation**! This tool provides an automated and streamlined approach to **registering accounts** and **farming rewards** on the Flow3 network. Designed with an intuitive interface and step-by-step guidance, this suite ensures an optimized user experience.

---


## 🛠 Installation

### 📌 Prerequisites
- **Node.js:** v18.20.6 LTS (or later) – [Download Node.js](https://nodejs.org/)
- **Python:** Version 3.x (for extracting private keys)

### 🐧 Linux / 🍏 macOS
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Gmhax/FlowG
   cd FlowG
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   npm run build
   ```
3. **Add Proxy for anti sybil (You can get 100 free proxies here.):**
  
     ```
     nano proxy.txt
     ```
**Create Screen Session:**

   ```sh
   screen -S flow3
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
   - This script reads ` nano accounts.txt` and generates `nano privatekey.txt`.


---

## ⚠️ Disclaimer
**This tool is for educational purposes only.**

Use it responsibly and at your own risk. The authors are not liable for any misuse or unintended consequences of using this project.

---

 **Happy Automating!** Maximize your Flow3 experience 
