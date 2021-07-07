import { Col } from 'reactstrap';

function BoxHorizontal({ props }) {
  return (
    <div className="boxed">
      {props &&
        props.length &&
        props.map((prop, i) => {
          const className = i % 2 === 0 ? 'left' : 'right';
          const { title = '', description = '', blockquote = '' } = prop;
          return (
            <Col lg={6} className={`boxed-${className}-side`} key={i + 1}>
              <h3 className="font-weight-bolder text-uppercase text-success">
                {title}
              </h3>
              <figure>
                <blockquote className="blockquote">
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  {blockquote}
                </figcaption>
              </figure>
            </Col>
          );
        })}
    </div>
  );
}

export default BoxHorizontal;
