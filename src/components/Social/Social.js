import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import Icon from "components/Icon";
import * as S from "./styles";

function Social({ ...props }) {
  const {
    facebook_id: facebookId,
    instagram_id: instagramId,
    twitter_id: twitterId,
    imdb_id: imdbId,
  } = props.social;
  const { homepage } = props;

  function renderTooltip(text) {
    return <Tooltip id="tooltip-top">Visitar {text}</Tooltip>;
  }

  return (
    <S.Container className="justify-content-center justify-content-md-start">
      {facebookId && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 10, hide: 10 }}
          overlay={renderTooltip("Facebook")}
        >
          <a target="_blank" href={`https://www.facebook.com/${facebookId}`}>
            <Icon name="facebook" />
          </a>
        </OverlayTrigger>
      )}

      {instagramId && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 10, hide: 10 }}
          overlay={renderTooltip("Instagram")}
        >
          <a target="_blank" href={`https://www.instagram.com/${instagramId}`}>
            <Icon name="instagram" />
          </a>
        </OverlayTrigger>
      )}

      {twitterId && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 10, hide: 10 }}
          overlay={renderTooltip("Twitter")}
        >
          <a target="_blank" href={`https://www.twitter.com/${twitterId}`}>
            <Icon name="twitter" />
          </a>
        </OverlayTrigger>
      )}

      {imdbId && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 10, hide: 10 }}
          overlay={renderTooltip("IMDB")}
        >
          <a target="_blank" href={`https://www.imdb.com/title/${imdbId}`}>
            <Icon name="movie" />
          </a>
        </OverlayTrigger>
      )}

      {homepage && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 10, hide: 10 }}
          overlay={renderTooltip("página inicial")}
        >
          <a target="_blank" href={homepage}>
            <Icon name="play" />
          </a>
        </OverlayTrigger>
      )}
    </S.Container>
  );
}

export default Social;
