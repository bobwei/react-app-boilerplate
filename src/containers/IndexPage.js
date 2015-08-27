import React from 'react';
import { connect } from 'react-redux';

const IndexPage = () => (
  <div className="index">
    Hello World
  </div>
);

IndexPage.defaultProps = {
};

IndexPage.propTypes = {
};

export default connect()(IndexPage);
