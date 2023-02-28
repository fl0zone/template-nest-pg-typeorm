<p align="center">
  <a href="https://fl0.com/" target="blank">
    <img src="https://user-images.githubusercontent.com/88681427/217122968-e6132cad-1944-4ebe-9ec1-105af6a18c4f.png">
  </a>
</p>

<h2 align="center">Express + Nest + TypeORM + Postgres REST API Starter Pack</h2>
<p align="center">Backend engineering, supercharged.</p>

## Overview

Use this repository to get up and running on FL0 with the following stack:

<table>
<tr>
  <th>Language</th>
  <td>Javascript</td>
</tr>
<tr>
  <th>Framework</th>
  <td>Nest</td>
</tr>
<tr>
  <th>Router</th>
  <td>Express</td>
</tr>
<tr>
  <th>ORM</th>
  <td>TypeORM</td>
</tr>
<tr>
  <th>Database</th>
  <td>Postgres</td>
</tr>
</table>

## Getting Started
We recommend using the provided Docker Compose configuration for local development. Our Docker configuration includes:
1. Automatically create both database and app server easily
2. Hot-reloading of code for local development
3. Production-ready minified image
4. Database admin interface using [Cloudbeaver](https://hub.docker.com/r/dbeaver/cloudbeaver)

However, you can still use this repo without Docker! See the instructions below.

### Using Docker
1. `docker compose up` (initial build can take a couple of mins)
2. That's it! Visit http://localhost:8080 to see your app running

### Without Docker
If you don't want to use Docker, make sure you have a Postgres database that you can connect to. 
1. `npm install`
2. Copy the provided `.env.example` file and rename it to `.env`
2. `npm run start:dev`
3. Visit http://localhost:8080 to see your app running

## Deploying to FL0
Checkout our [Getting Started Guide](https://docs.fl0.com) in the FL0 documentation!

## Using the Database Admin Interface
If you use our Docker Compose file you have access to a local instance of Cloudbeaver. To access it, navigate to:

1. Navigate to http://localhost:8081
2. Follow the setup wizard to create your admin account
3. Add a new connection using the PostgreSQL driver and the URL below

`jdbc:postgresql://db:5432/fl0-starter-db?user=admin&password=admin`

## Questions
If you have any questions about FL0 or this template codebase please head on over to our [Discord channel](https://discord.gg/AmmVTt9Jrw).

## Issues
Any issues or feature requests can be raised on the [Issues page](https://github.com/fl0zone/example-js-rest-api/issues) of this repo.

## License
This template repository is [MIT licensed](LICENSE).
