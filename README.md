# 🚀 Flow3 Registration & Farming Automation

Welcome to the **Flow3 Automation**! This tool provides an automated and streamlined approach to **registering accounts** and **farming rewards** on the Flow3 network. Designed with an intuitive interface and step-by-step guidance, this suite ensures an optimized user experience.

---



### 📌 Prerequisites
- **Node.js:** v18.20.6 LTS (or later) – [Download Node.js](https://nodejs.org/)
- **Python:** Version 3.x (for extracting private keys)

## First Create Account: If you don't have an account yet.
- https://dashboard.flow3.tech?ref=MTutRAwfF


## 🛠 Installation


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
3. **Add Proxy for anti sybil (You can get 100 free proxies here https://proxyscrape.com/premium-free-trial):**
  - Format: http://156.233.72.218:3128
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

## Detach Session
- PRESS: CTRL A+B

### **Extract Private Keys:**
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
