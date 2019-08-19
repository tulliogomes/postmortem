// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Dados para conexao com o Firebase
export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: 'AIzaSyA95UGZDIPYOrFhwAPhBhq4J2AYKQC7f7E',
    authDomain: 'postmortem-e2eaa.firebaseapp.com',
    databaseURL: 'https://postmortem-e2eaa.firebaseio.com',
    projectId: 'postmortem-e2eaa',
    storageBucket: 'postmortem-e2eaa.appspot.com',
    messagingSenderId: '1031847226314',
    appId: '1:1031847226314:web:11ee87748d910f01'
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
