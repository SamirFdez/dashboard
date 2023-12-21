import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../../components/loading/loading";
import { Container } from "react-bootstrap";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { FaTruckMedical } from "react-icons/fa6";

export const HistoricoTurnoTable = () => {
  const baseUrl = import.meta.env.VITE_APP_BASEURL;
  const cantidadDeTurnosProc = import.meta.env.VITE_APP_API_historicoTurno;
  const ApiKey = import.meta.env.VITE_APP_APIKEY;
  const [historicoTurno, setHistoricoTurno] = useState([]);
  const [loading, setLoading] = useState(FaTruckMedical);
  // const [data, setData] = useState([])

  const config = {
    headers: {
      "Content-Type": "application/json",
      APIKey: ApiKey,
    },
  };

  const getHistoricoTurno = async () => {
    try {
      const response = await axios.get(baseUrl + cantidadDeTurnosProc, config);

      setHistoricoTurno(response.data);
      setLoading(false);
      // console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los datos de la galería", error);
    }
  };

  const data = historicoTurno?.map((rowData) => ({
    IdTurno: rowData.IdTurno || "",
    fecha: rowData.Fecha || "",
    turno: rowData.Turno || "",
    area: rowData.Area || "",
    accion: rowData.Accion || "",
  }));

  const styleData = {
    table: {
      border: "3px solid #ccc",
    },
    th: {
      backgroundColor: "#dddddd",
      color: "#000",
      borderBottom: "3px solid #ccc",
      textAlign: "center",
    },
    td: {
      textAlign: "center",
    },
  };

  useEffect(() => {
    getHistoricoTurno();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Grid
            // columns={["fecha", "idturno", "turno", "area", "accion"]}
            pagination={{
              limit: 14,
            }}
            search={true}
            sort={true}
            resizable={true}
            style={styleData}
            data={data}
          />
        </Container>
      )}
    </>
  );
};
