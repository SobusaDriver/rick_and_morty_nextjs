import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SearchField from "@/components/SearchField";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main>
				<Navbar />
				<SearchField />
			</main>
		</>
	);
}
