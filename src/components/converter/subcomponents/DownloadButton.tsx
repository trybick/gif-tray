import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

export default function DownloadButton({
  convertedSize,
  gif,
}: {
  convertedSize: string;
  gif: string;
}) {
  const getconvertedSizeForDisplay = () => {
    const sizeInMB = (+convertedSize / 1000).toFixed(2);
    return `${sizeInMB} MB`;
  };

  return gif ? (
    <Box mt="40px">
      <Image borderRadius="4px" height="200px" src={gif} />
      <Flex alignItems="center" direction="column" justifyContent="center" mt="12px">
        <Text fontSize="14px" fontWeight="500" mt="0px">
          Size: {getconvertedSizeForDisplay()}
        </Text>
        <Link href={gif} mt="12px" textDecor="none" _hover={{ textDecoration: 'none' }} download>
          <Button colorScheme="teal" height="4rem" leftIcon={<DownloadIcon />} size="lg">
            Download GIF
          </Button>
        </Link>
      </Flex>
    </Box>
  ) : null;
}
