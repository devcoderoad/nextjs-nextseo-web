import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  // Card,
  Button,
  // CardTitle,
  // CardText,
  Row,
  Col,
} from 'reactstrap';

function BoxTabs({ props }) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    if (activeTab) {
      toggle(1);
    }
  }, []);

  const renderContent = (props) => {
    return (
      <TabContent activeTab={activeTab}>
        {props &&
          props.length &&
          props.map((prop, i) => {
            return (
              <TabPane tabId={prop.id} key={prop.id}>
                <Row>
                  {prop.answers &&
                    prop.answers.length &&
                    prop.answers.map((item) => {
                      return (
                        <Col sm="12" className="mt-3" key={item.answerTitle}>
                          <Col sm="12">
                            <h4>{item.answerTitle}</h4>
                            <p className="lead">{item.answerText}</p>
                          </Col>
                        </Col>
                      );
                    })}
                </Row>
              </TabPane>
            );
          })}
      </TabContent>
    );
  };

  return (
    <div className="boxed-bottom">
      <Nav tabs>
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
              <NavItem key={prop.id}>
                <NavLink
                  className={classnames({ active: activeTab === prop.id })}
                  onClick={() => {
                    toggle(prop.id);
                  }}
                >
                  {prop.title}
                </NavLink>
              </NavItem>
            );
          })}
      </Nav>
      {renderContent(props)}
    </div>
  );
}

export default BoxTabs;
