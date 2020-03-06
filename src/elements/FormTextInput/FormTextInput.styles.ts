import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

const INPUT_HEIGHT = 30;

export default StyleSheet.create({
	container: {
	},
	inlineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	text: {
		fontFamily: 'open-sans-regular',
		fontSize: 18,
		color: colors.NAVY_BLUE,
		fontWeight: 'bold',
	},
	input: {
		height: INPUT_HEIGHT,
		marginBottom: 14,
		backgroundColor: 'white',
		paddingHorizontal: 8,
		width: '100%',
		fontFamily: 'open-sans-regular',
		color: colors.NAVY_BLUE,
		paddingLeft: 0,
	},
	editable: {
		paddingLeft: 10,
		backgroundColor: colors.LIGHT_YELLOW,
	},
	disabled: {
		backgroundColor: colors.LIGHT_GRAY_DISABLED,
	},
});
