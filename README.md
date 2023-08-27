# BookiFLY
## Intro
This is a RESTAPI made for **Flight Booking Web Application**.
## Description
### For Admins
### For Users
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
| CRUD Operations | HTTP Methods | API Endpoints | Type | 
| --------------- | ------------ | ----------------- | ----------------- |
| Sign Up | POST | /admins/signup | public |
| Login | POST | /admins/login | public |
| Post a flight | POST | /admins/post | private |
### For Users
| CRUD Operations | HTTP Methods | API Endpoints | Type | 
| --------------- | ------------ | ----------------- | ----------------- |
| Sign Up | POST | /users/signup | public |
| Login | POST | /users/login | public |
| Select source and destination | POST | /users/selectSD | private |
| Select a flight | POST | /users/selectFlight | private |
| Select a seat | POST | /users/selectSeat | private |
## API Testing
API testing is done by **Thunder Client**.
## Images 
