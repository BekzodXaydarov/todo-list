import { useDispatch } from "react-redux";
import { useData } from "../../store/useSelector";
import { setFilter, setSearch } from "../../store/Slices/data.slice";
import "./header.css";
  
const Header = () => {
  const { filter, search } = useData();
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="header">
      <h1>TODO LIST</h1>
      <div className="header-form">
        <form>
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Search note..."
          />
          <button>
            {" "}
            <img src="/search.svg" alt="" />{" "}
          </button>
        </form>
        <select value={filter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button className="color-btn">
          {" "}
          <img src="/moon.svg" alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
