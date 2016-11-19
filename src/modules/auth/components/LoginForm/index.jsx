import React from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './index.scss';

const LoginForm = () => (
  <form>
    <div className="form-group">
      <label htmlFor="username">
        帳號
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="帳號"
        autoFocus
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">
        密碼
      </label>
      <input
        type="password"
        className="form-control"
        placeholder="密碼"
      />
    </div>
    <Row>
      <Col mdOffset={4} md={4}>
        <button type="submit" className={`btn btn-red btn-block ${styles.btnSubmit}`}>
          登入
        </button>
      </Col>
    </Row>
  </form>
);

export default LoginForm;
