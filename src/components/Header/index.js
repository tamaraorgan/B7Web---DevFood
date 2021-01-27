import React, { useState } from "react";
import { Container, Logo, SearchInput } from "./style";

export default ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search === '' ? false : true);

  const handleInputFocus = () => {
    setInputActive(true);
  };
  const handleInputBlur = () => {
    if (search === "") {
      setInputActive(false);
    }
  };
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Container>
      <Logo src="/assets/boxfood.svg" />
      <SearchInput
        type="search"
        placeholder="Digite o produto..."
        value={search}
        onChange={handleChange}
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}

      />
    </Container>
  );
};
