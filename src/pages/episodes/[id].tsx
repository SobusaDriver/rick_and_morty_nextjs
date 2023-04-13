import CardsContainer from "@/components/CardsOfEpisodes";
import Navbar from "@/components/Navbar";
import {
	API_URL,
	EPISODE_COMPLEMENT,
	PAGINATION_COMPLEMENT,
} from "@/constants";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Episode from "@/models/Episode";
import Pager from "@/components/Pager";

interface locationProps {
	listOfEpisodes: Array<Episode>;
	totalPages: number;
	actualPage: number;
}

interface Params extends ParsedUrlQuery {
	id: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as Params;

	const req = await fetch(
		API_URL + EPISODE_COMPLEMENT + PAGINATION_COMPLEMENT + id,
	);
	const req_parsed = await req.json();

	return {
		props: {
			listOfEpisodes: req_parsed.results,
			totalPages: req_parsed.info.pages,
			actualPage: id,
		},
	};
};

const LocationPage = ({
	listOfEpisodes,
	totalPages,
	actualPage,
}: locationProps) => {
	return (
		<main>
			<Navbar />
			<h3 className="p-6 mb-1 text-4xl font-medium leading-tight">
				List Of Locations
			</h3>
			<CardsContainer ListOfEpisodes={listOfEpisodes} />
			<div>Actual Page: {actualPage}</div>
			<div>Total Pages: {totalPages}</div>
			<Pager actualPage={actualPage} complement="episodes/" />
		</main>
	);
};

export default LocationPage;
