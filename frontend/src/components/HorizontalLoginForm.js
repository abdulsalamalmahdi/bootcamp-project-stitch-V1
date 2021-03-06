import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withContext } from '../Context';
import API from '../API.js';
import { withRouter } from 'react-router-dom'

class HorizontalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.toggleCancel,
      email: '',
      password: ''
    };
  }

  redirectToProfile = () => {
    this.props.history.push('/persondetail');
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    API.login(email, password).then(user => {
      const { setAuthenticatedUser } = this.props;
      setAuthenticatedUser(user);
    });
  };

  handleCancel = e =>{
    const { toggleCancel } = this.props;
    toggleCancel();
  };

  handleEmailChanged = e => {
    this.setState({ email: e.currentTarget.value });
  }

  handlePasswordChanged = e => {
    this.setState({ password: e.currentTarget.value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              value={email}
              onChange={this.handleEmailChanged}
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handlePasswordChanged}
            />
        </Form.Item>
        <Form.Item>
          <Button onClick={this.redirectToProfile} type="primary" htmlType="submit">
            Log in
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={this.handleCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(withContext(HorizontalLoginForm));
