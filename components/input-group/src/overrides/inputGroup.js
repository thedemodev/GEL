/** @jsx jsx */

import { jsx } from '@westpac/core';

const InputGroup = ({ state, ...rest }) => <div {...rest} />;

const inputGroupStyles = () => ({
	display: 'flex',
});

const inputGroupAttributes = () => null;

export const defaultInputGroup = {
	component: InputGroup,
	styles: inputGroupStyles,
	attributes: inputGroupAttributes,
};
