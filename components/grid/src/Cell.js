/** @jsx jsx */

import PropTypes from 'prop-types';
import facepaint from 'facepaint';
import { jsx } from '@westpac/core';

// allow string or array values for height/width
const span = n => `span ${n}`;
const getEndSpan = c => (Array.isArray(c) ? c.map(span) : span(c));

// NOTE: breakpoints come from the brand
const minWidth = width => `@media (min-width: ${width}px)`;
const mapBreakpoints = ([key, value]) => minWidth(value);

// TODO: investigate perf for facepaint. should happen at build time, with no
// cost to the user -- need to confirm.
export const Cell = ({ area, center, height, left, middle, top, width, ...props }) => (
	<div
		css={theme => {
			const mqValues = facepaint(Object.entries(theme.breakpoints).map(mapBreakpoints));

			return mqValues({
				gridArea: area,
				gridColumnEnd: getEndSpan(width),
				gridColumnStart: left,
				gridRowEnd: getEndSpan(height),
				gridRowStart: top,
				height: '100%',
				minWidth: 0,
			});
		}}
		{...props}
	/>
);

Cell.propTypes = {
	/**
	 * The `grid-area` that this cell belongs to (if any).
	 */
	area: PropTypes.string,
	/**
	 * The cell height in units. When using an array the units are applied to the applicable breakpoints.
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
	/**
	 * The `grid-column-start` CSS property.
	 */
	left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * The `grid-row-start` CSS property.
	 */
	top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * The cell width in units. When using an array the units are applied to the applicable breakpoints.
	 */
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};
Cell.defaultProps = {
	height: 1,
	width: 1,
};