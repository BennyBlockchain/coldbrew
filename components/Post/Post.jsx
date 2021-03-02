import Image from "next/image";
import styles from "./Post.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Post = ({ username, name, avatar, title, body, media }) => {
  return (
    <Container>
      <Row className="py-2 bg-light border-top border-bottom">
        <Col className="col-auto">
          <a href="#">
            <Image
              src={avatar}
              width={40}
              height={40}
              className="rounded-circle"
            />
          </a>
        </Col>
        <Col className="p-0 " style={{ marginRight: "20px" }}>
          <a href="#">
            <p className="d-inline text-dark">{name}</p>
          </a>
          <p className={`d-inline text-muted ${styles.tweet}`}>
            &nbsp;@{username} · Feb 19
          </p>
          <p className="m-0">
            <strong>{title}</strong>
          </p>
          <p>{body}</p>
          {media && (
            <Container fluid className="text-center">
              <Image
                src={media}
                height={500}
                width={250}
                className="rounded text-center"
              />
            </Container>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
