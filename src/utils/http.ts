export const encodeQueryData = (data: {[key: string]: any}) => {

  const result = [];

  for (let key in data) {

    if (data.hasOwnProperty(key)) {

      const value = data[key];
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(value);

      result.push(`${encodedKey}=${encodedValue}`);

    }

  }

  return result.join('&');

};
