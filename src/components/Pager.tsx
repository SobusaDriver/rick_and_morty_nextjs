import { PAGINATION_COMPLEMENT } from "@/constants";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
	actualPage: number;
	totalPages: number;
	complement: string;
};
const Pager: FC<Props> = ({ actualPage, totalPages, complement }) => {
	return (
		<nav aria-label="Page navigation" className="flex items-center pb-4">
			<ul className="w-screen flex justify-center">
				{actualPage >= 2 && (
					<li>
						<Link
							href={`/${complement}${Number(actualPage) - 1}`}
							className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							Previous
						</Link>
					</li>
				)}
				<li>
					<Link
						href="#"
						className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						{actualPage}
					</Link>
				</li>
				{actualPage < totalPages && (
					<li>
						<Link
							href={`/${complement}${Number(actualPage) + 1}`}
							className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							Next
						</Link>
					</li>)
				}
			</ul>
		</nav>
	);
};

export default Pager;
