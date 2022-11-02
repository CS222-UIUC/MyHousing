import json
import requests
import re

# Read File
with open("dataset_apartments.json", "r", encoding="utf8") as dataset:
    data = dataset.read()

# Parse file
obj = json.loads(data)

url = "http://127.0.0.1:8000/housinginfo/"


"""
"housing_name": "ISR",                  "propertyName":
"housing_types": null,                  "models: [{"details": [0] }]
"housing_price": "0.00",                do not add if does not have this
"street_address": null,                 "location": {"streetAddress": }
"street_address_two": null,
"city": "Champaign",                    "location": {"city": }
"state": "Illinois",                    "location": {"state": }
"country": "United States",             
"zip": null,                            "location": {"postalCode": }
"housing_description":                  "description":
"""
"""
HOUSING_CHOICES = (
    ("1B", "1 Bedroom"),
    ("2B", "2 Bedroom"),
    ("3B", "3 Bedroom"),
    ("4B", "4 Bedroom"),
    ("5B", "5 or More Bedroom"),
    ("1S", "Studio"),
)"""


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

"""
{'housing_name': '1009 S 2nd St', 
'housing_types': '2B', 
'housing_price': '710', 
'street_address': '1009 S 2nd St', 
'city': 'Champaign', 
'state': 'Illinois', 
'zip': '61820', 
'housing_description': 'About 1009 S 2nd St\n                        1009 S. Second St. Apartments, are ideal for upperclassmen with the option of either 2 bedroom, 1 Bathroom or 4 bedroom, 2 bathroom modern apartments in a great campus location that is a quick walk to classes, the ARC, and campus sporting facilities! Enjoy this modern apartments on a great campus location.  Close to the ARC, and campus sporting facilities! Our units are equipped with updated stainless steel appliances, including washer/dryer, fridge, dishwasher and oven/stove! The living room is furnished with a black leather couch and love seat, an end table and a lamp, a TV and has a sliding door leading to a private balcony. Each bedroom is furnished with a full size bed, and a desk. The apartment is fully furnished. Plenty of space for you.  Enjoy the convenience of a washer and dryer in the unit. The rents varies from $550 to $630/a month per person, for either a 4 bedroom or a 2 bedroom. There is a utility package per person ($80 for the 4 bedroom and $90 for the 2 bedroom)which includes: electric, gas, water, garbage, sewer, and high-speed internet. All services are ready when you move in! There is also ample off street parking available. We also offer individual leases! Due at the signing of the lease is first installment of rent, a security deposit ($300) and a $25 application fee. Official  move in date is August 20, but you may move in as early as August 1st for an additional payment.  Ask us about academic year leases which are also available as an option. This option is a choice for many of our students. Another aspect of this is for out of state and out of country students who may want to store their belongings over the summer or have a need for summer housing. For the cost of one monthly installment, they can immediately move in from the dorms etc. and avoid paying storage costs or short term housing and move directly into the unit they will occupy in the fall. Call or inquire at [email address removed] to schedule a touring or for some additional information.  We also encourage you to check into our website neilfotzler(dot)com for some additional information for 1 bedroom, 3 bedroom apartments as well.  My name is Virginia 
Rosas.  I will be glad to schedule a viewing for you!\n\n                1009 S 2nd St is an apartment community located in Champaign County and the 61820 ZIP Code. This area is served by the Champaign Community Unit School District 4 attendance zone.'}"""
