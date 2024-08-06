import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Aut maiores animi',
  description:
    'Sed voluptas soluta quo voluptatem illum.',
  plans: [
    {
      id: 'oss',
      title: 'Et Quia Nesciunt',
      description: 'Eos nemo perferendis',
      price: 'Eius',
      features: [
        {
          title: 'Sed consequatur',
        },
        {
          title: 'Eos vero autem sed',
        },
        {
          title: 'Non officia quas est',
        },
        {
          title: 'Qui culpa voluptas in eius',
        },
        {
          title: 'Hic quisquam consequatur',
        },
        {
          title: 'Eum explicabo',
        },
        {
          title: 'Et voluptates...',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Adipisci',
      description: 'Et distinctio accusantium et maxime.',
      price: 'Eius',
      isRecommended: true,
      features: [
        {
          title: 'Ea nemo accusamus ab',
        },
        {
          title: 'Et accusamus dolorem et',
        },
        {
          title: 'Et consequuntur porro et',
        },
        {
          title: 'Et eveniet optio',
        },
        {
          title: 'Et asperiores perferendis est',
        },
        {
          title: 'Aut quia delectus est',
        },
        {
          title: 'Ea ullam autem quo magnam culpa',
        },
        null,
        {
          title: 'Non laborum',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://google.com',
      },
    },
    {
      id: 'startup',
      title: 'Startup',
      description: 'Unlimited license for growing teams.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>€499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited projects',
        },
        {
          title: 'Unlimited developers',
        },
        {
          title: '1 year of updates',
        },
        {
          title: 'Everything from Bootstrap',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://google.com',
      },
    },
  ],
}
