#Installation
- You must install mongodb server on your machine to get this apps working.
- Run npm install (on root folder)
- Run npm run start (Frontend) and npm run start-server (Backend)
- Import Data using Mongo Import

#Import DB

Using this command to import JSON Array to Mongo Document
mongoimport --db sorabel --collection product --type json --file product.json --jsonArray

Note:
1. You should in root directory
2. sorabel (is db name)
3. product (is collection name)

#Code Standard
- function_name for redux action
- thisName for local function & variable name
- ComponentName for class & name of component
- component-name for component folder

#Route
- http://localhost/#/product-category/dress - - http://localhost/#/product-category/{productCategory}
- http://localhost/#/product-category/moeslim-wear - - http://localhost/#/product-category/{productCategory}
- http://localhost/#/product/1 - - http://localhost/#/product/{productId}


Side Note:
Homepage only for generating random data from _faker to use as Backend Data