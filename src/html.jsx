/* eslint-disable react/no-danger, react/forbid-prop-types */
import React from 'react';

const HTML = ({
  language, title, serverRenderingBody, jsSrc, cssSrc,
  envs,
}) => (
  <html lang={language}>
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="stylesheet" type="text/css" href={cssSrc} />
    </head>
    <body>
      <div id="app">
        <div dangerouslySetInnerHTML={{ __html: serverRenderingBody }} />
      </div>
      {envs &&
        <script
          dangerouslySetInnerHTML={{ __html: `window.__ENVS__ = JSON.parse('${JSON.stringify(envs)}');` }}
        />
      }
      <script src={jsSrc} />
    </body>
  </html>
);

HTML.defaultProps = {
  language: 'en',
  title: 'Project',
  serverRenderingBody: '',
  jsSrc: '/assets/app.js',
  cssSrc: '/assets/main.css',
};

HTML.propTypes = {
  language: React.PropTypes.string,
  title: React.PropTypes.string,
  serverRenderingBody: React.PropTypes.string,
  jsSrc: React.PropTypes.string,
  cssSrc: React.PropTypes.string,
  envs: React.PropTypes.object,
};

export default HTML;
