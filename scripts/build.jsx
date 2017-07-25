#!/usr/bin/env babel-node
import 'dotenv/config';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import publicEnv from 'modules/env/selectors/publicEnv';

import HTML from '../src/html';

const env = publicEnv(process.env);

console.log(
  `<!doctype html>${renderToStaticMarkup(
    <HTML env={env} jsSrc={'assets/app.js'} cssSrc={'assets/main.css'} />,
  )}`,
);
