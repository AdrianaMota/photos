import React, { useState } from "react";
import {
	Stack,
	VStack,
	Box,
	Text,
	InputGroup,
	Input,
	InputRightElement,
	Button,
} from "@chakra-ui/react";
import Card from "../components/Card";
import Masonry from "react-masonry-css";
import { CopyIcon } from "@chakra-ui/icons";

export default function Home() {
	const [srcInput, setSrcInput] = useState("");
	const [imgList, setImgList] = useState([]);
	const [inputColor, setInputColor] = useState("dark");
	const [inputText, setInputText] = useState("Enter Image URL");

	const handleImgInputChange = (event) => {
		setSrcInput(event.target.value);
	};

	const error = () => {
		setInputColor("red");
		setInputText("Invalid image URL");
		setSrcInput("");
	};

	const success = () => {
		setSrcInput("");
		setInputColor("dark");
		setInputText("Enter Image URL");
	};

	const addCardHandler = () => {
		const request = new XMLHttpRequest();
		request.open("GET", srcInput, true);
		request.send();
		request.onload = function () {
			status = request.status;

			if (request.status == 200 && srcInput.trim() !== "") {
				const newCards = [...imgList, srcInput];
				setImgList(newCards);
				success();
			} else {
				error();
			}
		};
	};

	const pasteHandler = async () => {
		const text = await navigator.clipboard.readText();
		setSrcInput(text);
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
	const state = {
		screenCapture: "",
	};
	//add drop images from computer feature
	return (
		<VStack align="left" margin={{ base: "0 -10rem", lg: "0 -5rem" }}>
			<Box
				zIndex="-100000rem"
				pos="absolute"
				top="6rem"
				left="7rem"
				bg="primaryPink.300"
				p="5rem"
				borderRadius="full"
			/>
			<Box
				pos="absolute"
				top="-7rem"
				right="0"
				overflow="clip"
				bg="primaryPink.300"
				p="10rem"
				borderRadius="full"
			/>
			<Stack
				width="full"
				pb="6rem"
				justifyContent="space-between"
				alignItems={{ base: "start", lg: "end" }}
				direction={{ base: "column", lg: "row" }}
			>
				<VStack
					align="left"
					zIndex="100"
					pt="5rem"
					m={{ base: "2rem 0", lg: "0" }}
					fontSize={{
						base: "4rem",
						md: "6rem",
						lg: "5rem",
						xl: "7rem",
						"2xl": "xxl",
					}}
				>
					<Text fontWeight="bold" lineHeight="1">
						Your moodboard
					</Text>
					<Text fontWeight="normal" color="primaryPink.500">
						in one place
					</Text>
				</VStack>
				<VStack>
					<InputGroup width={{ base: "95%", md: "80%", lg: "500px" }}>
						<Input
							autoFocus
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									addCardHandler();
								}
							}}
							borderBottomColor={inputColor}
							focusBorderColor={inputColor}
							fontSize="m"
							fontWeight="200"
							variant="flushed"
							placeholder={inputText}
							pb="1rem"
							pr="9rem"
							mb="1rem"
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
					<Button
						onClick={pasteHandler}
						colorScheme="primaryPink"
						p="1.5rem"
						alignSelf="start"
						fontSize="1.5rem"
						fontWeight="light"
						mb="1rem"
						leftIcon={<CopyIcon />}
					>
						Paste
					</Button>
				</VStack>
			</Stack>
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
