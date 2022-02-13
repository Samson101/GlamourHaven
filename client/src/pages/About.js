import {
  Box,
  Stack,
  Text,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/PageSections/Header";
import TeamList from "../data/TeamList";
import TeamCard from "../components/Cards/TeamCard";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Footer from "../components/PageSections/Footer";

const About = () => {
  return (
    <Box overflowX="hidden">
      <Stack direction="column" spacing="auto">
        <Box bg="brand.200">
          <Header />
          <Stack h="88vh" mt="4vh">
            <Text fontSize="xl">OUR STORY</Text>
            <Text fontWeight="bold" fontSize="4xl">
              {" "}
              Our Story
            </Text>
            <Text
              color="gray.500"
              textAlign="center"
              px={200}
              fontSize="1.2em"
              py={50}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              sit neque, ultrices arcu. Velit, ante sed aliquet porta aenean
              nisl odio. Eget ligula accumsan felis at. Tincidunt maecenas arcu
              id in faucibus habitant tortor. Orci, consequat morbi enim
              faucibus tortor in quis venenatis, vulputate. Duis condimentum
              adipiscing posuere magna vel ullamcorper diam. Mattis quis
              scelerisque imperdiet enim, fermentum, odio sapien. Quisque
              eleifend in tempus vulputate ac diam nunc eleifend. Dui imperdiet
              commodo vitae tellus pharetra. Ac purus, pretium senectus eget. Id
              facilisi diam in vestibulum rhoncus nunc sed arcu. In vitae proin
              mattis neque bibendum. Sem tellus egestas neque lacus, id sagittis
              pretium. Enim blandit dui nisi, cras amet. Convallis sit.
            </Text>
            <Button
              alignSelf="center"
              fontSize="2em"
              p={10}
              bg="transparent"
              rightIcon={<ChevronDownIcon />}
            >
              Learn
              <Box as="span" color="brand.300" ml="3px">
                {" "}
                More
              </Box>
            </Button>
          </Stack>
        </Box>
        <Box p="50px">
          <Text fontWeight="bold" fontSize="4xl">
            Gallery
          </Text>
          <Text fontSize="3xl">Our Gallery</Text>
          <Grid
            // h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Box w="500px">
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  w="500px"
                  h="600px"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box>
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  w="500px"
                  h="290px"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box>
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  w="500px"
                  h="290px"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={4}>
              <Box>
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  w="1050px"
                  h="290px"
                  objectFit="cover"
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Box bg="#EFF9F8" overflowX="hidden">
          <VStack>
            <Text pt="30px" fontWeight="black" fontSize="4xl" mt="10px">
              Team
            </Text>
            <Text fontSize="4xl"> Our Team </Text>
          </VStack>
          <Box px="5vw">
            <SimpleGrid mt="6vh" columns={[4, 4]} spacing="auto">
              {TeamList.map((team) => {
                return <TeamCard key={team.id} team={team} />;
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
};

export default About;
