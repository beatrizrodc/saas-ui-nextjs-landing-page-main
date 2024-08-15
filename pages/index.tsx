import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="flavrance it"
        description="Serviços de desenvolvimento de software."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 47 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Transforme Desafios em Oportunidades de Negócios!
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Cuide do seu negócio enquanto cuidamos das operações e tecnologia. Soluções tecnológicas sob medida para seus objetivos.
                Descubra como podemos elevar o seu negócio a novos patamares. <Br>
                </Br>
                <Em>Entre em contato e veja a diferença!</Em>
                </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                Test 1
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://google.com"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Test 2
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="12"
        features={[
          {
            title: "Test",
            icon: FiSmile,
            description: "",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Test",
            icon: FiSliders,
            description:
              "",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Test",
            icon: FiGrid,
            description:
              "",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Test",
            icon: FiThumbsUp,
            description:
              "",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("viverra eleifend");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Test">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Test
          </Text>
         
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Qui enim dignissimos">
        <Text color="muted" fontSize="lg">
        Proin vitae sodales neque. 
        Aenean aliquam convallis mauris eu viverra. Donec sed diam massa.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Nulla pulvinar"
        description="Nulla pulvinar"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
          “Fusce elit orci, porttitor eu mauris nec, placerat maximus neque. 
          Mauris lobortis lorem mauris, eu tincidunt tortor iaculis ac. 
          Proin et arcu sit amet sapien venenatis eleifend eget non nisl. 
          Nam molestie mauris rutrum massa interdum semper.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Vivamus quis felis nec est convallis"
      >
        <Text color="muted" fontSize="lg">
          Mauris lobortis lorem mauris, eu tincidunt tortor iaculis ac.
        </Text>
        <Wrap mt="8">
          {[
            "Lorem ipsum",
            "Nunc ut dignissim",
            "Quisque tempus ut",
            "Etiam iaculis",
            "Phasellus ullamcorper",
            "Aenean sodales",
            "Nam sed semper",
            "Quisque arcu nulla",
            "Nam ultrices ex",
            "Fusce vestibulum",
            "Sed porttitor tincidunt",
            "Sed consequat eu",
            "Etiam ultrices est",
            "Mauris aliquet",
            "Suspendisse non",
            "Duis et euismod arcu",
            "Nullam feugiat",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Test
          <Br /> testes
        </Heading>
      }
      description={
        <>
          Nunc ut dignissim
          <Br />
          Porttitor eu mauris nec, placerat maximus neque. 
          Mauris lobortis lorem mauris, eu tincidunt tortor iaculis ac.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Ea minima cupiditate",
          icon: FiBox,
          description:
            "At incidunt laborum et facilis rerum",
          variant: "inline",
        },
        {
          title: "Ad molestias quae",
          icon: FiLock,
          description:
            "Ex unde dolorum At dolorum",
          variant: "inline",
        },
        {
          title: "Et minima cumque",
          icon: FiSearch,
          description:
            "Est reiciendis vitae est accusamus",
          variant: "inline",
        },
        {
          title: "Ad incidunt illo quo.",
          icon: FiUserPlus,
          description:
            "Eos earum dolorem sed voluptatum placeat est aspernatur",
          variant: "inline",
        },
        {
          title: "Vel tempore culpa",
          icon: FiFlag,
          description:
            "Sit commodi quisquam qui labore",
          variant: "inline",
        },
        {
          title: "Et omnis rerum",
          icon: FiTrendingUp,
          description:
            "Aut fuga exercitationem vero",
          variant: "inline",
        },
        {
          title: "Vel Quis optio",
          icon: FiToggleLeft,
          description:
            "Ea repellendus velit et voluptatum",
          variant: "inline",
        },
        {
          title: "Aut amet unde sed.",
          icon: FiTerminal,
          description:
            "Ea explicabo magnam ab dolorem molestiae",
          variant: "inline",
        },
        {
          title: "Aut eius",
          icon: FiCode,
          description: (
            <>
              Qui suscipit quia aut harum{" "}
              <Link href="https://google.com">Ut doloribus</Link>, porro et nobis modi vel 
              dignissimos velit est facere.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
      Mauris lobortis lorem mauris.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;


