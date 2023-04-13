import CardsContainer from "@/components/CardsOfLocations";
import Navbar from "@/components/Navbar";
import {
	API_URL,
	LOCATION_COMPLEMENT,
	PAGINATION_COMPLEMENT,
} from "@/constants";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Location from "@/models/Location";
import React from "react";
import Pager from "@/components/Pager";

interface locationProps {
	listOfLocations: Array<Location>;
	totalPages: number;
	actualPage: number;
}

interface Params extends ParsedUrlQuery {
	id: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params as Params;
	console.log(API_URL + LOCATION_COMPLEMENT + PAGINATION_COMPLEMENT + id);

	const req = await fetch(
		API_URL + LOCATION_COMPLEMENT + PAGINATION_COMPLEMENT + id,
	);
	const req_parsed = await req.json();
	console.log("getServerSideProps", req_parsed.info);

	return {
		props: {
			listOfLocations: req_parsed.results,
			totalPages: req_parsed.info.pages,
			actualPage: id,
		},
	};
};

const LocationPage = ({
	listOfLocations,
	totalPages,
	actualPage,
}: locationProps) => {
	const router = useRouter();
	console.log(listOfLocations.length);

	const { id } = router.query;

	return (
		<main>
			<Navbar />
			<h3 className="p-6 mb-1 text-4xl font-medium leading-tight">
				List Of Locations
			</h3>
			<CardsContainer ListOfLocations={listOfLocations} />
			<div>Actual Page: {actualPage}</div>
			<div>Total Pages: {totalPages}</div>
			<Pager actualPage={actualPage} complement="locations/" />
		</main>
	);
};

export default LocationPage;
