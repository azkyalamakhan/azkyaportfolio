import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vsf from "../assets/img/app-images/vsf.jpg";
import receiving from "../assets/img/app-images/receiving.png";
import picking from "../assets/img/app-images/picking.png";
import fulfillment from "../assets/img/app-images/fulfillment.png";
import ioniccommercehub from "../assets/img/app-images/ionic-commerce-hub.png";
import reroutefulfilment from "../assets/img/app-images/reroute-fulfilment.png";
import preorder from "../assets/img/app-images/preorder.png";
import jobmanager from "../assets/img/app-images/job-manager.png";
import thresholdmanagement from "../assets/img/app-images/threshold-management.png";
import bopis from "../assets/img/app-images/bopis.png";
import inventorycount from "../assets/img/app-images/inventorycount.png";
import shopifyadminhelper from "../assets/img/app-images/shopify-admin-helper.png";
import shopifybopis from "../assets/img/app-images/shopify-bopis.png";
import shopifypreorder from "../assets/img/app-images/shopify-preorder.png";
import shopifyhcoms from "../assets/img/app-images/shopify-hc-oms.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const apps = [ 
    {
      title: "receiving",
      description: "Design & Development",
      imgUrl: receiving,
    },
    {
      title: "pickingapp",
      description: "Design & Development",
      imgUrl: picking,
    },
    {
      title: "fulfillment",
      description: "Design & Development",
      imgUrl: fulfillment,
    },
    {
      title: "commerce-hub",
      description: "Design & Development",
      imgUrl: ioniccommercehub,
    },  
    {
      title: "reroute-fulfilment",
      description: "Design & Development",
      imgUrl: reroutefulfilment,
    },
    {
      title: "preorder",
      description: "Design & Development",
      imgUrl: preorder,
    },
    {
      title: "job-manager",
      description: "Design & Development",
      imgUrl: jobmanager,
    },
    {
      title: "threshold-management",
      description: "Design & Development",
      imgUrl: thresholdmanagement,
    },
    {
      title: "bopis",
      description: "Design & Development",
      imgUrl: bopis,
    },
    {
      title: "inventorycount",
      description: "Design & Development",
      imgUrl: inventorycount,
    }, 
  ];
  const shopifyApps = [
    {
      title: "shopify-admin-helper",
      description: "Design & Development",
      imgUrl: shopifyadminhelper,
    },
    {
      title: "shopify-bopis",
      description: "Design & Development",
      imgUrl: shopifybopis,
    },
    {
      title: "shopify-preorder",
      description: "Design & Development",
      imgUrl: shopifypreorder,
    },
    {
      title: "shopify-hc-oms",
      description: "Design & Development",
      imgUrl: shopifyhcoms,
    },     
  ];
  const vsfApps = [
    {
      title: "Vue-Storefront",
      description: "Optimized style",
      imgUrl: vsf,
    },   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects on which I have worked on :</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          apps.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          shopifyApps.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          vsfApps.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
