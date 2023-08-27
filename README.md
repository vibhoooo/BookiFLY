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
API testing is done by **Thunder Client**
## Images 
