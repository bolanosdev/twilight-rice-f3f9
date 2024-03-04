import { useEffect, useState } from "react";

type Category = {
  name: string;
  checked: boolean;
};
type Fruit = {
  icon: string;
  name: string;
  price: number;
  rating: number;
  categories: string[];
  tags: string[];
};

type SearchProps = {
  searchTerm: string;
  categories: Category[];
  data: Fruit[];
};

export const useSearch = ({ data }: SearchProps) => {
  const [filteredItems, setFilteredItems] = useState([]);

  const search = (searchTerm, categories) => {
    const selectedCategories = categories
      .filter((it) => it.checked)
      .map((it) => it.name);

    console.log("f: selectedCategories", selectedCategories);
    // miss to do the union between fruit.cats and selected cats
    setFilteredItems(
      data.filter((it) => {
        return it.name.toLowerCase().includes(searchTerm.toLowerCase());
      }),
    );
  };

  return { search, filteredItems };
};
