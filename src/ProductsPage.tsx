import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "./fetch_data";
import { useSearch } from "./search/search.hook.ts";
import { Categories } from "./Categories.tsx";
import styled from "@emotion/styled";

const PageContainer = styled.div({
  marginTop: 110,
  display: "flex",
});

const Sidebar = styled.div({
  border: "1px solid #92979b",
  paddingLeft: 30,
  margin: 20,
  width: "15rem",
  height: "70vh",
});

const Content = styled.div({
  margin: 20,
  width: "100%",
});

const TopbarContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
});

const CardGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  gridAutoRows: "minmax(100%, auto)",
});

const CardContainer = styled.div({
  border: "1px solid",
  borderRadius: "5px",
  padding: "10px",
});

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const { filteredItems, search } = useSearch({
    data: fetchData(),
  });

  useEffect(() => {
    search(searchTerm, categories);
  }, [searchTerm, categories]);

  const onCategoriesChange = (categories) => {
    setCategories(categories);
  };

  return (
    <PageContainer>
      <Sidebar>
        <Categories onChange={onCategoriesChange} />
      </Sidebar>
      <Content>
        <TopbarContainer>
          <div>
            <label>Search</label>
            <input
              name="search"
              type="search"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Sort By</label>
            <select name="choice">
              <option value="price-lo-hi">Price: Low to High</option>
              <option value="price-hi-lo">Price: High to Low</option>
              <option value="avg-rating">Average Rating</option>
            </select>
          </div>
        </TopbarContainer>
        <CardGrid>
          {filteredItems.map((it, index) => (
            <CardContainer key={index}>
              <i>{it.emoji}</i>
              <p>name: {it.name}</p>
              <p>stars: {it.stars}</p>
              <p>price: {it.price}</p>
              <p>categories: {it.categories.join(",")}</p>
              <p>tags: {it.tags?.join(",")}</p>
            </CardContainer>
          ))}
        </CardGrid>
      </Content>
    </PageContainer>
  );
};

export default ProductsPage;
