import Redirect from 'react-router-dom/Redirect';
import { parse } from 'query-string';
import R from 'ramda';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import mapProps from 'recompose/mapProps';
import renameProp from 'recompose/renameProp';
import defaultProps from 'recompose/defaultProps';

const redirectIfAuthenticated = () =>
  compose(
    branch(
      R.prop('isAuthenticated'),
      compose(
        mapProps(R.compose(parse, R.path(['location', 'search']))),
        defaultProps({
          next: '/',
        }),
        renameProp('next', 'to'),
        renderComponent(Redirect),
      ),
    ),
  );

export default redirectIfAuthenticated;
