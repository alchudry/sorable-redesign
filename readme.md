#Import DB

Using this command to import JSON Array to Mongo Document
mongoimport --db sorabel --collection product --type json --file product.json --jsonArray

Note:
1. You should in root directory
2. sorabel (is db name)
3. product (is collection name)