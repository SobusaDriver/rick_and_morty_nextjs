import { FC } from "react";
import Card from "./Card";
import Location from "@/models/Location";

type Props = {
	ListOfLocations: Array<Location>;
};

const CardsContainer: FC<Props> = ({ ListOfLocations: ListOfLocations }) => {
	return (
		<div className='grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4'>
			{ListOfLocations.map((location: Location) => (
				<Card
					title={location.name}
					body={
						`${location.id}${location.type || ""}Have Residents: ${
							location.residents?.length
						}`
							? "true"
							: "false"
					}
				/>
			))}
		</div>
	);
};

export default CardsContainer;
