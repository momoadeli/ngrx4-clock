# MyNgrxClock 2017
**(Mo Moadeli: Fullstack Developer and Architect)**

This project is generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.8.

* Prerequisites (also in youtube comments):
    * Repo @: https://github.com/momoadeli/ngrx4-clock 
    * Install angular-cli
    * Ngrx 4 installed (along with Typescript 2.4.3 and rxjs 5.4.3
    * Understand the basics of Observers/Observables (ie RxJs)
    * Understand the notions of Smart vs presentational dumb) components

* Over the course of a few videos we'll gradually build an ngrx 4 store for a 'clock'.
    * The Store will contain a UI element/slice (**'clock-color'**) and a date/time element/slice (**'clock-datetime'**)
    * (Note, you can skip the first 2 videos if u’d like and go straight to the 3d video where we convert the clock service to a clock store. However, the first videos include interesting notions of routes, smart vs dum compoenents, and RxJs/Observables as we build up the clock.

* But What Is an ngrx Store? 
    * It's good to visit https://github.com/ngrx/platform 
    * ngrx is ‘RxJs powered state management for Angular inspired by Redux’
    Stores maintain ‘immutable state’ and further refine the notions of single responsibility and separation of roles. Before, the conventional ways were state was in a in the service or (god forbid) in the client component. Now think of services of pure http bound tasks or tasks that do not need further translation (‘reduction’). Those latter responsibilities and state now move to the store. This helps with unit testing as well.
    The store will contain a clock state and a clock color state (ie two ‘tables’/’reducers’) which will be injected into various SMART (not dumb or presentational) components.  The clock will automatically update.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
