# Job_Portal_APIs

This Job Portal API Craeted using Nodejs + expressjs + MongoDB

How to Install: 

1.  cd Job_Portal_APIs
2.  npm install
3.  npm start

Use Postman to Test APIs

Recruiter Registeration
http://localhost:8080/codingninjas/api/user/register

Recruiter Login
http://localhost:8080/codingninjas/api/user/login

If Recruiter Login the He can Post Jobs
http://localhost:8080/codingninjas/api/job/post

Student Registeration
http://localhost:8080/codingninjas/api/user/register

Job Apply
http://localhost:8080/codingninjas/api/job/apply/:jobId

example
http://localhost:8080/codingninjas/api/job/apply/6537b002e8eeb9c512b0890b

Like Job as student
http://localhost:8080/codingninjas/api/likes/like?model=Job&id=6537b002e8eeb9c512b0890b

LogOut
http://localhost:8080/codingninjas/api/user/logout


