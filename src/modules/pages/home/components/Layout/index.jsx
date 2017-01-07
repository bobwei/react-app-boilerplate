import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { goBack as goBackAction } from 'react-router-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import withProps from 'recompose/withProps';

import NavigationBar from '../NavigationBar';
import styles from './index.scss';

const Layout = ({ modal, goBack, children }) => (
  <div>
    <NavigationBar />
    {modal &&
      <Modal show onHide={goBack} bsSize="large">
        <Modal.Body className={styles.modalBody}>
          {children}
        </Modal.Body>
      </Modal>
    }
    {!modal &&
      children
    }
  </div>
);

Layout.defaultProps = {
  modal: false,
};

Layout.propTypes = {
  modal: React.PropTypes.bool,
  goBack: React.PropTypes.func,
};

export default compose(
  mapProps(props => ({
    modal: R.pathOr(Layout.defaultProps.modal, ['location', 'state', 'modal'])(props),
    children: props.children,
  })),
  connect(),
  withProps(({ dispatch }) => ({
    goBack: R.compose(dispatch, goBackAction),
  })),
)(Layout);
