import { Image, Stack, CloseButton } from "@chakra-ui/react";

export default function Card({ source, onRemove }) {
	return (
		<Stack
			marginTop="2rem"
			className="card"
			position="relative"
			transition="all 0.5s"
			_hover={{ transform: "scale(1.03)" }}
		>
			<CloseButton
				position="absolute"
				background="white"
				opacity={"0.7"}
				right="0"
				borderRadius="full"
				mt="1.5rem"
				mr="1rem"
				_hover={{ background: "white", opacity: "0.85" }}
				onClick={onRemove}
			/>
			<Image borderRadius="0.5rem" src={source} fontSize="1rem" />
		</Stack>
	);
}
