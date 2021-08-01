import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	/* Palette */
	:root {
	--black-tint-10: hsl(0, 0%, 78%)
	--black-tint-20: hsl(0, 0%, 56%);
	--black-tint-30: hsl(0, 0%, 34%);
	--black-tint-40: hsl(0, 0%, 16%);
	--black: hsl(0, 0%, 12%);
	--black-shade-10: hsl(0, 0%, 9%);
	--black-shade-20: hsl(0, 0%, 6%);
	--black-shade-30: hsl(0, 0%, 3%);
	--white: hsl(0, 0%, 100%);
	--redSalsa-tint-10: hsl(358, 96%, 90%);
	--redSalsa-tint-20: hsl(357, 96%, 80%);
	--redSalsa-tint-30: hsl(357, 96%, 70%);
	--redSalsa: hsl(357, 96%, 60%);
	--redSalsa-shade-10: hsl(357, 64%, 45%);
	--redSalsa-shade-20: hsl(357, 65%, 30%);
	--redSalsa-shade-30: hsl(358, 64%, 15%);
	--darkTurquoise-tint-10: hsl(187, 74%, 88%);
	--darkTurquoise-tint-20: hsl(186, 74%, 76%);
	--darkTurquoise-tint-30: hsl(186, 73%, 64%);
	--darkTurquoise: hsl(186, 73%, 52%);
	--darkTurquoise-shade-10: hsl(186, 68%, 39%);
	--darkTurquoise-shade-20: hsl(186, 67%, 26%);
	--darkTurquoise-shade-30: hsl(187, 67%, 13%);
	--slateGray-tint-10: hsl(206, 11%, 87%);
	--slateGray-tint-20: hsl(212, 12%, 75%);
	--slateGray-tint-30: hsl(210, 11%, 62%);
	--slateGray: hsl(211, 12%, 49%);
	--slateGray-shade-10: hsl(210, 12%, 37%);
	--slateGray-shade-20: hsl(210, 11%, 25%);
	--slateGray-shade-30: hsl(214, 11%, 14%);
	--slateGray-shade-40: hsl(214, 11%, 12%);
	/* ===== Type Scale ===== */
	--type-scale-10: 0.422rem;
	--type-scale-20: 0.563rem;
	--type-scale-30: 0.75rem;
	--type-scale-40: 1rem;
	--type-scale-50: 1.333rem;
	--type-scale-60: 1.777rem;
	--type-scale-70: 2.369rem;
	--type-scale-80: 3.157rem;
	--type-scale-90: 4.209rem;

	/* ===== Design System ===== */
	/* Colors */
	--background: var(--black-shade-10);
	--table-background: var(--slateGray-shade-40);
	--table-row-background: var(--slateGray-shade-30);
	/* Font-Scale */
	--header-1: var(--type-scale-90);
	--header-2: var(--type-scale-80);
	--header-3: var(--type-scale-70);
	--subTitle-1: var(--type-scale-60);
	--subTitle-2: var(--type-scale-50);
	--base: var(--type-scale-40);
	--small: var(--type-scale-30);
	--overhead: var(--type-scale-20);
	--caption: var(--type-scale-10);

};

	html {
		background-color: var(--background);
	};
`;

export default GlobalStyles;
