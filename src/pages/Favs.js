import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";

import Layout from "../components/Layout";

const Favs = () => {
  return (
    <>
      <Layout
        title="Tus favoritos"
        subtitle="Aquí puedes encontrar tus favoritos"
      >
        <FavsWithQuery />
      </Layout>
    </>
  );
};

export default Favs;
