import axios from "axios";
import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

// import { fetchdata } from "../services/cryptoApi";

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

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  options.params.limit = `${count}`;
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //try to use another useState of setLoading and loading
  //refernce https://stackoverflow.com/questions/54954385/react-useeffect-causing-cant-perform-a-react-state-update-on-an-unmounted-comp

  useEffect(() => {
    {
      searchTerm === ""
        ? axios
            .request(options)
            .then(function (response) {
              setCryptos(response.data?.data?.coins);
            })
            .catch(function (error) {
              console.error(error);
            })
        : axios
            .request(options)
            .then(function (response) {
              const filteredData = response.data?.data?.coins.filter((coin) =>
                coin.name.toLowerCase().includes(searchTerm.toLowerCase())
              );

              setCryptos(filteredData);
            })
            .catch(function (error) {
              console.error(error);
            });
    }
  }, [setCryptos, cryptos, searchTerm]);

  // console.log(cryptos);

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
