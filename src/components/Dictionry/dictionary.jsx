import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Descriptions from "../Descriptions/Descriptions";
import "./Dictionary.css";

function Dictionary() {
  const [word, setWords] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchWord = useCallback(async () => {
    if (!word.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word.trim()}`
      );
      setMeanings(data);
      setHistory((prev) => {
        const filtered = prev.filter((w) => w !== word.trim());
        return [word.trim(), ...filtered].slice(0, 8);
      });
    } catch (err) {
      setMeanings([]);
      if (err.response?.status === 404) {
        setError("no_word");
      } else {
        setError("network");
      }
    } finally {
      setLoading(false);
    }
  }, [word, category]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (word.trim()) fetchWord();
      else {
        setMeanings([]);
        setError(null);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [word, category]);

  return (
    <div className={`app-root ${darkMode ? "dark" : "light"}`}>
      <div className="bg-gradient" />
      <div className="app-content">
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWords={setWords}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          history={history}
          setHistory={setHistory}
        />
        <Descriptions
          word={word}
          meanings={meanings}
          category={category}
          loading={loading}
          error={error}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default Dictionary;
