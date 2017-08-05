import React from 'react';
import 'prop-types';
import compose from 'recompose/compose';

import './index.scss';

const Stateless = () => <div>Stateless</div>;

Stateless.propTypes = {};

Stateless.defaultProps = {};

export default compose()(Stateless);
