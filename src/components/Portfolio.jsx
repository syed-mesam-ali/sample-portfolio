import React from "react";
import LiveChat from "../assets/portfolio/live-chat.jpg";
import kanban from "../assets/portfolio/kanban.jpg";
import connectFriends from "../assets/portfolio/connectFriends.jpg";
import wizForm from "../assets/portfolio/wizForm.jpg";
import knight from "../assets/portfolio/knight.jpg";
import maths from "../assets/portfolio/maths.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      source: LiveChat,
      code: "https://github.com/syed-mesam-ali/Live-Chat-App",
      demo: "https://live-chat-syed.netlify.app/",
    },
    {
      id: 2,
      source: kanban,
      code: "https://github.com/syed-mesam-ali/kanban-board/",
      demo: "https://kanban-board-syed.netlify.app/",
    },
    {
      id: 3,
      source: connectFriends,
      code: "https://github.com/syed-mesam-ali/Connect-Friends/",
      demo: "https://connect-friends-syed.netlify.app/",
    },
    {
      id: 4,
      source: knight,
      code: "https://github.com/syed-mesam-ali/Knight-Position-Finder/",
      demo: "https://knight-position-finder.netlify.app/",
    },
    {
      id: 5,
      source: maths,
      code: "https://github.com/syed-mesam-ali/maths-quiz-app/",
      demo: "https://maths-quiz-app-syed.netlify.app/",
    },
    {
      id: 6,
      source: wizForm,
      code: "https://github.com/syed-mesam-ali/wizardForm-Eden/",
      demo: "https://edenwizform.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, source, demo, code }) => (
            <div
              key={id}
              className=" relative shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={source}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
              {/* <p className="absolute top-[30%] right-[40%] text-2xl text-black font-bold">
                Live Chat
              </p> */}
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(demo, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(code, "_blank")}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
