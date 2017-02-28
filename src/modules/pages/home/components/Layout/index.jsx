import React from 'react';
import { connect } from 'react-redux';
import { goBack as goBackAction } from 'react-router-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import withProps from 'recompose/withProps';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import shallowEqual from 'recompose/shallowEqual';

import Modal from 'modules/ui/components/Modal';

import NavigationBar from '../NavigationBar';

const Layout = ({ modal, goBack, children, previousChildren }) => (
  <div>
    <NavigationBar />
    {modal &&
      <div>
        <Modal show onHide={goBack}>
          {children}
        </Modal>
        {previousChildren}
      </div>
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
  previousChildren: React.PropTypes.element,
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
  withState('previousChildren', 'setPreviousChildren', null),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      // TODO:
      // - add !this.props.modal && nextProps.modal === true check
      // to determin whether to setPreviousChildren or not
      if (!shallowEqual(
        R.pick(['location'])(this.props),
        R.pick(['location'])(nextProps),
      )) {
        nextProps.setPreviousChildren(this.props.children);
      }
    },
    componentDidMount() {
      this.props.setPreviousChildren(this.props.children);
    },
  }),
)(Layout);
