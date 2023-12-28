import { createContext, useState } from 'react';


const SearchContext = createContext("");
console.log("SearchContext", SearchContext);


const SearchContextProvider = ({ children }) => {
  // Define the state or data you want to share
  const [searchText, setSearchText] = useState("");
  return (
    <SearchContext.Provider value={{searchText, setSearchText}}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
  