import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { BoxArrowUpRight, Github } from "react-bootstrap-icons";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <p className="lead mb-4 text-muted">Explore my recent projects and creative work</p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="portfolio-grid">
              {dataportfolio.map((data, i) => (
                <div key={i} className="portfolio-item">
                  {/* <span className="portfolio-index">{"0" + (i + 1)}</span> */}
                  <div className="portfolio-image-container">
                    <img src={data.img} alt={data.description} className="portfolio-image" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-content">
                        <h3 className="portfolio-title">{data.title || data.description}</h3>
                        <p className="portfolio-description">{data.description}</p>
                        {data.tech && (
                          <div className="portfolio-tech">
                            {data.tech.map((tech, index) => (
                              <Badge key={index} className="portfolio-badge">{tech}</Badge>
                            ))}
                          </div>
                        )}
                        <div className="portfolio-links">
                          <a href={data.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                            <BoxArrowUpRight size={14} /> View Project
                          </a>
                          {data.github && (
                            <a href={data.github} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                              <Github size={14} /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};