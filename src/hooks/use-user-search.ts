import * as React from 'react';
import {IUser} from '../types/user';
import {encodeQueryData} from '../utils/http';

export const useUserSearch = (searchString: string) => {

  const [fetchedData, setFetchedData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {

    if (searchString !== '') {

      const url = `http://localhost:3000/api/users?${encodeQueryData({searchString})}`;

      fetch(url)
        .then((data) => data.json())
        .then((data) => {

          setFetchedData(data as IUser[]);

        })
        .catch((err) => {

          setError(err);

        });


    } else if (fetchedData.length > 0) {

      setFetchedData([]);

    }


  }, [searchString]);

  return [fetchedData, error];

};
