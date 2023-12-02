import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/HomeNav.css";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Myfirstweb = (proops) => {
  // Dropdown Menu tailwind css code
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  //  Logo Img Transition 
  const [onEnterLeaveScale, setonEnterLeaveScale] = useState("");
  const NavImgStyle = {
    transform: `scale(${onEnterLeaveScale})`,
    transition: `.5s ease-in-out`,
  };
  return (
    <>
      <div className="NavBar">
        <nav className="navbar-container">
          <ul className="nav-parent">
            <img
              onMouseEnter={() => {
                setonEnterLeaveScale("1.4");
              }}
              onMouseLeave={() => {
                setonEnterLeaveScale("1");
              }}
              style={NavImgStyle}
              className="nav-img"
              src="/images/osmanflaglogo.png"
              alt="Loding"
            />
            <div className="navbarChilds-Container">
              <li
                className="nav-child1 nav-allchild"

              >
                <NavLink
                  style={({ isActive, }) => {
                    return {
                      boxShadow: isActive ? "0px 3px 5px gray" : "",

                    };
                  }}
                  className="nav-link " to="/">
                  Home
                </NavLink>
              </li>
              <li
                className="nav-child2 nav-allchild"

              >
                <NavLink
                  style={({ isActive, }) => {
                    return {
                      boxShadow: isActive ? "0px 3px 5px gray" : "",

                    };
                  }}
                  className="nav-link nav-textcolor1" to="/Season1">
                  Season 1
                </NavLink>
              </li>
              <li
                className="nav-child3 nav-allchild"

              >
                <NavLink
                  style={({ isActive, }) => {
                    return {
                      boxShadow: isActive ? "0px 3px 5px gray" : "",

                    };
                  }}
                  className="nav-link nav-textcolor2" to="/Season2">
                  Season 2
                </NavLink>
              </li>
              <li
                className="nav-child4 nav-allchild"

              >
                <NavLink
                  style={({ isActive, }) => {
                    return {
                      boxShadow: isActive ? "0px 3px 5px gray" : "",

                    };
                  }}
                  className="nav-link nav-textcolor3" to="/Season3">
                  Season 3
                </NavLink>
              </li>
              <li
                className="nav-child5 nav-allchild"

              >
                <NavLink
                  style={({ isActive, }) => {
                    return {
                      boxShadow: isActive ? "0px 3px 5px gray" : "",

                    };
                  }}
                  className="nav-link nav-textcolor4" to="/Season4">
                  Season 4
                </NavLink>
              </li>
              <li
                className="nav-child6 nav-allchild  "

              >

                <NavLink
                  style={({ isActive, }) => {
                    return {
                      boxShadow: isActive ? "0px 3px 5px gray" : "",

                    };
                  }}
                  className="nav-link nav-textcolor5   " to="/Shorts">
                  Shorts
                </NavLink>
              </li>
            </div>
          </ul>
          <div className="nav-Category-parent">
            {/* Tailwind dropdown menu */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="Nav-MenuBtn inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm ring-gray-300 hover:text-gray-400 ">
                  Category
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="MenuContainer1 absolute right-0 z-[110] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-r-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-disabled
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-gray-100 text-gray-900' : 'MenuAllChilds text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <h1 className="MenuAllChilds" style={{ color:"gray",fontSize: "20px", fontFamily: "Ubuntu ,serif", fontWeight: "bolder" }}>Pictures</h1>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Duplicate
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Archive
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Move
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Share
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Add to favorites
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Delete
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
              <Transition
                className="MenuPagesContainer absolute right-[14.011rem] sm:block lg:hidden"
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="MenuContainer2 absolute right-0 z-[110] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-l-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-disabled
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-gray-100 text-gray-900' : 'MenuAllChilds text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <h1 className="MenuAllChilds" style={{ color:"gray",fontSize: "20px", fontFamily: "Ubuntu ,serif", fontWeight: "bolder" }}>Pages</h1>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Duplicate
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Archive
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Move
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Share
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Add to favorites
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'MenuAllChilds bg-black text-blue-400' : 'MenuAllChilds bg-black text-gray-300',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Delete
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>

            </Menu>

          </div>
        </nav>
      </div>
    </>
  );
};
export default Myfirstweb;
