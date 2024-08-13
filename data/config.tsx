import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Lorem Ipsum',
    description: 'Sed consequat eu lectus non aliquet',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Home',
      },
      {
        id: 'pricing',
        label: 'Serviços',
      },
      {
        id: 'contact',
        label: 'Entrar em Contato',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Maecenas porttitor id felis et varius{' '}
        <Link href="https://www.google.com/">Maecenas porttitor id felis et varius</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:test@gmail.com',
        label: 'Quisque nec dictum lorem',
      },
      {
        href: 'https://www.google.com/',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://www.google.com/',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'In augue nibh, pellentesque vel volutpat non, pellentesque in risus',
    features: [
      {
        icon: FiCheck,
        title: 'In augue nibh, pellentesque vel volutpat',
        description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      },
      {
        icon: FiCheck,
        title: 'In augue nibh, pellentesque vel volutpat',
        description:
          'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      },
      {
        icon: FiCheck,
        title: 'In augue nibh, pellentesque vel volutpat',
        description:
          'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      },
      {
        icon: FiCheck,
        title: 'In augue nibh, pellentesque vel volutpat',
        description:
          'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      },
    ],
  },
}

export default siteConfig
