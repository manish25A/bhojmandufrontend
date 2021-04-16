import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'Fast',
		text:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: 'Reliable',
		text:
			'Lorem ipsum, dolor sit amet consectetur  Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: 'Secure',
		text:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
	},
];

export const products_url = 'https://localhost:4000/product/';

export const single_product_url = `https://localhost:4000/product/:id`;
