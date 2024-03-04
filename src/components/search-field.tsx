type SearchFieldProps = {
  onChange: (searchTerm: string) => void;
};

export const SearchField = ({ onChange: onChangeCB }: SearchFieldProps) => {
  return (
    <div>
      <label>Search</label>
      <input
        name="search"
        type="search"
        onChange={(event) => onChangeCB(event.target.value)}
      />
    </div>
  );
};
