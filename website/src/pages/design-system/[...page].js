/** @jsx jsx */
import { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { Footer } from '../../components/layout';

import {
	AccessibilityTab,
	CodeTab,
	DesignTab,
	PageHeader,
} from '../../components/pages/single-component';
import { ALL_PAGES } from '../../../graphql';

const ComponentWrapper = () => {
	const { data, error } = useQuery(ALL_PAGES);
	const router = useRouter();
	const path = router.query.page.join('/');
	if (error) return 'error!';
	if (!data) return null;
	let currentComponent =
		data.allPages.find(component => {
			console.log({ page: router.query.page, component, path });
			return component.url === `/${path}`;
		}) || '';

	if (currentComponent) {
		return <Component component={currentComponent} />;
	} else {
		return <Error statusCode={404} />;
	}
};

const Component = ({ component }) => {
	const { pageTitle, version } = component;

	return (
		<Fragment>
			<PageHeader name={pageTitle} version={version} />
			<Tabs component={component} />
			<Footer />
		</Fragment>
	);
};

const Tabs = ({ component }) => {
	const { SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();
	const tabOverrides = {
		Tabcordion: {
			styles: styles => ({
				...styles,
				flexGrow: 1,
				backgroundColor: COLORS.background,
			}),
		},
		TabRow: {
			styles: styles => ({
				...styles,
				backgroundColor: '#fff',
				borderBottom: `solid 1px ${COLORS.border}`,
			}),
		},
		TabButton: {
			styles: (styles, { selected }) =>
				mq({
					...styles,
					borderRadius: 0,
					backgroundColor: 'white',
					border: 'none',
					margin: 0,
					marginTop: SPACING(2),
					borderRight: `solid 1px ${COLORS.border}`,
					padding: [`${SPACING(2)} ${SPACING(4)}`, `${SPACING(3)} ${SPACING(10)}`],
					boxShadow: selected ? `inset 0 -2px 0 ${COLORS.primary}` : 'none',
					fontWeight: 600,
					color: selected ? COLORS.text : COLORS.muted,
				}),
		},
	};
	const overrides = {
		Panel: {
			styles: styles => ({
				...styles,
				padding: `${SPACING(4)} 0 0`,
				maxWidth: '60rem',
				margin: '0 auto',
				border: 'none',
			}),
		},
	};

	// No tabs
	if (component.hideAccessibilityTab && component.hideCodeTab) {
		return (
			<DesignTab description={component.description} blocks={component.design} item={component} />
		);
	}
	const tabs = [];
	tabs.push(
		<Tab overrides={overrides} text="Design">
			<DesignTab description={component.description} blocks={component.design} item={component} />
		</Tab>
	);
	if (!component.hideAccessibilityTab) {
		tabs.push(
			<Tab overrides={overrides} text="Accessibility">
				<AccessibilityTab blocks={component.accessibility} item={component} />
			</Tab>
		);
	}
	if (!component.hideCodeTab) {
		tabs.push(
			<Tab overrides={overrides} text="Code">
				<CodeTab blocks={component.code} item={component} />
			</Tab>
		);
	}
	return (
		<Tabcordion mode="tabs" overrides={tabOverrides}>
			{tabs}
		</Tabcordion>
	);
};

export default ComponentWrapper;