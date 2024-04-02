import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/Header/Index';
import ListItem from '../../../components/ListItem/Index';
import Button from '../../../components/Button/Index';

const Profile = ({ navigation }) => {
    const num = 5;

    const onLogout = () => {
        console.log("Logout");
    };

    const onSettingsPress = () => {
        navigation.navigate("Settings");
    };

    const onNewListingPress = () => {
        navigation.navigate("CreateListing");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title="Profile" showLogout onLogout={onLogout} />
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>Email</Text>

                    <ListItem title="My Listings" subtitle={`Already have ${num} listings`} />
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress} />
                </View>
                <Button onPress={onNewListingPress} title="Add New Listing" />
            </View>
        </SafeAreaView>
    );
};

export default Profile;