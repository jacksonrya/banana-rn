import React from 'react';
import {
	View, Text, ImageSourcePropType, StyleSheet,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@elements';
import * as colors from '@util/colors';


import styles from './AvatarHeader.styles';

interface HeaderProps {
	source: ImageSourcePropType;
	height: number;
	title?: string;
	editable?: boolean;
	avatarSize?: number;
	preTitle?: boolean;
}

export default ({
	height,
	source = require('@assets/images/banana-icon.png'),
	title = '',
	editable = true,
	avatarSize = 100,
	preTitle = true,

}: HeaderProps) => {
	const handleEditImage = () => {
		if (!editable) return;

		console.log('edit image');
	};

	const flatten = (styleSheetKey: string, inlineStyle) => StyleSheet.flatten([ styles[styleSheetKey], StyleSheet.create({ inline: inlineStyle }).inline ]);

	return (
		<View style={flatten('headerContainer', { height })}>
			{preTitle && (<Text style={styles['title--top']}>{title}</Text>)}

			<LinearGradient style={styles.avatarRow} colors={[ colors.BANANA_YELLOW, colors.WHITE ]} start={[ 0.5, 0 ]} end={[ 0.5, 1 ]} locations={[ 0.5, 0.5 ]}>
				<TouchableWithoutFeedback
					onPress={handleEditImage}
				>
					{editable ?? (<Icon style={styles.editAvatarIcon} name="camera" />) /** TODO: Replace font icon w/ SVG icon */}

					<Avatar.Image
						style={styles.image}
						size={avatarSize}
						source={source}
					/>
				</TouchableWithoutFeedback>
			</LinearGradient>

			{!preTitle && (<Text style={styles['title--bottom']}>{title}</Text>)}
		</View>
	);
};
