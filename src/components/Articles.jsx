import React from 'react';

function Articles(props) {
	return (
		<div className='article'>
			<div className='author'>
				<h4 className='name'>{props.author}</h4>
				<p className='date'>Oct 3</p>
			</div>
			<div className='img-headline'>
				<div className='headline'>
					<h2>{props.title}</h2>
					<p className='description'>{props.description}</p>
				</div>
				<div className='image'>
					<img src={props.image} alt={props.title} />
				</div>
			</div>
			<div className='resource'>
				<p className='source'>{props.source}</p>
				<p className='catagory'>{props.catagory}</p>
			</div>
		</div>
	);
}

export default Articles;
