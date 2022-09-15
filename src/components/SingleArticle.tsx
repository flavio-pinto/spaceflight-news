import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Article } from "../Models/Article";

interface SingleArticleProps {
  article: Article;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  const navigate = useNavigate();

  return (
    <Card className="article-card bg-dark mb-4 pointer" onClick={() => {navigate('/' + article.id)}}>
      <Card.Img className="card-image" variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title className="article-card-title">{article.title}</Card.Title>
        <Card.Text className="article-card-text">{article.summary}</Card.Text>
        <Card.Footer className="d-flex justify-content-between text-muted">
          <Card.Text className="mb-0">Website: {article.newsSite}</Card.Text>
          <Card.Link className="article-card-text-link" href={article.url}>Vai alla notizia</Card.Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
