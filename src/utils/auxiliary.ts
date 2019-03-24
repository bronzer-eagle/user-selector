import {IUser} from '../types/user';

export const filterAutoComplete = (autocompleteData: IUser[], selectedData: IUser[]) => {
  const ids = selectedData.map((user: IUser) => user.id);

  return autocompleteData.filter((user: IUser) => ids.indexOf(user.id) === -1);
};
