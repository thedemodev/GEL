/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Text, Textarea, Select } from '@westpac/text-input';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/text-input'] = {
		Text: {
			styles: styles => ({
				...styles,
				borderColor: 'palevioletred',
			}),
		},
		Select: {
			styles: styles => ({
				...styles,
				borderColor: 'forestgreen',
			}),
		},
		Textarea: {
			styles: styles => ({
				...styles,
				borderColor: 'royalblue',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Text />
			<br />
			<Select name="thing">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<Textarea />

			<h2>With overrides and component overrides</h2>
			<Text
				overrides={{
					Text: {
						styles: styles => ({ ...styles, borderWidth: '3px' }),
					},
				}}
			/>
			<br />
			<Select
				name="thing"
				overrides={{
					Select: {
						styles: styles => ({ ...styles, borderWidth: '3px' }),
					},
				}}
			>
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<Textarea
				overrides={{
					Textarea: {
						styles: styles => ({ ...styles, borderWidth: '3px' }),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
