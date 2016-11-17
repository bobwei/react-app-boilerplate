/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import path from 'path';

export default () => {
  const app = express();
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.get('*', (req, res) => {
    res.render('index', {
      html: '',
    });
  });
  return app;
};
