from flask import Flask
import pymongo

app = Flask(__name__)


@app.route("/", methods=["GET"])
def hello_world():
    client = pymongo.MongoClient("db", 27017)
    db = client["customersdb"]
    customers = db["customers"]

    customers_list = [
        {"name": "Raphael", "address": "Rua Programador"},
        {"name": "Isabella", "address": "Rua Tatuadora"},
        {"name": "Danilo", "address": "Rua bombeiro"},
    ]

    inserteds = customers.insert_many(customers_list)

    print(inserteds.inserted_ids)

    names = ""

    for person in customers.find():
      names = f"{names}, {person['name']}"

    return f"<html><body><p>{names}</html></body></html>"
