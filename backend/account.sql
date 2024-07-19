DROP TABLE IF EXISTS expense;

CREATE TABLE IF NOT EXISTS expense(
    expenseid SERIAL NOT NULL PRIMARY KEY,
    accountid INTEGER NOT NULL,
    transaction_type TEXT NOT NULL,
    amount DECIMAL NOT NULL,
    bank TEXT NOT NULL,
    category TEXT NOT NULL,    
    date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
);

INSERT INTO expense (accountid, transaction_type, amount, bank, category) VALUES (1, 'Debit', 5.50, 'DBS', 'Apparel');
INSERT INTO expense (accountid, transaction_type, amount, bank, category) VALUES (1, 'Credit', 20.50, 'UBS', 'Travel');
INSERT INTO expense (accountid, transaction_type, amount, bank, category) VALUES (1, 'Debit', 40.00, 'UOB', 'Food');