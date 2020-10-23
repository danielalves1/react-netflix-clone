import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando toda a lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 70) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Made{" "}
        <a
          href="https://www.youtube.com/watch?v=tBweoUiMsDg"
          className="bonieky"
        >
          live with Bonieky Lacerda
        </a>{" "}
        for the purpose of studying with React and database by{" "}
        <a href="https://www.themoviedb.org" className="tmdb">
          TMDB
        </a>
        <br/>
        Dev: Daniel Alves
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img alt="" src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" />
        </div>
      )}
    </div>
  );
};
