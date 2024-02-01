import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { blue } from "@mui/material/colors";
import PropTypes from "prop-types";
import * as React from "react";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function DialogSign() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Stack>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          fontSize: "13px",
          fontWeight: "bold",
          p: "5px",
          border: "1px solid #e9e9e9",
          color: "#4c83df",
          borderRadius: "20px",
          textTransform: "none",
        }}
      >
        <AccountCircleOutlinedIcon
          sx={{ color: "#4c83df", width: "25px", height: "30px", mr: 1 }}
        />{" "}
        <p style={{ margin: 0 }}>Sign in </p>
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Stack>
  );
}
