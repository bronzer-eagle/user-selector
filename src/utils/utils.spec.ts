import { filterAutoComplete } from './auxiliary';
import { encodeQueryData } from './http';
import {IUser} from '../types/user';

describe('Testing utils', () => {

  it('should encode object to url query', () => {

    const plainObject = {
      id: 0,
      name: 'Test',
      someValue: 'some value',
    };
    const expectedResult = `id=${plainObject.id}&name=${plainObject.name}&someValue=some%20value`;
    const realResult = encodeQueryData(plainObject);

    expect(realResult).toEqual(expectedResult);

  });

  it('should filter autocomplete array', () => {

    const selectedValues = [{
      id: 1,
      firstname: 'test',
      lastname: 'test',
      email: 'test@test.com',
    }] as IUser[];
    const autocompletedValues = [{
      id: 1,
      firstname: 'test',
      lastname: 'test',
      email: 'test@test.com',
    }, {
      id: 2,
      firstname: 'test 2',
      lastname: 'test 2',
      email: 'test2@test.com',
    }] as IUser[];

    const result = filterAutoComplete(autocompletedValues, selectedValues);

    expect(result.length).toBe(1);
    expect(result.find((user: IUser) => user.id === autocompletedValues[0].id)).toBeUndefined();

  });

});
