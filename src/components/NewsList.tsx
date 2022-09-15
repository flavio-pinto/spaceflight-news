import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Article } from "../Models/Article";
import SingleArticle from "./SingleArticle";

const NewsList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetchArticles(10, 0);
  }, []);

  const fetchArticles = async (limit: number, startFrom: number) => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}&_start=${startFrom}`
      );
      if (response.ok) {
        let data: Article[] = await response.json();
        console.log(data);
        setArticles(data);
      } else {
        console.log("Errore nella chiamata!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="news-list">
      <Row>
        {articles.map((article) => (
          <Col key={article.id} lg={6}>
            <SingleArticle article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
