import fs from 'fs'; // A06-2021 Vulnerable and Outdated component
import __dirname from '../utils.js';

export default class UserService {
    constructor() {
        this.path(`${__dirname}/files/users.json`)
    }
}