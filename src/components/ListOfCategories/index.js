import React, { useState, useEffect } from "react";

import { Category } from "../category";
import { List, Item } from "./styles";


function useCategoriesData(){
  const [categories, setCategories] = useState([]);
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://petgram-server-pink.vercel.app/categories`)
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false)
      });
  }, []);

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 200;

      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key="loading"> <Category /></Item>
          : categories.map((item, index) => (
        <Item key={item.id}>
          <Category  {...item} path={`/pet/${item.id}`} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()} {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
