const Section = {
  baseStyle: {
    pt: 28,
    pb: 28,
    px: [4, null],
  },
  variants: {
    subtle: {},
    solid: {
      bg: 'blue.400',
    },
    alternate: {
      bg: 'gray.50',
    },
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default Section
