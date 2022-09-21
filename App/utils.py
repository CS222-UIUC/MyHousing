from dotenv import load_dotenv
import os
from pymongo import MongoClient


load_dotenv("..\.env")
username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")

connection_string = (
    "mongodb+srv://"
    + username
    + ":"
    + password
    + "@cluster0.aoglhdc.mongodb.net/?retryWrites=true&w=majority"
)

client = MongoClient(connection_string)
db = client["MyHousing"]
collection = db["users"]

post = {"name": "Edwin", "username": "edwinji2"}

collection.insert_one(post)
