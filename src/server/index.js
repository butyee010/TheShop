// import compression from 'compression';
// import path from 'path';
// import webpack from 'webpack';
// import express from 'express';
const compression = require('compression');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const bodyParser = require('body-parser');

// import * as bodyParser from 'body-parser';
// import configDev from '../../build/webpack.dev.babel';
const configDev = require('../../build/webpack.dev.babel');

const isProd = process.env.NODE_ENV === 'production';

const app = express();
const compiler = webpack(configDev);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();  

if (!isProd) {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: configDev.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(compression());

  app.use(express.static('dist/public', {
    setHeaders(res, resPath) {
      // do not set Cache-Control for index page
      const isIndexFile = resPath.endsWith('/index.html');
      if (!isIndexFile) {
        res.setHeader('Cache-Control', '86400');
      }
    }
  }));
}

const firebaseConfig = require('./firebase/Config');

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});
router.get('/123', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});
router.post('/a', function(req, res) {
  res.json({ message: 'aaaaaaaaaa! welcome to our api!' });   
});
router.post('/b', function(req, res) {
  firebaseConfig.writeUserData("test", "patipon", "test@gmail.com");
  res.json({ message: 'bbbbbbbbbbb! welcome to our api!' });   
});
app.use('/api', router);

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Listening at http://localhost:3000/');
});
