# BackbaseAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

I used `ng new backbase-assignment --routing  --prefix=bb --strict --style=scss` command to generate. 
I'll use 'scss' extension for style sheet. I defined 'bb' prefix for all cli generated items. Strict mode is also useful to create clean code.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` or just simply run `npm start` (Since i added --open flag to the start script in package.json, This command opens browser and navigates for you.)
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
I wrote some example tests for you, but i dont have time to do more specific examples...

## Running end-to-end tests

There is no e2e test in this project. Protractor is about to be depreciated. So I should learn Cypress or another popular framework!

## Main purpose of using ng-cli
I always use cli to generate any kind of Angular item. This gives me an order and simplicity.

# About Project
This project shows a bit of my knowledge about the Angular. I use this architecture in all my applications.

I also prefer to create library for projects which shares common parts.

It's important to put the code in a correct module or file. Sometimes, This makes me to change the place of code. But exporting the code from correct place makes your application well designed and makes your code reusable.
## About Modules

- Core module is for the only one time registered items in whole application lifetime.
- Shared module is for common parts of application which is shared by other modules, more than once.
- The main modules folder is compose of feature modules of Application. And feature modules can have their own items like pages, components, pipes and/or Services.
