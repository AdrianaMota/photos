import React, { useState } from "react";
import {
	Stack,
	HStack,
	VStack,
	Box,
	Text,
	InputGroup,
	Input,
	InputRightElement,
	Button,
	Flex,
	Grid,
	Div,
} from "@chakra-ui/react";
import Card from "../components/Card";
import Masonry from "react-masonry-css";
export default function Home() {
	const [srcInput, setSrcInput] = useState("");
	const [imgList, setImgList] = useState([]);

	const handleImgInputChange = (event) => {
		setSrcInput(event.target.value);
	};

	const addCardHandler = () => {
		const request = new XMLHttpRequest();
		request.open("GET", srcInput, true);
		request.send();
		request.onload = function () {
			status = request.status;
			//check if link is not from website
			if (request.onerror) {
				const newCards = [...imgList, srcInput];
				setImgList(newCards);
				setSrcInput("");
			} else {
				// if false turn input red
				setSrcInput("");
			}
		};
	};
	const deleteImg = (indexToDelete) => {
		const newList = imgList.filter((img, currentIndex) => {
			return currentIndex !== indexToDelete;
		});

		setImgList(newList);
	};
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};
	return (
		<VStack align="left">
			<Box
				zIndex="-100000rem"
				pos="absolute"
				top="6rem"
				left="7rem"
				bg="primaryPink.500"
				p="5rem"
				borderRadius="full"
			/>
			<Box
				pos="absolute"
				top="-7rem"
				right="0"
				overflow="clip"
				bg="primaryPink.500"
				p="10rem"
				borderRadius="full"
			/>
			<HStack width="full" justifyContent="space-between" alignItems="end">
				<VStack align="left" zIndex="100" pt="5rem">
					<Text fontWeight="bold" lineHeight="1">
						Your moodboard
					</Text>
					<Text fontWeight="bold" color="primaryPink.500">
						in one place
					</Text>
				</VStack>
				<InputGroup width="40rem">
					<Input
						fontSize="m"
						fontWeight="200"
						variant="flushed"
						placeholder="Image URL"
						focusBorderColor="dark.500"
						pb="1rem"
						mb="2rem"
						onChange={handleImgInputChange}
						value={srcInput}
					/>
					<InputRightElement>
						<Button
							colorScheme="dark"
							p="1.5rem 4rem"
							fontSize="1.5rem"
							fontWeight="light"
							mb="1rem"
							mr="6rem"
							onClick={addCardHandler}
						>
							Add
						</Button>
					</InputRightElement>
				</InputGroup>
			</HStack>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
				pt="10rem"
			>
				{imgList.map((url, index) => {
					return (
						<Card
							index={index}
							source={url}
							onRemove={() => {
								deleteImg(index);
							}}
						/>
					);
				})}
			</Masonry>
		</VStack>
	);
}
