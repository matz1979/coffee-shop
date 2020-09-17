/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'https://matth.eu.auth0.com', // the auth0 domain prefix
    audience: 'Coffie', // the audience set for the auth0 app
    clientId: 'ZmkxMLeCgF5mx3XCsw4Xl6JsdceJgu6T', // the client id generated for the auth0 app
    callbackURL: 'https://localhost:8100', // the base url of the running ionic application. 
  }
};
