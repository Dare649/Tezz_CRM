import { NavLink, useLocation } from "react-router-dom";
import {motion} from 'framer-motion';
import { useMediaQuery } from "react-responsive";
import { links } from "../data/SideBarData";
import {MdMenu} from 'react-icons/md';
import { useState, useEffect, useRef } from "react";

const SideBar = ({children}) => {

  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(isTab ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

    useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]);

  const SideBar_animation = isTab
    ? //mobile view
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        //System view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
        <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed insert-0 max-h-screen mt-12 bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>

      <div className="flex mt-12">
        <motion.div
          ref={sidebarRef}
          initial={{ x: isTab ? -250 : 0 }}
          variants={SideBar_animation}
          animate={isOpen ? "open" : "closed"}
          className="bg-white w-[16rem] fixed overflow-hidden shadow-md md:relative z-40 "
        >
          <div className="ml-16">
            <img src="images/tour.jpg" alt="Logo" 
            className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="h-screen">
            {
              links.map((menu, id) =>(
                <NavLink to={menu.path} key={id}
                className={'flex gap-4 active:text-amber-500 ml-1 py-6 px-1 hover:border-l-4 hover:border-amber-500  text-gray-500 '}
                >
                  <p className="font-bold  text-md">{menu.icon}</p>
                  <p className="font-bold -mt-1 text-md">{menu.title}</p>
                </NavLink>
              ))
            }
          </div>
        </motion.div>
        <div
          className="m-3 md:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <MdMenu size={25} />
        </div>
    
      <div className="flex-1 md:flex-col">
        {children}
      </div>
      </div>
    </div>
  )
}

export default SideBar
