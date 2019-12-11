import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const PercentIcon = props => (
	<Icon icon="PercentIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M15.1719126,16.2398208 C15.1886586,16.4961075 15.2177821,16.6970596 15.258555,16.8426771 C15.300056,16.9875665 15.3612153,17.0873145 15.4427611,17.1397368 C15.5235788,17.1921591 15.6284234,17.2183702 15.7572949,17.2183702 C15.8847102,17.2183702 15.9895547,17.1921591 16.0711005,17.1397368 C16.1533744,17.0873145 16.2145337,16.9875665 16.2545785,16.8426771 C16.2960795,16.6970596 16.325203,16.4961075 16.341949,16.2398208 C16.3601512,15.983534 16.3688883,15.6566228 16.3688883,15.2612714 C16.3688883,14.8535424 16.3601512,14.525175 16.341949,14.2739849 C16.325203,14.0235228 16.2960795,13.8254831 16.2545785,13.6798656 C16.2145337,13.53352 16.1533744,13.4352282 16.0711005,13.3828059 C15.9895547,13.3303836 15.8847102,13.3041725 15.7572949,13.3041725 C15.6284234,13.3041725 15.5235788,13.3303836 15.4427611,13.3828059 C15.3612153,13.4352282 15.300056,13.53352 15.258555,13.6798656 C15.2177821,13.8254831 15.1886586,14.0235228 15.1719126,14.2739849 C15.1544385,14.525175 15.1457015,14.8535424 15.1457015,15.2612714 C15.1457015,15.6566228 15.1544385,15.983534 15.1719126,16.2398208 L15.1719126,16.2398208 Z M13.1536544,13.7140857 C13.2461215,13.2888827 13.4004761,12.9437693 13.6159899,12.675105 C13.8315038,12.4071689 14.1147298,12.2120414 14.4634836,12.0897228 C14.8136936,11.9674041 15.2447214,11.9062447 15.7572949,11.9062447 C16.2698684,11.9062447 16.7008961,11.9674041 17.050378,12.0897228 C17.39986,12.2120414 17.6816298,12.4071689 17.8971437,12.675105 C18.1126575,12.9437693 18.267012,13.2888827 18.3609353,13.7140857 C18.4541305,14.1400168 18.5,14.6555027 18.5,15.2612714 C18.5,15.86704 18.4541305,16.3817978 18.3609353,16.8070008 C18.267012,17.2322039 18.1126575,17.5795015 17.8971437,17.8467096 C17.6816298,18.1153738 17.39986,18.3017642 17.050378,18.4066088 C16.7008961,18.5107253 16.2698684,18.5631476 15.7572949,18.5631476 C15.2447214,18.5631476 14.8136936,18.5107253 14.4634836,18.4066088 C14.1147298,18.3017642 13.8315038,18.1153738 13.6159899,17.8467096 C13.4004761,17.5795015 13.2461215,17.2322039 13.1536544,16.8070008 C13.0604593,16.3817978 13.0131336,15.86704 13.0131336,15.2612714 C13.0131336,14.6555027 13.0604593,14.1400168 13.1536544,13.7140857 L13.1536544,13.7140857 Z M15.7223467,6 L10.1823299,18.5631476 L8.26090731,18.5631476 L13.7994679,6 L15.7223467,6 Z M7.65805097,10.333576 C7.67552506,10.5898628 7.70392047,10.7908149 7.74542145,10.9364324 C7.78546626,11.0820498 7.8466256,11.1810697 7.92889947,11.233492 C8.00971717,11.2859143 8.11528983,11.3121255 8.24270512,11.3121255 C8.3708485,11.3121255 8.47642117,11.2859143 8.55796696,11.233492 C8.63878465,11.1810697 8.69994399,11.0820498 8.74144497,10.9364324 C8.78221787,10.7908149 8.81134136,10.5898628 8.82881546,10.333576 C8.84628955,10.0772893 8.85429852,9.75110613 8.85429852,9.3550266 C8.85429852,8.94729768 8.84628955,8.61820218 8.82881546,8.36701204 C8.81134136,8.11727807 8.78221787,7.91923831 8.74144497,7.77362083 C8.69994399,7.62800336 8.63878465,7.52898348 8.55796696,7.47656119 C8.47642117,7.4241389 8.3708485,7.39792775 8.24270512,7.39792775 C8.11528983,7.39792775 8.00971717,7.4241389 7.92889947,7.47656119 C7.8466256,7.52898348 7.78546626,7.62800336 7.74542145,7.77362083 C7.70392047,7.91923831 7.67552506,8.11727807 7.65805097,8.36701204 C7.63984878,8.61820218 7.63183982,8.94729768 7.63183982,9.3550266 C7.63183982,9.75110613 7.63984878,10.0772893 7.65805097,10.333576 L7.65805097,10.333576 Z M5.63906469,7.80856903 C5.73225987,7.383366 5.88661439,7.03679642 6.10285634,6.76886026 C6.3183702,6.50092411 6.6008681,6.3057967 6.95035004,6.18274993 C7.29910389,6.06115934 7.73013162,6 8.24270512,6 C8.75527863,6 9.18630636,6.06115934 9.53651638,6.18274993 C9.88527023,6.3057967 10.1677681,6.50092411 10.3840101,6.76886026 C10.5995239,7.03679642 10.7538785,7.383366 10.8470736,7.80856903 C10.9402688,8.23377205 10.9868664,8.74925791 10.9868664,9.3550266 C10.9868664,9.9607953 10.9402688,10.4762812 10.8470736,10.9014842 C10.7538785,11.3266872 10.5995239,11.6732568 10.3840101,11.9411929 C10.1677681,12.2091291 9.88527023,12.4042565 9.53651638,12.5265752 C9.18630636,12.6488939 8.75527863,12.7100532 8.24270512,12.7100532 C7.73013162,12.7100532 7.29910389,12.6488939 6.95035004,12.5265752 C6.6008681,12.4042565 6.3183702,12.2091291 6.10285634,11.9411929 C5.88661439,11.6732568 5.73225987,11.3266872 5.63906469,10.9014842 C5.5458695,10.4762812 5.5,9.9607953 5.5,9.3550266 C5.5,8.74925791 5.5458695,8.23377205 5.63906469,7.80856903 L5.63906469,7.80856903 Z M12,2 C6.47714286,2 2,6.47714286 2,12 C2,17.5228571 6.47714286,22 12,22 C17.5228571,22 22,17.5228571 22,12 C22,6.47714286 17.5228571,2 12,2 M24,12 C24,18.627 18.62775,24 12,24 C5.37225,24 0,18.627 0,12 C0,5.373 5.37225,-8.8817842e-16 12,-8.8817842e-16 C18.62775,-8.8817842e-16 24,5.373 24,12"
		/>
	</Icon>
);

PercentIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Percent',
};
PercentIcon.propTypes = propTypes;
