import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
 
  const color = useColorModeValue('#000000', '#ffffff');

  return (
    <chakra.svg
      xmlns=""
      viewBox="0 0 550 172"
      {...props}
    >
    </chakra.svg>
  );
};


