// src/components/PlayerList.js
import React, { useState } from 'react';

const PlayerList = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const handleChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Player List</h2>

      {/* Dropdown */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="player" className="block text-sm font-medium text-gray-700">
          Select a Player:
        </label>
        <div className="relative mt-1">
          <select
            id="player"
            name="player"
            value={selectedPlayer}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="" disabled>Select a player</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14.293 7.293a1 1 0 010 1.414L9.414 13H10a1 1 0 010 2H8a1 1 0 010-2h.586l-4.293-4.293a1 1 0 011.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Display selected player */}
      {selectedPlayer && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Selected Player:</h3>
          <p>{players.find((player) => player.id === selectedPlayer)?.name}</p>
        </div>
      )}
    </div>
  );
};

export default PlayerList;
