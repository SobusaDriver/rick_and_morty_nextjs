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

	const req = await fetch(
		API_URL + LOCATION_COMPLEMENT + PAGINATION_COMPLEMENT + id,
	);
	const req_parsed = await req.json();

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
	return (
		<main className="h-screen flex flex-col">
			<Navbar />
			<h3 className="p-6 mb-1 text-4xl font-medium leading-tight">
				List Of Locations
			</h3>
			<div className="flex-1">
				<CardsContainer ListOfLocations={listOfLocations} />
			</div>
			<div>Actual Page: {actualPage}</div>
			<div>Total Pages: {totalPages}</div>
			<Pager
				actualPage={actualPage}
				totalPages={totalPages}
				complement="locations/"
			/>
		</main>
	);
};

export default LocationPage;
