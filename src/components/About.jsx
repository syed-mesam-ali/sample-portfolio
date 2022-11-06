import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full sm:h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl md:mt-20 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
          dolores beatae, illum eum minima similique enim magnam alias, culpa
          rem aliquam eaque unde exercitationem. Quisquam tempora laudantium
          expedita eius ad fugit distinctio modi repellendus voluptas quae iure,
          voluptatibus, officia a exercitationem omnis. Laborum in amet cum
          itaque ut doloribus ipsum.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          error beatae at dolore molestiae facilis exercitationem doloremque.
          Atque, vero asperiores rerum nostrum aperiam dolore eaque sequi aut
          reiciendis harum itaque ut eligendi pariatur ducimus! Vel rem
          cupiditate optio? Iusto quibusdam alias earum veniam consequatur
          aliquid asperiores sunt rem facilis modi?
        </p>
      </div>
    </div>
  );
};

export default About;
