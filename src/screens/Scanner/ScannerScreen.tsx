import React, { useState, useCallback } from 'react';
import { Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DocumentScanner from 'react-native-document-scanner-plugin';

export default function ScannerScreen() {
  const [scannedImage, setScannedImage] = useState(null);
  const navigation = useNavigation();

  const scanDocument = async () => {
    try {
      const result = await DocumentScanner.scanDocument();

      if (result?.scannedImages && result.scannedImages.length > 0) {
        navigation.navigate('Preview', {
          imageUri: result.scannedImages[0],
        });
      } else {
        // User cancelled scanner
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);

      // Scanner closed/error
      navigation.navigate('Home');
    }
  };

  useFocusEffect(
    useCallback(() => {
      scanDocument();
    }, []),
  );

  return (
    <Image
      resizeMode="contain"
      style={{ width: '100%', height: '100%' }}
      source={{ uri: scannedImage }}
    />
  );
}
