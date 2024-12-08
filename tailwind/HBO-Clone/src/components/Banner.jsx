import { BASE_URL } from "../App";

export function Banner({ img, title, description }) {
  return (
    <div className="relative h-3/6 bg-gradient-to-r from-black to-black">
      <div
        className="bg-cover bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${BASE_URL + "/" + img}) ` }}
      >
        <div className="w-full h-screen flex items-end bg-blackOverlay"></div>
      </div>
      <div className="absolute p-10 pl-0  bottom-40 left-20 w-2/4 text-white space-y-6">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
      <div className="font-bold text-white absolute bottom-28 left-20 text-xs space-x-6 ">
        <button className="bg-[#2BB0D8] hover:bg-[#001988] p-3 w-40">
          WATCH THE TRILLER
        </button>
        <button className="bg-[#2BB0D8] hover:bg-[#001988] p-3 w-40">
          FIND OUT MORE
        </button>
      </div>
    </div>
  );
}
