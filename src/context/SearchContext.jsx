import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('sort');
    const [clicked, setClicked] = useState(false);

    return (
        <SearchContext.Provider value={{ search, setSearch, sort, setSort, clicked, setClicked }}>{children}</SearchContext.Provider>
    );
};