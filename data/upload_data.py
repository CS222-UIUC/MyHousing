import json
import requests
import re

# Read File
with open("dataset_apartments.json", "r", encoding="utf8") as dataset:
    data = dataset.read()

# Parse file
obj = json.loads(data)

url = "http://127.0.0.1:8000/housinginfo/"

def send_request(
    housing_name,
    housing_types,
    housing_price,
    street_address,
    city,
    state,
    zip,
    housing_description,
):
    payload = {
        "housing_name": housing_name,
        "housing_types": housing_types,
        "housing_price": housing_price,
        "street_address": street_address,
        "city": city,
        "state": state,
        "zip": zip,
        "housing_description": housing_description,
    }
    # print("payload:", payload)
    files = {
        "file": (None, None),
    }

    r = requests.post(url, files=files, data=payload, verify=False)
    print(r.content)


for apartments in obj:
    for models in apartments["models"]:
        rent = models["rentLabel"]
        rent = rent.replace(",", "")
        match = re.findall(r"\d+", rent)

        if match:
            housing_price = match[-1]
            housing_name = apartments["propertyName"]
            housing_types = models["details"][0]
            if housing_types == "1 bed":
                housing_types = "1B"
            elif housing_types == "2 beds":
                housing_types = "2B"
            elif housing_types == "3 beds":
                housing_types = "3B"
            elif housing_types == "4 beds":
                housing_types = "4B"
            elif housing_types == "5 beds":
                housing_types = "5B"
            elif housing_types == "Studio":
                housing_types = "1S"
            else:
                housing_types = "5B"

            street_address = apartments["location"]["streetAddress"]
            city = apartments["location"]["city"]
            state = apartments["location"]["state"]
            zip = apartments["location"]["postalCode"]
            housing_description = apartments["description"]

            # print("housing_name", housing_name)
            # print("housing_types", housing_types)
            # print("housing_price", housing_price)
            # print("street_address", street_address)
            # print("city", city)
            # print("state", state)
            # print("zip", zip)
            # print("housing_description", housing_description)
            send_request(
                housing_name,
                housing_types,
                housing_price,
                street_address,
                city,
                state,
                zip,
                housing_description,
            )
