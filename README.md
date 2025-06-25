GreenWardrobe

#.env
PORT=5000
MONGO_URI=
UPSTASH_REDIS_URL=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_SECRET_KEY=
CLIENT_URL=
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