const CSVParser = require('./csv-parser.js');
const createAccounts = require('./accounts.js');

const MAX_ACCOUNTS_AMOUNT = 10;

const csvParser = new CSVParser();

class App {

    constructor () {

        this.accounts = [];

    }

    initialize () {

        return csvParser
            .load(`./static/accounts.csv`)
            .then((data) => {

                this.accounts = createAccounts(data);

            })
            .catch((err) => {

                throw err;

            });

    }

    searchUser (searchString = '') {

        if (searchString === '') {

            return this.accounts.slice(MAX_ACCOUNTS_AMOUNT);

        }

        const [firstname, lastname] = searchString.split(' ');

        let regExpFirstname = null;
        let regExpLastname = null;

        if (typeof firstname !== 'undefined') {

            regExpFirstname = new RegExp(`^${ firstname }`, 'i');

        }

        if (typeof lastname !== 'undefined') {

            regExpLastname = new RegExp(`^${ lastname }`, 'i');

        }

        return this.accounts.filter(acc => {

            let firstNameCheck = false;
            let lastNameCheck = false;

            if (regExpFirstname !== null) {

                firstNameCheck = regExpFirstname.test(acc.firstname);

            } else if (regExpLastname !== null) {

                lastNameCheck = regExpLastname.test(acc.lastname);

            }

            return firstNameCheck || lastNameCheck;

        });

    }

}


module.exports = App;
