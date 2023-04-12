// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API_URL, CHARACTER_COMPLEMENT } from "@/constants";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	const response = await fetch(API_URL + CHARACTER_COMPLEMENT);
	const parsed_responsed = await response.json();
	console.log(parsed_responsed.results);

	res.status(200).json(parsed_responsed.results);
}
