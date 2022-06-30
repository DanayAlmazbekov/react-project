import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = React.useContext(productsContext);
  const { addToCart } = React.useContext(cartContext);
  return (
    <Card sx={{ width: 350, margin: "10px" }}>
      <CardMedia
        component="img"
        height="300"
        image={item.image}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
          Edit
        </Button>
        <Button onClick={() => navigate(`/details/${item.id}`)} size="small">
          Details
        </Button>
        <IconButton onClick={() => addToCart(item)}>
          <AddShoppingCartIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
