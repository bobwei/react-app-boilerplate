#!/usr/bin/env babel-node
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import dotenv from 'dotenv';

import HTML from '../src/html';
import { envSelector } from '../src/utils';

dotenv.config();

const envs = envSelector(process.env);

console.log(`<!doctype html>${renderToStaticMarkup(
  <HTML
    envs={envs}
  />,
)}`);
