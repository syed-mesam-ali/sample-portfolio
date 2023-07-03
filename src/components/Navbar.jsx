import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/",
    },
    {
      id: 3,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/dummy.pdf",
      download: true,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black  fixed px-4 z-10">
      <div>
        <h1 className="hidden lg:inline text-5xl font-signature ml-2">
          My &nbsp;Portfolio
        </h1>
        <h1 className="lg:hidden text-5xl font-signature ml-2">Portfolio</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} offset={-30} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                offset={-70}
              >
                {link}
              </Link>
            </li>
          ))}
          <div className="flex flex-row">
            {socialLinks.map((link) => (
              <li key={link.id} className=" px-4 py-6 cursor-pointer ">
                <a
                  href={link.href}
                  className="flex justify-between items-center"
                  download={link.download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.child}
                </a>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
