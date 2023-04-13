import Link from "next/link";
import React, { FC } from "react";

type Props = {
	actualPage: number;
	prevPage: () => void;
	nextPage: () => void;
};
const Pager: FC<Props> = ({ actualPage, prevPage, nextPage }) => {
	return (
		<nav aria-label="Page navigation example">
			<ul className="inline-flex -space-x-px">
				<li>
					<Link
						href="#"
						className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Previous
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						1
					</Link>
				</li>
				<li>
					<Link
						href="#"
						className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						2
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Pager;
