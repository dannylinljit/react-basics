import React from 'react';
import classes from '../css/styles.css';

const NewsItem = ({
	title,
	feed,
}) => {
	return (
		<div className={classes.news_item}>
			<h1>
				{title}
			</h1>

			<div>
				{feed}
			</div>
		</div>
	);
}

export default NewsItem;
