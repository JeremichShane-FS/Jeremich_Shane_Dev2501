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
      name="search"
      type="search"
      value={searchQuery}
      placeholder={placeholder}
      onChange={handleSearchChange}
      className="searchbar__input"
    />
  );
};

export default SearchBar;
