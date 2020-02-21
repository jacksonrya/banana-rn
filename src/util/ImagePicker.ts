import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export type ImageSourcingMethod = 'camera' | 'localStorage';
export const CAMERA = 'camera';
export const LOCAL_STORAGE = 'localStorage';

// TODO: rename file to ImageSourcer ? for clarity, should it be different than expo-image-picker

// Configuration for an image sourcing method.
interface ImageSourcingConfig {
	permissions: Array<Permissions.PermissionType>; // Device permissions required for an image source.
	launchImageSourcingMethod: Function; // Native launcher for the image source.
}

// The possible methods of retreiving an image from the device mapped to their unique configs.
const IMAGE_SOURCE_METHODS: {[key in ImageSourcingMethod]: ImageSourcingConfig} = {
	camera: {
		// ?? TODO: If request for camera roll is too annoying, only request on required devices (iOS 10 & Android).
		permissions: [ Permissions.CAMERA, Permissions.CAMERA_ROLL ],
		launchImageSourcingMethod: ImagePicker.launchCameraAsync,
	},
	localStorage: {
		permissions: [ Permissions.CAMERA_ROLL ],
		launchImageSourcingMethod: ImagePicker.launchImageLibraryAsync,
	},
};

// Generic options for images, no matter the image source.
const IMAGE_OPTIONS: ImagePicker.ImagePickerOptions = {
	mediaTypes: ImagePicker.MediaTypeOptions.Images,
	allowsEditing: true,
	aspect: [ 16, 9 ],
	quality: 1,
};

/**
 * Launches the image sourcing method dependent on the given image source type.
 * If the user doesn't grant device permissions or the device fails to retrieve an image,
 * something will happen. :)
 *
 * @param imageSource - The method of sourcing the image.
 * @returns The user-selected image result, if successful.
 */
export async function getImage(imageSource: ImageSourcingMethod): Promise<ImagePicker.ImagePickerResult | null> {
	let pickedImage = {} as ImagePicker.ImagePickerResult; // The user selected image.

	/**
	 * Requests device access permissions from the user and launches the method of image acquisition.
	 *
	 * @param {ImageSourcingConfig} Configuration for a specific method of image acquisition.
	 * @throws When access permission is denied or when an error occurs during the request.
	 */
	const getImageFromSource = async ({
		permissions,
		launchImageSourcingMethod,
	}: ImageSourcingConfig): Promise<ImagePicker.ImagePickerResult> => {
		const permissionResponses = await Permissions.askAsync(...permissions);

		// Any unsuccessful permissions status will propogate to this 'status' property.
		if (permissionResponses.status !== 'granted') {
			throw new Error('Permission(s) not granted.');
		}

		return launchImageSourcingMethod(IMAGE_OPTIONS);
	};


	try {
		pickedImage = await getImageFromSource(IMAGE_SOURCE_METHODS[imageSource]);
	} catch (err) {
		console.log(err.msg);
		// TODO: display alert with error message
	}

	return pickedImage?.cancelled ? null : pickedImage;
}
