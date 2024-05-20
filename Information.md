# Backend

## Mongodb database URL

```
mongodb+srv://jobPortal:<password>@database.ozcdemr.mongodb.net/?retryWrites=true&w=majority&appName=database
```

## MongoShell

```
mongosh "mongodb+srv://database.ozcdemr.mongodb.net/" --apiVersion 1 --username jobPortal
```

## Mongo Compass

```
mongodb+srv://jobPortal:<password>@database.ozcdemr.mongodb.net/
```

## Employers Register Data in JSON for testing in postman

```
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "john.doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "phone": "1234567890",
  "organizationName": "Example Organization",
  "termsAccepted": true
}
```