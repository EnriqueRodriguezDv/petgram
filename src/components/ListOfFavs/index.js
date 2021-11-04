import React from "react";
import propsTypes from "prop-types";
import { Grid, Image, Link } from "./styles";

const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((item) => (
        <Link key={item.id} to={`/detail/${item.id}`}>
          <Image src={item.src} />
        </Link>
      ))}
    </Grid>
  );
};

ListOfFavs.propsTypes = {
  favs: propsTypes.arrayOf(
    propsTypes.shape({
      id: propsTypes.string.isRequired,
      src: propsTypes.string.isRequired,
    })
  ),
};

export default ListOfFavs;
