import { Link, useLocation } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { FaLightbulb, FaBookmark, FaGraduationCap } from "react-icons/fa";
import { PiPath } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";
import { FaFilePen, FaPuzzlePiece, FaListCheck } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const location = useLocation();

  const sections = [
    {
      title: "Overview",
      links: [
        {
          path: "/dashboard",
          label: "Dashboard",
          icon: <MdDashboard size={20} />,
        },
      ],
    },
    {
      title: "Learn",
      links: [
        {
          path: "/tutorials",
          label: "Tutorials",
          icon: <FaLightbulb size={18} />,
        },
        {
          path: "/bookmarks",
          label: "Bookmarks",
          icon: <FaBookmark size={17} />,
        },
        {
          path: "/learning-paths",
          label: "Learning Paths",
          icon: <PiPath size={19} />,
        },
      ],
    },
    {
      title: "Grow",
      links: [
        {
          path: "/courses",
          label: "Courses",
          icon: <FaGraduationCap size={20} />,
        },
        {
          path: "/certificates",
          label: "Certificates",
          icon: <TbFileCertificate size={20} />,
        },
      ],
    },
    {
      title: "Practice",
      links: [
        {
          path: "/practice-tests",
          label: "Practice Tests",
          icon: <FaFilePen size={18} />,
        },
        {
          path: "/challenges",
          label: "Challenges",
          icon: <FaPuzzlePiece size={18} />,
        },
        {
          path: "/interview-prep",
          label: "Interview Prep",
          icon: <FaListCheck size={18} />,
        },
      ],
    },
  ];

  const linkClass = (path) =>
    `flex items-center w-fit gap-2 text-sm px-2 rounded cursor-pointer
     ${
       location.pathname === path
         ? "text-[#0A2478] font-semibold"
         : "text-[#878787]"
     }`;

  return (
    <div className="h-178 bg-[#F3F2F2] w-55 flex flex-col justify-between p-8">
      {/* TOP */}
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <p className="font-bold">{section.title}</p>

            {section.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClass(link.path)}
              >
                <span>{link.icon}</span>
                <span className={
                  location.pathname === link.path
                  ? 'text-[#0A2478]'
                  : 'text-black'
                }>{link.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="text-[#0A2478] flex flex-col gap-2 font-bold">
        <div className="flex w-fit gap-2 items-center cursor-pointer">
          <IoMdSettings size={20} />
          <p>Settings</p>
        </div>
        <div className="flex w-fit gap-2 items-center cursor-pointer">
          <BiLogOut size={20} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
