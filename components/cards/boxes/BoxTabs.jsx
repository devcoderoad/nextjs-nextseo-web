import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import {
  NavLink,
  // Card,
  Button,
  // CardTitle,
  // CardText,
  Row,
  Col,
  Container,
  Collapse,
} from 'reactstrap';

function BoxTabs({ props }) {
  const [activeTab, setActiveTab] = useState(0);
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = (tab, collapse) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
    setCollapse(!collapse);
  };

  return (
    <div className="boxed-bottom">
      <Col>
        {props &&
          props.length &&
          props.map((prop, i) => {
            // const className = i % 2 === 0 ? 'left' : 'right';
            // const {
            //   title = '',
            //   subTitle,
            //   description = '',
            //   publishDate = '',
            //   faqs = [],
            // } = prop;
            return (
              <div key={prop.id}>
                <NavLink
                  className={classnames({ active: activeTab === i })}
                  onClick={() => {
                    toggleCollapse(i, collapse);
                  }}
                >
                  <h4 className="underline">{prop.title}</h4>
                </NavLink>
                <Collapse isOpen={activeTab === i} key={prop.id}>
                  <Container>
                    <Row>
                      {prop.answers &&
                        prop.answers.length &&
                        prop.answers.map((item) => {
                          return (
                            <Container
                              sm="12"
                              className="mt-3"
                              key={item.answerTitle}
                            >
                              <Col sm="12">
                                <h4>{item.answerTitle}</h4>
                                <p className="lead">{item.answerText}</p>
                              </Col>
                            </Container>
                          );
                        })}
                    </Row>
                  </Container>
                </Collapse>
              </div>
            );
          })}
      </Col>
    </div>
  );
}

export default BoxTabs;
