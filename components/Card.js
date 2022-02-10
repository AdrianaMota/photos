import { Image, Stack, CloseButton } from "@chakra-ui/react";

export default function Card({ source, onRemove }) {
	return (
		<Stack marginTop="2rem">
			<CloseButton
				right="0"
				m="1rem 1rem -5rem"
				position="relative"
				onClick={onRemove}
			/>
			<Image
				width="300rem"
				borderRadius="0.5rem"
				src={source}
				alt="Oops! Image not found"
				fontSize="1rem"
			/>
		</Stack>
	);
}
