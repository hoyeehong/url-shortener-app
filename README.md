# URL Shortener App

**Frontend App hosted at: https://url-shortener-frontend-vyaw.onrender.com** (Frontend works better at Safari web browser)

Backend services hosted at: https://url-shortener-backend-services.onrender.com

## Spin up via Docker-compose locally

Under root directory:

```
docker-compose up
```

## Spin up via local environment

Under [backend](/backend/) directory:

```
npm run dev
```

Access API hostname at http://localhost:3333/ _{endpoint}_

- endpoint: _api/short_
- endpoint: _urlId_

Under [frontend](/frontend/) directory:

```
npm start
```

Access frontend at http://localhost:3000

## Testing backend services

Under [backend](/backend/) directory:

```
npm run test
```
