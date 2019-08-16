import React from 'react';
import '../css/styles.css';

import NewsItem from './news-item';

const NewsList = ({
	news,
}) => {
	return news.map(item => {
		const {
			id,
			title,
			feed,
		} = item;

		return (
			<NewsItem
				key={id}
				title={title}
				feed={feed}
			/>
		);
	});
}

export default NewsList;
