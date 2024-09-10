import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(state => state.filters.name);

  const onSearch = event => {
    const searchValue = event.target.value;

    dispatch(changeFilter(searchValue));
  };
  
  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel}>
        <span>Find contacts by name</span>
        <br />
        <input
          type="text"
          name="searchField"
          value={selectNameFilter}
          onChange={onSearch}
        />
      </label>
    </div>
  );
}

export default SearchBox;