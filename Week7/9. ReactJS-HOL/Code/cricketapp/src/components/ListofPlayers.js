import React from 'react';

// 🧮 Score Filter Component
export function Scorebelow70({ players }) {
  const below70 = players.filter((player) => player.score < 70);

  if (below70.length === 0) {
    return <p>No players have scores below 70.</p>;
  }

  return (
    <>
      <h2>List of Players having Scores Less than 70</h2>
      <ul style={{ paddingLeft: '20px' }}>
        {below70.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '6px' }}>
            Mr. {item.name} <span style={{ marginLeft: '10px', color: 'gray' }}>({item.score})</span>
          </li>
        ))}
      </ul>
    </>
  );
}

// 📋 List of Players Component
export default function ListofPlayers({ players }) {
  return (
    <>
      <h2>List of Players</h2>
      <ul style={{ paddingLeft: '20px' }}>
        {players.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '6px' }}>
            Mr. {item.name} <span style={{ marginLeft: '10px', color: 'gray' }}>({item.score})</span>
          </li>
        ))}
      </ul>
    </>
  );
}