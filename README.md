# BookiFLY
## Intro
This is a RESTAPI made for **Flight Booking Web Application**
## Description
### For Admins
Admin can create a flight by providing the following -><br/>
Origin<br/>
Destination<br/>
Flight name<br/>
Seat Configuration for each class<br/>

Seat Configuration for a particular class-><br/>
Seats in a row<br/>
Number of rows<br/>
Base Price<br/>

When the admin creates a flight then he/she has to provide the seat configuration for each and every class<br/>

Classes -><br/>
First Class<br/>
Business Class<br/>
Economy Class<br/>

After that every seat in each class will be populated with a seat number and a unique system generated PNR which is a 8 digit alpha - numeric code<br/>

1st digit of the PNR -> shows the class<br/>
F -> First Class<br/>
B -> Business Class<br/>
E -> Economy Class<br/>
2nd digit of the PNR -> shows the seat number in each class<br/>
F1 -> Seat number 1 in First Class<br/>
B2 -> Seat number 2 in Business Class<br/>
E3 -> Seat nunber 3 in Economy Class<br/>
Remaining digits -> randomly generated
### For Users
User can select the origin and the destination<br/>
After he selects the origin and the destiantion all the flights available for that route will be displayed to the user<br/>
After that user needs to select a particular flight and provide the class in which he/she wants the ticket in.<br/>
After that according to the selection entire seat map for that particular flight and class will be displayed to the user<br/>
Now user can select any seat by providing seat number and PNR<br/>
Ticket for that particular user will be generated
## Tech Stack
Javascript<br/>
Node.js<br/>
Express.js<br/>
MongoDB<br/>
Mongoose
## Salient Features
Implementation of Middlewares<br/>
Implementation of Controllers<br/>
Implementation of Error Handlers<br/>
Implementation of Async Handlers<br/>
User Authentication and Authorization<br/>
Admin Authentication and Authorization<br/>
CRUD operations<br/>
Password Hashing<br/>
JWT Token Generation<br/>
JWT Token Verification<br/>
Implementation of Public Routes<br/>
Implementation of Protected Routes<br/>
Relationship Handling in MongoDB
## Dependencies
`npm i nodemon`<br/>
`npm i express`<br/>
`npm i mongoose`<br/>
`npm i express-async-handler`<br/>
`npm i bcrypt`<br/>
`npm i jsonwebtoken`<br/>
`npm i dotenv`<br/>
`npm i cors`<br/>
## Running the server
`npm run dev`
## Content of .env file
PORT<br/>
CONNECTION_STRING -> for connecting to our Database<br/>
ACCESS_TOKEN_SECRET_USER<br/>
ACCESS_TOKEN_SECRET_ADMIN
## API DOCS
### For Admins
| CRUD Operation | HTTP Method | API Endpoint | Type | 
| --------------- | ------------ | ----------------- | ----------------- |
| Sign Up | POST | /admins/signup | public |
| Login | POST | /admins/login | public |
| Post a flight | POST | /admins/post | private |
### For Users
| CRUD Operation | HTTP Method | API Endpoint | Type | 
| --------------- | ------------ | ----------------- | ----------------- |
| Sign Up | POST | /users/signup | public |
| Login | POST | /users/login | public |
| Select source and destination | POST | /users/selectSD | private |
| Select a flight | POST | /users/selectFlight | private |
| Select a seat | POST | /users/selectSeat | private |
## API Testing
API testing is done by **Thunder Client** and **Postman** is used for publishing the API DOCS provided in the description.
## Images
### For Admins
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/c166bf2f-2d20-44cf-b95e-ff5551430815"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/015cf7c2-6b44-496d-b6ba-365f14acbd95"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/33c4e6fa-a573-4bee-9a05-b857f6b04fff"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/35636caf-fb9e-48cd-949e-b33fac20699c"><br/>
### For Users
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/361e6b84-2dd1-4b76-98c8-03e93a996198"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/0274bf9d-1da0-4d71-bc4f-b8769b68ac00"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/4bec8e55-7cd2-40a6-9865-845d18cb1a7c"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/2ce79ba0-37ef-4141-849e-5f5dc72ed94e"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/65df732e-ced0-4abf-97a5-6ca9646e1ffc"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/b16a5259-c108-4842-8de5-ba5949d98067"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/79c8c8a6-975b-4a67-b149-26bf871957f2"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/d4840fd1-e87d-444a-b662-1d1581493ffa"><br/>
<img width="1440" alt="image" src="https://github.com/vibhoooo/BookiFLY/assets/96656912/24b5cd48-d049-4532-97b5-a91277a03db6">











