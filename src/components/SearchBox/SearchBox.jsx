import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilterName } from '../../redux/filters/selectors';

function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector(selectFilterName);

  const onSearch = event => {
    const searchValue = event.target.value;

    dispatch(changeFilter(searchValue));
  };

  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel}>
        <span>Знайти контакт за ім&apos;ям</span>
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