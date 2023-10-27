import { Container } from "react-bootstrap";

export const Footer = function () {
  return (
    <>
      <section className="d-flex justify-content-between p-2 footer">
        <Container>
          <footer className="d-flex flex-wrap align-items-center py-1 my-1">
            <div className="col-12 justify-content-center d-flex align-items-center">
              <span className="mb-3 mb-md-0 textFooter">
              Copyright © 2023 Signos Framework. All rights reserved.
              </span>
            </div>
          </footer>
        </Container>
      </section>
    </>
  );
};
