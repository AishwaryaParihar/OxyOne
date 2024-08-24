import React from 'react';
import LeaderBoardCard from './LeaderBoardCard';
import banyanTree from '../../assets/green-plant.avif';

const LeaderBoard = () => {
  const donors = [
    { name: 'Donor 1', value: '2000' },
    { name: 'Donor 2', value: '1500' },
    { name: 'Donor 3', value: '1000' },
    { name: 'Donor 4', value: '2000' },
    { name: 'Donor 5', value: '1500' },
  ];

  const volunteers = [
    { name: 'Volunteer 1', value: '50 hours' },
    { name: 'Volunteer 2', value: '40 hours' },
    { name: 'Volunteer 3', value: '30 hours' },
    { name: 'Volunteer 4', value: '50 hours' },
    { name: 'Volunteer 5', value: '40 hours' },
  ];

  return (
    <div className="w-full mx-auto mt-3 p-4 md:px-16">
      <h2 className="sm:text-4xl text-2xl font-bold text-center mb-4">
        Lea<span className="text-green-700">der bo</span>ard
      </h2>
      <p className="font-semibold pb-8 px-10 text-center">
        "Meet the champions of our cause! Whether through dedicated service or generous contributions, these top volunteers and donors have gone above and beyond to support our mission. Their unwavering commitment and support make all the difference in our journey to create a better future."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LeaderBoardCard
          title="Top Donors"
          winnerName="Chhaya Singh"
          items={donors}
          className="relative top-4"
        />
        <div className="relative mt-14">
          <img src={banyanTree} alt="Banyan Tree" className="h-full w-auto rounded-2xl" />
        </div>
        <LeaderBoardCard
          title="Top Volunteers"
          winnerName="Aishwarya Parihar"
          items={volunteers}
          className="relative top-4"
        />
      </div>
    </div>
  );
};

export default LeaderBoard;
