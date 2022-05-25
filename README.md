# Gtreasury

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Getting Started

Since this is just a simple Angular project, this should be straight forward
1.	Install Node/npm [here](https://nodejs.org/en/download/)
2.	Install Angular [here](https://angular.io/cli)
3.	Run `npm install` to install packages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Developer Guidelines

Generally, please follow the [Angular style guide](https://angular.io/guide/styleguide)
Specific rules:
1. Separate features are broken down into feature modules that are lazy loaded.
2. Against the style guide, components, services, and directives all have a containing folder.
3. The core module is for application specific logic: mainly services and global model.
4. The shared module is for reusable items (components, directives, and pipes usually).  These have a chance to be used in other applications.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
