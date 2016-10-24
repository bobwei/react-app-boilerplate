import React from 'react';
import { connect } from 'react-redux';

const IndexPage = () => (
  <div className="index">
    Hello World
  </div>
);

export default connect()(IndexPage);
