import { FC } from "react";
import Card from "./Card";
import Character from "@/models/Character";

type Props = {
	ListOfCharacters: Array<Character>;
};

const CardsContainer: FC<Props> = ({ ListOfCharacters }) => {
	return (
		<div className='grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-5'>
			{ListOfCharacters.map((character: Character) => (
				<Card
					imageSrc={character.image || undefined}
					title={character.name}
					key={character.name}
					body={`${character.species} - ${character.type} - ${character.status}`}
				/>
			))}
		</div>
	);
};

export default CardsContainer;
