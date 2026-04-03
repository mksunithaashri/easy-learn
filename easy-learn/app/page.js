"use client";

import { useState } from 'react';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');
    setExplanation('');

    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setExplanation(data.explanation);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Easy Learn 🌟</h1>
      <p className="subtitle">Type any tricky topic, and we'll explain it like you're 5!</p>

      <form className="input-box" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="topic">What do you want to learn about?</label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Black Holes, Photosynthesis, Why the sky is blue..."
            autoComplete="off"
            required
          />
        </div>
        <button className="submit-btn" type="submit" disabled={loading || !topic.trim()}>
          {loading ? 'Thinking...' : 'Explain Like I\'m 5! 🚀'}
        </button>
      </form>

      {loading && (
        <div className="loading-wrapper">
          <div className="spinner"></div>
          <div className="loading-text">Our magical brain is thinking... 🧠✨</div>
        </div>
      )}

      {error && (
        <div className="error-box">
          Oops! 🙈 {error}
        </div>
      )}

      {explanation && !loading && !error && (
        <div className="response-card">
          <h2>Here you go! 🎈</h2>
          <div className="response-content">
            {explanation.split('\n').map((line, index) => (
              <p key={index} style={{ minHeight: line ? 'auto' : '1rem' }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
