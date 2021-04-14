import React from 'react';
import { Image, useColorModeValue} from '@chakra-ui/react';
import logo from './assets/images/logo_white.svg';
import logoBlack from './assets/images/logo_black.svg';

const Logo = ({maxH=8, ...props}) => {
  return <Image maxH={maxH} src={useColorModeValue(logoBlack, logo)} {...props} />;
};

export default Logo