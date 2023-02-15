import { StyleSheet, Dimensions } from "react-native";
import Colors from '../../Styles/Colors';
import Fonts from '../../Styles/Fonts';
const devizeSize = Dimensions.get('window');
const baseStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        height: devizeSize.height / 11,
    },
    taskText: {
        fontFamily: Fonts.defaultRegularFontFamily,
        fontSize: 23,
    }
})
export default StyleSheet.create({
    container: {
        backgroundColor: Colors.defaultGreenColor,
        ...baseStyle.container
    },
    taskText: {
        color: Colors.defaultDarkColor,
        ...baseStyle.taskText
    },
    completedContainer: {
        ...baseStyle.container,
        backgroundColor: Colors.defaultGrayColor,
    },
    completedTaskText: {
        ...baseStyle.taskText,
        color: 'white',
        textDecorationLine: 'line-through',
    }

})