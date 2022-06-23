import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    if (!name || !lastName || !phone || !image) {
      alert("type in");
    } else {
      let newContact = {
        name,
        lastName,
        phone,
        image,
      };
      addContact(newContact);
      console.log(newContact);
      navigate("/");
    }
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        onChange={e => setName(e.target.value)}
      />
      <TextField
        value={lastName}
        label="Last Name"
        variant="outlined"
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        value={phone}
        label="Phone"
        variant="outlined"
        onChange={e => setPhone(e.target.value)}
      />
      <TextField
        value={image}
        label="Image"
        variant="outlined"
        onChange={e => setImage(e.target.value)}
      />
      <Button sx={{ m: 1 }} variant="contained" onClick={() => handleSave()}>
        Save
      </Button>
    </Box>
  );
};

export default AddContact;
