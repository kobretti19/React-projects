import { AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setMobileMenuShown] = useState(true);
  return (
    <nav className=" z-10  relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={() => setMobileMenuShown(!isMobileMenuShown)}
        className="lg:hidden hover:bg-gray-200 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div
        className={`${!isMobileMenuShown === false && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className=" lg:space-x-8 flex flex-col lg:flex-row bg-gray-100 lg:border-none lg:bg-transparent text-lg border border-gray-200 rounded-lg px-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500 "
                    : "hover:bg-gray-100"
                } ${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Card button */}
      <div className="fixed bottom-4 left-4 lg:static lg:mr-8">
        <div
          onClick={onClickShoppingBtn}
          className="btn-press-anim flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md"
        >
          <AiOutlineShopping />
        </div>
      </div>
    </nav>
  );
}
