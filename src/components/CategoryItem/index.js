import React from "react";
import { Container, CategoryImage } from "./style";

export default ({ data, activeCategory, setActiveCategory }) => {
  const handleCategoryClick = () => {
    setActiveCategory(data.id);
  };


  return (
    <Container
      data-tip={data.name}
      data-for="tip-top"
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
    >
      <CategoryImage src={data.image} />
    </Container>
  );
};
