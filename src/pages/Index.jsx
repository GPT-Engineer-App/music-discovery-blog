// Innovative Music Discovery Blog Layout
import { Box, Flex, Heading, Text, Image, VStack, SimpleGrid, Button, useColorModeValue } from "@chakra-ui/react";
import { FaHeadphones, FaRegHeart, FaRegComment } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} minH="100vh" p={5}>
      <Heading mb={10} textAlign="center">
        Music Discovery Blog
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {articles.map((article, index) => (
          <Box key={index} bg={cardBg} p={5} borderRadius="lg" boxShadow="md">
            <Image borderRadius="md" src={article.image} alt={article.title} />
            <VStack align="start" mt={4}>
              <Heading size="md">{article.title}</Heading>
              <Text fontSize="sm">{article.summary}</Text>
              <Flex align="center" justify="space-between" w="full" mt={2}>
                <Button leftIcon={<FaHeadphones />} size="sm" colorScheme="blue">
                  Listen
                </Button>
                <Flex align="center">
                  <Button size="sm" variant="ghost" colorScheme="red" leftIcon={<FaRegHeart />}>
                    {article.likes}
                  </Button>
                  <Button ml={2} size="sm" variant="ghost" colorScheme="teal" leftIcon={<FaRegComment />}>
                    {article.comments}
                  </Button>
                </Flex>
              </Flex>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const articles = [
  {
    title: "Exploring the Depths of Ambient Music",
    summary: "Dive into the soothing world of ambient sounds and discover artists who master the art of calm.",
    image: "https://images.unsplash.com/photo-1650563401244-12028cd7ee4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbWJpZW50JTIwbXVzaWN8ZW58MHx8fHwxNzE0NjY2NjA2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 120,
    comments: 30,
  },
  {
    title: "The Rise of Synthwave",
    summary: "From retro roots to modern hits, explore how synthwave is taking over the music scene.",
    image: "https://images.unsplash.com/photo-1681670251071-49ec1d11cfc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzeW50aHdhdmUlMjBtdXNpY3xlbnwwfHx8fDE3MTQ2NjY2MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 150,
    comments: 45,
  },
  {
    title: "Hidden Gems: Underground Hip-Hop",
    summary: "Uncover the underrated artists of the hip-hop world who are setting the streets ablaze with raw talent.",
    image: "https://images.unsplash.com/photo-1620907329188-043c2b496ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bmRlcmdyb3VuZCUyMGhpcC1ob3B8ZW58MHx8fHwxNzE0NjY2NjA2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    likes: 200,
    comments: 60,
  },
];

export default Index;
