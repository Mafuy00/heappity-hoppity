from flask import Flask, jsonify, request
from flask_cors import CORS
from config import *
from dbConnection import *
from invokes import invoke_http

app = Flask(__name__)
CORS(app)

@app.route('/account/<int:accountid>/all')
def get_all_expense(accountid):

    con = get_db_connection(config)
    cur = con.cursor()
    cur.execute(
        f"SELECT * FROM expense WHERE accountid={accountid} ORDER BY date_time DESC")

    expenses_list = cur.fetchall()
    cur.close()
    con.close()

    expenses_list_json = [{
        "expenseid": data[0],
        "accountid": data[1],
        "transaction_type": data[2],
        "amount": data[3],
        "bank": data[4],
        "category": data[5],
        "date_time": data[6]} for data in expenses_list
    ]

    if len(expenses_list):
        return jsonify({
            "code": 200,
            "data": {
                "data": [data for data in expenses_list_json]
            }
        })

    return jsonify({
        "code": 400,
        "message": [{"accountid": "No Data", "transaction_type": "No Data", "amount": "No Data", "bank": "No Data", "category": "No Data", "date_time": "No Data"}]
    })

@app.route('/account/add', methods=['POST'])
def add_expense():

    data = request.get_json()
    accountid = data["accountid"]
    transaction_type = data["transaction_type"]
    amount = data["amount"]
    bank = data["bank"]
    category = data["category"]
    date_time = data["date_time"]

    con = get_db_connection(config)
    cur = con.cursor()

    try:
        cur.execute(f'INSERT INTO expense (accountid, transaction_type, amount, bank, category, date_time) VALUES (%s, %s, %s, %s, %s, %s)', (accountid, transaction_type, amount, bank, category, date_time))
        cur.execute(f'SELECT * FROM expense ORDER BY accountid DESC')
        new_expense = cur.fetchone()
        expense_json = {"expenseid": new_expense[0],"accountid": new_expense[1], "transaction_type": new_expense[2], "amount": new_expense[3], "bank": new_expense[4], "category": new_expense[5], "date_time": new_expense[6]}

        con.commit()
        cur.close()
        con.close()

        return jsonify({
            "code": 201,
            "data": expense_json,
            "message": f"Expense {expense_json} successfully added."
        })

    except:
        return jsonify({
            "code": 400,
            "message": "Fail to add expense."
        })


@app.route('/account/delete', methods=['DELETE'])
def delete_expense():

    accountid = request.args.get('accountid')
    transaction_type = request.args.get('transaction_type')
    amount = request.args.get('amount')
    bank = request.args.get('bank')
    category = request.args.get('category')
    date_time = request.args.get('date_time')

    con = get_db_connection(config)
    cur = con.cursor()

    try:
        cur.execute(f'SELECT * FROM expense WHERE accountid=%s AND transaction_type=%s AND amount=%s AND bank=%s AND category=%s AND date_time=%s', (accountid, transaction_type, amount, bank, category, date_time))
        deleted_expense = cur.fetchone()[0]
        cur.execute(f'DELETE FROM expense WHERE accountid=%s AND transaction_type=%s AND amount=%s AND bank=%s AND category=%s AND date_time=%s', (accountid, transaction_type, amount, bank, category, date_time))

        con.commit()
        cur.close()
        con.close()

        return jsonify({
            "code": 201,
            "deleted_expense": deleted_expense,
            "message": f"Expense {deleted_expense} successfully deleted."
        })

    except:
        return jsonify({
            "code": 400,
            "message": "Fail to delete expense."
        })


@app.route('/account/update', methods=['PUT'])
def update_expense():

    data = request.get_json()
    accountid = data["accountid"]
    transaction_type = data["transaction_type"]
    amount = data["amount"]
    bank = data["bank"]
    category = data["category"]
    date_time = data["date_time"]

    con = get_db_connection(config)
    cur = con.cursor()

    try:
        cur.execute(f'SELECT * FROM expense WHERE accountid={accountid}')
        result = cur.fetchone()

        if not result:
            print('Account does not exist!')
            return
        
        cur.execute(f"UPDATE expense SET transaction_type=%s, amount=%s, bank=%s, category=%s, date_time=%s, WHERE accountid = %s", (transaction_type, amount, bank, category, date_time, accountid,))

        cur.execute(f"SELECT * FROM expense WHERE accountid={accountid}")
        updated_expense = cur.fetchone()[2]

        con.commit()
        cur.close()
        con.close()

        return jsonify({
            "code": 201,
            "updated_expense": updated_expense,
            "message": f"Expense {updated_expense} successfully updated."
        })

    except:
        return jsonify({
            "code": 400,
            "message": "Fail to update expense."
        })


if __name__ == "__main__":
    config = load_config()
    app.run(host="0.0.0.0", port=5000, debug=True)