// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlPeliculas: 'https://my.api.mockaroo.com/peliculas.json?key=c7f90510',
  urlActores: 'https://my.api.mockaroo.com/actores.json?key=c7f90510'
};

export const firebaseConfig = {
  apiKey: "AIzaSyDWpIBZuthNS7IRmay4Fp876fGfJESOmic",
    authDomain: "sande-primer-modelo.firebaseapp.com",
    databaseURL: "https://sande-primer-modelo.firebaseio.com",
    projectId: "sande-primer-modelo",
    storageBucket: "sande-primer-modelo.appspot.com",
    messagingSenderId: "64186940820",
    appId: "1:64186940820:web:fc1b9863cc1532456ba381",
    measurementId: "G-CSG2QEWQBJ"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
