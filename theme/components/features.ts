import { transparentize, mode } from '@chakra-ui/theme-tools'

const Features = {
  parts: ['container', 'title', 'description', 'icon'],
  baseStyle: {
    container: {
      align: 'flex-start',
      direction: 'row',
    },
    title: {
      as: 'h4',
      size: 'md',
      fontWeight: 'medium',
      mb: 2,
    },
    description: {
      fontSize: 'md',
      color: 'gray.600',
    },
    icon: {
      mb: 3,
      mr: 3,
      p: 2,
      bg: 'blue.400',
      color: 'white',
      float: 'left',
    },
  },
  variants: {
    subtle: {},
    solid: {
      container: {
        bg: 'blue.400',
      },
      secondaryAction: {
        colorScheme: 'white',
      },
    },
    light: {
      container: {
        bg: 'gray.100',
      },
    },
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export const Feature = {
  parts: ['container', 'title', 'description', 'icon'],
  baseStyle: (props: any) => ({
    container: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    title: {
      as: 'h4',
      fontSize: 'lg',
      fontWeight: '700',
      mb: 2,
    },
    description: {
      fontSize: 'lg',
      fontWeight: 'normal',
      color: mode('gray.500', 'gray.400')(props),
    },
    icon: {
      mb: 4,
      mr: 4,
      p: 2,
      bg: 'blue.100',
      color: 'blue.700',
      float: 'left',
    },
  }),
  variants: {
    default: {},
    'left-icon': {
      container: {
        flexDirection: 'row',
      },
    },
    center: {
      container: {
        alignItems: 'center',
      },
      title: {
        textAlign: 'center',
      },
      description: {
        textAlign: 'center',
      },
    },
    inline: {
      container: {
        flexDirection: 'row',
      },
      title: {
        display: 'inline-block',
        mr: 1,
        mb: 0,
      },
      description: {
        display: 'inline',
      },
      icon: {
        mt: 4,
      },
    },
    light: ({ colorMode }: any) => ({
      wrapper: {
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
      },
    }),
  },
  defaultProps: {
    variant: 'default',
  },
}

export default Features
