import React from 'react';
import Contentmovies from './ContentMovies';

const Contentrowmovies = () => {
	let data = [
		{
			title: 'Movies in Data Base',
			color: 'primary',
			value: 21,
			icon: 'fa film',

		},
		{
			title: 'Total awards',
			color: 'success',
			value: 79,
			icon: 'fa-award',

		},
		{
			title: 'Actors quantity',
			color: 'warning',
			value: 49,
			icon: 'fa-user',

		},
	]
    return (
        <div className="row">
		
		{
			data.map((item,index) => (
				<Contentmovies 
				color ={item.color}
				title ={item.title}
				value ={item.value}
				icon ={item.icon}
				key ={item.title + index}
				/>
			))
		}
						
		

		
		</div>
    );
}

export default Contentrowmovies;
