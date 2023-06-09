import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Footer from './Footer'
import Page_body from './Page_body'


function HomePage() {
	return (
		<div id="root" class = "all">
			<Header />
			<Page_body />
			<Footer />
		</div>
	)
}

export default HomePage