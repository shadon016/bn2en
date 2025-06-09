class BanglaNumberConverter {
  constructor() {
    this.banglaToEnglishMap = {
      "০": "0",
      "১": "1",
      "২": "2",
      "৩": "3",
      "৪": "4",
      "৫": "5",
      "৬": "6",
      "৭": "7",
      "৮": "8",
      "৯": "9",
    };

    this.englishToBanglaMap = Object.fromEntries(
      Object.entries(this.banglaToEnglishMap).map(([bn, en]) => [en, bn])
    );
  }

  toEnglish(banglaStr) {
    return banglaStr.replace(
      /[০-৯]/g,
      (digit) => this.banglaToEnglishMap[digit]
    );
  }

  toBangla(englishStr) {
    return englishStr.replace(
      /[0-9]/g,
      (digit) => this.englishToBanglaMap[digit]
    );
  }
}

module.exports = BanglaNumberConverter;
