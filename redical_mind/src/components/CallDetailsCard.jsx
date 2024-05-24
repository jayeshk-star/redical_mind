import React from "react";
import theme from "../utils/theme";
import { Components } from "../utils/materialUI";

const { Card } = Components;

const CallDetailsCard = ({ data }) => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        padding: "4px 10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "13.5px",
        fontWeight: "500",
        height: "80px",
        width: "180px",
        fontWeight: "600",
        color: theme.palette.primary.sidebar,
      }}
    >
      <p> {data?.name}</p>
      <p style={{ marginTop: "-5px", fontSize: "18px", color: "#4285F4" }}>
        {data?.value}
      </p>
    </Card>
  );
};

export default CallDetailsCard;
