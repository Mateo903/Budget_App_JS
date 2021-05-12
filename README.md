# Budget App JS

Personal budget management application developed with React, Node, Express and MySql. 
This project was developed in compliance with an Alkemy Labs challenge



## Getting Started

Instructions on how to setting up the project locally

### Pre-requisites 📋

To run this project you need

* MySql
* Node Package Manager


### Setting & Running 🛠️🚀

1. Clone the repository:

```sh
git clone https://github.com/Mateo903/Budget_App_JS.git
``` 

2. Create within your MySQL database a table called "records" with the following fields:

* id -> [int, primary key, auto_increment]
* concept -> [varchar(40)]
* date -> [date]
* amount -> [float]

3. Inside the index.js file in the server folder, modify the following properties of the "dbOptions" object:

* host 
* port
* user
* password
* database 

4. Enter the repository folder:

_Front_

```
cd client
npm install
npm start
``` 

_Back_

```
cd server
npm install
npm run start-dev
```

The project should be running on the corresponding address

## Developed by ✒️
 
*  Mateo Rios