import { BASE_URL } from "../App";

export default function GalleryContainer({ img, nameMovie, overview }) {
  return (
    <>
      <div className="flex flex-col h-96 space-y-1   w-64 p-4">
        <img className="w-full h-56" src={BASE_URL + img} />
        <h3 className="font-bold">{nameMovie}</h3>
        <p className=" leading-4 text-gray-500 overflow-y-auto">{overview}</p>
      </div>
    </>
  );
}
