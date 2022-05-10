import React, { useState, useEffect } from "react";
import { Timeline, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

class PendingTimeline extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <Timeline pending="May..." reverse={this.state.reverse}>
          <Timeline.Item>February</Timeline.Item>
          <Timeline.Item>March</Timeline.Item>
          <Timeline.Item>April</Timeline.Item>
        </Timeline>
        {/* <Button type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
          Toggle Reverse
        </Button> */}
      </div>
    );
  }
}

export {PendingTimeline};

export default () => (
  <Timeline mode="alternate">
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} position={'right'}/>}>
      Now
    </Timeline.Item>
    <Timeline.Item color="green">
      Referral harvested 0.03
      </Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      March (gains 0.34%)
    </Timeline.Item>
    <Timeline.Item color="red">
      Referral gave you 0.003
    </Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} position={'right'}/>}>
      January
    </Timeline.Item>
  </Timeline>
);


// export default () => <PendingTimeLine />;