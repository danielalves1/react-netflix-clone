import React from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left">
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right">
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  alt={item.original_title}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};