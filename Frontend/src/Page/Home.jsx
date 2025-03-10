import React from "react";
import Button from "../Components/ui/Button";
import img1 from "../asset/img1.svg";
import img2 from "../asset/img2.svg";
import img3 from "../asset/img3.svg";
import img4 from "../asset/img4.svg";
import img5 from "../asset/img5.svg";
import img6 from "../asset/img6.svg";
import img7 from "../asset/Ellipse 3.svg";
import FlowerCard from "../Components/ui/FlowerCard";
import SocialPost from "../Components/ui/PostCard";

function Home() {
  return (
    <section className="bg-[#F2F2F2]">
      {/* Hero Section  */}
      <section className="w-full h-full flex justify-center items-center ">
        <div className="flex justify-center items-center py-10 w-[95%] max-w-6xl">
          <div className="flex flex-col md:h-full w-[50%] md:mb-24 justify-center ">
            <h1 className="text-2xl md:text-5xl md:w-80 font-semibold leading-snug">
              Flowers, 🌻 what the world needs
            </h1>
            <h3 className="text-xs py-5 md:text-xl md:py-5">
              Browes between hounders of flowers
            </h3>
            <Button variant="secondry" size="sm">
              Browse
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 w-[50%] md:h-full md:w-full max-w-lg gap-4 md:ml-31 ">
            <img
              src={img1}
              alt="img1"
              className="h-20 w-30 md:h-40 md:w-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img2}
              alt="img2"
              className="h-20 w-30 md:h-40 md:w-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img3}
              alt="img3"
              className="h-20 w-30 md:h-40 md:w-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img4}
              alt="img4"
              className="h-20 w-30 md:h-40 md:w-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img5}
              alt="img5"
              className="h-20 w-30 md:h-40 md:w-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img6}
              alt="img6"
              className="h-20 w-30 md:h-40 md:w-40 object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Product Section  */}
      <section className="flex justify-center items-center pb-20">
        <div className="max-w-6xl h-full w-full">
          <div className="flex items-center py-20">
            <p className="flex-1 border-t border-gray-500"></p>
            <span class="px-4 text-3xl font-semibold text-black">
              Best selers
            </span>
            <p className="flex-1 border-t border-gray-500"></p>
          </div>

          <div className="grid grid-cols-4 gap-16">
            <FlowerCard img={img1} price="$3" className="col-span-1">
              p1
            </FlowerCard>

            <FlowerCard img={img2} price="$7" className="col-span-1">
              p2
            </FlowerCard>

            <FlowerCard img={img3} price="$5" className="col-span-1">
              p3
            </FlowerCard>

            <FlowerCard img={img4} price="$8" className="col-span-1">
              p4
            </FlowerCard>
          </div>
        </div>
      </section>

      {/* Recent Post Section  */}
      <section className="flex justify-center">
        <div className="max-w-6xl h-full w-full py-20">
          <div className="flex items-center py-20">
            <p className="flex-1 border-t border-gray-500"></p>
            <span class="px-4 text-3xl font-semibold text-black">
              Best selers
            </span>
            <p className="flex-1 border-t border-gray-500"></p>
          </div>

          <div className="grid grid-cols-3 gap-1">
            <SocialPost
              username="Emily"
              date="2022/22/8"
              image={img6}
              title="Best flowers for inside home"
              description="All the flowers are best for your lovly house just get the one you love the most 😊"
              likes="15"
              views="2001"
              avatarSrc={img7}
              className="border border-gray-100"
            ></SocialPost>

            <SocialPost
              username="Emily"
              date="2022/22/8"
              image={img6}
              title="Best flowers for inside home"
              description="All the flowers are best for your lovly house just get the one you love the most 😊"
              likes="15"
              views="2001"
              avatarSrc={img7}
              className="border border-gray-100"
            ></SocialPost>

            <SocialPost
              username="Emily"
              date="2022/22/8"
              image={img6}
              title="Best flowers for inside home"
              description="All the flowers are best for your lovly house just get the one you love the most 😊"
              likes="15"
              views="2001"
              avatarSrc={img7}
              className="border border-gray-100"
            ></SocialPost>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
