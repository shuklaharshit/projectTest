import {
  Box,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Input,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { BigHead } from "@bigheads/core";
import Fab from "@mui/material/Fab";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import axios from "axios";

export default function Phase2Content(props) {
  //states to check Data List is loaded?
  const [listData, setlistData] = useState([]);
  const [isDataLoaded, setisDataLoaded] = useState(false);

  //useEffect to load list of object..
  const [validator, setvalidator] = useState(0);
  useEffect(() => {
    setvalidator(1);
  });

  //because rerendering it is required to avoid multiple api fetches
  const fetchList = () => {
    if (validator == 1) {
      axios
        .get("https://625e7584873d6798e2a7b7df.mockapi.io/api/v1/buttons")
        .then((res) => {
          setlistData(res.data);
          setisDataLoaded(true);
        });
    } else {
      console.log("null", validator);
      setisDataLoaded(false);
    }
  };

  //it will run on component did  update
  useEffect(() => {
    //load all list on page load
    fetchList();
  }, [validator]);

  return (
    <>
      <Grid
        container
        sx={{ height: "100%" }}
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isDataLoaded ? (
            <>
              <List
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  bgcolor: "primary.main",
                }}
              >
                {listData.map((item, index) => {
                  return (
                    <div
                      style={{ backgroundColor: "#0052cc" }}
                      //used id as KEy
                      key={item.id}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            sx={{
                              width: 80,
                              height: 80,
                              backgroundColor: "primary.main",
                            }}
                          >
                            <BigHead style={{ fontSize: "5px" }} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                display: "inline",
                                fontFamily: "Special Elite",
                                fontSize: "25px",
                                marginLeft: "20px",
                              }}
                              component="span"
                              variant="body2"
                              color="#fff"
                            >
                              {item.name}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider
                        variant="inset"
                        sx={{ backgroundColor: "white" }}
                        component="li"
                      />
                    </div>
                  );
                })}
              </List>
            </>
          ) : (
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <CircularProgress size={50} style={{ color: "#fff" }} />
            </div>
          )}
        </Grid>
      </Grid>

      <Fab
        size="medium"
        color="primary"
        sx={{
          opacity: "0.7",
          position: "fixed",
          right: "0",
          bottom: "0",
          marginRight: "1.5rem",
          marginBottom: "1.5rem",
        }}
        aria-label="add"
        onClick={() => {
          //go back
          props.setCurrentState("");
        }}
      >
        <HighlightOffRoundedIcon sx={{ fontSize: "3.5rem" }} />
      </Fab>
    </>
  );
}
