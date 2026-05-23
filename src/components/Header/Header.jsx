import React, { useRef } from "react";
import Data from "../Data/data";
import "./Header.css";

function Header({
  category,
  setCategory,
  word,
  setWords,
  darkMode,
  setDarkMode,
  history,
  setHistory,
}) {
  const inputRef = useRef(null);

  const handleLanguageChange = (e) => {
    setCategory(e.target.value);
    setWords("");
  };

  const handleHistoryClick = (w) => {
    setWords(w);
    inputRef.current?.focus();
  };

  const removeHistory = (e, w) => {
    e.stopPropagation();
    setHistory((prev) => prev.filter((h) => h !== w));
  };

  const selectedLang = Data.find((d) => d.value === category);

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      {/* ── Top bar ── */}
      <div className="header-topbar">
        <div className="brand">
          <span className="brand-icon">📖</span>
          <span className="brand-name">WordWise</span>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* ── Hero title ── */}
      <div className="header-hero">
        <h1 className="hero-title">
          {word ? (
            <span className="hero-word">{word}</span>
          ) : (
            <>
              Discover the world&apos;s{" "}
              <span className="hero-highlight">words</span>
            </>
          )}
        </h1>
        <p className="hero-sub">
          Definitions · Phonetics · Examples · Synonyms · Antonyms
        </p>
      </div>

      {/* ── Search row ── */}
      <div className="search-row">
        {/* Language selector */}
        <div className="lang-select-wrap">
          <span className="lang-flag">{selectedLang?.flag ?? "🌐"}</span>
          <select
            className="lang-select"
            value={category}
            onChange={handleLanguageChange}
            aria-label="Select language"
          >
            {Data.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.flag} {opt.label}
              </option>
            ))}
          </select>
          <span className="select-arrow">▾</span>
        </div>

        {/* Search input */}
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search a word…"
            value={word}
            onChange={(e) => setWords(e.target.value)}
            aria-label="Search a word"
            autoComplete="off"
            spellCheck="false"
          />
          {word && (
            <button
              className="clear-btn"
              onClick={() => setWords("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Search history chips ── */}
      {history.length > 0 && (
        <div className="history-row" aria-label="Recent searches">
          <span className="history-label">Recent:</span>
          {history.map((w) => (
            <button
              key={w}
              className="history-chip"
              onClick={() => handleHistoryClick(w)}
            >
              {w}
              <span
                className="chip-remove"
                onClick={(e) => removeHistory(e, w)}
                role="button"
                aria-label={`Remove ${w} from history`}
              >
                ×
              </span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
