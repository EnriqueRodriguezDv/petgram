import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

import Layout from "../components/Layout";

export const Details = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
