import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="error">
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404">
              <div className="msg">
                OH!<span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">
              {i18n?.t("NOT_FOUND_PAGE") ?? "Sorry! Page not found"}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
