// src/components/Player.js
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ResponsiveLine } from '@nivo/line';
import PlayerList from '../components/PlayerList';

// Function to fetch dummy player data
const getPlayerData = async () => {
  // Simulating a delay to simulate an asynchronous API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Dummy player data
  const dummyData = [
    {
      id: 'player1',
      data: [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 20 },
        { x: 4, y: 25 },
        // Add more data points as needed
      ],
    },
  ];

  return dummyData;
};

const Player = () => {
  const { data, isLoading, isError } = useQuery('playerData', getPlayerData);

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const players = [
    { id: '1', name: 'Player 1' },
    { id: '2', name: 'Player 2' },
    // Add more players as needed
  ];


  // Callback function to receive selected player data
  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading player data</div>;

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
       <h2 className="text-2xl font-bold mb-4">Player Details</h2>

        {/* PlayerList component with callback */}
        <PlayerList players={players} onPlayerSelect={handlePlayerSelect} />

        {/* Display selected player details */}
        {selectedPlayer && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Selected Player:</h3>
            <p>ID: {selectedPlayer.id}</p>
            <p>Name: {selectedPlayer.name}</p>
            {/* Add more player details as needed */}
          </div>
        )}
      <h2 className="text-2xl font-bold mb-4">Player Stats</h2>
      <div className="bg-white p-4 rounded-md shadow-md" style={{ height: '400px', width: '80%' }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
          xScale={{ type: 'point' }} // Set xScale type to 'point'
          yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
          curve="monotoneX"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Games',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Score',
            legendOffset: -60,
            legendPosition: 'middle',
          }}
          colors={{ scheme: 'nivo' }}
          enablePoints={true}
          enableGridX={false}
          enableGridY={false}
          enableSlice={false}
          enableCrosshair={false}
          useMesh={true}
          tooltip={({ point }) => (
            <div
              style={{
                background: 'white',
                padding: '9px 12px',
                border: '1px solid #ccc',
              }}
            >
              <strong>{point.data.xFormatted}</strong>: {point.data.yFormatted}
            </div>
          )}
        />
      </div>
    </div>

  );
};

export default Player;
