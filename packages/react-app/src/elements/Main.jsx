import React, { useState, useEffect } from "react";
import styles from "./styles";
import { DownloadOutlined } from "@ant-design/icons";
import { Card, Progress, Dropdown, Empty, Menu, Modal, Divider, Button } from "antd";
import Table from './Table';

export default function Main(web3Modal) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleMenuClick(e) {
    console.log("click", e);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

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

  const withdrawDropdown = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={showModal}>
        Withdraw
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={styles.container}>
      <Card title="Title of the card" style={styles.card} bodyStyle={styles.card_body}>
        <Divider orientation="left">Your Earnings</Divider>
        <Progress type="circle" percent={15} />
        <Button type="primary" onClick={handleBuyClick} style={styles.button}>BUY</Button> 
        <Dropdown.Button
          type="primary"
          size={"large"}
          style={styles.button}
          trigger={"click"}
          overlay={withdrawDropdown}
          onClick={() => handleReinvestClick()}
        >
          <DownloadOutlined />
          REHARVEST
        </Dropdown.Button>

        <Divider orientation="left">Recent Earnings</Divider>
        <Table />     
      </Card>

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleWithdrawClick} onCancel={handleCancel}>
        <p>Are you sure you want to stop making profit?</p>
      </Modal>
    </div>
  );
}
