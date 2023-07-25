import { useState } from "react";
import "./App.css";
import Header from "./containers/Header";
import Main from "./containers/Main";

export type ItemType = {
  id: number;
  company: string;
  logo: string;
  new: Boolean;
  featured: Boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

import listingsData from "./data.json";

function App() {
  const [listingFiltered, setListingFiltered] = useState<string[] | []>([]);
  return (
    <>
      <Header
        listingFiltered={listingFiltered}
        clearFilter={setListingFiltered}
      />
      <Main
        listings={listingsData}
        addToFilter={setListingFiltered}
        filter={listingFiltered}
      />
    </>
  );
}

export default App;
