import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Col } from "react-bootstrap";

import colors from "styles/colors";

const LoadingCard = ({ qty }) => {
  function renderSkeleton() {
    var list = [];

    for (var i = 1; i <= qty; i++) {
      list.push(
        <Col xs={6} md={4} lg={3} key={i}>
          <SkeletonTheme
            color={colors.brandGray}
            highlightColor={colors.lightGray}
          >
            <Skeleton className="mb-3" height={400} />
          </SkeletonTheme>
        </Col>
      );
    }
    return list;
  }

  return <>{renderSkeleton()}</>;
};

export default LoadingCard;
