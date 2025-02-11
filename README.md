# axios-vitest

Example repo to demonstrate an issue.

Axios appears not to use the configured HTTPS agent in a jsdom environment (or perhaps the HTTPS agent configuration is not working?).

The same code works in a vitest/node environment.


## Replication

Install dependencies
```
yarn
```

Run the express server, using the provided certs.
```sh
yarn run server
```

Run the test
```
yarn test
```


## Issue

Even though axios is configured to use an HTTPS agent that ignores certificates, the test fails due to the self-signed certificate.

However, if you change the environment from jsdom to node (in vitest.config.ts) the test passes.


## Certs

The certs were generated using openssl, following suggested commands from [here](https://stackoverflow.com/q/66190682)

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```
