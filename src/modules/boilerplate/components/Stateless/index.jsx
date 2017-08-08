import React from 'react';
import 'prop-types';
import compose from 'recompose/compose';

import './index.scss';

const Component = () => <div>Component</div>;

Component.propTypes = {};

Component.defaultProps = {};

export default compose()(Component);
