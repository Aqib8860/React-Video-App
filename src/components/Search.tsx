import { useRef } from "react";

const Search = ({setSearchValue}: {setSearchValue: (value: string) => void }) => {

    const searchTextInput = useRef<HTMLInputElement|null>(null);

    const searchButton = () => {
        const searchText = searchTextInput.current?.value;
        if (searchText) {
            setSearchValue(searchText);
        }
    }

    return (
        <div className="d-flex">
            <input
                className="form-control search-box"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={searchTextInput}
            />
            <button className="btn btn-primary" onClick={searchButton}>Search</button>
        </div>
    );
}
export default Search;
