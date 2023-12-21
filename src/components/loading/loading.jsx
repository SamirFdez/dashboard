import React from "react";

export const Loading = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          height: "30em",
        }}
      >
        <span class="loader"></span>
      </div>
      <div
        style={{
            marginTop: "5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{color: "white"}}>Cargando...</h3>
      </div>
    </>
  );
};
