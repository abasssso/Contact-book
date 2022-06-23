import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ContactCard({ item, deleteContact }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px", margin: "20px 20px" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.iamge}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteContact(item.id)} size="small">
          Delete
        </Button>
        <Link to={`/edit/${item.id}`}>
          <Button size="small">Edit</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
