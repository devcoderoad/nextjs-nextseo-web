import { Col } from 'reactstrap';

function BoxVertical({ props }) {
  return (
    <div className="boxed-bottom">
      {props &&
        props.length &&
        props.map((prop, i) => {
          const className = i % 2 === 0 ? 'left' : 'right';
          const {
            title = '',
            subTitle,
            description = '',
            publishDate = '',
          } = prop;
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              className={`boxed-bottom-${className}`}
              key={i + 1}
            >
              <div className="boxed-bottom-content">
                <h3 className="font-weight-bold text-uppercase headline text-muted">
                  {title}
                </h3>
                <h4>{subTitle}</h4>
                <p
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
                <span className="text-dark font-weight-light">
                  Published: {publishDate}
                </span>
              </div>
            </Col>
          );
        })}
    </div>
  );
}

export default BoxVertical;
