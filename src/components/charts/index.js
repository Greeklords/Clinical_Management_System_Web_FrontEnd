import React from "react";
import IncomeChart from "./Income.chart";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import "../../Styles/chart.css";
import ProfitChart from "./Profit.chart";
import AppointmentChart from "./Appointment.chart";
import TableHeader from "./Table";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

export default function Chart() {
  
  return (     
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/> 
    <Grid item xs={15}>  
      <h1 style={{ padding: "20%" }}/>
      <div className="cardRows header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {/* Income */}
              <Col lg="6" xl="3">
                <Card className="mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-uppercase text-muted mb-0"
                        >
                          Income
                        </CardTitle>
                        <span className="h4 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col>                        
                          <i className="fas fa-chart-bar text-info" />                        
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/*Appointment*/}
              <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h6"
                      className="text-uppercase text-muted mb-0"
                    >
                    Appointments
                    </CardTitle>
                    <span className="h4 font-weight-bold mb-0">
                    1,556
                    </span>
                  </div>
                  <Col>
                      <i className="fas fa-chart-pie text-info" />                    
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fa fa-arrow-up" /> 3.48%
                  </span>{" "}
                  <span className="text-nowrap">Since last week</span>
                </p>
              </CardBody>
            </Card>                
              </Col>

              {/*Refunds*/}
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-uppercase text-muted mb-0"
                        >
                          Refunds
                        </CardTitle>
                        <span className="h4 font-weight-bold mb-0">24</span>
                      </div>
                      <Col>
                          <i className="fas fa-users text-info" />                        
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>

              {/*Profit*/}
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h6"
                          className="text-uppercase text-muted mb-0"
                        >
                          Profit
                        </CardTitle>
                        <span className="h4 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col>                        
                        <i className="fas fa-percent text-info" />                        
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>     
      
      <Container className="chartRow1">
      {/*chart row 1*/}
      <Row>

      <Col className="mb-5 mb-xl-0" xl="8">            
          <IncomeChart/>
      </Col>
      
      <Col xl="4">        
        <Row className="align-items-center">
          <ProfitChart/>
        </Row>      
      </Col>

      </Row>
      </Container>  

      <Container className="chartRow2">
      {/*chart row 2*/}         
      <Row>
      <Col className="mb-5 mb-xl-0" xl="8">            
          <TableHeader/> 
      </Col>
      
      <Col xl="4">        
        <Row className="align-items-center">
           <AppointmentChart/> 
        </Row>      
      </Col>

      </Row>
      </Container> 
      
      <div></div>      
        </Grid>
    </Grid>
   
  );
}
