import { useState } from "react";
import InputField from "./InputField";

const SearchBar = ({ placeholder }) => {
  //useState for later functiionality
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
      style={styles.input}
    />
  );
};

export default SearchBar;

const styles = {
  input: {
    border: "none",
    outline: "none",
    padding: "0.5rem 1.5rem 0.5rem",
    width: "100%",
    borderRadius: "1.25rem",
  },
};
