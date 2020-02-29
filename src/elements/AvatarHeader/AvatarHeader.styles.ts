import { Platform, StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	headerContainer: {
		width: '100%',
		position: 'relative',
	},
	title: {
		fontFamily: 'open-sans-regular', // TODO: redundant with form labels
		textTransform: 'uppercase',
		fontSize: 20, // TODO: confirm with FIGMA,
		color: colors.NAVY_BLUE,
		backgroundColor: colors.BANANA_YELLOW,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	get 'title--top'() {
		return {
			...this.title,
			paddingBottom: 5,
			paddingTop: 15,
		};
	},
	get 'title--bottom'() {
		return {
			...this.title,
			paddingBottom: 20,
		};
	},
	avatarRow: {
		marginBottom: '15px',
	},
	image: {
		alignSelf: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		backgroundColor: colors.WHITE,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: colors.NAVY_BLUE,
		borderRadius: 55,
	},
	editAvatarIcon: {

	},
});
