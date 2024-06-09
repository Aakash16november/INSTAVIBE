import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { MessagesLogo } from "../../assets/constants";
import { Link } from "react-router-dom";


const Messages = () => {
	return (
		<Tooltip
			hasArrow
			label={"Messenger"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Flex
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<MessagesLogo />
				<Link  display={{ base: "none", md: "block" }}>Messenger</Link>
			</Flex>
		</Tooltip>
	);
};

export default Messages;