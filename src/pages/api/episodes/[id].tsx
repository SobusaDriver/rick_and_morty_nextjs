// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
	API_URL,
	CHARACTER_COMPLEMENT,
	EPISODE_COMPLEMENT,
	PAGINATION_COMPLEMENT,
} from "@/constants";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const { id } = req.query;
	// console.log(API_URL + CHARACTER_COMPLEMENT + PAGINATION_COMPLEMENT + id);
	const response = await fetch(
		API_URL + EPISODE_COMPLEMENT + PAGINATION_COMPLEMENT + id,
	);
	const parsed_responsed = await response.json();
	// console.log(parsed_responsed.results);
	res.status(200).json(parsed_responsed.results);
}
