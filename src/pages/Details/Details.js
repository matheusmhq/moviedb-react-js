import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import moment from "moment";

import Loading from "components/Loading";
import * as S from "./styles";
import { getDetails } from "./js/api";
import {
  getImage,
  convertRuntime,
  statusMovieToBr,
  formatterDollar,
} from "functions/utils";
import CircularProgressbar from "components/CircularProgressbar";
import ModalTrailer from "components/Modals/ModalTrailer";
import Icon from "components/Icon";
import Card from "components/Card";
import MsgEmpty from "components/MsgEmpty";
import Social from "components/Social";
import InfoItem from "./components/InfoItem";
import Keyword from "./components/Keyword";

const Details = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [trailerId, setTrailerId] = useState("");
  const [showModalTrailer, setShowModalTrailer] = useState(false);
  const [showMore, setShowMore] = useState(false);

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

      <S.ContainerBottom>
        <Container fluid className="mt-4">
          <Row>
            <Col xs={12} md={8} lg={8}>
              <div className="panel">
                <h3 className="mb-4 font-weight-bold text-center text-md-start">
                  Elenco principal
                </h3>
                <Row>
                  {details.credits.cast.length == 0 ? (
                    <MsgEmpty msg="Indisponível" />
                  ) : (
                    details.credits.cast
                      .slice(0, showMore ? 999 : 8)
                      .map((item, index) => {
                        return (
                          <Card
                            key={index}
                            id={item.id}
                            title={item.original_name}
                            imagePath={item.profile_path}
                            subtitle={item.character}
                            voteAverage={item.vote_average}
                            disableOnClick={true}
                          />
                        );
                      })
                  )}
                </Row>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn-no-styles btn-more mt-2 mb-4 mb-md-0"
                    onClick={() => setShowMore(!showMore)}
                  >
                    ver {showMore ? "menos" : "mais"}
                  </button>
                </div>
              </div>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <div className="info text-center text-md-start">
                <Social
                  social={details.external_ids}
                  homepage={details.homepage}
                />

                <InfoItem
                  title="Título original"
                  info={details.original_title}
                />

                <InfoItem
                  title="Situação"
                  info={statusMovieToBr(details.status)}
                />

                <InfoItem
                  title="Orçamento"
                  info={formatterDollar(details.budget)}
                />

                <InfoItem
                  title="Receita"
                  info={formatterDollar(details.revenue)}
                />

                {details.keywords.keywords.length > 0 && (
                  <div className="info-item">
                    <h3>Palavras-chave</h3>
                    <ul className="d-flex flex-wrap justify-content-center justify-content-md-start p-0">
                      {details.keywords.keywords.map((item, index) => {
                        return <Keyword key={index} keyword={item.name} />;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </S.ContainerBottom>
    </div>
  );
};

export default Details;
