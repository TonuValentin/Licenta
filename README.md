GreenWardrobe

### Setup .env file

PORT = 5000
MONGO_URI = mongodb+srv://tonuvalentin2017:gKBv4H1Qv81ttRIZ@cluster0.mphpkls.mongodb.net/ecommerce-db?retryWrites=true&w=majority&appName=Cluster0

UPSTASH_REDIS_URL=rediss://default:AV_gAAIjcDExOTdhZWM2NjMwN2Q0OWQxYThkNDc3YTBlZTg5ZjU3YnAxMA@enabling-beetle-24544.upstash.io:6379

ACCESS_TOKEN_SECRET=acces_token_secret
REFRESH_TOKEN_SECRET=refresh_token_secret

CLOUDINARY_CLOUD_NAME=dlutje21o
CLOUDINARY_API_KEY=862877335696141
CLOUDINARY_API_SECRET=yN_X9AeC3JxRFKjAK7s02Nd8gvQ

STRIPE_SECRET_KEY=sk_test_51Qg2yOL7NdeHhttWZn5fLfYqjdHD770Wpsh8tk085rzOc6PGoRV3ZEpa6osc0e8I5ndG3uEz7cOlRpesSCBGVABK00gQsNp0BD
CLIENT_URL=http://localhost:5173
NODE_ENV=development


!Rulam fisierul backend

npm run start


!Rulam fisierul frontend

npm run dev
```

Exemplu pentru datele la Card Stripe.
| Câmp | Valoare de test |
|---------------------|------------------------|
| Card number | 4242 4242 4242 4242 |
| Expiry date | 12/34 |
| CVC | 123 |
| Cardholder name | Test User |
| Country | România |