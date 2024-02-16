import { useState,useEffect  } from "react";
import "./App.css";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  AppBar,
  Toolbar,
  Button,
  Divider,
  Avatar,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import axios from "axios";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

//components
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: theme.spacing(1.5)
  }));

  //const data = ["1", "2", "3", "4"];

  const getData = async () => {
    return await axios.get(`https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098`)
      .then((response) => {
        console.log("===>",response.data);
        setData(response.data)
      })
      .catch((error) => {
        return false
      })
  }
  useEffect(() => {
    getData()
    return () => {}
  }, [])
  

  return (
    <>
      <Header/>
      <Typography
        variant="h5"
        style={{ paddingLeft: "10px", marginBottom: "20px",marginLeft:'20px',opacity:0.5 }}
        sx={{ mt: { xs: "20px", md: "", sm: "20px" } }}
      >
        Members
      </Typography>
      <Grid
        container
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "7px",
        }}
      >
        <Grid container sm={12} xs={8}>
          {data?.map((item) => {
            if(item.role === "member")
            return (
              <Grid item sm={3} xs={12}>
                <Item>
                  {/* commneted */}
                  <Grid
                    container
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "0px",
                    }}
                  >
                    <Grid container>
                      <Grid item sm={3} xs={12}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "0px",
                      }}>
                        <Avatar sx={{ bgcolor: "#59606a" }}
                        src={item.img}></Avatar>
                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Grid item sm={9} xs={12}>
                          <Typography variant="h6" >
                           {item.first_name} {item.last_name}
                          </Typography>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                          <Typography variant="subtitle1" >
                          {item.email}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* commneted */}
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Divider aria-hidden="true" style={{marginTop:'40px'}} />


      {/* section 2============================================ */}
      <Typography
        variant="h5"
        style={{ paddingLeft: "10px", marginBottom: "20px" }}
        sx={{ mt: { xs: "20px", md: "", sm: "20px",marginLeft:'20px',opacity:0.5 } }}
      >
        Admins
      </Typography>
      <Grid
        container
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "7px",
        }}
      >
        <Grid container sm={12} xs={8}>
          {data?.map((item) => {
            if(item.role === "admin")
            return (
              <Grid item sm={3} xs={12}>
                <Item>
                  {/* commneted */}
                  <Grid
                    container
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "0px",
                    }}
                  >
                    <Grid container>
                      <Grid item sm={3} xs={12}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "0px",
                      }}>
                        <Avatar sx={{ bgcolor: "#59606a" }}
                        src={item.img}></Avatar>
                      </Grid>
                      <Grid item sm={9} xs={12}>
                        <Grid item sm={9} xs={12}>
                          <Typography variant="h6" 
                          >
                           {item.first_name} {item.last_name}
                          </Typography>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                          <Typography variant="subtitle1" >
                          {item.email}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* commneted */}
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Fab color="primary" aria-label="add" style={{position:'fixed',bottom:'20px',right:'20px'}}>
        <AddIcon />
      </Fab>
    </>
  );
}

export default App;
