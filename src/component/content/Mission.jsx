import React from "react";
import planting from "../../assets/Planting.jpg";
import headlogo1 from "../../assets/flower-pot.png";

const Mission = () => {
  const sectionContent = [
    {
      title: "Who we are",
      text: "Oxyvan is a globally recognised non-profit organisation focused on environmental conservation and sustainable, socially just development. ATREE engages in the generation and dissemination of rigorous interdisciplinary knowledge that informs and is informed by the needs of grassroots communities, policymakers, and the wider public. It prioritises capacity-building for producing the next generation of scholars.",
    },
    {
      title: "What we do",
      text: "Oxyvan is a globally recognised non-profit organisation focused on environmental conservation and sustainable, socially just development. ATREE engages in the generation and dissemination of rigorous interdisciplinary knowledge that informs and is informed by the needs of grassroots communities, policymakers, and the wider public. It prioritises capacity-building for producing the next generation of scholars.",
    },
  ];

  return (
<<<<<<< HEAD
    <div className="w-full flex flex-col md:flex-row px-8 py-14">
      <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
        {sectionContent.map(({ title, text }, index) => (
          <div key={index} className={index !== 0 ? 'mt-4' : ''}>
            <h4 className="text-primary text-2xl font-bold">{title}</h4>
            <p>{text}</p>
            <div className="mt-5">
              <hr className="border-1 border-dashed border-green-700" />
              <hr className="border-1 mt-0.5 border-dashed border-green-700" />
=======
    <>
      <div className="flex justify-center">
        <div className="heading01">OUR MISSION</div>

        <img src={headlogo1} className="h-14 inline" alt="" />
      </div>
      <div className="w-full flex flex-col md:flex-row px-8 py-14 mx-8">
        <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
          {sectionContent.map(({ title, text }, index) => (
            <div key={index} className={index !== 0 ? "mt-4" : ""}>
              <h4 className="text-green-700 text-2xl font-bold">{title}</h4>
              <p>{text}</p>
              <div className="mt-5">
                <hr className="border-1 border-dashed border-green-700" />
                <hr className="border-1 mt-0.5 border-dashed border-green-700" />
              </div>
>>>>>>> f56fa39045ea6639e61f8a3b3a545539037f32a5
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 p-4 flex justify-center items-center relative">
          <div className="w-96 h-96 bg-gradient-to-r from-green-400 to-yellow-400 rounded-3xl"></div>
          <img
            src={planting}
            alt="Planting"
            className="absolute lg:top-14 lg:left-20  w-full h-full lg:w-96 lg:h-96 object-cover rounded-3xl"
          />
        </div>
      </div>
<<<<<<< HEAD
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center relative">
        <div className="w-96 h-96 bg-gradient-to-r from-green-400 to-yellow-400 rounded-3xl"></div>
        <img
          src={planting}
          alt="Planting"
          className="absolute lg:top-20 lg:left-20  w-full h-full lg:w-96 lg:h-96 object-cover rounded-3xl"
        />
      </div>
    </div>
=======
    </>
>>>>>>> f56fa39045ea6639e61f8a3b3a545539037f32a5
  );
};

export default Mission;
