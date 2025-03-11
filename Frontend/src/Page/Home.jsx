import React from "react";

import Button from "../Components/ui/Button";
import FlowerCard from "../Components/ui/FlowerCard";
import SocialPost from "../Components/ui/PostCard";
import TestimonialCard from "../Components/ui/TestimonialCard";

import img1 from "../asset/img1.svg";
import img2 from "../asset/img2.svg";
import img3 from "../asset/img3.svg";
import img4 from "../asset/img4.svg";
import img5 from "../asset/img5.svg";
import img6 from "../asset/img6.svg";
import img7 from "../asset/Ellipse 3.svg";
import img8 from "../asset/Ellipse 4.svg";
import img9 from "../asset/Ellipse 5.svg";
import img10 from "../asset/Ellipse 6.svg";

function Home() {
  return (
    <section className="bg-[#F2F2F2] min-h-screen w-full">
      {/* Hero Section  */}
      <section className="w-full flex justify-center items-center px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center py-10 w-full max-w-6xl">
          <div className="flex flex-col w-full md:w-1/2 md:mb-24 justify-center mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug md:max-w-md">
              Flowers, 🌻 what the world needs
            </h1>
            <h3 className="text-sm sm:text-base md:text-xl py-4 md:py-5">
              Browes between hounders of flowers
            </h3>
            <div className="mt-2">
              <Button variant="secondry" size="sm">
                Browse
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full md:w-1/2 max-w-lg gap-3 sm:gap-4">
            <img
              src={img1}
              alt="img1"
              className="h-24 w-full sm:h-28 md:h-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img2}
              alt="img2"
              className="h-24 w-full sm:h-28 md:h-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img3}
              alt="img3"
              className="h-24 w-full sm:h-28 md:h-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img4}
              alt="img4"
              className="h-24 w-full sm:h-28 md:h-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img5}
              alt="img5"
              className="h-24 w-full sm:h-28 md:h-40 object-cover rounded-lg mx-auto"
            />
            <img
              src={img6}
              alt="img6"
              className="h-24 w-full sm:h-28 md:h-40 object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Product Section  */}
      <section className="flex flex-col justify-center px-4 sm:px-6">
        <div className="max-w-6xl h-full w-full mx-auto">
          <div className="flex items-center py-8 sm:py-10">
            <p className="flex-1 border-t border-gray-500"></p>
            <span className="px-3 sm:px-4 text-2xl sm:text-3xl font-semibold text-black whitespace-nowrap">
              Best selers
            </span>
            <p className="flex-1 border-t border-gray-500"></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-2 place-items-center">
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
      <section className="flex flex-col justify-center mt-10 px-4 sm:px-6">
        <div className="max-w-6xl h-full w-full mx-auto">
          <div className="flex items-center py-8 sm:py-10">
            <p className="flex-1 border-t border-gray-500"></p>
            <span className="px-3 sm:px-4 text-2xl sm:text-3xl font-semibold text-black whitespace-nowrap">
              Recent Posts
            </span>
            <p className="flex-1 border-t border-gray-500"></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6">
            <SocialPost
              username="Emily"
              date="2022/22/8"
              image={img6}
              title="Best flowers for inside home"
              description="All the flowers are best for your lovly house just get the one you love the most 😊"
              likes="15"
              views="2001"
              avatarSrc={img7}
              className="border border-gray-100 mx-auto w-full max-w-sm sm:max-w-full"
            />

            <SocialPost
              username="Emily"
              date="2022/22/8"
              image={img6}
              title="Best flowers for inside home"
              description="All the flowers are best for your lovly house just get the one you love the most 😊"
              likes="15"
              views="2001"
              avatarSrc={img7}
              className="border border-gray-100 mx-auto w-full max-w-sm sm:max-w-full"
            />

            <SocialPost
              username="Emily"
              date="2022/22/8"
              image={img6}
              title="Best flowers for inside home"
              description="All the flowers are best for your lovly house just get the one you love the most 😊"
              likes="15"
              views="2001"
              avatarSrc={img7}
              className="border border-gray-100 mx-auto w-full max-w-sm sm:max-w-full lg:block hidden"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="flex flex-col justify-center mt-10 pb-10 px-4 sm:px-6">
        <div className="max-w-6xl h-full w-full mx-auto">
          <div className="flex items-center py-8 sm:py-10">
            <p className="flex-1 border-t border-gray-500"></p>
            <span className="px-3 sm:px-4 text-2xl sm:text-3xl font-semibold text-black whitespace-nowrap">
              Testimonials
            </span>
            <p className="flex-1 border-t border-gray-500"></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6">
            <TestimonialCard
              username="Atena"
              avatarSrc={img8}
              reviewText="i'm buying flower from them every weak, always fresh flowers and beutiful... love'em so much..keep going"
              rating={4}
              emojiList={["😊", "🌻", "💯", "💯"]}
              className="border border-gray-100 mx-auto w-full max-w-sm sm:max-w-full"
            />

            <TestimonialCard
              username="Atena"
              avatarSrc={img9}
              reviewText="i'm buying flower from them every weak, always fresh flowers and beutiful... love'em so much..keep going"
              rating={4}
              emojiList={["😊", "🌻", "💯", "💯"]}
              className="border border-gray-100 mx-auto w-full max-w-sm sm:max-w-full"
            />

            <TestimonialCard
              username="Atena"
              avatarSrc={img10}
              reviewText="i'm buying flower from them every weak, always fresh flowers and beutiful... love'em so much..keep going"
              rating={4}
              emojiList={["😊", "🌻", "💯", "💯"]}
              className="border border-gray-100 mx-auto w-full max-w-sm sm:max-w-full lg:block hidden"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;