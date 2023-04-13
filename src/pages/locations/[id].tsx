import { useRouter } from "next/router";
import React, { FC } from "react";

type locationProps = {
	id: string;
};

const LocationPage = () => {
	const router = useRouter();
	console.log(router);

	const { id } = router.query;
	console.log(id);

	return <div>Route: {id}</div>;
};

export default LocationPage;
