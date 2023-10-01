//import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardComponent = ({ img, title, content, to }) => {
  return (
    <Link to={to}>
      <Card sx={{ width: 350 }}>
        <CardActionArea>
          <CardMedia component="img" height="250" image={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

CardComponent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default CardComponent;
