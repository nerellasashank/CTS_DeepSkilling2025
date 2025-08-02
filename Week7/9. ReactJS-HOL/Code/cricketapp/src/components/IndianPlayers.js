import React from 'react';

// 🧩 Destructuring Odd Players from full 11 players
// Odd positions: 1st, 3rd, 5th, 7th, 9th, 11th (index 0,2,4,6,8,10)
export function OddPlayers(players) {
  const oddPlayers = players.filter((_, index) => index % 2 === 0); // 0,2,4,6,8,10

  return (
    <ul>
      {oddPlayers.map((player, idx) => (
        <li key={idx}>{player}</li>
      ))}
    </ul>
  );
}

// 🧩 Destructuring Even Players from full 11 players
// Even positions: 2nd, 4th, 6th, 8th, 10th (index 1,3,5,7,9)
export function EvenPlayers(players) {
  const evenPlayers = players.filter((_, index) => index % 2 === 1); // 1,3,5,7,9

  return (
    <ul>
      {evenPlayers.map((player, idx) => (
        <li key={idx}>{player}</li>
      ))}
    </ul>
  );
}

// 🧪 Merged Indian Players
// Just return the full IndianTeam here for demonstration (could be T20 + Ranji merged)
export function ListofIndianPlayers() {
  const T20Players = [
    'Rohit Sharma (C)',
    'Shubman Gill',
    'Virat Kohli',
    'Shreyas Iyer',
    'Sanju Samson (WK)',
  ];
  const RanjiTrophyPlayers = [
    'Hardik Pandya',
    'Ravindra Jadeja',
    'Kuldeep Yadav',
    'Jasprit Bumrah',
    'Mohammed Siraj',
    'Arshdeep Singh',
  ];

  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <ul>
      {mergedPlayers.map((player, idx) => (
        <li key={idx}>{player}</li>
      ))}
    </ul>
  );
}
