const User = require('./app');

describe('User class', () => {

    let user;

    beforeEach(() => {
        user = new User('JohnDoe', 'john@example.com', 'smtp.example.com', 'John Doe', 'ExampleCompany');
    });

    describe('userPrincipalName setter', () => {

        it('should accept a valid string', () => {
            user.userPrincipalName = 'JaneDoe';
            expect(user.userPrincipalName).toBe('JaneDoe');
        });

        it('should throw an error for non-string values', () => {
            expect(() => {
                user.userPrincipalName = 123;
            }).toThrow('userPrincipalName must be a string containing only alphabetic characters and less than 75 characters long');
        });

        it('should throw an error for strings longer than 74 characters', () => {
            expect(() => {
                user.userPrincipalName = 'a'.repeat(75);
            }).toThrow('userPrincipalName must be a string containing only alphabetic characters and less than 75 characters long');
        });

        it('should throw an error for strings containing non-alphabetic characters', () => {
            expect(() => {
                user.userPrincipalName = 'JohnDoe123';
            }).toThrow('userPrincipalName must be a string containing only alphabetic characters and less than 75 characters long');
        });

        it('should not have public access to private fields', () => {
            expect(user.mail).toBeUndefined();
            expect(user.smtp).toBeUndefined();
            expect(user.displayName).toBeUndefined();
            expect(user.companyName).toBeUndefined();
        });
    });

    describe('setMail', () => {

        beforeEach(() => {
            user = new User('JohnDoe', 'john@example.com', 'smtp.example.com', 'John Doe', 'ExampleCompany');
        });

        it('should accept a valid email', () => {
            user.setMail('valid@example.com');
            expect(user.mail).toBe('valid@example.com');
        });

        it('should throw an error for invalid email', () => {
            expect(() => {
                user.setMail('invalid-email');
            }).toThrow('Invalid email address');
        });
    });

    describe('setSmtp', () => {

        beforeEach(() => {
            user = new User('JohnDoe', 'john@example.com', 'smtp.example.com', 'John Doe', 'ExampleCompany');
        });

        it('should accept a valid SMTP address', () => {
            user.setSmtp('smtp.valid.com');
            expect(user.smtp).toBe('smtp.valid.com');
        });

        it('should throw an error for invalid SMTP address', () => {
            expect(() => {
                user.setSmtp('invalid-smtp');
            }).toThrow('Invalid SMTP address');
        });
    });

    describe('setDisplayName', () => {

        beforeEach(() => {
            user = new User('JohnDoe', 'john@example.com', 'smtp.example.com', 'John Doe', 'ExampleCompany');
        });

        it('should accept displayName with domain test.pl', () => {
            user.setDisplayName('name (test.pl)');
            expect(user.displayName).toBe('name (test.pl)');
        });

        it('should throw an error for displayName without domain test.pl', () => {
            expect(() => {
                user.setDisplayName('name (example.com)');
            }).toThrow('displayName must include domain test.pl');
        });
    });


    describe('setCompanyName', () => {

        beforeEach(() => {
            user = new User('JohnDoe', 'john@example.com', 'smtp.example.com', 'John Doe', 'ExampleCompany');
        });

        it('should accept companyName TEST', () => {
            user.setCompanyName('TEST');
            expect(user.companyName).toBe('TEST');
        });

        it('should throw an error for companyName other than TEST', () => {
            expect(() => {
                user.setCompanyName('AnotherCompany');
            }).toThrow('companyName must be TEST');
        });
    });

});




