import React, { useState } from 'react';
import {
	Alert,
	ScrollView,
	View,
	Text,
	Image,
} from 'react-native';
import {
	FormImageInput,
	FormTextInput,
	Header,
	LinkButton,
	SpacerInline,
	Icon,
} from '@elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as colors from '@util/colors';
import useGlobal from '@state';
import styles from './ProfileScreen.styles';


export default () => {
	const [ _state, actions ] = useGlobal() as any;
	const { register } = actions;

	const { user } = _state;

	const [ editing, setEditing ] = useState(false);

	const [ organizationName, setOrganizationName ] = useState(user.organization_name);
	// TODO: add profile image to user in state
	const [ profileImage, setProfileImage ] = useState(user.profile_image_url);
	const [ email, setEmail ] = useState(user.email);
	const [ licenseVerificationImage, setLicenseVerificationmage ] = useState();
	const [ licenseNumber, setLicenseNumber ] = useState(user.business_license);
	const [ newPassword, setNewPassword ] = useState('');
	const [ newPasswordConfirmation, setNewPasswordConfirmation ] = useState('');
	const [ street, setStreet ] = useState(user.address_street);
	const [ city, setCity ] = useState(user.address_city);
	const [ state, setState ] = useState(user.address_state);
	const [ zip, setZip ] = useState(user.address_zip.toString());

	// TODO: only validate entries that have changed
	const validateAndSubmit = async () => {
		// TODO: redundant with alerts in registration screen
		if (organizationName === '') { Alert.alert("Please add your organization's name."); return; }
		if (!email.includes('@') || !email.includes('.')) { Alert.alert('Please enter a valid email address.'); return; }
		if (newPassword !== '') {
			if (newPassword.length < 8) { Alert.alert('Please enter a password of at least 8 characters long.'); return; }
			if (newPassword !== newPasswordConfirmation) { Alert.alert('The two passwords do not match.'); return; }
		}
		if (licenseNumber.length !== 9) { Alert.alert('Please enter your 9-digit UBI with no spaces or dashes.'); return; }
		if (!licenseVerificationImage) { Alert.alert('Please add an image of your business license to continue.'); return; }
		if (!street || street.split(' ').length < 3) { Alert.alert('Please enter your street number and name.'); return; }
		if (!city) { Alert.alert('Please enter your city.'); return; }
		if (zip.toString().length !== 5) { Alert.alert('Please enter your 5-digit zip code.'); return; }

		// TODO: create updateRegister action to global state
		// TODO: Only provide the inputs that have changed
		const statusCode = await register({
			organizationName, email, newPassword, licenseNumber, street, city, state, zip,
		});
		switch (statusCode) {
			case (201 || 202): Alert.alert('Profile updated!.'); setEditing(false); return;
			case 406: Alert.alert('Error: not accepted'); return;
			case 500: Alert.alert('Internal server error, please try again later.'); return;
			default: Alert.alert("Sorry, that didn't work, please try again later."); console.log(statusCode);
		}
	};

	const handleImageInputPress = () => {

	};


	return (
		<ScrollView contentContainerStyle={styles.outerContainer}>
			<View>
				{/* TODO: Change header height */}
				<Header showBackButton={false} />

				<View style={styles.header}>
					<Text style={styles.titleText}>Profile</Text>

					<LinearGradient style={styles.profileImageContainer} colors={[ colors.BANANA_YELLOW, colors.WHITE ]} start={[ 0.5, 0 ]} end={[ 0.5, 1 ]} locations={[ 0.5, 0.5 ]} style={styles.profileImageContainer}>
						{/* <DynamicImage></DynamicImage> */}
						<View style={styles.profileImage}>
							<TouchableWithoutFeedback
								onPress={handleImageInputPress}
							>
								<Icon style={styles.profileImageIcon} name="camera" />
								<Image style={{}} source={profileImage} />
							</TouchableWithoutFeedback>
						</View>
					</LinearGradient>
				</View>

				<FormTextInput
					text="Email"
					value={email}
					setValue={setEmail}
					disabled={!editing}
				/>

				<FormTextInput
					text="Business Name"
					value={organizationName}
					setValue={setOrganizationName}
					disabled={!editing}
				/>

				<FormImageInput
					text="Business License Verification"
					image={licenseVerificationImage}
					setImage={setLicenseVerificationmage}
					editable={editing}
				/>

				<FormTextInput
					text="Business License Number"
					value={licenseNumber}
					setValue={setLicenseNumber}
					disabled={!editing}
				/>

				<FormTextInput
					text="Business Address"
					value={street}
					setValue={setStreet}
					disabled={!editing}
				/>

				<View style={styles.row}>
					<FormTextInput
						text="City"
						value={city}
						setValue={setCity}
						width="40%"
						autoCapitalize="words"
						disabled={true}
					/>
					<FormTextInput
						text="State"
						value={state}
						setValue={setState}
						width="15%"
						autoCapitalize="words"
						disabled={true}
					/>
					<FormTextInput
						text="Zip"
						value={zip}
						setValue={setZip}
						width="35%"
						autoCapitalize="words"
						disabled={true}
					/>
				</View>

				{/* TODO: current password should not be available, especially as plain text */}
				{/* < FormTextInput
					text="Current Password"
					value={currentPassword}
					setValue={setCurrentPassword}
				/> */}
				{editing ? (
					<View>
						<FormTextInput
							text="New Password"
							value={newPassword}
							setValue={setNewPassword}
						/>

						<FormTextInput
							text="Re-enter New Password"
							value={newPasswordConfirmation}
							setValue={setNewPasswordConfirmation}
						/>
					</View>
				) : null}
			</View>

			<View>
				{/* Component? used in both registration screen and profile screen */}
				<SpacerInline height={15} />
				<LinkButton
					text={editing ? 'Save' : 'Edit'}
					onPress={editing ? validateAndSubmit : () => setEditing(true)}
				/>
				<SpacerInline height={40} />
			</View>
		</ScrollView>
	);
};

