import GalleryContainer from "./GalleryContainer";

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

  return (
    <div className="flex flex-col space-y-2 mt-10 w-full">
      <div className="flex justify-center text-2xl w-full">{title}</div>
      <div className="flex flex-row gap-5 justify-center items-center  h-auto  ">
        <div className="flex flex-col h-96 space-y-1   w-64 p-4">
          <GalleryContainer
            img={img[0]}
            nameMovie={nameMovie[0]}
            overview={overview[0]}
          />
        </div>
        <div className="flex flex-col h-96 space-y-1  w-64  p-4 ">
          <GalleryContainer
            img={img[2]}
            nameMovie={nameMovie[2]}
            overview={overview[2]}
          />
        </div>
        <div className="flex flex-col h-96 w-64 space-y-1  p-4">
          <GalleryContainer
            img={img[3]}
            nameMovie={nameMovie[3]}
            overview={overview[3]}
          />
        </div>
        <div className="flex flex-col h-96 w-64 space-y-1  p-4">
          <GalleryContainer
            img={img[1]}
            nameMovie={nameMovie[1]}
            overview={overview[1]}
          />
        </div>
      </div>
    </div>
  );
}
