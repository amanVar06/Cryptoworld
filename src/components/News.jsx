// import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

// const options = {
//   method: "GET",
//   url: "https://bing-news-search1.p.rapidapi.com/news/search",
//   params: {
//     q: "Cryptocurrency",
//     freshness: "Day",
//     textFormat: "Raw",
//     safeSearch: "Off",
//   },
//   headers: {
//     "X-BingApis-SDK": "true",
//     "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
//     "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
//   },
// };

const News = ({ simplified }) => {
  const [cryptoNews, setCryptoNews] = useState([]);
  const [news_Category, setNews_Category] = useState("Cryptocurrency");
  // const { data: cryptoNews } = useGetCryptoNewsQuery({
  //   newsCategory: "Cryptocurrency",
  //   count: simplified ? 10 : 100,
  // });
  const number = simplified ? 6 : 12;
  const fetchData = async (newsCategory, count) => {
    const data = await axios
      .request({
        method: "GET",
        url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        // params: {
        //   q: { newsCategory },
        //   freshness: "Day",
        //   textFormat: "Raw",
        //   safeSearch: "Off",
        //   count: { count },
        // },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    return data;
  };

  useEffect(() => {
    // fetchData().then((data) => {
    //   console.log(data);
    // });

    fetchData("Cryptocurrency", number).then((data) => {
      console.log(data);
      setCryptoNews(data);
    });
  }, []);

  // fetchData("Cryptocurrency", number).then((data) => {
  //   console.log(data);
  // });

  // console.log(cryptoNews);

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => console.log(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
          </Select>
        </Col>
      )}
      {cryptoNews?.value?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>

              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news?.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
