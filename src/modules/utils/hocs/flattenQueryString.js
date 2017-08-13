import { parse } from 'query-string';
import R from 'ramda';
import compose from 'recompose/compose';
import withPropsOnChange from 'recompose/withPropsOnChange';

const flattenQueryString = () =>
  compose(
    withPropsOnChange(
      ['location'],
      R.compose(parse, R.path(['location', 'search'])),
    ),
  );

export default flattenQueryString;
