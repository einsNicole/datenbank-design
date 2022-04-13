import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Button,
  InputBase,
  Grid,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import FilterListIcon from "@material-ui/icons/FilterList";
import CustomTreeView from "./Components/CustomTreeView";
import { CLASSES } from "./Types/Components";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  treeView: {
    flexGrow: 1,
    maxWidth: 400,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    height: "100%",
    overflowX: "hidden",
    margin: 8,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ControlledTreeView() {
  const classes = useStyles();
  const [data, setData] = React.useState(CLASSES);
  const [searchResult, setSearchResult] = React.useState(null);
  const [selected, setSelected] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = React.useState("Platzhalter");

  const search = (entireObj, keyToFind, valToFind) => {
    let foundObj = [];

    JSON.stringify(entireObj, (_, nestedValue) => {
      if (
        nestedValue &&
        nestedValue?.id &&
        nestedValue[keyToFind]?.toString().toLowerCase().includes(valToFind)
      ) {
        foundObj.push(nestedValue);
      }
      return nestedValue;
    });
    return foundObj;
  };

  const searchData = (event) => {
    console.log(selected);
    const input = event.target.value.toLowerCase();
    if (input === "") {
      setAnchorEl(null);
      setData(CLASSES);
    } else {
      // console.log(search(data, "name", input.toLowerCase()));
      const result = search(CLASSES, "name", input.toLowerCase());

      setSearchResult(result);

      if (result.length) {
        setAnchorEl(event.currentTarget);
        // setData(result);
      } else setAnchorEl(null);
    }
  };

  const handleClick = (res) => {
    setSelected(res.id.toString());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SearchPopover = () => {
    return (
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClick={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoFocus={false}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
        <div style={{ width: 250 }}>
          <List>
            {searchResult?.map((res) => (
              <ListItem button onClick={(event) => handleClick(res)}>
                <ListItemText primary={res.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    );
  };

  return (
    <div className={classes.root}>
      <SearchPopover />
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="contained" color="primary">
                <AddIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <EditIcon />
              </Button>
            </Grid>
            <Grid item xs>
              <Button>
                <DeleteIcon />
              </Button>
            </Grid>
            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onChange={searchData}
                  autoFocus={true}
                />
              </div>
            </Grid>
            <Grid item>
              <Button>
                <FilterListIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                <SettingsIcon />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <CustomTreeView
            data={data}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography>
          {selected[0]
            ? JSON.stringify(
                search(CLASSES, "id", selected[0].toString()),
                null,
                4
              )
            : "Nothing to see here"}
        </Typography>
      </main>
    </div>
  );
}
