import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
export default StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: Colors.defaultGreenColor,
        borderColor: Colors.defaultDarkColor,
        borderWidth: 1,
        borderRadius: 50,
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 25,
    },
    icon: {
        fontSize: 35,
        color: Colors.defaultDarkColor,
    },
})