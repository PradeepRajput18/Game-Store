// import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading : string;
  onSelectItem:(item:string)=>void;
}


import { MouseEvent, useState } from "react";
function ListGroup({items,heading,onSelectItem}:Props) {

  const [selectedIndex,setSelectedIndex]=useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>Sorry ,No citites are there</p>}
      <ul className="list-group">
        {items.map((city, index) => (
          <li
            className={
              selectedIndex == index ? "listgroud active" : "listgroup"
            }
            onClick={()=>{setSelectedIndex(index),onSelectItem(city)}}
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
