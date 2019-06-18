# ckeditor-ws

The purpose of this repository is to demonstrate how to build a [React] application using a monorepo.  [Yarn] is used to manage dependencies.  The app module uses [Create React App] for application development and the editor module uses [tsdx] and [Docz] for the component development.

## Getting Started

From the project root run `yarn`

### Running the application

The application can be ran using the same command from either the application root or the **modules/app** folder.  You can read more about the commands available for the app module [here](modules/app).

From the project root, run `yarn start` in your terminal.

### Running the playground

The [Docz] playground can be ran using from the **modules/editor** folder.  You can read more about the commands available for the editor module [here](modules/editor).

From the **modules/editor** directory, run `yarn docz:dev` in your terminal.

## Dependencies

[React] - a JavaScript library for building user interfaces.

[Yarn] - a package manager for your code.

[tsdx] - a zero-config CLI for TypeScript package development.

[Docz] - a zero-config library for documenting things.

[CKEditor] - A set of ready to use rich text editors.

[React]: https://reactjs.org/
[Create React App]: https://facebook.github.io/create-react-app/
[CKEditor]: https://ckeditor.com/ckeditor-5/
[tsdx]: https://github.com/palmerhq/tsdx
[Yarn]: https://yarnpkg.com/en/docs/getting-started
[Docz]: https://www.docz.site/docs/introduction
