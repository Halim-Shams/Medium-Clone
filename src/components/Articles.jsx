import React from 'react';

function Articles() {
	return (
		<div className='article'>
			<div className='author'>
				<h4 className='name'>Ecan Crosby</h4>
				<p className='date'>
					<span>.</span> Oct 3
				</p>
			</div>
			<div className='img-headline'>
				<div className='headline'>
					<h2>How to Earn $100 a Day, $3,000 a Month, and $36,000 a Year</h2>
					<p className='description'>
						With 10 easy gigs you can repeat every day. - Many aspiring
						freeelancers, side hustlers, and make money online enthusiasts
						consider $100 a day ...
					</p>
				</div>
				<div className='image'>
					<img
						src='https://miro.medium.com/max/1400/0*IkrV1Reh4NnZWJI3'
						alt='title'
					/>
				</div>
			</div>
			<div className='resource'>
				<p className='source'>TMZ.com</p>
				<p className='catagory'>general</p>
			</div>
		</div>
	);
}

export default Articles;
