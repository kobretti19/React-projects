import { useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { navData } from "./constans";
import { Gallery } from "./components/Gallery";

export const BASE_URL = "https://image.tmdb.org/t/p/original";

export function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDVhZDllOGE1ZDlmNGFkYjVjNDQ1MTA0MzhhZGQ4MCIsIm5iZiI6MTczMjc0MjQ0NS4wODA4MjYsInN1YiI6IjY3NDYxZmE3MGFlZTZjMTUwNmE2YzE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7cKLMICeKelyKo6mFsi7wskS-IyTijQjhhkDNwItMGE",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  const i = Math.floor(Math.random() * 20);
  return (
    <div>
      <Header navLinks={navData} />
      <Banner
        img={data?.results?.[i]?.poster_path}
        title={data?.results?.[i]?.title}
        description={data?.results?.[i]?.overview}
      />
      <Gallery data={data?.results} title={"TV Action & Adventure"} />
    </div>
  );
}
