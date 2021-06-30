const Transaction = require('./transaction');
const Wallet = require('./index');
const {verifySignature} = require('../util');

/**
 * @author diego
 * @since 1.0.0
 */


describe('Transaction()', () => {

   let transaction,
       senderWallet,
       recipient,
       amount;

    beforeEach(() => {

       senderWallet = new Wallet();
       recipient = 'recipient-public-key';
       amount = 50;
       transaction = new Transaction({senderWallet, recipient, amount});
    });


    it('has an `ìd`', () => {

       expect(transaction).toHaveProperty('id');

    });



    describe('outputMap', () => {

       it('has an `outputMap`', () =>{

           expect(transaction).toHaveProperty('outputMap');
       });

       it('output the amount to the recipient', () => {

           expect(transaction.outputMap[recipient]).toEqual(amount);
       });

       it('output the remaining balanace for the `senderWallet`', () => {

           expect(transaction.outputMap[senderWallet.publicKey]).toEqual(senderWallet.balance - amount);

       });

    });



    describe('input', () => {

        it('has an `input`', () => {

           expect(transaction).toHaveProperty('input');
        });

        it('has a timestamp in the `input`', () => {

            expect(transaction.input).toHaveProperty('timestamp');
        });

        it('sets the amount to the senderWallet balance', () => {

           expect(transaction.input.amount).toEqual(senderWallet.balance);
        });

        it('sets the address to the senderWallet publicKey', () => {

           expect(transaction.input.address).toEqual(senderWallet.publicKey);
        });

        it('signs the input', () => {

            expect(
                verifySignature({
                    publicKey: senderWallet.publicKey,
                    data: transaction.outputMap,
                    signature: transaction.input.signature
                })
            ).toBe(true)
        });

    });


    describe('validTransaction()', () => {

        let errorMock;

        beforeEach(() => {

           errorMock = jest.fn();
           global.console.error = errorMock;
        });

        describe('when the transaction is valid', () => {

            it('returns true', () => {

                expect(Transaction.validTransaction(transaction)).toBe(true);
            });

        });


        describe('when the transaction is invalid', () => {

            describe('output map value invalid', () => {

                it('returns false and logs an error', () => {
                    transaction.outputMap[senderWallet.publicKey] = 999999;
                    expect(Transaction.validTransaction(transaction)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                })

            });

            describe('tx signature invalid and logs an error', () => {

                it('returns false and logs an error', () => {
                    transaction.input.signature = new Wallet().sign('data');
                    expect(Transaction.validTransaction(transaction)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });

        });

    });

});