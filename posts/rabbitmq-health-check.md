---
title: 'RabbitMQ health check'
date: '2024-05-23'
short: "Start your microservice when RabbitMQ is up and running"
hashtags: "tech,microservices,rabbitmq"
---

Recently I was buidling a solution with microservices and RabbitMQ as the message broker. One of the challenges I faced was to ensure that my service starts only when RabbitMQ is up and running and in my case my microservice was starting as soon as the RabbitMQ container was up, but the RabbitMQ service itself wasn't ready to accept connections.

{.marginHalf}

And a simple `depends_on: rabbitmq`{.codeword} rule in `docker-compose` wasn't enough because it only checks if the container is up, not the service itself. So if you have a similar problem, here's a simple solution wit `heathcheck` directive that might save your day:

```yaml
services:

  rabbitmq:
    image: rabbitmq:3-management-alpine
    ports:
      - 5672:5672
      - 15672:15672
    healthcheck:
      test: ['CMD', 'rabbitmqctl', 'status']
      interval: 2s
      timeout: 3s
      retries: 5

  search-svc:
    image: syntaxpunk/search-svc:latest
    build:
      context: .
      dockerfile: src/SearchService/Dockerfile
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - ASPNETCORE_URLS=http://+:80
      - RabbitMq__Host=rabbitmq
    ports:
      - 7001:80
    depends_on:
      rabbitmq:
        condition: service_healthy
```

As you can seen in the code above, the `healthcheck` directive for `rabbitmq` is used to check the status of RabbitMQ service. The `test` command runs `rabbitmqctl status`{.codeword} every 2 seconds and retries 5 times with a timeout of 3 seconds.

{.marginHalf}

Next, `search-svc` service is configured to depend on `rabbitmq` service with a `condition: service_healthy`{.codeword} rule. This will make sure that the search microservice will start not only when the RabbitMQ container is up, but also when the RabbitMQ service is healthy and ready to accept connections.

{.marginHalf}

And that's about it.

Have a great one! {.margin2}

