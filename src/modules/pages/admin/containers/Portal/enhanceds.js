import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import shallowEqual from 'recompose/shallowEqual';

import DataTable from 'modules/ui/components/DataTable';
import * as actions from 'modules/parse-server/actions';
import { transformQuery } from 'modules/parse-server/utils';

import Filters from '../../components/Filters';

export const EnhancedFilters = compose(
  connect(),
  reduxForm({
    onSubmit() {},
  }),
)(Filters);

const query = transformQuery(['username']);

export const EnhancedDataTable = compose(
  connect(
    (state, { filterFormName }) => ({
      /* data for table rows */
      data: state.admin.data,
      /* where for fetching with query */
      where: getFormValues(filterFormName)(state),
    }),
    dispatch => bindActionCreators(actions, dispatch),
  ),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { fetchData } = nextProps;
      if (!shallowEqual(this.props.where, nextProps.where)) {
        fetchData('_User', query(nextProps.where));
      }
    },
    componentDidMount() {
      const { fetchData, where } = this.props;
      fetchData('_User', query(where));
    },
  }),
)(DataTable);
