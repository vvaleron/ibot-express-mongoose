const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const mainRoute = require('./main.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: mainRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
