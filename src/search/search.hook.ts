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
      .map((it) => it.name.toLowerCase());

    setFilteredItems(
      data.filter((it) => {
        const matchSearchTerm = it.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        let matchCategories = true;
        for (const category of selectedCategories) {
          const includesCategory = it.categories.includes(category);
          if (!includesCategory) {
            matchCategories = false;
            break;
          }
        }
        return matchSearchTerm && matchCategories;
      }),
    );
  };

  return { search, filteredItems };
};
