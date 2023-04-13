import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SearchField from "@/components/SearchField";
import Character from "@/models/Character";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API_URL, CHARACTER_COMPLEMENT } from "@/constants";
import CardsContainer from "@/components/CardsOfCharacters";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
	listOfCharacters: Array<Character>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch(API_URL + CHARACTER_COMPLEMENT);
	const res_parsed = await res.json();
	return { props: { listOfCharacters: res_parsed.results } };
};

export default function Home({ listOfCharacters }: HomeProps) {
	console.log(listOfCharacters.length);

	return (
		<>
			<main>
				<Navbar />
				<h3 className="p-6 mb-1 text-4xl font-medium leading-tight">
					List Of Characters
				</h3>
				<CardsContainer ListOfCharacters={listOfCharacters} />
			</main>
		</>
	);
}
