# express-pm2-long-polling

A rolling update strategy demo

## artillery

```sh
> artillery quick -r 10 -d 60 -o report.json http://localhost:8090/
> artillery quick -r 10 -d 60 -o report.json http://10.118.10.25:8090/
```

## loadtest

```sh
> loadtest -n 1000 -c 100 http://localhost:8090/
```

The preceding command will load the server with 200 concurrent connections for 10 seconds. As a reference, the result for a system with 4 processors is in the order of 90 transactions per second, with an average CPU utilization of only 20%

```
brew install siege
siege -c200 -t10S http://localhost:8080
```


