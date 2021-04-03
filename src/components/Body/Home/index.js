import React from 'react';

import Home from './home';
import Services from './ServiceSection';
import Contact from './HomeProduct/contact/contact';
const HomePage = () => {
	return (
		<main>
			<Home />
			<Services />
			<Contact />
		</main>
	);
};

export default HomePage;
