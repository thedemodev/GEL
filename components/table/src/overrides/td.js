/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const TableData = ({ highlighted, highlightStart, bordered, ...props }) => <td {...props} />;

export const tdStyles = (_, { highlighted, highlightStart, bordered }) => {
	const { COLORS, TYPE } = useBrand();

	return {
		padding: '0.75rem',
		verticalAlign: 'top',
		borderLeft: highlightStart ? `6px solid ${COLORS.primary}` : 0,
		borderBottom: highlighted ? `1px solid ${COLORS.primary}` : 0,
		border: bordered && `1px solid ${COLORS.border}`,
		// bold scope
		'&[scope=row]': {
			...TYPE.bodyFont[700],
		},
	};
};