import React from 'react';
import { Stack, Typography } from '@mui/material';
import chestIcon from '../assets/icons/chest.png';
import legIcon from '../assets/icons/knee.png';
import cardioIcon from '../assets/icons/heart3.png';
import armIcon from '../assets/icons/muscle2.png';
import backIcon from '../assets/icons/back.png';
import waistIcon from '../assets/icons/slim-down.png';
import neckIcon from '../assets/icons/neck.png';
import all from '../assets/icons/body.png';
const bodyPartIcons = {
  chest: chestIcon,
  'upper legs': legIcon,
  'lower legs': legIcon,
  'lower arms': armIcon,
  'upper arms': armIcon,
  waist: waistIcon,
  shoulders: backIcon,
  cardio: cardioIcon,
  back: backIcon,
  neck: neckIcon,
  all:all
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const icon = bodyPartIcons[item];

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #FF2625',
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
          : {
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={icon} alt={item} style={{ width: '70px', height: '40px' }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
