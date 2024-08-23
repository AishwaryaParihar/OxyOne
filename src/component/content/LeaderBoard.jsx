import React from 'react';
import LeaderBoardCard from './LeaderBoardCard';

const LeaderBoard = () => {
  const donors = [
    { name: 'Donor 1', value: '2000' },
    { name: 'Donor 2', value: '1500' },
    { name: 'Donor 3', value: '1000' },
  ];

  const volunteers = [
    { name: 'Volunteer 1', value: '50 hours' },
    { name: 'Volunteer 2', value: '40 hours' },
    { name: 'Volunteer 3', value: '30 hours' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-3 mb-24 p-4">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Lea<span className="text-green-700">der bo</span>ard
      </h2>
      <div className="grid grid-cols-1  gap-4">
        <LeaderBoardCard title="Top Donors" winnerName="Chhaya Singh" items={donors} />
        <LeaderBoardCard title="Top Volunteers" winnerName="Aishwarya Parihar" items={volunteers} />
      </div>
    </div>
  );
};

export default LeaderBoard;
