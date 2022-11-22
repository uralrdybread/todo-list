A very simple todo list using only bootstrap and Angular. This small app does very simple two-way data binding to add/remove items from an array. 
A model class is used for defining content of type string and completed being either true or false boolean value.
It incorporates three class methods: 
One of these methods is for toggling on and off if a task is complete and given a strike-through effect if you click on the text.
Another using a filter method to delete items. 
And an add method to push some text-input the user writes into an array called inputTodo which is then iterated on using an ngFor structural directive.

![todolist](https://user-images.githubusercontent.com/48900828/203200904-04e76c40-eeca-4e53-a4bb-422e991b6673.PNG)

# ToDoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
