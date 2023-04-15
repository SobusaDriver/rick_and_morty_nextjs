import CardsContainer from "@/components/CardsOfEpisodes";
import Navbar from "@/components/Navbar";
import {
	API_URL,
	EPISODE_COMPLEMENT,
	PAGINATION_COMPLEMENT,
} from "@/constants";
import { GetStaticPaths, GetStaticProps } from "next";
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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const req = await fetch(`${API_URL}${EPISODE_COMPLEMENT}${PAGINATION_COMPLEMENT}1`);
	const req_parsed = await req.json();
	const paths: Array<object> = [];
	for (let i = 1; i <= req_parsed.info.pages; i++) {
		paths.push({
			params: {
				id: `${i}`
			}
		});
	}
	return {
		paths,
		fallback: 'blocking'
	}

}


export const getStaticProps: GetStaticProps = async (context) => {
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
		<main className="h-screen flex flex-col">
			<Navbar />
			<h3 className="p-6 mb-1 text-4xl font-medium leading-tight">
				List Of Episodes
			</h3>
			<div className="flex-1">
				<CardsContainer ListOfEpisodes={listOfEpisodes} />
			</div>
			<div>Actual Page: {actualPage}</div>
			<div>Total Pages: {totalPages}</div>
			<Pager
				actualPage={actualPage}
				totalPages={totalPages}
				complement="episodes/"
			/>
		</main>
	);
};

export default LocationPage;
