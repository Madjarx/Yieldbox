import React, { useState, useEffect } from "react";
import { PendingTimeline } from "./PendingTimeline";
import DefaultTimeline from "./PendingTimeline";
import styles from "./styles";
import { DownloadOutlined, ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Drawer, Tooltip, Card, Progress, Dropdown, Empty, Menu, Modal, Divider, Space, Statistic } from "antd";
// import { Tooltip, Card, Progress, Dropdown, Empty, Menu, Modal, Divider, Button, Space, Statistic } from "antd";
import Table from "./Table";
import EventHistory from "./EventHistory2";
import Button from "antd-button-color";
import Promise from 'bluebird'
import GrapeBoxConnector from "./lib/GrapeBoxConnector";

const BigNumber = ethers.BigNumber;

function intercept(mockValue, readerValue) {
  return mockValue || readerValue;
}

function setEffect(setValue, asyncFn) {
  let cancel = false;

  Promise.resolve(asyncFn()).then(result => {
    if (!cancel) {
      setValue(result);
    }
  });

  return function () {
    cancel = true;
  };
}

/**
 * @param {{
 *          grapes: GrapeBoxConnector
 * }} params
 */
function Main({ web3Modal, grapes, contractReader }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isChildDrawerVisible, setIsChildDrawerVisible] = useState(false);

  // const bigNumb = await grapes.amountHarvestedTotal();

  const calculateYearAmount = () => 9.3;

  const calculateLifetimeMajor = () => 9.3;
  // const calculateLifetimeMajor = () => (9.3) - all time
  // const calculateLifetimeMajor = () => (9.3) - referrals
  const calculateLifetimeMinor = () => 9.3;
  // const calculateLifetimeMinor = () => (9.3) - all time
  // const calculateLifetimeMinor = () => (9.3) - referrals
  const calculateLifetime = () => ({
    max: calculateLifetimeMajor() + calculateLifetimeMinor(),
    min: calculateLifetimeMinor(),
  });
  // const calculateLifetime = () => ({max: calculateLifetimeMajor() + calculateLifetimeMinor(), min: calculateLifetimeMinor()})
  // const calculateLifetime = () => ({max: calculateLifetimeMajor() + calculateLifetimeMinor(), min: calculateLifetimeMinor()})

  //#region MICHAEL

  // benefit: we can "hide" that we're using either local mock classes vs remote contracts.
  const lifetimeMinor = intercept(null, await grapes.ReadContractValue("lifetimeMinor")); // -------------------> ideal, go with this approach
  // const lifetimeMinor2 = await grapes.ReadContractValue("lifetimeMinor");
  // const lifetimeMinor3 = await grapes["lifetimeMinor"](); // <-- this is what it does under the hood

  // benefit: we can intercept the value, but we're now bound/locked to "it's in the contract"
  // const lifetimeMinor = intercept(null, useContractReader(contractReader, "YourContract", "lifetimeMinor"));
  // const lifetimeMinor = intercept(BigNumber.from('3'), useContractReader(contractReader, "YourContract", "lifetimeMinor"));
  
  // benefit: standard React (negative: messy AF once you get tons of chaining cause/effect)
  // const [lifetimeMajor, setLifetimeMajor] = useState(await grapes.lifetimeMajor());
  // benefit: supports async setters, including react-subsystem/canceling.
  // useEffect(() => setEffect(setLifetimeMajor, () => grapes.lifetimeMajor()), [grapes]);

  // benefit: it does what it looks like it does.
  // useEffect(() => {
  //   let cancel = false;
  //   // TODO: how would the "cancel" operation work??
  //   function exec() {
  //     const val = await grapes.lifetimeMajor();
  //     if (!cancel) setLifetimeMajor(val);
  //   }

  //   exec();

  //   return () => (cancel = true);
  // }, [grapes]);

  //#endregion

  function handleMenuClick(e) {
    console.log("click", e);
  }
  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);
  const showDrawer = () => setIsDrawerVisible(true);
  const onDrawerClose = () => setIsDrawerVisible(false);
  const showChildDrawer = () => setIsChildDrawerVisible(true);
  const onChildDrawerClose = () => setIsChildDrawerVisible(false);

  const handleBuyClick = async () => {
    //
  };

  const handleReinvestClick = async () => {
    //
  };

  const handleWithdrawClick = async () => {
    setIsModalVisible(false);
    //
  };

  // function withdrawDropdown() {
  //   return (
  //     <Menu onClick={handleMenuClick}>
  //       <Menu.Item key="1" onClick={showModal}>
  //         Reinvest
  //       </Menu.Item>
  //       <Menu.Item key="2" onClick={showModal}>
  //         Withdraw
  //       </Menu.Item>
  //     </Menu>
  //   )
  // };

  function ButtonGroup() {
    return (
      <Space direction="horizontal" size={"large"} className="space-align-block">
        <Space direction="horizontal" size={300}>
          <Button
            type="success"
            // type="primary"
            block={true}
            size={"large"}
            overlayClassName={"success"}
            // style={styles.button}
            trigger={"click"}
            // overlay={withdrawDropdown}
            onClick={() => handleReinvestClick()}
            // style={styles.button}
            // style={{backgroundColor:'#757575'}}
          >
            <DownloadOutlined />
            Deposit
          </Button>
        </Space>

        <Dropdown.Button
          type="primary"
          size={"large"}
          // style={styles.button}
          trigger={"click"}
          // overlay={withdrawDropdown}
          onClick={() => handleReinvestClick()}
        >
          <DownloadOutlined />
          Invite
        </Dropdown.Button>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
    );
  }

  return (
    <>
      <div style={styles.container}>
        <Card title="Your Box" style={styles.card} bodyStyle={styles.card_body} actions={[<ButtonGroup />]}>
          <Space direction="horizontal">
            <Space direction="vertical">
              <Divider orientation="left">Lifetime</Divider>
              <Tooltip title={`Deposited: ${50} \ Harvested: ${15}`}>
                <Progress type="circle" percent={30} success={{ percent: 10 }} />
              </Tooltip>
            </Space>
            <Space direction="vertical">
              <Divider orientation="left">Your Grapes</Divider>
              <Tooltip title={`Balance: ${50 - 15} & Harvestable: ${15}`}>
                {/* <Tooltip title={`Deposit: ${50}/ Rewards of deposit: ${15}`}> */}
                <Progress type="circle" percent={50} success={{ percent: 45 }} />
              </Tooltip>
            </Space>

            <Space direction="vertical">
              <Divider orientation="left">From Referrals</Divider>
              <Tooltip title={`Lifetime: ${25 - 15} & Harvestable: ${15}`}>
                {/* <Tooltip title={`Deposits: ${50}/ Payouts: ${15}`}> */}
                <Progress type="circle" percent={25} success={{ percent: 20 }} />
              </Tooltip>
            </Space>
          </Space>

          <Divider orientation="middle">Balances</Divider>
          <Space direction="horizontal">
            <Statistic
              title="Year"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Divider type="vertical" />
            <Statistic
              title="Month"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Divider type="vertical" />
            <Statistic
              title="Week"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Divider type="vertical" />
            <Statistic
              title="Today"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Space>
        </Card>

        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleWithdrawClick} onCancel={handleCancel}>
          <p>Are you sure you want to stop making profit?</p>
        </Modal>
      </div>

      <div style={styles.container}>
        <Card title="What everyone's doing" style={styles.card}>
          <Table />
        </Card>
      </div>

      <Drawer title="Your Timeline" placement="right" onClose={onDrawerClose} visible={isDrawerVisible}>
        <Tooltip title={`See how your referrals are doing `}>
          <Button type="primary" onClick={showChildDrawer}>
            REFERRAL TIMELINE
          </Button>
        </Tooltip>
        <Divider direction="horizontal" />
        <DefaultTimeline />
        <Drawer
          title="Referral's Timeline"
          placement="right"
          onClose={onChildDrawerClose}
          visible={isChildDrawerVisible}
        >
          <PendingTimeline />
        </Drawer>
      </Drawer>
    </>
  );
}

export default Main;
