import HBOImg from "../assets/hbo-logo.svg?react";

export function Header({ navLinks }) {
  return (
    <nav className="flex flex-wrap justify-between items-center ml-20 mr-32 h-14 bg-white text-sm font-light">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-16 h- mr-16 ml-8">
          <img src={HBOImg} />
        </div>
        <div>
          <ul className="flex  space-x-6 cursor-pointer ">
            {navLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="space-x-4 text-sm">
        <button className="font-bold hover:bg-gray-100 p-3">SIGN IN</button>
        <button className="font-bold text-white bg-[#3251db] hover:bg-[#001988] p-2 w-36">
          SIGN UP FOR MAX
        </button>
      </div>
    </nav>
  );
}
