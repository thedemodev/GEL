/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import * as components from '@westpac/symbol';
import { LogoSmall } from '@westpac/symbol';
import { Cell, Grid, Name } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const logos = Object.keys(components).filter((s) => s.endsWith('Logo'));

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<Grid>
				{logos.map((s) => {
					const Symbol = components[s];
					return (
						<Cell key={s}>
							<Symbol />
							<Name>{s}</Name>
						</Cell>
					);
				})}
			</Grid>
		</GEL>
	);
}

export default Example;
