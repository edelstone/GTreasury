# Introduction 
GTreasury Prototype application.

# Getting Started
Since this is just a simple Angular project, this should be straight forward
1.	Install Node/npm [here](https://nodejs.org/en/download/)
2.	Install Angular [here](https://angular.io/cli)
3.	Run `npm install` to install packages.

# Build
1.  To build/serve the project run `ng serve`

# Developer Guidelines
Generally, please follow the [Angular style guide](https://angular.io/guide/styleguide)
Specific rules:
1. Separate features are broken down into feature modules that are lazy loaded.
2. Against the style guide, components, services, and directives all have a containing folder.
3. The core module is for application specific logic: mainly services and global model.
4. The shared module is for reusable items (components, directives, and pipes usually).  These have a chance to be used in other applications.