import { useDispatch } from "react-redux";
import { useColor, useData } from "../../store/useSelector";
import { setFilter, setSearch } from "../../store/Slices/data.slice";
import "./header.css";
import { setColorMode } from "../../store/Slices/colorMode.slice";

const Header = () => {
  const { filter, search } = useData();
  const dispatch = useDispatch();
  const color = useColor();

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleColor = () => {
    dispatch(setColorMode({}))
  }

  return (
    <div className="header">
      <h1>TODO LIST</h1>
      <div className="header-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={search}
            type="text"
            onChange={handleSearch}
            placeholder="Search note..."
          />
          <button type="submit">
            {color ? (
              <img src="/search2.svg" alt="" />
            ) : (
              <img src="/search.svg" alt="" />
            )}
          </button>
        </form>
        <select value={filter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button className="color-btn" onClick={handleColor}>
          {color ? <img src="/sun.svg" /> : <img src="/moon.svg" alt="" />}
        </button>
      </div>
    </div>
  );
};

export default Header;
