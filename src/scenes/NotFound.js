import React, { Component } from 'react';
import { Result, Button } from 'antd';

export default class NotFound extends Component {
  onBack = () => this.props.history.goBack()

  render = () => (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={(
        <Button type="primary" onClick={this.onBack}>Back</Button>
      )}
    />
  )
}