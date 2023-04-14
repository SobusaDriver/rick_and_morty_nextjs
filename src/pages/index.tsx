import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex h-screen flex-col">
			<Navbar />
			<div className=" flex-1 flex flex-col">
				<div className="flex-1 flex justify-center items-end pt-10">
					<h3 className="p-6 mb-1 text-4xl font-medium leading-tight">
						Welcome to the Rick and Morty wiki
					</h3>
				</div>
				<div className="flex-1 w-2/3 mx-auto flex items-top justify-center gap-5 pb-4 pt-10">
					<Link href="/characters/1">
						<Card
							title="Characters"
							body="A List of characters from Rick and Morty TV Show."
						/>
					</Link>
					<Link href="/episodes/1">
						<Card
							title="Episodes"
							body="A List of episodes from Rick and Morty TV Show."
						/>
					</Link>
					<Link href="/locations/1">
						<Card
							title="Locations"
							body="A List of locations from Rick and Morty TV Show."
						/>
					</Link>
				</div>
			</div>
		</main>
	);
}
