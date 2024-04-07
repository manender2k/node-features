module.exports = {
    issuer: process.env.ISSUER,
    authorizationURL: process.env.AUTHORIZATIONURL,
    tokenURL: process.env.TOKENURL,
    userInfoURL: process.env.USERINFOURL,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    scope: process.env.SSO_SCOPE || 'openid email profile',
    callbackURL: process.env.REDIRECT_URI,
    response_type: 'code'
};