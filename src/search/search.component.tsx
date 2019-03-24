import './search.styles.scss';
import * as React from 'react';
import {IUser} from '../types/user';

interface ISearchProps {
  searchValue: string;
  autocompleteData: IUser[];
  error: object | null;
  onSearchInput(input: string): void;
  onUserSelect (user: IUser): void;
}

export const Search = React.memo((props: ISearchProps) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearchInput(e.target.value);
  };

  let autocompleteResults = props.searchValue === '' ?
    undefined : <p className="search--autocomplete-no-results">No results</p>;

  if (props.error !== null) {

    autocompleteResults = <p className="search--autocomplete-error">Some error occurred</p>;

  }

  if (props.autocompleteData.length > 0 && props.searchValue !== '') {

    autocompleteResults = (<ul>
      {
        props.autocompleteData.map((user: IUser) => {

          return (
            <li key={user.id}>
              <button type="button" onClick={() => props.onUserSelect(user)}>
                {user.firstname} {user.lastname}
              </button>
            </li>
          )

        })
      }
    </ul>);

  }

  return (

    <div className="search">
      <input
        type="search"
        className="search--input"
        placeholder="Name Surname"
        value={props.searchValue}
        onChange={onChange}
      />
      <div className="search--autocomplete">
        {autocompleteResults}
      </div>
    </div>

  )

});
