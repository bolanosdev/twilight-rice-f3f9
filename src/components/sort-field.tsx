type SortFieldProps = {
  onChange: (SortField: string) => void;
};

export const SortField = ({ onChange: onChangeCB }) => {
  return (
    <div>
      <label>Sort By</label>
      <select
        name="choice"
        onChange={(event) => {
          onChangeCB(event.target.value);
        }}
      >
        <option value="price-lo-hi">Price: Low to High</option>
        <option value="price-hi-lo">Price: High to Low</option>
        <option value="avg-rating">Average Rating</option>
      </select>
    </div>
  );
};
