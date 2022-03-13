import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Link
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../components/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="1"
            h="90vh"
            marginTop="1vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            backgroundColor={'yellow.300'}
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" description="Satya, this is the description for the calendar."/>
                <NavItem navSize={navSize} icon={FiUser} title="Clients" description="Satya, this is the description for the clients." />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" description="Satya, this is the description for the animals." />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" description="Satya, this is the description for the stocks."/>
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" description="Satya, this is the description for the reports."/>
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" description="Satya, this is the description for the settings."/>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Satyanarayana Devi</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
