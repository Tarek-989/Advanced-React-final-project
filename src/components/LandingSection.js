import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tarek!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
	<FullScreenSection
		justifyContent="center"
		alignItems="center"
		isDarkBackground
		backgroundColor="#2A4365"
	>
		<VStack gap={8}>
			<VStack gap={2}>
				<Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />
				<Heading as='h3' size='sm' mb='40px'>{greeting}</Heading>
			</VStack>
			<VStack>
				<Heading as='h2' size='2xl' mb={4}>{bio1}</Heading>
				<Heading as='h2' size='2xl'>{bio2}</Heading>
			</VStack>
		</VStack>
	</FullScreenSection>
);

export default LandingSection;
