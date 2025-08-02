import React from 'react';
import ListofPlayers, { Scorebelow70 } from './components/ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers } from './components/IndianPlayers';

function App() {
  const flag = true;

  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Saurav', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 60 },
  ];

  // Updated list of real Indian cricket players (as of 2025)
  const IndianTeam = [
    'Rohit Sharma (C)',       // Captain, Opener
    'Shubman Gill',           // Opener
    'Virat Kohli',            // Top-order batsman
    'Shreyas Iyer',           // Middle-order batsman
    'Sanju Samson (WK)',      // Wicketkeeper-batsman
    'Hardik Pandya',          // All-rounder
    'Ravindra Jadeja',        // All-rounder, Spinner
    'Kuldeep Yadav',          // Spinner
    'Jasprit Bumrah',         // Fast bowler
    'Mohammed Siraj',         // Fast bowler
    'Arshdeep Singh'          // Left-arm fast bowler
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <Scorebelow70 players={players} />
        </>
      ) : (
        <>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          {OddPlayers(IndianTeam)}
          <h2>Even Players</h2>
          {EvenPlayers(IndianTeam)}
          <h2>List of Indian Players Merged:</h2>
          <ListofIndianPlayers />
        </>
      )}
    </div>
  );
}

export default App;
