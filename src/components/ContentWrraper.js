import React from 'react';
import Contentrowtop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import Topbar from './TopBar';

const Contentwrraper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">				
				<Topbar/>
				<Contentrowtop/>
				<Table/>				
			</div>			
            <Footer/>
		</div>
    );
}

export default Contentwrraper;
