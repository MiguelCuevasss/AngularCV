# MyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Estoy agregando esta parte para explicar lo que me paso con gitkraken, basicamente cuando lo abrí, se cerró mi proyecto, no me dejaba entrar y me salía un error, intenté arregarlo borrando gitkraken y volviendo a instalarlo, haciendo lo que me dijo Ricardo de agregar todo lo que hice de angular a mi repo que tiene todo lo que html, css, bootstrap etc. me dio problema ya que al parecer tenía dos repos en uno, se perdieron mis commits de la 1 y 2, donde definí todas las rutas de cada componente desde el app.ts y cambiando a los routerlinks desde el html, tuve un problema con la ruta hija, ya que quise agarrar la lista y los bottones (siendo los botones la ruta hija), intenté mucho pero me di cuenta que tenía que llamarlos desde la url como /list/buttons, y no solo /buttons. Hasta este punto el 1 y 2, ya están listos, lo hice así (hacer otro repo) porque no puedo perder tiempo en eso y necesito estudiar también.