import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";

import Loading from "components/Loading";
import * as S from "./styles";
import { getDetails } from "./js/api";
import { getImage, convertRuntime } from "functions/utils";
import CircularProgressbar from "components/CircularProgressbar";
import ModalTrailer from "components/Modals/ModalTrailer";
import Icon from "components/Icon";

const Details = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [trailerId, setTrailerId] = useState("");
  const [showModalTrailer, setShowModalTrailer] = useState(false);

  useEffect(() => {
    getDetails(id, setTrailerId, setDetails, setLoading);
  }, []);

  if (loading) return <Loading customClass="mt-5" />;

  return (
    <div>
      <ModalTrailer
        show={showModalTrailer}
        setShow={setShowModalTrailer}
        trailerId={trailerId}
        title={details.title}
      />

      <S.ContainerTop
        style={{
          backgroundImage: `linear-gradient(to right, rgba(6.27%, 5.49%, 5.49%, 1.00) 150px, rgba(6.27%, 5.49%, 5.49%, 0.84) 100%), url(${getImage(
            details.backdrop_path,
            "original"
          )})`,
        }}
      >
        <Container fluid className="text-center text-md-start">
          <Row className="py-4">
            <Col xs={12} md={4}>
              <div className="d-flex justify-content-center justify-content-md-start">
                <div className="position-relative" style={{ maxWidth: 500 }}>
                  <img
                    title={details.title}
                    alt={details.title}
                    className="img-fluid"
                    src={getImage(details.poster_path)}
                  />
                  <CircularProgressbar voteAverage={details.vote_average} />
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className="details-right">
                <h1 className="details-title my-4 my-md-0">
                  {details.title}{" "}
                  <span>({moment(details.release_date).format("YYYY")})</span>
                </h1>
              </div>
              <div className="d-flex flex-column flex-md-row">
                <p className="details-date">
                  {moment(details.release_date).format("LL")}
                </p>
                <div className="d-flex justify-content-center align-items-center container-gender">
                  <p>
                    {details.genres
                      ?.slice(0, 3)
                      .map((item) => item.name)
                      .join(", ")}
                  </p>
                </div>
                <p className="details-runtime">
                  {convertRuntime(details.runtime)}
                </p>
              </div>
              {trailerId && (
                <button
                  onClick={() => setShowModalTrailer(true)}
                  className="mt-4 w-100 d-flex align-items-center justify-content-center justify-content-md-start btn-trailer btn-no-styles"
                >
                  <Icon name="play" />
                  <p className="ms-1">Reproduzir trailer</p>
                </button>
              )}
              {details.overview && (
                <div className="mt-4 sinopse">
                  <h2>Sinopse</h2>
                  <p>{details.overview}</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </S.ContainerTop>

      <Container fluid>
        <p>bottom</p>
      </Container>
    </div>
  );
};

export default Details;
