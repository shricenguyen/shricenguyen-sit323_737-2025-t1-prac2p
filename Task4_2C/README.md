# Calculator Microservice

This is a simple Express.js-based microservice that provides basic and advanced mathematical operations through REST API endpoints.

## Basic Operations

Addition (/api/add?num1=x&num2=y)

Subtraction (/api/subtract?num1=x&num2=y)

Multiplication (/api/multiply?num1=x&num2=y)

Division (/api/divide?num1=x&num2=y)

## Advanced Operations

Exponentiation (/api/exponentiation?base=x&exponent=y)

Square Root (/api/squareRoot?num1=x)

Modulo (/api/modulo?num1=x&num2=y)

## Prerequisites

Node.js (v14 or later)

npm (comes with Node.js)

## Installation

Clone the repository:

```
git clone https://github.com/shricenguyen/shricenguyen-sit323_737-2025-t1-prac2p.git
cd Task4_2C
```

Initialising Node.js project:

```
npm init -y
```

Install dependencies:

```
npm install express
```

## Running the Server

To start the server, run:

```
node app.js
```

To calculate any operation following these examples:

```
http://localhost:3000/api/modulo?num1=9&num2=3
http://localhost:3000/api/add?num1=5&num2=3
http://localhost:3000/api/squareRoot?num1=24
```
