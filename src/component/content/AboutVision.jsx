import React from 'react';
import mission from '../../assets/mission1.webp';
import vission from '../../assets/vision.webp';
import headlogo1 from "../../assets/flower-pot.png";

const AboutVision = () => {
  const sections = [
    {
      title: 'Our Mission',
      text: 'To conserve the lands and waters on which all life depends. A world where the diversity of life thrives, and people act to conserve nature for its own sake and its ability to fulfill our needs and enrich our lives.',
      imgSrc: mission,
    },
    {
      title: 'Our Vision',
      text: 'A world where the diversity of life thrives, and people act to conserve nature for its own sake and its ability to fulfill our needs and enrich our lives. A world where the diversity of life thrives, and people act to conserve nature for its own sake and its ability to fulfill our needs and enrich our lives.',
      imgSrc: vission,
    },
  ];

  return (
    <div className="px-4 md:px-8">
      {sections.map((section, index) => (
        <div className="w-full flex flex-col md:flex-row mb-8" key={index}>
          {index === 0 ? (
            <>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left md:p-4">
                <div className="flex justify-center items-center">
                  <h2 className="heading01 mr-2">{section.title}</h2>
                  <img src={headlogo1} className="h-14 inline transition-transform duration-500 ease-in-out transform hover:scale-110" alt="" />
                </div>
                <p className="text-base md:text-lg">{section.text}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-full md:w-[480px] lg:w-[600px] h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-full md:w-[400px] lg:w-[500px] h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left md:p-4">
                <div className="flex justify-center items-center">
                  <h2 className="heading01 mr-2">{section.title}</h2>
                  <img src={headlogo1} className="h-14 inline transition-transform duration-500 ease-in-out transform hover:scale-110" alt="" />
                </div>
                <p className="text-base md:text-lg">{section.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutVision;
