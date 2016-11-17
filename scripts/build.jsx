#!/usr/bin/env babel-node
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import HTML from '../src/html';

console.log(renderToStaticMarkup(<HTML />));
