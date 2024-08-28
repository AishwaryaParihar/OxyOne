import React from "react";
import tree from "../../assets/jamun.jpg";
import tree1 from "../../assets/banyan.webp";
import earth from "../../assets/earth.png";
import headlogo1 from "../../assets/flower-pot.png";
const PlantType = () => {
  return (
    <div className="w-full px-8">
      <div className="mt-10 lg:mt-20 p-4 ">
        <div className="flex justify-center">
          <div className="heading01 ">Nature's Oxygen Heroes</div>

          <img src={headlogo1} className="h-14 inline" alt="" />
        </div>
        <div className="subheading">
          Discover the magnificent plants that contribute the most to our
          environment by producing abundant oxygen, essential for life on Earth.
        </div>

        <div className="flex flex-col lg:flex-row py-1 mt-0 lg:mt-4">
          <div className="w-full lg:w-1/2 text-center p-2">
            <img src={earth} alt="Earth" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 text-xs p-2 rounded-2xl md:mt-12">
            <div className="flex items-start ">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={tree1}
                  alt="Banyan Tree"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </span>
              <span className="ps-3 ">
                <div className="text-lg text-primary font-bold">
                  Banyan Tree
                </div>
                <div className="text-sm">
                  Known for its massive size and extensive canopy, the Banyan
                  tree is a powerful oxygen producer, contributing significantly
                  to the environment.
                </div>
              </span>
            </div>

            <div className="flex py-1 ms-0 sm:ms-20 items-start">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={tree1}
                  alt="Banyan Tree"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </span>
              <span className="ps-3 ">
                <div className="text-lg text-primary font-bold">
                  Peepal Tree
                </div>
                <div className="text-sm">
                  Known for its massive size and extensive canopy, the Banyan
                  tree is a powerful oxygen producer, contributing significantly
                  to the environment.
                </div>
              </span>
            </div>

            <div className="flex py-1 ms-0 sm:ms-32 items-start ">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={tree1}
                  alt="Banyan Tree"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </span>
              <span className="ps-3 ">
                <div className="text-lg text-primary font-bold">Neem Tree</div>
                <div className="text-sm">
                  Neem is a fast-growing tree that releases a large amount of
                  oxygen, improving air quality. It has significant medicinal
                  properties, making it valuable for traditional medicine.
                </div>
              </span>
            </div>

            <div className="flex py-1 ms-0 sm:ms-20 items-start">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={tree1}
                  alt="Banyan Tree"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </span>
              <span className="ps-3 ">
                <div className="text-lg text-primary font-bold">
                  Arjuna Tree{" "}
                </div>
                <div className="text-sm">
                  Arjuna is known for its high oxygen release, contributing to
                  better air quality. Traditionally used in Ayurvedic medicine,
                  the Arjuna tree is valued for its therapeutic properties,
                  especially for heart health.
                </div>
              </span>
            </div>

            <div className="flex py-1 items-start">
              <span className="flex-shrink-0 border-4 border-green-700 p-1 rounded-full">
                <img
                  src={tree1}
                  alt="Banyan Tree"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </span>
              <span className="ps-3 ">
                <div className="text-lg text-primary font-bold">
                  Sandalwood Tree{" "}
                </div>
                <div className="text-sm">
                  Sandalwood trees are known for their oxygen-releasing
                  properties, especially in their mature stages. The wood is
                  highly valued for its fragrance and is used in a variety of
                  products, from perfumes to religious rituals.
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantType;
