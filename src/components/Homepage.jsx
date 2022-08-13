import axios from "axios";
import React, { useState, useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
const { Title } = Typography;

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

const Homepage = () => {
  // const { data, isFetching } = useGetCryptosQuery();
  const [globalStats, setGlobalStats] = useState("");

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGlobalStats(response.data?.data?.stats);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setGlobalStats, globalStats]);

  // console.log(globalStats);

  return (
    <>
      {globalStats && (
        <>
          <Title level={2} className="heading">
            Global Crypto Stats
          </Title>
          <Row>
            <Col span={12}>
              <Statistic
                title="Total Cryptocurrencies"
                value={globalStats?.totalCoins}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Exchanges"
                value={millify(globalStats?.totalExchanges)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Market Cap"
                value={millify(globalStats?.totalMarketCap)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total 24th Volume"
                value={millify(globalStats?.total24hVolume)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Markets"
                value={millify(globalStats?.totalMarkets)}
              />
            </Col>
          </Row>
        </>
      )}

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
