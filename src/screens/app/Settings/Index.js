import React from 'react';
import { useState } from 'react';
import { View, Text, Linking, Image, Pressable } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header/Index';
import ListItem from '../../../components/ListItem/Index';
import EditableBox from '../../../components/EditableBox/Index';
import Button from '../../../components/Button/Index';


const Settings = () => {
    const [editing, setEditing] = useState({ name: "example", email: "example@mail.com" });

    const onChange = (key, value) => {
        setEditing((v) => ({ ...v, [key]: value }));
    };

    const onEditPress = () => {
        console.log(editing);
        setEditing(true);
    };

    const onSave = () => {
        setEditing(false);
    };

    const onItemPress = () => {
        Linking.openURL("https://google.com");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Settings" />
            <View style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit-2.png')} />
                    </Pressable>
                </View>
                <EditableBox onChangeText={(v) => onChange("name", v)} label="Name" value={editing.name} editable={editing} />
                <EditableBox onChangeText={(v) => onChange("email", v)} label="Email" value={editing.email} editable={editing} />
                {editing ? <Button style={styles.button} onPress={onSave} title="Save" /> : null}

                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy €€ terms" />
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact" />
            </View>
        </SafeAreaView>
    );
};

export default Settings;