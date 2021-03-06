/** @jsx jsx */
import { useState } from 'react';
import wbc from '@westpac/wbc';
import { jsx, GEL, useBrand, useMediaQuery } from '@westpac/core';
import { NewWindowIcon, ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Modal, Body } from '@westpac/modal';
import { Well } from '@westpac/well';
import dynamic from 'next/dynamic';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import editorTheme from './theme';

// Example block contains modal that is not SSR safe
export const ExampleBlock = dynamic(() => Promise.resolve(UnSafeExampleBlock), {
	ssr: false,
});

const Button = ({ onClick, children }) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();
	return (
		<button
			onClick={onClick}
			css={mq({
				background: 'none',
				border: 'none',
				borderLeft: `solid 1px ${COLORS.border}`,
				paddingLeft: SPACING(3),
				paddingRight: SPACING(3),
				paddingTop: '1rem',
				paddingBottom: '1rem',
				marginRight: ['-1.875rem !important', '-2.25rem !important'],
			})}
		>
			{children}
		</button>
	);
};
const UnSafeExampleBlock = ({ code, showCode, showDemo, showError }) => {
	const [codeIsOpen, setCodeOpen] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<div css={{ marginBottom: SPACING(6) }}>
			<Well
				overrides={{
					Well: {
						styles: (styles) => ({
							...styles,
							...mq({
								position: 'relative',
								border: 'none',
								borderRadius: 0,
								margin: 0,
								backgroundColor: '#fff',
								padding: ['1.875rem', '2.25rem'],
								...(showCode && { paddingBottom: '0 !important' }),
							})[0],
						}),
					},
				}}
			>
				<div
					css={{
						marginBottom: SPACING(8),
					}}
				>
					<LivePreview />
					{showError ? <LiveError /> : null}
				</div>
				<div css={{ display: 'flex', justifyContent: 'flex-end' }}>
					{showDemo ? (
						<form action={'/demo/'} target="_blank" method="GET">
							<input type="hidden" name="code" value={code} />
							<Button
								onClick={() => {
									setIsModalOpen(true);
								}}
							>
								<span css={{ marginRight: SPACING(1) }}>Demo</span>{' '}
								<NewWindowIcon size="small" color={COLORS.primary} />
							</Button>
						</form>
					) : null}
					{showCode ? (
						<Button
							onClick={() => {
								setCodeOpen(!codeIsOpen);
							}}
						>
							<span css={{ marginRight: SPACING(1) }}>Code</span>{' '}
							{codeIsOpen ? (
								<ExpandMoreIcon size="medium" color={COLORS.primary} />
							) : (
								<ExpandLessIcon size="medium" color={COLORS.primary} />
							)}
						</Button>
					) : null}
				</div>
			</Well>
			{showCode && codeIsOpen ? (
				<LiveEditor
					css={mq({ fontSize: '1rem', padding: ['1.5rem !important', '2.25rem !important'] })}
				/>
			) : null}
			<Modal heading={''} open={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<Body>
					<LivePreview />
				</Body>
			</Modal>
		</div>
	);
};

export const Playground = ({
	brand = wbc,
	context = null,
	code,
	showCode,
	showDemo,
	showErrors = false,
	children,
	scope,
	inline,
	theme = editorTheme,
}) => {
	if (!code && children.length > 1) {
		console.warn(
			'Playground code has not been compiled by the babel plugin. Please check configuration.'
		);
	}
	if (!context) {
		return (
			<GEL brand={brand}>
				<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
					<LivePreview />
				</LiveProvider>
			</GEL>
		);
	}
	if (context === 'website') {
		return (
			<GEL brand={brand}>
				<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
					<ExampleBlock
						code={code}
						showCode={showCode}
						showDemo={showDemo}
						showError={showErrors}
					/>
					{/* TODO: make code and demo button options passed through editor */}
				</LiveProvider>
			</GEL>
		);
	}
	if (context === 'admin') {
		return (
			<GEL brand={brand}>
				<div css={{ transformZ: 0, pointerEvents: 'none', zIndex: 0, cursor: 'not-allowed' }}>
					<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
						<ExampleBlock code={showCode} demo={showDemo} />
					</LiveProvider>
				</div>
			</GEL>
		);
	}
};
