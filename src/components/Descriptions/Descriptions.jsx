import React, { useState } from "react";
import "./Description.css";

// ── Word image with loading/error states ──────────────────
function WordImage({ src, word, darkMode }) {
  const [imgState, setImgState] = useState("loading"); // loading | loaded | error

  if (!src) return null;

  return (
    <div className={`word-image-wrap ${darkMode ? "dark" : "light"} ${imgState}`}>
      {imgState === "loading" && (
        <div className="word-image-skeleton" />
      )}
      <img
        src={src}
        alt={`Visual for "${word}"`}
        className="word-image"
        style={{ display: imgState === "loaded" ? "block" : "none" }}
        onLoad={() => setImgState("loaded")}
        onError={() => setImgState("error")}
      />
      {imgState === "error" && (
        <div className="word-image-fallback">
          <span>🖼️</span>
          <p>No image found</p>
        </div>
      )}
    </div>
  );
}

// Part-of-speech badge colors
const posColors = {
  noun:        { bg: "#ede9fe", text: "#7c3aed" },
  verb:        { bg: "#dcfce7", text: "#16a34a" },
  adjective:   { bg: "#fef9c3", text: "#a16207" },
  adverb:      { bg: "#ffedd5", text: "#c2410c" },
  pronoun:     { bg: "#dbeafe", text: "#1d4ed8" },
  preposition: { bg: "#fce7f3", text: "#be185d" },
  conjunction: { bg: "#e0f2fe", text: "#0369a1" },
  interjection:{ bg: "#fee2e2", text: "#b91c1c" },
  article:     { bg: "#f3f4f6", text: "#374151" },
};

const darkPosColors = {
  noun:        { bg: "#3b0764", text: "#c4b5fd" },
  verb:        { bg: "#052e16", text: "#86efac" },
  adjective:   { bg: "#422006", text: "#fde68a" },
  adverb:      { bg: "#431407", text: "#fdba74" },
  pronoun:     { bg: "#1e3a5f", text: "#93c5fd" },
  preposition: { bg: "#500724", text: "#f9a8d4" },
  conjunction: { bg: "#0c4a6e", text: "#7dd3fc" },
  interjection:{ bg: "#450a0a", text: "#fca5a5" },
  article:     { bg: "#1f2937", text: "#9ca3af" },
};

function PosBadge({ pos, darkMode }) {
  const palette = darkMode ? darkPosColors : posColors;
  const colors = palette[pos?.toLowerCase()] ?? (darkMode
    ? { bg: "#1e1e35", text: "#a5b4fc" }
    : { bg: "#e0e7ff", text: "#4338ca" });
  return (
    <span
      className="pos-badge"
      style={{ background: colors.bg, color: colors.text }}
    >
      {pos}
    </span>
  );
}

function Descriptions({ word, meanings, category, loading, error, darkMode, wordImage }) {
  // ── Loading skeleton ──────────────────────────────────────
  if (loading) {
    return (
      <div className={`desc-container ${darkMode ? "dark" : "light"}`}>
        <div className="skeleton-wrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-line wide" />
              <div className="skeleton-line medium" />
              <div className="skeleton-line narrow" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Empty state ───────────────────────────────────────────
  if (!word) {
    return (
      <div className={`desc-container ${darkMode ? "dark" : "light"}`}>
        <div className="empty-state">
          <div className="empty-icon">📚</div>
          <h2 className="empty-title">Start exploring words</h2>
          <p className="empty-sub">
            Type any word above to see its definition, phonetics, examples,
            synonyms, and antonyms — in 30+ languages.
          </p>
          <div className="suggestion-chips">
            {["serendipity", "ephemeral", "resilience", "wanderlust", "solitude"].map(
              (w) => (
                <span key={w} className="suggestion-chip">
                  {w}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Error states ──────────────────────────────────────────
  if (error === "no_word") {
    return (
      <div className={`desc-container ${darkMode ? "dark" : "light"}`}>
        <div className="error-state">
          <div className="error-icon">🔍</div>
          <h2 className="error-title">No results for &ldquo;{word}&rdquo;</h2>
          <p className="error-sub">
            This word wasn&apos;t found in the dictionary. Try checking the
            spelling or switching to a different language.
          </p>
        </div>
      </div>
    );
  }

  if (error === "network") {
    return (
      <div className={`desc-container ${darkMode ? "dark" : "light"}`}>
        <div className="error-state">
          <div className="error-icon">⚡</div>
          <h2 className="error-title">Connection error</h2>
          <p className="error-sub">
            Couldn&apos;t reach the dictionary API. Please check your internet
            connection and try again.
          </p>
        </div>
      </div>
    );
  }

  if (!meanings || meanings.length === 0) return null;

  // ── Phonetics ─────────────────────────────────────────────
  const allPhonetics = meanings.flatMap((m) => m.phonetics ?? []);
  const phoneticsWithText = allPhonetics.filter((p) => p.text);
  const phoneticsWithAudio = allPhonetics.filter((p) => p.audio);

  // ── Meanings grouped by part of speech ───────────────────
  const grouped = {};
  meanings.forEach((entry) => {
    (entry.meanings ?? []).forEach((m) => {
      const pos = m.partOfSpeech ?? "other";
      if (!grouped[pos]) grouped[pos] = [];
      grouped[pos].push(...(m.definitions ?? []));
    });
  });

  return (
    <div className={`desc-container ${darkMode ? "dark" : "light"}`}>
      {/* ── Word image ── */}
      <WordImage src={wordImage} word={word} darkMode={darkMode} />

      {/* ── Word header card ── */}
      <div className="word-header-card">
        <div className="word-header-left">
          <h2 className="word-display">{word}</h2>
          {phoneticsWithText.length > 0 && (
            <div className="phonetics-row">
              {[...new Set(phoneticsWithText.map((p) => p.text))].map(
                (text, i) => (
                  <span key={i} className="phonetic-text">
                    {text}
                  </span>
                )
              )}
            </div>
          )}
        </div>
        {phoneticsWithAudio.length > 0 && (
          <div className="audio-wrap">
            <audio controls key={phoneticsWithAudio[0].audio}>
              <source src={phoneticsWithAudio[0].audio} type="audio/mpeg" />
            </audio>
          </div>
        )}
      </div>

      {/* ── Definitions by part of speech ── */}
      {Object.entries(grouped).map(([pos, defs]) => (
        <div key={pos} className="pos-section">
          <div className="pos-header">
            <PosBadge pos={pos} darkMode={darkMode} />
            <div className="pos-divider" />
          </div>

          <ol className="def-list">
            {defs.map((def, idx) => (
              <li key={idx} className="def-item">
                <p className="def-text">{def.definition}</p>

                {def.example && (
                  <div className="def-example">
                    <span className="def-label">Example</span>
                    <span className="def-example-text">
                      &ldquo;{def.example}&rdquo;
                    </span>
                  </div>
                )}

                <div className="def-tags-row">
                  {def.synonyms?.length > 0 && (
                    <div className="def-tags">
                      <span className="def-label syn">Synonyms</span>
                      {def.synonyms.slice(0, 6).map((s) => (
                        <span key={s} className="tag syn-tag">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  {def.antonyms?.length > 0 && (
                    <div className="def-tags">
                      <span className="def-label ant">Antonyms</span>
                      {def.antonyms.slice(0, 6).map((a) => (
                        <span key={a} className="tag ant-tag">
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}

      {/* ── Source links ── */}
      {meanings[0]?.sourceUrls?.length > 0 && (
        <div className="source-row">
          <span className="source-label">Sources:</span>
          {meanings[0].sourceUrls.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="source-link"
            >
              {new URL(url).hostname}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Descriptions;
