import { StyleSheet, Dimensions } from 'react-native';
import * as colors from '@util/colors';

const inputHeight = 35;

export default StyleSheet.create({
	outerContainer: {
		backgroundColor: colors.WHITE,
		margin: 0,
		padding: 0,
		// paddingHorizontal: '10%',
		justifyContent: 'space-between',
	},
	input: {
		height: inputHeight,
		marginBottom: 14,
		paddingLeft: 10,
		fontSize: 16,
		fontFamily: 'open-sans-light',
		color: colors.NAVY_BLUE,
		backgroundColor: 'white',
	},
	text: {
		fontFamily: 'open-sans-light',
		fontSize: 14,
		marginTop: 4,
		color: colors.NAVY_BLUE,
	},
	titleText: {
		fontFamily: 'open-sans-regular', // TODO: redundant with form labels
		textTransform: 'uppercase',
		fontSize: 20, // TODO: confirm with FIGMA,
		color: colors.NAVY_BLUE,
		backgroundColor: colors.BANANA_YELLOW,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingBottom: '5px',
		paddingTop: '15px',
	},
	profileImageContainer: {
		marginBottom: '15px',
	},
	profileImage: {
		height: '95px',
		width: '95px',
		alignSelf: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		backgroundColor: colors.WHITE,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: colors.NAVY_BLUE,
		borderRadius: 55,
	},
	// TODO: use SVG instead of font icon? to better center the icon
	profileImageIcon: {
		fontSize: 24,
		color: colors.NAVY_BLUE,
		alignSelf: 'center',
	},
	header: {
		width: '100%',
		height: '154px',
		position: 'relative',
	},
	checkboxRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkBox: {
		backgroundColor: 'white',
		borderRadius: Dimensions.get('window').width / 2,
	},
	passwordContainer: {
		height: inputHeight,
		flexDirection: 'row',
		backgroundColor: 'white',
		marginBottom: 10,
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 40,
		height: inputHeight,
		backgroundColor: 'white',
	},
	iconPadding: {
		paddingRight: 35,
	},
	icon: {
		fontSize: 24,
		color: colors.NAVY_BLUE,
	},
	row: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	chevronIcon: {
		color: colors.NAVY_BLUE,
		fontSize: 37,
	},
});
