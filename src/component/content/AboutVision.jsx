import React from 'react';
import mission from '../../assets/mission1.webp';
import vission from '../../assets/vision.webp';

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
    <div className="px-4 md:px-8 ">
      {sections.map((section, index) => (
        <div className="w-full flex flex-col md:flex-row " key={index}>
          {index === 0 ? (
            <>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left p-4">
                <h2 className="heading01 mb-4">{section.title}</h2>
                <p className="text-base md:text-lg">{section.text}</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={section.imgSrc} alt={section.title} className="w-full md:w-[480px] lg:w-[600px] h-auto object-cover" />
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={section.imgSrc} alt={section.title} className="w-full md:w-[400px] lg:w-[500px] h-auto object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left p-4">
                <h2 className="text-3xl md:text-4xl font-bold underline mb-4">{section.title}</h2>
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
