/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Body } from '@westpac/body';
import React from 'react';

export const AlertBody = ({
	look,
	dismissible,
	icon,
	heading,
	headingTag,
	open,
	overrides,
	...rest
}) => <Body {...rest} />;

export const bodyStyles = (_, { icon: Icon }) => {
	const mq = useMediaQuery();

	return mq({
		position: 'relative',
		flex: 1,
		top: [null, Icon && '0.125rem'],
		'a, h1, h2, h3, h4, h5, h6, ol, ul': {
			color: 'inherit',
		},
	})[0];
};