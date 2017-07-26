#!/usr/bin/env babel-node
import 'dotenv/config';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import getPublicEnv from 'modules/env/selectors/getPublicEnv';

import HTML from '../src/html';

const env = getPublicEnv(process.env);

console.log(
  `<!doctype html>${renderToStaticMarkup(
    <HTML env={env} jsSrc={'assets/app.js'} cssSrc={'assets/main.css'} />,
  )}`,
);
