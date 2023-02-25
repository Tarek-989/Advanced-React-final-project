import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
	{
		id: 'faEnvelope',
		icon: faEnvelope,
		url: "mailto: hello@example.com",
	},
	{
		id: 'faGithub',
		icon: faGithub,
		url: "https://github.com",
	},
	{
		id: 'faLinkedin',
		icon: faLinkedin,
		url: "https://www.linkedin.com",
	},
	{
		id: 'faMedium',
		icon: faMedium,
		url: "https://medium.com",
	},
	{
		id: 'faStackOverflow',
		icon: faStackOverflow,
		url: "https://stackoverflow.com",
	},
];

const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	const headerRef = useRef(null);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		const scrollUp = prevScrollPos > currentScrollPos;
		const headerHeight = headerRef.current.clientHeight;

		setIsVisible(currentScrollPos < headerHeight || scrollUp);

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos, isVisible]);

	const handleClick = (anchor) => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<Box
			ref={headerRef}
			position="fixed"
			top={0}
			left={0}
			right={0}
			boxShadow={isVisible ? 4 : 0}
			transition="transform 200ms ease-in-out, box-shadow 200ms ease-in-out"
			transform={isVisible ? 'translateY(0)' : 'translateY(-200px)'}
			backgroundColor="#18181b"
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={16}
					py={4}
					justifyContent="space-between"
					alignItems="center"
				>
					<nav>
						<HStack spacing={3}>
							{socials.map((social) => (
								<a key={social.id} href={social.url}>
									<FontAwesomeIcon icon={social.icon} size="2x" />
								</a>
							))}
						</HStack>
					</nav>
					<nav>
						<HStack spacing={8}>
							<a href="#contact-me" onClick={handleClick('contactme')}>
								Contact Me
							</a>
							<a href="#projects" onClick={handleClick('projects')}>
								Projects
							</a>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};
export default Header;
