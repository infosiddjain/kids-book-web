export type Letter = {
  char: string;
  word: string;
  /** Extra spoken forms we accept from speech recognition. */
  say: string[];
};

const en = (char: string, word: string, say: string[]): Letter => ({
  char,
  word,
  say: [char.toLowerCase(), ...say],
});

export const englishLetters: Letter[] = [
  en("A", "Apple", ["ay", "eh", "hey", "8"]),
  en("B", "Ball", ["be", "bee"]),
  en("C", "Cat", ["see", "sea", "si"]),
  en("D", "Dog", ["dee", "the"]),
  en("E", "Elephant", ["ee"]),
  en("F", "Fish", ["ef", "eff"]),
  en("G", "Grapes", ["gee", "ji", "jee"]),
  en("H", "Hat", ["aitch", "edge", "age", "etch", "each"]),
  en("I", "Ice cream", ["eye", "aye", "ai"]),
  en("J", "Juice", ["jay", "jae"]),
  en("K", "Kite", ["kay", "okay", "ok", "cay"]),
  en("L", "Lion", ["el", "elle", "al"]),
  en("M", "Moon", ["em", "um"]),
  en("N", "Nest", ["en", "and", "in"]),
  en("O", "Orange", ["oh", "owe"]),
  en("P", "Parrot", ["pee", "pea"]),
  en("Q", "Queen", ["queue", "cue", "kew"]),
  en("R", "Rabbit", ["are", "ar", "our"]),
  en("S", "Sun", ["es", "ess", "yes"]),
  en("T", "Tree", ["tee", "tea"]),
  en("U", "Umbrella", ["you", "yu", "yoo"]),
  en("V", "Violin", ["vee", "we"]),
  en("W", "Watch", ["double you", "double u"]),
  en("X", "Xylophone", ["ex", "eggs"]),
  en("Y", "Yak", ["why", "wai"]),
  en("Z", "Zebra", ["zee", "zed"]),
];

const hi = (char: string, word: string, roman: string[]): Letter => ({
  char,
  word,
  say: [char, ...roman],
});

export const hindiVowels: Letter[] = [
  hi("अ", "अनानास", ["a", "uh"]),
  hi("आ", "आम", ["aa", "a"]),
  hi("इ", "इंजन", ["i", "e"]),
  hi("ई", "ईख", ["ee", "e", "i"]),
  hi("उ", "उल्लू", ["u", "oo"]),
  hi("ऊ", "ऊन", ["oo", "u"]),
  hi("ऋ", "ऋषि", ["ri", "rri", "ru"]),
  hi("ए", "एक", ["e", "a", "ae"]),
  hi("ऐ", "ऐनक", ["ai", "ae", "e"]),
  hi("ओ", "ओस", ["o", "oh"]),
  hi("औ", "औरत", ["au", "ou", "o"]),
  hi("अं", "अंगूर", ["an", "am", "ang"]),
  hi("अः", "", ["ah", "aha"]),
];

export const hindiConsonants: Letter[] = [
  hi("क", "कबूतर", ["ka"]),
  hi("ख", "खरगोश", ["kha"]),
  hi("ग", "गमला", ["ga"]),
  hi("घ", "घड़ी", ["gha"]),
  hi("ङ", "", ["nga"]),
  hi("च", "चम्मच", ["cha"]),
  hi("छ", "छतरी", ["chha", "cha"]),
  hi("ज", "जहाज़", ["ja"]),
  hi("झ", "झंडा", ["jha"]),
  hi("ञ", "", ["nya"]),
  hi("ट", "टमाटर", ["ta"]),
  hi("ठ", "ठेला", ["tha"]),
  hi("ड", "डमरू", ["da"]),
  hi("ढ", "ढोल", ["dha"]),
  hi("ण", "", ["na"]),
  hi("त", "तितली", ["ta"]),
  hi("थ", "थाली", ["tha"]),
  hi("द", "दरवाज़ा", ["da"]),
  hi("ध", "धनुष", ["dha"]),
  hi("न", "नल", ["na"]),
  hi("प", "पतंग", ["pa"]),
  hi("फ", "फूल", ["pha", "fa"]),
  hi("ब", "बतख", ["ba"]),
  hi("भ", "भालू", ["bha"]),
  hi("म", "मछली", ["ma"]),
  hi("य", "योग", ["ya"]),
  hi("र", "रस्सी", ["ra"]),
  hi("ल", "लालटेन", ["la"]),
  hi("व", "वन", ["va", "wa"]),
  hi("श", "शेर", ["sha"]),
  hi("ष", "षट्कोण", ["sha"]),
  hi("स", "सेब", ["sa"]),
  hi("ह", "हाथी", ["ha"]),
  hi("क्ष", "क्षत्रिय", ["ksha"]),
  hi("त्र", "त्रिशूल", ["tra"]),
  hi("ज्ञ", "ज्ञानी", ["gya"]),
];
