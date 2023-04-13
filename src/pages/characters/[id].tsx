import CardsContainer from "@/components/CardsOfCharacters";
import Navbar from "@/components/Navbar";
import {
	API_URL,
	CHARACTER_COMPLEMENT,
	PAGINATION_COMPLEMENT,
} from "@/constants";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Pager from "@/components/Pager";
import Character from "@/models/Character";

interface CharacterProps {
	listOfCharacters: Array<Character>;
	totalPages: number;
	actualPage: number;
}

interface Params extends ParsedUrlQuery {
	id: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as Params;

	const req = await fetch(
		API_URL + CHARACTER_COMPLEMENT + PAGINATION_COMPLEMENT + id,
	);
	const req_parsed = await req.json();

	return {
		props: {
			listOfCharacters: req_parsed.results,
			totalPages: req_parsed.info.pages,
			actualPage: id,
		},
	};
};

const LocationPage = ({
	listOfCharacters,
	totalPages,
	actualPage,
}: CharacterProps) => {
	return (
		<main>
			<Navbar />
			<h3 className="p-6 mb-1 text-4xl font-medium leading-tight">
				List Of Characters
			</h3>
			<CardsContainer ListOfCharacters={listOfCharacters} />
			<div>Actual Page: {actualPage}</div>
			<div>Total Pages: {totalPages}</div>
			<Pager actualPage={actualPage} complement="characters/" />
		</main>
	);
};

export default LocationPage;
