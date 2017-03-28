# ADNOC Angular 2 Seed

This project is based originally on the [angular-seed](https://github.com/mgechev/angular-seed) project. Refer to that project for documentation not found here.

## Dependencies

This project requires the following dependencies to be installed:

- node >= v4 (>= v6 is recommended)
- yarn

We use [Yarn](https://yarnpkg.com/en/) to manage dependencies instead of npm.

To install dependencies run: `yarn`

To upgrade a dependency run: `yarn upgrade [package_name]`

To update adnoc libraries run: `npm run upgrade-adnoc-libs`

## How to start

First clone this repository and navigate to the new directory

```
git clone https://tfs.adnoc.ae/BICollection/biapp-frontend/_git/biapp-seed
cd biapp-seed
```

Install the application and development dependencies:

```
npm install
```

Or if you are using yarn (recommended)

```
yarn
```

Now you are ready to run the application (by default it starts with the adnoc-dev environment)

```
npm start
```

A new browser window will open with the application running. The application will reload automatically when you make a change to the code.

## Configuration

In order to configure the application for your needs follow these steps.

First change the ```name``` in ```package.json``` to the name of the application.

Then in `/tools/config/seed.config.ts` change the value of the `APP_ROOT_PATH` variable to the path where this will be configured in Nginx, for example `"/finance"`

Then in `src/app/app.module.ts` change the `appName` and `appId` variables to an appropriate name for this application, appId should match the same ID of this application in the adnoc-common config file, check there for the value to use.

Finally, add the appropriate configuration in the different `/tools/env` files. For each environment you need to configure:

- `ENV`: 'DEV' for your local development environment, 'PROD' for the rest.
- `API`: The base URL of the API you want to fetch data from.
- `BI_BASE_URL`: The base URL for all BI apps ecosystem.
- `DATA_API`: The base URL for the ADNOC Data-API environment. 

For a standard application deployment no further configuration is needed. If you need to customize it further, check out the different configuration options in `/tools/config/seed.config.ts` and `/tools/config/project.config.ts`

## Build for deploy

To build a production version of the application you just need to run:

```
npm run build.<environment>
```

Where \<environment\> is one of the available environments in `/tools/env`. 
Example: `npm run build.adnoc-dev`

Refer to the "Provisioning & Deploy" documentation for further instructions of the deployment process.

## How to add an external JS dependency

Follow these steps to add a JS dependency to the application. The examples show how to add JQuery.

Install and save the dependency:

```
npm install --save jquery
```

Inside `/tools/config/project.config.ts` add the following item to the `NPM_DEPENDENCIES` array:

```
{ src: 'jquery/dist/jquery.min.js', inject: 'libs' }
```

Now you need to install the typings for a correct Typescript compilation:

```
npm install @types/jquery 
```

Done!

## Modals

The application includes the [angular2-modal](https://github.com/shlomiassaf/angular2-modal) library which you can use to show modals in your application.

Check the library documentation for usage instructions.
