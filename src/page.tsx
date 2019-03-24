import * as React from 'react';
import {UserList} from './user-list/user-list.component';
import {Search} from './search/search.component';
import {IUser} from './types/user';
import {useUserSearch} from './hooks/use-user-search';
import {filterAutoComplete} from './utils/auxiliary';

export const Page = () => {

  const [searchValue, setSearchValue] = React.useState('');
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  const [data, error] = useUserSearch(searchValue);
  const onSearchInput = (value: string) => {
    setSearchValue(value);
  };
  const onUserSelect = (user: IUser) => {
    setSelectedUsers([...selectedUsers, user])
  };
  const autoCompleteData = filterAutoComplete(data, selectedUsers);

  return (
    <div>
      <Search
        autocompleteData={autoCompleteData}
        error={error}
        searchValue={searchValue}
        onUserSelect={onUserSelect}
        onSearchInput={onSearchInput}
      />
      <UserList selectedUsers={selectedUsers}/>
    </div>
  );

};
