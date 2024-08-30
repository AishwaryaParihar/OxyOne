import React, { useEffect } from "react";
import LeaderBoardCard from "./LeaderBoardCard";
import banyanTree from "../../assets/green-plant.avif";
import headlogo1 from "../../assets/flower-pot.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const LeaderBoard = () => {
  const donors = [
    { name: "Donor 1", value: "2000" },
    { name: "Donor 2", value: "1500" },
    { name: "Donor 3", value: "1000" },
    { name: "Donor 4", value: "2000" },
    { name: "Donor 5", value: "1500" },
  ];

  const volunteers = [
    { name: "Volunteer 1", value: "50 hours" },
    { name: "Volunteer 2", value: "40 hours" },
    { name: "Volunteer 3", value: "30 hours" },
    { name: "Volunteer 4", value: "50 hours" },
    { name: "Volunteer 5", value: "40 hours" },
  ];

  // Adding GSAP animations in useEffect
  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      ".heading",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heading",
          start: "top 100%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animate the LeaderBoardCard components
    gsap.fromTo(
      ".leaderboard-card",
      { x: 100, opacity: 0 },
      {
        x:0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".leaderboard-card",
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".leaderboard-left",
      { x: -100, opacity: 0 },
      {
        x:0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".leaderboard-left",
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    // Animate the image
    gsap.fromTo(
      ".leaderboard-image",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".leaderboard-image",
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full mx-auto mt-3 p-4 px-8">
      <div className="flex justify-center heading">
        <div className="heading01">Leader Board</div>
        <img src={headlogo1} className="h-14 inline" alt="Leader Board Logo" />
      </div>
      <div className="subheading">
        "Meet the champions of our cause! Whether through dedicated service or
        generous contributions, these top volunteers and donors have gone above
        and beyond to support our mission. Their unwavering commitment and
        support make all the difference in our journey to create a better
        future."
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="leaderboard-left">
        <LeaderBoardCard
          title="Top Donors"
          winnerName="Chhaya Singh"
          items={donors}
          className="relative top-4 leaderboard-card"
        />
        </div>
        <div className="relative md:top-12 leaderboard-image">
          <img
            src={banyanTree}
            alt="Banyan Tree"
            className="h-full w-full rounded-2xl"
          />
        </div>
       <div className="leaderboard-card">
       <LeaderBoardCard
          title="Top Volunteers"
          winnerName="Aishwarya Parihar"
          items={volunteers}
          className="relative top-4 "
        />
       </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
