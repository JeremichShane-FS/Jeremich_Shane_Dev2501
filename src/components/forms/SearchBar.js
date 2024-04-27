import { useState } from "react";
import InputField from "./InputField";

const SearchBar = ({ placeholder }) => {
  //useState for later functionality
  const [searchQuery, setSearchQuery] = useState("");

  //function to handle search change for later functionality
  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  //TODO: Add debounce to handleSearchChange

  return (
    <InputField
      className="searchbar__input"
      name="search"
      placeholder={placeholder}
      type="search"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
