import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'

export default function NavHoverBox({ title, icon, description }) {
    return (
        <>
            <Flex
                pos="absolute"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight="10px solid #82AAAD"
            />
            <Flex
                h={200}
                w="100%"
                flexDir="column"
                alignItems="center"
                justify="center"
                bg={useColorModeValue('gray.600', 'transparent')}
                borderRadius="10px"
                color="white"
                textAlign="center"
            >
                <Icon as={icon} fontSize="3xl" mb={4} />
                <Heading size="md" fontWeight="normal">{title}</Heading>
                <Text>{description}</Text>
            </Flex>
        </>
    )
}
