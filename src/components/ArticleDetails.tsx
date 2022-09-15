import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Article } from "../Models/Article";

const ArticleDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [articleDetails, setArticleDetails] = useState<Article | null>(null);

  useEffect(() => {
    fetchArticleDetails();
  }, []);

  const fetchArticleDetails = async() => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      if (response.ok) {
        let data: Article = await response.json();
        console.log(data);
        setArticleDetails(data);
      } else {
        console.log("Errore nella chiamata!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Button className="button-go-home mb-4" onClick={() => {navigate('/')}}>Home Page</Button>
      <Row>
        
        <Col xs={12} md={{span: 6, offset: 3}}>
          <Card className="article-card bg-dark mb-4">
            <Card.Img className="card-image" variant="top" src={articleDetails?.imageUrl} />
            <Card.Body>
              <Card.Title className="article-card-title">{articleDetails?.title}</Card.Title>
              <Card.Text className="article-card-text">{articleDetails?.summary}</Card.Text>
              <Card.Footer className="d-flex justify-content-between text-muted">
                <Card.Text className="mb-0">Website: {articleDetails?.newsSite}</Card.Text>
                <Card.Link className="article-card-text-link" href={articleDetails?.url}>Vai alla notizia</Card.Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetails;