export default class UsersController {
  static getAll = async () => {
    console.log('method getAll called 👽');
    return 'method getAll called 👽';
  };
  static create = async (data) => {
    console.log('method create called 👽');
    return 'method create called 👽';
  };
  static getById = async (oid) => {
    console.log('method getById called 👽');
    return 'method getById called 👽';
  };
  static updateById = async (oid, data) => {
    console.log('method updateById called 👽');
    return 'method updateById called 👽';
  };
}