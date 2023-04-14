import { FC } from "react";
import Card from "./Card";
import Episode from "@/models/Episode";

type Props = {
	ListOfEpisodes: Array<Episode>;
};

const CardsContainer: FC<Props> = ({ ListOfEpisodes }) => {
	return (
		<div className='grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-5'>
			{ListOfEpisodes.map((Episode: Episode) => (
				<Card
					title={Episode.name}
					body={`${Episode.episode} - ${Episode.air_date}`}
				/>
			))}
		</div>
	);
};

export default CardsContainer;
