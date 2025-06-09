# bn2en
Convert Bangla (Bengali) numbers to English and english numbers to bangla number.


Convert Bangla (Bengali) numbers to English digits and vice versa.  
A simple utility for developers who work with Bangla digit-based applications (e.g., forms, UI, data parsing, etc.).

---

## 🚀 Features

- ✅ Convert Bangla numbers to English (`১২৩৪৫` → `12345`)
- ✅ Convert English numbers to Bangla (`67890` → `৬৭৮৯০`)
- ✅ Small and dependency-free
- ✅ Can be used in Node.js, React, Next.js

---

## 📦 Installation

```bash
npm install bangla-num-convert
```

## Node.js / CommonJS

const BanglaNumberConverter = require('bangla-num-convert');
const converter = new BanglaNumberConverter();

console.log(converter.toEnglish("১২৩৪৫")); // Output: 12345
console.log(converter.toBangla("67890"));   // Output: ৬৭৮৯০

## ES6 / React / Next.js

import BanglaNumberConverter from 'bangla-num-convert';

const converter = new BanglaNumberConverter();
const english = converter.toEnglish("১২৩৪");
const bangla = converter.toBangla("5678");

console.log(english); // 1234
console.log(bangla);  // ৫৬৭৮

## API Reference
new BanglaNumberConverter()
Creates a new instance of the converter.


### Converts Bangla digits in a string to English digits.
toEnglish(banglaString)

converter.toEnglish("১২৩৪৫"); // "12345"

### Converts English digits in a string to Bangla digits.
toBangla(englishString)

converter.toBangla("67890"); // "৬৭৮৯০"

## 🌐 Use Cases
Translating input/output for Bangladeshi users

Displaying localized data

Converting numbers in forms, receipts, bills, reports, etc.

## 📄 License
MIT License
© 2025 Shadon chandra das

### ✉️ Contact
Have questions or suggestions?
📧 mail: shadon016@gmail.com
🌐 GitHub: github.com/shadon016




