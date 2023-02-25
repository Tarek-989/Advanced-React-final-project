import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
	// Implement the UI for the Card component according to the instructions.
	// You should be able to implement the component with the elements imported above.
	// Feel free to import other UI components from Chakra UI if you wish to.
	return (
		<VStack gap={2} backgroundColor={'white'} borderRadius='lg'>
			<Image src={imageSrc} alt={title} borderRadius='lg' />
			<VStack alignItems={"flex-start"} paddingLeft='5' spacing='2'>
				<Heading as='h2' size={"lg"} color='black'>{title}</Heading>
				<Text color='gray.600'>{description}</Text>
				<HStack mb={"1rem"} paddingBottom='2.5'>
					<Heading as='h4' size={"ms"} color='black'>See more</Heading>
					<FontAwesomeIcon icon={faArrowRight} color='black' size="1x" />
				</HStack>
			</VStack>
		</VStack>
	);
};

export default Card;
