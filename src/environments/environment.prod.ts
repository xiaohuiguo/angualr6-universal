let host = window&&window.location?window.location.host:'';
let protocol =window&&window.location? window.location.protocol:'https';
export const environment = {
  production: true,
  host:host,
  protocol:protocol
};
