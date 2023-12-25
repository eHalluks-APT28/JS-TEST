class User {

    #userPrincipalName;
    #mail;
    #smtp;
    #displayName;
    #companyName;

    constructor(userPrincipalName, mail, smtp, displayName, companyName) {
        this.#userPrincipalName = userPrincipalName;
        this.#mail = mail;
        this.#smtp = smtp;
        this.#displayName = displayName;
        this.#companyName = companyName;
    }

    setMail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error('Invalid email address');
        }
        this.#mail = value.toLowerCase();
    };

    setSmtp(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error('Invalid SMTP address');
        }
        this.#smtp = value.charAt(0).toUpperCase() + value.slice(1);
    };

    setDisplayName(value) {
        if (!value.includes('test.pl') || /[^a-zA-Z]/.test(value) || typeof value !== 'string' ) {
            throw new Error('displayName must include domain test.pl');
        }
        this.#displayName = value.toUpperCase();
    };

    setCompanyName(value) {
        if (value !== 'TEST' || /[^a-zA-Z]/.test(value) || typeof value !== 'string') {
            throw new Error('companyName must be TEST');
        }
        this.#companyName = value.toUpperCase();
    };

    get userPrincipalName() {
        return this.#userPrincipalName;
    };

    set userPrincipalName(value) {
        if (typeof value !== 'string' || value.length > 74 || /[^a-zA-Z]/.test(value)) {
            throw new Error('userPrincipalName must be a string containing only alphabetic characters and less than 75 characters long');
        }
        this.#userPrincipalName = value.toLowerCase();
    };

}

const newUser = new User(
    "tester",
    "tester@test.com",
    "Tester@test.com",
    "Tester ( TEST )",
    "Test"
);

console.log(newUser.userPrincipalName);
module.exports = User;

