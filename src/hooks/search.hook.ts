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

const filterByName = (item: Item, searchTerm: string) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase());

const filterByCategories = (item: Item, categories: Category[]) => {
  const selectedCategories = categories
    .filter((it) => it.checked)
    .map((it) => it.name.toLowerCase());

  let matchCategories = true;

  for (const category of selectedCategories) {
    const includesCategory = item.categories.includes(category);
    if (!includesCategory) {
      matchCategories = false;
      break;
    }
  }
  return matchCategories;
};

const sortItems = (items: Item[], sortField: string) => {
  switch (sortField) {
    case "price-lo-hi":
      return items.sort((a, b) => a.price > b.price);
      break;

    case "price-hi-lo":
      return items.sort((a, b) => a.price < b.price);
      break;

    case "avg-rating":
      return items.sort((a, b) => a.stars > b.stars);

      break;
  }
};

export const useSearch = ({ data }: SearchProps) => {
  const [filteredItems, setFilteredItems] = useState([]);

  const search = (searchTerm, categories, sortField) => {
    const filterItems = data.filter((it) => {
      const matchSearchTerm = filterByName(it, searchTerm);
      const matchCategories = filterByCategories(it, categories);
      return matchSearchTerm && matchCategories;
    });

    const sortedItems = sortItems(filterItems, sortField);

    setFilteredItems(sortedItems);
  };

  return { search, filteredItems };
};
