import React from "react";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import html from "../assets/html.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      source: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      source: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      source: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      source: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      source: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      source: nextjs,
      title: "Nextjs",
      style: "shadow-white",
    },
    {
      id: 7,
      source: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      source: node,
      title: "Node",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {skills.map(({ id, source, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={source} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
