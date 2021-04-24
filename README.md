# SuperDuper Brewery

A fake brewery website, created as final project as a student
at John Bryce Training College.

# === Getting Started ===
## Requirments:
1. Npm 6.x, Node 12.x.
2. Angular CLI: (`npm install -g @angular/cli`)
3. Nodemon: (`npm i nodemon`)

## Running the project:
All following commands should be run from the root of the project. 
1. Run `npm i` to install the project.
2. Run `npm run startserver` to start the server.
3. From a seperate terminal, run `npm run startclient` to start the client.

You should now be able to find the brewery site at http://localhost:4200/welcome.

# Yossi
1. Place .env file in server folder.
2. For admin rights:
    - username: admin@superduper.com
    - password: password


# === SuperDuper Api Documentation ===

Api URL: http://localhost:1000/

------------------------------------------------------------------------

!! Error responses will look like this: { err:true, msg:"Error Description...", status?: 500 }
!! If status = 450, middleware was involved, enter valid loginToken

------------------------------------------------------------------------

# Authentication :

Handles authorization functions.

- path: /auth/

    ### Login :
        
        Login to get a token and authorization to use the website.

        - path: /login
        - POST: body: {username:string, password:string} 
        - response: {err:boolean, msg:string, loginToken?:string, cart?:{}}

    ### Register :

        Handles registration functions

        - path: /register/

            1. Register user:

                After validation, user info is saved to database.

                - path: / 
                - POST: body: {israeliId, username, password, firstName, lastName, city, street}
                - response: {err:boolean, msg:string}

            2. Step-1 Form Validation:
            
                Makes sure your id isn't in use already.

                - path: /validateUser/
                - POST: body: {israeliId:number, username:string (email)}
                - response: { err:boolean, msg:string }


## Stitstics : 

Responds with sum of users, beer types, store items and orders placed.

- path: /statistics
- GET:
- response: { err: boolean, masg?:string, statistics:{numberOfUsers, numberOfBeerTypes, numberOfStoreItems, numberOfOrdersPlaced}}


------------------------------------------------------------------------

!! From this point on loginToken must be in headers at all times.
!! Example: { method: "GET", headers: { authorization: loginToken } }

------------------------------------------------------------------------

## Verify Token

    Make sure you have your loginToken in headers.
    Example Below.

    - path: /verify
    - GET:
    - response: {err:boolean, msg?: string, status?: number}

# Store Items :

Handles request for store items related functions such as adding item to cart, adding item to store database, complete purchase etc.

- path: /store/ 

        1. Get all items and category list in store:

            - path: /
            - GET: 
            - response: { err:boolean, storeItems:[{}], storeCategories:[{}] }

        2. Get store item by id:

            - path: /itemId/:itemId
            - GET: params: itemId:string
            - response: { err:boolean, storeItem:{} }

        3. Get store items by category:

            - path: /categoryId/:categoryId
            - GET: params: categoryId:string
            - response: { err:boolean, storeItems:[{}] }

        4. Get store items with search

            - path: /search/:query
            - GET: params: query:string
            - response: { err:boolean, storeItems:[{}] }

    ### ADMIN functions:

	- path: /admin/

        Functions for users with Admin rights.

            1. Add new Item to store database:

                - path: /add
                - POST: body: { name:string, categoryId:string, price:number, path:string }
                - response: { err:boolean, msg:string, storeItems:[{}] } // Api sends all store items in response

            2. Edit existing Item in store database:

                - path: /edit
                - PUT: body: { _id:string name:string, categoryId:string, price:number, picture:string }
                - response: { err:boolean, msg:string, storeItems:[{}] } // Api sends all store items in response


# Cart :

Handles all cart functions such as adding item to cart, removing item from cart, completing orders etc.
Once user logs in, if there is an open cart, the Api will add the cart to the response
! All requests in this path return in response the new "state" of the cart from database.


- path: /carts/

		1. Create new cart.

		- path: /new
		- GET:
		- response: { err:boolean, msg:string, cart:[] }

		2. Get open cart

		- path: /open
		- GET:
		- response: { err:boolean, msg:string, cart:[{}] }

		3. Add item to cart:

		- path: /add
		- POST: body:{ storeItemId:string, amount:number }
		- response: { err:boolean, msg:string, cart:[{}] }

		4. Edit the amount:

		- path: /amount
		- POST: body:{ cartItemId:string, amount:number }
		- response: { err:boolean, msg:string, cart:[{}] }

		5. Remove Item from cart:

		- path: /remove/:cartItemId
		- DELETE: params: cartItemId
		- response: { err:boolean, msg:string, cart:[{}] }

		6.  Remove all items from cart:

		- path: /reset
		- DELETE: 
		- response: { err:boolean, msg:string, cart:[] }

# Order :

Once the user has finished placing its order, a new order document is created
in database and is set { isActive: false }.

- path: /order

	    2. Get all user's orders:

		- path: /
		- GET:
		- response: { err:boolean, msg:string, orders:[{}] }

	    1. Create a new order ( sets cart to { isActive: false } ) :

		- path: /new
		- POST: body: { cartId:string, city:string, street:string , delieveryDate:date, creditCard:number }
		- response: { err:boolean, msg:string, order:{}, loginToken: string }


	    3. Get unavailable dates for delievery:

        This returns an array of millisecond strings

		- path: /dates
		- GET: 
		- response: { err:boolean, msg:string, unAvailableDates: strings[] }
