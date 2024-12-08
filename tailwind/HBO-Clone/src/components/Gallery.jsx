import { BASE_URL } from "../App";

export function Gallery({ data, title }) {
  let img = [];
  let nameMovie = [];
  let overview = [];
  data?.map((item) => {
    img.push(item.poster_path);
    nameMovie.push(item.original_title);
    overview.push(item.overview);
    console.log(overview);
  });

  console.log(img[0]);
  console.log(nameMovie[0]);
  return (
    <div className="flex flex-col space-y-2 mt-10">
      <div className="flex justify-center text-2xl">{title}</div>
      <div className="flex flex-row gap-5 justify-center items-center h-auto  ">
        <div className="flex flex-col h-96 space-y-1   w-64 p-4">
          <img className="w-full h-56" src={BASE_URL + img[0]} />
          <h3 className="font-bold">{nameMovie[0]}</h3>
          <p className=" leading-4 text-gray-500 overflow-y-auto">
            {overview[0]}
          </p>
        </div>
        <div className="flex flex-col h-96 space-y-1  w-64  p-4 ">
          <img className="w-full h-56" src={BASE_URL + img[1]} />
          <h3 className="font-bold">{nameMovie[1]}</h3>
          <p className="leading-4 text-gray-500 overflow-y-auto">
            {overview[1]}
          </p>
        </div>
        <div className="flex flex-col h-96 w-64 space-y-1  p-4">
          <img className="w-full h-56" src={BASE_URL + img[2]} />
          <h3 className="font-bold">{nameMovie[2]}</h3>
          <p className="  leading-4 text-gray-500  overflow-y-auto">
            {overview[2]}
          </p>
        </div>
        <div className="flex flex-col h-96 space-y-1   w-64 p-4 ">
          <img className="w-full h-56" src={BASE_URL + img[3]} />
          <h3 className="font-bold">{nameMovie[3]}</h3>
          <p className="  leading-4 text-gray-500 overflow-y-auto">
            {overview[3]}
          </p>
        </div>
      </div>
    </div>
  );
}
