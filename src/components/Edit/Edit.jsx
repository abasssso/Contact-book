import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Edit = ({ oneContact, getOneContact, updateContact }) => {
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params);
  useEffect(() => {
    getOneContact(params.id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastName(oneContact.lastName);
      setPhone(oneContact.phone);
      setImage(oneContact.image);
    }
  }, [oneContact]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  function handleSave() {
    let editedContact = {
      name,
      lastName,
      phone,
      image,
    };
    updateContact(params.id, editedContact);
    navigate("/");
  }

  return (
    <Container>
      {oneContact ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginTop={"50px"}>
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            label="Name"
            variant="filled"
          />
          <TextField
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            label="Last Name"
            variant="filled"
          />
          <TextField
            value={phone}
            onChange={e => setPhone(e.target.value)}
            label="Phone"
            variant="filled"
          />
          <TextField
            value={image}
            onChange={e => setImage(e.target.value)}
            label="Image"
            variant="filled"
          />
          <Button
            onClick={() => handleSave()}
            style={{ marginTop: "30px" }}
            variant="outlined">
            Save
          </Button>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Edit;
