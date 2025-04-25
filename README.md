# ☕ **Governance-Token-Core** Smart Contract

A smart contract implementation for a decentralized governance token. This core module enables token-based voting, proposal creation, and decision-making mechanisms for DAO-style systems, ensuring transparent and community-driven project governance.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Kthombare2005/Governance-Token-Core
cd Governance-Token-Core
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PRIVATEKEY="your_core_wallet_private_key"
CORE_TEST2_SCAN_KEY="your_testnet2_explorer_api_key"
```

> ⚠️ **Important:** Never share your private key or commit the `.env` file to version control.

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Use a deployment script:

```bash
npx hardhat run scripts/deploy.js --network core_testnet2
```

---

## 🔍 Contract Verification

You can verify contracts using Core block explorers:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address> <constructor_args_if_any>
```

API keys for verification must be included in `.env` as shown above.

---
