export default class UserDto {
  constructor(data) {
    this.id = data._id || data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.birthdate = data.birthdate;
    this.role = data.role;
  }
}