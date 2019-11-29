var dotenv = require('dotenv');
dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'Development':
    path = `${__dirname}/.env.dev`;
    break;
  case 'Production':
    path = `${__dirname}/.env.pro`;
    break;
  default:
    path = `${__dirname}/.env.dev`;
}
dotenv.config({ path });