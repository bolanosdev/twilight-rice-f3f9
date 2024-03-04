import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "./fetch_data";
import { useSearch } from "./hooks/search.hook.ts";
import { SearchField, Categories, SortField } from "./components";
import {
  PageContainer,
  TopbarContainer,
  Content,
  Sidebar,
  CardGrid,
  CardContainer,
} from "./styles.tsx";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [sortField, setSortField] = useState("price-lo-hi");

  const { filteredItems, search } = useSearch({
    data: fetchData(),
  });

  useEffect(() => {
    search(searchTerm, categories, sortField);
  }, [searchTerm, categories, sortField]);

  const onSearchTermChanged = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const onCategoriesChange = (categories) => {
    setCategories(categories);
  };

  const onSortFieldChange = (sortField) => {
    setSortField(sortField);
  };

  return (
    <PageContainer>
      <Sidebar>
        <Categories onChange={onCategoriesChange} />
      </Sidebar>
      <Content>
        <TopbarContainer>
          <SearchField onChange={onSearchTermChanged} />
          <SortField onChange={onSortFieldChange} />
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
