import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Articles from '../components/Articles';
import '../index.css';

const URL = 'https://newsapi.org/v2/top-headlines?';

function Home() {
	const [articles, setArticles] = useState([]);

	const getArticles = async () => {
		const request = await fetch(
			`${URL}apiKey=${process.env.REACT_APP_API_KEY}&language=en`
		);
		const data = await request.json();
		setArticles(data.articles);
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<div className='app'>
			{articles.map((article) => (
				<Slink to={`@${article.author}/${article.title}`}>
					<Articles
						author={article.author !== null ? article.author : 'Unkown Author'}
						title={article.title}
						description={article.description}
						source={article.source.name}
						catagory={article.catagory}
						image={article.urlToImage}
					/>
				</Slink>
			))}
		</div>
	);
}

const Slink = styled(Link)`
	text-decoration: none;
	color: #000;
`;

export default Home;
