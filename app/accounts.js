class Account {

    constructor ({ id, firstname, lastname, email }) {

        this.id = parseInt(id);
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;

    }

}

const createAccounts = (accountsRaw) => accountsRaw.map((accRaw) => new Account(accRaw));

module.exports = createAccounts;
