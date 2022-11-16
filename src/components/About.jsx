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
          I have a strong background in Javascript and React with six months of
          experience as an intern and 2.3 years of experience as a Software
          Engineer L1 at Keross Research and Development Centre Private Limited.
          I worked on various internal and client projects using Javascript,
          ReactJs, Html, CSS, Jquery, Redux, Bootstrap, and HandlebarJS.
        </p>
        <br />
        <p className="text-xl">
          I completed B.Tech in Information Technology from Bengal Institute of
          Technology and my schooling at St.Sebastian School.
        </p>
        <br />
        <p className="text-xl">
          I continue to strive to be a better Software Engineer and invite
          collaboration for new learning opportunities.
        </p>
        <br />
        <p className="text-xl">
          <span className="font-bold">Phone :</span> +91 90888 59952
          <br />
          <span className="font-bold">Email :</span> syedmesamali@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
