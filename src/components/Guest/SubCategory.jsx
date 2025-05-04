import React from "react";
import { useParams } from "react-router-dom";
import UserViewHero from "./UserViewHero";

const SubCategory = () => {
  const { subCategory } = useParams();
  return <UserViewHero section={subCategory} />;
};

export default SubCategory;
