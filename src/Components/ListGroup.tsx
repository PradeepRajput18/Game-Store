// import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
function ListGroup() {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Mumbai"];
  let selectedIndex = -1;
  const handleCick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Cities</h1>
      {cities.length == 0 && <p>Sorry ,No citites are there</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex == index ? "listgroud active" : "listgroup"
            }
            onClick={handleCick}
            key={city}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
