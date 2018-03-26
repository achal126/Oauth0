import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'mytestcrowd.auth0.com',
    clientID: 'uT8KIHczrl0n7wI2WMB9EcvJ2xnD4uYF',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://mytestcrowd.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
