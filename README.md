# M.E.R.N Auth
 A M.E.R.N authentication project using JWT

## Steps

1. npm i express, mongodb (mongoose) and cors
2. require the packages, app.use(), assign port and listen the port
3. Create the db connection
4. npm i jsonwebtoken joi joi-password-complexity for authentication and authorization
5. Create userSchema, generate authToken, validate function anda exports the user and the function
6. npm i bcrypt to hash the password
7. Register route using validate function and hashing the password, verification of email. All in post method (router.post())
8. Login Route, validating the fields and generating a token
9. Import the routes to the index file, app.use("api route", route).
10. Create React App, importing BrowserRouter in index
11. Create page components and handle the url from the backend