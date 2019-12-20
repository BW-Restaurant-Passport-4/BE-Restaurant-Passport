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

## User Endpoints

GET /restaurants

### Expected Request Headers
```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjQsInVzZXJuYW1lIjoiRGVtbzUiLCJpYXQiOjE1NzY4MDkwNjEsImV4cCI6MTU3NzQxMzg2MX0.IHyCQgYcq0E1MI7P2SKm0lBskIf2yAoIgb25USf5IAc"
```

Returns 
```
[
    {
        "id": 1,
        "restaurant_name": "Chick-fil-A",
        "restaurant_address": "123 A Street",
        "restaurant_city": "Salt Lake City",
        "restaurant_zip": "12345",
        "restaurant_phone_number": "801-123-4567",
        "restaurant_website": "chick-fil-a.com",
        "restaurant_rating": 5,
        "restaurant_notes": "Great chicken sandwich",
        "restaurant_stamped": 1
    },
    {
        "id": 2,
        "restaurant_name": "Sapa",
        "restaurant_address": "234 B Street",
        "restaurant_city": "Salt Lake City",
        "restaurant_zip": "23456",
        "restaurant_phone_number": "801-234-5678",
        "restaurant_website": "sapabarandgrill.com",
        "restaurant_rating": 4,
        "restaurant_notes": "Terrific sushi and appetizers",
        "restaurant_stamped": 0
    },
    {
        "id": 3,
        "restaurant_name": "Nuchs",
        "restaurant_address": "345 C Street",
        "restaurant_city": "Salt Lake City",
        "restaurant_zip": "24678",
        "restaurant_phone_number": "801-123-5555",
        "restaurant_website": "nuchs-pizzeria-and-restaurant.com",
        "restaurant_rating": 2,
        "restaurant_notes": "Hot pizza spot that I want to go to.",
        "restaurant_stamped": 0
    }
]
```
