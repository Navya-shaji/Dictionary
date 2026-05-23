# 📖 WordWise — Multilingual Dictionary

A beautiful, fast, and fully responsive dictionary app built with **React + Vite**. Look up definitions, phonetics, examples, synonyms, and antonyms for words in **30+ languages** — all powered by the free [Free Dictionary API](https://dictionaryapi.dev/).

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌍 **30+ Languages** | English, Hindi, Spanish, French, Japanese, Russian, German, Italian, Korean, Arabic, Turkish, Chinese, Dutch, Polish, Swedish, Norwegian, Danish, Finnish, Greek, Czech, Romanian, Ukrainian, Indonesian, Malay, Thai, Vietnamese, Hebrew, Persian, Swahili, and more |
| 🔊 **Phonetics & Audio** | IPA transcription and native pronunciation audio playback |
| 🏷️ **Part-of-Speech Badges** | Color-coded badges for noun, verb, adjective, adverb, and more |
| 📝 **Rich Definitions** | Numbered definitions with examples, synonyms, and antonym tags |
| 🕐 **Search History** | Quick-access chips for your last 8 searched words |
| 🌙 **Dark / Light Mode** | Smooth animated theme toggle |
| ⚡ **Debounced Search** | Auto-fetches 500 ms after you stop typing — no button needed |
| 💀 **Skeleton Loading** | Shimmer placeholders while results load |
| ❌ **Error Handling** | Friendly "word not found" and network error states |
| 📱 **Fully Responsive** | Works great on mobile, tablet, and desktop |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/navya-shaji/Dictionary.git
cd Dictionary

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimised output is placed in the `dist/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `vite build` and then pushes the `dist/` folder to the `gh-pages` branch.

---

## 🗂️ Project Structure

```
Dictionary/
├── index.html                        # HTML entry point
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      # React root
    ├── App.jsx                       # App shell
    ├── App.css                       # Global styles & font import
    └── components/
        ├── Data/
        │   └── data.jsx              # Language list (30+ languages)
        ├── Dictionry/                # Core logic component
        │   ├── dictionary.jsx        # State management & API calls
        │   └── Dictionary.css        # Background gradient & layout
        ├── Header/
        │   ├── Header.jsx            # Search input, language picker, history
        │   └── Header.css            # Header card styles
        └── Descriptions/
            ├── Descriptions.jsx      # Definitions, phonetics, tags
            └── Description.css       # Definition card styles
```

---

## 🌐 Supported Languages

| Language | Code | Language | Code |
|---|---|---|---|
| 🇬🇧 English | `en` | 🇨🇳 Chinese (Simplified) | `zh` |
| 🇮🇳 Hindi | `hi` | 🇳🇱 Dutch | `nl` |
| 🇪🇸 Spanish | `es` | 🇵🇱 Polish | `pl` |
| 🇫🇷 French | `fr` | 🇸🇪 Swedish | `sv` |
| 🇯🇵 Japanese | `ja` | 🇳🇴 Norwegian | `no` |
| 🇷🇺 Russian | `ru` | 🇩🇰 Danish | `da` |
| 🇩🇪 German | `de` | 🇫🇮 Finnish | `fi` |
| 🇮🇹 Italian | `it` | 🇬🇷 Greek | `el` |
| 🇰🇷 Korean | `ko` | 🇨🇿 Czech | `cs` |
| 🇧🇷 Brazilian Portuguese | `pt-BR` | 🇷🇴 Romanian | `ro` |
| 🇸🇦 Arabic | `ar` | 🇺🇦 Ukrainian | `uk` |
| 🇹🇷 Turkish | `tr` | 🇮🇩 Indonesian | `id` |
| 🇲🇾 Malay | `ms` | 🇹🇭 Thai | `th` |
| 🇻🇳 Vietnamese | `vi` | 🇮🇱 Hebrew | `he` |
| 🇮🇷 Persian | `fa` | 🇰🇪 Swahili | `sw` |

> **Note:** The Free Dictionary API has varying coverage per language. English has the most complete data. Some languages may return limited results.

---

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite 6](https://vitejs.dev/)** — Build tool & dev server
- **[Axios](https://axios-http.com/)** — HTTP client
- **[Free Dictionary API](https://dictionaryapi.dev/)** — Dictionary data (free, no key required)
- **[Inter](https://fonts.google.com/specimen/Inter)** — Typography
- **[GitHub Pages](https://pages.github.com/)** — Hosting via `gh-pages`

---

## 📡 API

This app uses the **Free Dictionary API** — no API key required.

```
GET https://api.dictionaryapi.dev/api/v2/entries/{language}/{word}
```

**Example:**
```
https://api.dictionaryapi.dev/api/v2/entries/en/serendipity
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Free Dictionary API](https://dictionaryapi.dev/) for the open dictionary data
- [Google Fonts](https://fonts.google.com/) for the Inter typeface
- [Vite](https://vitejs.dev/) for the blazing-fast build tooling

---

<p align="center">Made with ❤️ by <a href="https://github.com/navya-shaji">Navya Shaji</a></p>
