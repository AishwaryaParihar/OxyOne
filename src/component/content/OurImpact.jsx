import React from "react";
import impact01 from "../../assets/impact01.png";
import impact02 from "../../assets/impact02.png";
import impact03 from "../../assets/impact03.png";
import impact04 from "../../assets/impact04.png";
import headlogo1 from "../../assets/flower-pot.png";
// import headlogo2 from "../../assets/plant (1).png"
// import headlogo3 from "../../assets/plant (2).png"
// import headlogo4 from "../../assets/plant.png"

const OurImpact = () => {
  const ourImpactData = [
    {
      title: "Restoring Natural Habitats",
      text: "Our tree planting efforts have helped restore critical ecosystems, providing shelter and sustenance for countless species of  wildlife.",
      image: impact01
    },
    {
      title: "Fighting Climate Change",
      text: "Every tree planted absorbs carbon dioxide, helping to reduce the effects of global warming and create a healthier environment for future generations.",
      image: impact02
    },
    {
      title: "Improving Air Quality",
      text: "Trees act as natural air filters, absorbing pollutants and releasing clean oxygen, making the air we breathe fresher and healthier.",
      image: impact03
    },
    {
      title: "Empowering Communities",
      text: "Our volunteers and donors play a vital role in this mission. For every tree planted, they are contributing to a greener, more sustainable world. In return, we recognize and reward their efforts, building a strong community dedicated to positive change.",
      image: impact04
    },
  ]
  return (
    <div className="container mx-auto px-4 py-8 my-10">
      <div className="flex justify-center">
        <div className="heading01">OUR IMPACT</div>

        <img src={headlogo1} className="h-14 inline" alt="" />
      </div>
      <div className="subheading mr-8">Making a Greener Tomorrow</div>

      <div className="text-lg text-center mx-8 mb-12">
        At OxyVan, we believe that small actions can lead to big changes.
        Through our tree planting initiative, we are not only adding greenery to
        our planet but also creating a lasting impact on nature and our
        communities. Here's how:
      </div>

      <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img
            src={impact01}
            alt="Restoring Natural Habitats"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Restoring Natural Habitats
            </h3>
            <p>
              Our tree planting efforts have helped restore critical ecosystems,
              providing shelter and sustenance for countless species of
              wildlife.
            </p>
          </div>
        </div>
        <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img
            src={impact02}
            alt="Fighting Climate Change"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Fighting Climate Change
            </h3>
            <p>
              Every tree planted absorbs carbon dioxide, helping to reduce the
              effects of global warming and create a healthier environment for
              future generations.
            </p>
          </div>
        </div>
        <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img
            src={impact03}
            alt="Improving Air Quality"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Improving Air Quality
            </h3>
            <p>
              Trees act as natural air filters, absorbing pollutants and
              releasing clean oxygen, making the air we breathe fresher and
              healthier.
            </p>
          </div>
        </div>
        <div className="card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img
            src={impact04}
            alt="Empowering Communities"
            className="w-full h-60 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Empowering Communities
            </h3>
            <p>
              Our volunteers and donors play a vital role in this mission. For
              every tree planted, they are contributing to a greener, more
              sustainable world. In return, we recognize and reward their
              efforts, building a strong community dedicated to positive change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
