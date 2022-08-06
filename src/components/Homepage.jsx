import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { useSelector } from "react-redux";
// import { useGetCryptosQuery } from "../services/cryptoApi";
import axios from "axios";
import { getDatasetAtEvent } from "react-chartjs-2";
const { Title } = Typography;

const Homepage = () => {
  // const { data, isFetching } = useGetCryptosQuery();
  // console.log(data);
  // const globalStats = data;
  // console.log(globalStats);
  // if (isFetching) return "Loading...";
  // data();

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const getData = async () => {
    const globalStats = await axios
      .request(options)
      .then((response) => response.data)
      .then((data) => {
        return data.data.stats;
      });

    console.log(globalStats, typeof globalStats);
    return globalStats;
  };

  getData().then((stats) => {
    const json = JSON.stringify(stats);
    console.log(json);
  });

  // const getData = () => {
  //   axios
  //     .request(options)
  //     .then((response) => {
  //       // console.log(response);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // let totalCurrencies;

  // getData().then((data) => {
  //   totalCurrencies = data.data.stats;
  // });
  // console.log(totalCurrencies);

  // return data.json();

  // const data = await getData(options);
  // console.log({data});

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24th Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
