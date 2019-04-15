// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCe7-dEhvqUQAouWh-nqQ1Z6C-hEDdKzis",
    authDomain: "egg-blog.firebaseapp.com",
    databaseURL: "https://egg-blog.firebaseio.com",
    projectId: "egg-blog",
    storageBucket: "egg-blog.appspot.com",
    messagingSenderId: "273163164075"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
