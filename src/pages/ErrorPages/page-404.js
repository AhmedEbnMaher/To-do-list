import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

const Page404 = () => {

  return (
    <>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 font-weight-medium">
                  4<i className="bx bx-buoy bx-spin text-primary display-3" />1
                </h1>
                <h4 className="text-uppercase">erorr 404</h4>
                <div className="mt-5 text-center">
                  <Link className="btn btn-primary waves-effect waves-light" to="/">
                    back
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
    
        </Container>
      </div>
    </>
  )
}

export default Page404
