import Image from "next/image";
import React, { FC } from "react";

type Props = {
	imageSrc: string;
	title: string;
	body: string;
};
const Card: FC<Props> = ({ imageSrc, title, body }) => {
	return (
		<div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 hover:bg-gray-100">
			<Image src={imageSrc} alt="heading card image" />
			<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
				{title}
			</h5>
			<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
				{body}
			</p>
		</div>
	);
};

export default Card;
