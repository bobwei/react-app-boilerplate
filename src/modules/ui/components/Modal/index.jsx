import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

import styles from './index.scss';

const Modal = props => (
  <BootstrapModal {...props}>
    <BootstrapModal.Body className={styles.modalBody}>
      {props.children}
    </BootstrapModal.Body>
  </BootstrapModal>
);

export default Modal;
