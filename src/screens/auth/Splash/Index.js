import react from "react";
import {Text,View,Image} from "react-native"
import Button from "/Users/student/Mobiilirakendus/src/components/Button/Index.js";
import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
    console.log('navigation => ', navigation);

    const onSignUp = () => {
        navigation.navigate('Signup');
    }


    const onSignIn = () => {
        navigation.navigate('Signin');
    }

    return(
        <SafeAreaView>
        <View style={styles.container}>
            <Image reziseMode="contain" style={styles.image} source={require("/Users/student/Mobiilirakendus/src/assets/splash_image.png")}/>    
        <View style={styles.titleContainer}>    
            <Text style={styles.title}>You'll Find </Text>
            <Text style={[styles.title, styles.innerTitle]}> All you need </Text>
            <Text style={styles.title}>Here!</Text>
        </View>
            <Button onPress={onSignUp} title= "Sign Up"/>

            <Pressable onPress={onSignIn} hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
        </SafeAreaView>
    )
}
export default Splash 