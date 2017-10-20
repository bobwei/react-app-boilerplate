/* eslint-disable react/no-danger, react/forbid-prop-types */
import React from 'react';

const HTML = ({
  language,
  title,
  serverRenderingBody,
  jsSrc,
  libSrc,
  cssSrc,
  initialState,
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
      {initialState && (
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIALSTATE__ = JSON.parse('${JSON.stringify(
              initialState,
            )}');`,
          }}
        />
      )}
      <script src={libSrc} />
      <script src={jsSrc} />
    </body>
  </html>
);

HTML.defaultProps = {
  language: 'en',
  title: 'Project',
  serverRenderingBody: '',
  jsSrc: '/assets/app.js',
  libSrc: '/assets/dll/dll.lib.js',
  cssSrc: '/assets/main.css',
  initialState: {},
};

HTML.propTypes = {
  language: React.PropTypes.string,
  title: React.PropTypes.string,
  serverRenderingBody: React.PropTypes.string,
  jsSrc: React.PropTypes.string,
  libSrc: React.PropTypes.string,
  cssSrc: React.PropTypes.string,
  initialState: React.PropTypes.object,
};

export default HTML;
