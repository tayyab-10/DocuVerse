import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Testimonial = (props) => {
  return (
    <>
    {/* <h1 className='text-center text-5xl font-medium'>Testimonials</h1> */}
    <Card sx={{ maxWidth: 345,mb:10 }}>
      <CardHeader
        avatar={
          <Avatar src={props.image} alt="User image" aria-label="recipe" />
        }
        title={props.title}
        subheader={
            <div className="testimonial-rating">
              {Array.from({ length: props.rating }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
            </div>
          }
      />
      <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
     {props.description}
      </Typography>
    </Card>
    </>
  );
};

export default Testimonial;