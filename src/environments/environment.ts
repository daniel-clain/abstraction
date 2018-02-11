// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAgTD47u1N2EabNEuECuKFSDnDXR3eMLr8',
    authDomain: 'daniel-personal-life.firebaseapp.com',
    databaseURL: 'https://daniel-personal-life.firebaseio.com',
    projectId: 'daniel-personal-life',
    storageBucket: 'daniel-personal-life.appspot.com',
    messagingSenderId: '846518252310'
  }
};
