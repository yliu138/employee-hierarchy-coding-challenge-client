# Employee Hierarchy Client

This is the front-end fo the code challenging.

## Tools
1. Webpack
2. Karma
3. SASS
4. Typescript
5. Angular 2+
6. Protractor

## Dependencies
1. Node 8+ (As Angular Cli is used to generate the project, Node 8+ is a must-have for this project)
2. webdriver-manager `npm install webdriver-manager -g`
3. Remember to run `webdriver-manager update --versions.chrome=2.24`
4. The Java Spring-boot back-end, source code: (https://github.com/yliu138/employee-hierarchy-coding-challenge)

## Development server
Run `npm start` to start the webpack server

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Issues and resolution
1. For protractor running by `npm run e2e`, if you encounter a issue of error code 135, you need to run `node_modules/<protractor-dir>/bin/webdriver-manager update`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
