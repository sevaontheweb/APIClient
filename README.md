This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Before first run

To install the project dependencies, after unpacking of the tarball please proceed to the project directory and run this command in terminal:

`npm install`

## Starting the project

To start the project, please run in the project directory:

`npm start`

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Dummy virtualization server master should be started separately. By default, it is expected at path http://localhost:8090 . If virtualization server runs at different address, the address should be specified in "virtserverpath" query parameter, for instance: 


`http://localhost:3000?virtserverpath=http://localhost:8091`

## Running tests
Tests are started by running in the project directory.

`npm test`
