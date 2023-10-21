import React, { useEffect } from "react";
import { useState } from "react";
import "./home.css";
import axios from "axios";
import { Input, Table, Image, Row, Col, Tag, Space, Button } from "antd";
import home from "../Assets/icons/home.svg";

const Home = () => {
  const [tableData, setTableData] = useState([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setTableData(res.data));
    console.log("Data: ", tableData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
  ];

  return (
    <div className="main">
      <Row type="flex">
        <Col span={24} className="header">
          <img src={home} className="home-icon" />
          <p className="header-text">Assertify Test</p>
        </Col>
      </Row>
      <Row type="flex">
        <Col span={24} align="left">
          <Button className="data-button" onClick={getData}>
            Load Data
          </Button>
        </Col>
        <Col span={24}>
          <Table
            dataSource={tableData}
            columns={columns}
            pagination={false}
            className="main-table m-10"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
