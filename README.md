# BE-Restaurant-Passport
Back end repository for Restuarant Passport
https://restaurant-passport-lambda.herokuapp.com

## API Routes

## Authentication Endpoints:

POST /auth/register

Expected Request Body:
```
{
  "username": "Demo1",
  "password": "password", 
  "first_name": "Kyle", 
  "last_name": "Barnett", 
  "city": "Salt Lake City", 
  "email": "demo1@email.com"
}
```

Returns:
```
{
    "created_user": {
        "id": 1,
        "username": "Demo1",
        "password": "$2a$10$kJw66/2Yb1xnUIczPAXIze5hiyjCnxTebH1oGukuxWeYvVp8aRrMG",
        "first_name": "Kyle",
        "last_name": "Barnett",
        "city": "Salt Lake City",
        "email": "demo1@email.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjQsInVzZXJuYW1lIjoiRGVtbzUiLCJpYXQiOjE1NzY4MDg1OTgsImV4cCI6MTU3NjgxMjE5OH0.PCNRX9Wn16kFBrTDNdQtHlyqs8BbiLxvAXvJHXDokzM"
}
```

POST /auth/login

Expected Request Body:
```
{
  "username": "Demo1",
  "password": "password"
}
```

Returns:
```
{
    "message": "Welcome Demo1!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjQsInVzZXJuYW1lIjoiRGVtbzUiLCJpYXQiOjE1NzY4MDkwNjEsImV4cCI6MTU3NzQxMzg2MX0.IHyCQgYcq0E1MI7P2SKm0lBskIf2yAoIgb25USf5IAc"
}
```
