import { AppProps } from "next/app";
import Error from "next/error";
import NotFound from "pages/404";
import React from "react";

const StatusRender = (props: any) => {
  const statusCode = props.render?.props?.statusCode;
  return (
    (statusCode &&
      (statusCode?.toString().charAt(0) === "2" ? (
        { ...props.render }
      ) : (
        <NotFound />
      ))) || { ...props.render }
  );
};

export default StatusRender;
