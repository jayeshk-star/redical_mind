import React, { useState } from "react";
import { Components } from "../../utils/materialUI";
import styles from "../styles";
import theme from "../../utils/theme";
import { Button } from "@mui/material";
// import CallAuditTable from "../Table/CallAuditTable";
import UserTable from "../../Table/UserTable";

const {
  withStyles,
  Grid,
  Card,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const CallTypeArray = ["Inbound", "Outbound-manual"];
const CampaignArray = [
  "AGENTDIRECT",
  "AGENTDIRECT_CHAT",
  "Csat_eng",
  "csat_hindi",
  "DigitalCallback",
  "DigitalCemEnqCemRq",
  "DigitalDealershipR",
  "DigitalOther",
  "ENcementexpress",
  "ENLoyaltyProgram",
  "ENMarketingBrandin",
  "ENNewcustomer",
  "ENother",
  "MakeMyTrip",
  // "MakeMyTrip_Flight",
];

const dateArray = [
  "2024-06-10",
  "2024-06-09",
  "2024-06-08",
  "2024-06-06",
  "2024-06-05",
  "2024-05-31",
  "2024-05-29",
  "2024-05-28",
  "2024-05-27",
  "2024-05-18",
];

const UserArray = ["VDCL"];
const StatusArray = ["NANQUE"];
const TermArray = ["NOAGENT"];
const LeadArray = ["5757681"];

const ProcessCell = ({ classes, handleSubmit }) => {
  const [postData, setPostData] = useState({
    callType: "",
    campaign: "",
    date: "",
    user: "",
    status: "",
    termReason: "",
    leadID: "",
  });

  const handleStateChange = (key, value) => {
    setPostData((pre) => {
      pre[`${key}`] = value;
      return { ...pre };
    });
  };

  const handlePostData = () => {
    handleSubmit();
  };

  return (
    <Container md={12} xs={12} lg={12}>
      <Card sx={{ ...theme.card, minHeight: "30vh" }}>
        <Item className={classes.headingContainer}>
          <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
            Call Quality Audit
          </Typography>
        </Item>
        <Item
          sx={{
            width: "100vw",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          lg={12}
          xs={12}
          md={12}
          p={3}
        >
          <Item mt={1} lg={3.8} xs={12} md={5.8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Call Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      color: "white",
                      background: theme.palette.primary.sidebarSecondary,
                    },
                  },
                }}
                sx={{
                  "& [aria-expanded=true]": {
                    background: "#EBF4FF",
                  },
                }}
                value={postData?.callType}
                label="Call Type"
                onChange={(e) => handleStateChange("callType", e.target.value)}
              >
                {CallTypeArray?.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Item>
          <Item mt={1} lg={3.8} xs={12} md={5.8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Campaign
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      color: "white",
                      background: theme.palette.primary.sidebarSecondary,
                    },
                  },
                }}
                sx={{
                  "& [aria-expanded=true]": {
                    background: "#EBF4FF",
                  },
                }}
                value={postData?.campaign}
                label="Campaign"
                onChange={(e) => handleStateChange("campaign", e.target.value)}
              >
                {CampaignArray?.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Item>

          {/* <Item mt={1} lg={3.8} xs={12} md={5.8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Date
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      color: "white",
                      background: theme.palette.primary.sidebarSecondary,
                    },
                  },
                }}
                sx={{
                  "& [aria-expanded=true]": {
                    background: "#EBF4FF",
                  },
                }}
                value={postData?.date}
                label="Date"
                onChange={(e) => handleStateChange("date", e.target.value)}
              >
                {dateArray?.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Item> */}
          <Item mt={1} lg={3.8} xs={12} md={5.8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                User
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      color: "white",
                      background: theme.palette.primary.sidebarSecondary,
                    },
                  },
                }}
                sx={{
                  "& [aria-expanded=true]": {
                    background: "#EBF4FF",
                  },
                }}
                value={postData?.user}
                label="User"
                onChange={(e) => handleStateChange("user", e.target.value)}
              >
                {UserArray?.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Item>
          <Item mt={1} lg={3.8} xs={12} md={5.8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      color: "white",
                      background: theme.palette.primary.sidebarSecondary,
                    },
                  },
                }}
                sx={{
                  "& [aria-expanded=true]": {
                    background: "#EBF4FF",
                  },
                }}
                value={postData?.status}
                label="Status"
                onChange={(e) => handleStateChange("status", e.target.value)}
              >
                {StatusArray?.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Item>
          <Item mt={1} lg={3.8} xs={12} md={5.8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Term Reason
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      color: "white",
                      background: theme.palette.primary.sidebarSecondary,
                    },
                  },
                }}
                sx={{
                  "& [aria-expanded=true]": {
                    background: "#EBF4FF",
                  },
                }}
                value={postData?.termReason}
                label="Term Reason"
                onChange={(e) =>
                  handleStateChange("termReason", e.target.value)
                }
              >
                {TermArray?.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Item>
          <Item mt={1} lg={3.8} xs={12} md={5.8}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Lead ID
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      color: "white",
                      background: theme.palette.primary.sidebarSecondary,
                    },
                  },
                }}
                sx={{
                  "& [aria-expanded=true]": {
                    background: "#EBF4FF",
                  },
                }}
                value={postData?.leadID}
                label="Lead ID"
                onChange={(e) => handleStateChange("leadID", e.target.value)}
              >
                {LeadArray?.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Item>
          {/* <Item mt={1} lg={3.8} xs={12} md={5.8}></Item> */}

          <Item
            mt={1}
            lg={12}
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={handlePostData}
              style={{
                width: "180px",
                backgroundColor: theme.palette.primary.sidebarSecondary,
                color: "white",
              }}
            >
              Submit
            </Button>
          </Item>
          {/* <Item mt={1} lg={3.8} xs={12} md={5.8}></Item> */}
        </Item>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(ProcessCell);
