/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import defaultProps from 'recompose/defaultProps';

import styles from './index.scss';

const FieldArraySection = ({
  fieldComponent: FieldComponent,
  push,
  remove,
  addButtonTitle,
  emptyStateMessageTitle,
  ...fieldArrayProps
}) =>
  <div>
    {!fieldArrayProps.fields.length &&
      <div className={`${styles.message} ${styles.empty}`}>
        {emptyStateMessageTitle}
      </div>}
    {fieldArrayProps.fields.map((field, index) =>
      <Row className={styles.row} key={field}>
        <Col xs={11}>
          <FieldComponent
            {...{
              ...fieldArrayProps,
              field,
              index,
              value: fieldArrayProps.fields.get(index),
            }}
          />
        </Col>
        <Col xs={1}>
          <i
            className={`fa fa-trash-o ${styles.trash}`}
            id={index}
            onClick={remove}
          />
        </Col>
      </Row>,
    )}
    <FormGroup>
      <Button type="button" block className={styles.add} onClick={push}>
        {addButtonTitle}
      </Button>
    </FormGroup>
  </div>;

FieldArraySection.propTypes = {
  fieldComponent: React.PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  addButtonTitle: PropTypes.string,
  emptyStateMessageTitle: PropTypes.string,
};

FieldArraySection.defaultProps = {
  addButtonTitle: 'Add',
  emptyStateMessageTitle: 'No Content Added.',
};

export default compose(
  defaultProps({
    initialValues: {},
  }),
  withHandlers({
    push: ({ fields, initialValues }) => () =>
      fields.push({ ...initialValues }),
    remove: ({ fields }) => event => fields.remove(event.target.id),
  }),
)(FieldArraySection);
