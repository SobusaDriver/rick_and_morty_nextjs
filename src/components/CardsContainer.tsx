import { FC } from "react";
import Card from "./Card";
import Character from "@/models/Character";

type Props = {
	ListOfCharacters: Array<Character>;
};

const CardsContainer: FC<Props> = ({ ListOfCharacters }) => {
	return (
		<div className='md:container md:mx-auto'>
			{ListOfCharacters.map((character: Character) => (
				<Card
					imageSrc={character.image}
					title={character.name}
					body={character.species}
				/>
			))}
		</div>
	);
};

export default CardsContainer;
