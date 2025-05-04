import { useParams, Navigate } from "react-router-dom";
import CategoryView from "./CategoryView";


const Category = () => {
  const { category } = useParams();

  switch (category) {
    case "grave":
      return <CategoryView category={category}  />;
    case "khundi":
      return <CategoryView category={category} />;
    default:
      // Redirect to a default or show 404
      return <Navigate to="/guest/grave" replace />;
  }
};

export default Category;
