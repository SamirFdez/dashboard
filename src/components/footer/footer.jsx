import { Container } from "react-bootstrap";

export const Footer = function () {
  return (
    <>
      <section className="d-flex justify-content-between p-2 footer">
        <Container>
          <footer className="d-flex align-items-center py-1">
            <div className="col-12 justify-content-center d-flex align-items-center">
              <span className="textFooter">
              Copyright © 2023 Signos Framework. All rights reserved.
              </span>
            </div>
          </footer>
        </Container>
      </section>
    </>
  );
};
