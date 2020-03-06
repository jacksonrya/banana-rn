import React from 'react';
import {
	View,
	TextInput,
	StyleProp,
	TextStyle,
} from 'react-native';
import { InputLabel } from '@elements';
import styles from './FormTextInput.styles';

interface FormTextInputProps {
	text: string;
	value: any;
	setValue: any;
	width?: number | string;
	autoCapitalize?: 'words' | 'sentences' | 'none' | 'characters';
	inline?: boolean;
	upperCase?: boolean;
	disabled?: boolean; // Whether or not the input is locked.
	editable?: boolean; // Whether or not the field can be changed by the user.
	style?: StyleProp<TextStyle>;
}

export default ({
	text,
	value,
	setValue,
	width = '100%',
	autoCapitalize = 'none',
	inline = false,
	upperCase = true,
	disabled = false,
	editable = true,
	style,
}: FormTextInputProps) => (
	inline
		? (
			<View style={styles.inlineContainer}>
				<InputLabel text={text} upperCase={upperCase} />
				<View style={{ width: 8 }} />
				<View style={{ width, top: 5 }}>
					<TextInput
						value={value}
						onChangeText={setValue}
						style={[ styles.input, editable && styles.editable, disabled && styles.disabled, style, { textAlign: 'right' } ]}
						autoCapitalize={autoCapitalize}
						editable={!disabled}
					/>
				</View>
			</View>
		)
		: (
			<View style={{ ...styles.container, width }}>
				<InputLabel text={text} upperCase={upperCase} />
				<TextInput
					value={value}
					onChangeText={setValue}
					style={[ styles.input, editable && styles.editable, disabled && styles.disabled, style ]}
					autoCapitalize={autoCapitalize}
					editable={!disabled}
				/>
			</View>
		)
);

