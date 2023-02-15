import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../Styles/Colors";
import Fonts from "../../Styles/Fonts";
const devizeSize = Dimensions.get('window');
export default StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    innerContainer: {
        backgroundColor: Colors.defaultGrayColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: devizeSize.height / 2,
        padding: 10,
    },
    title: {
        color: Colors.defaultTitleColor,
        fontFamily: Fonts.defaultRegularFontFamily,
        textAlign: 'center',
        fontSize: 25,
    },
    input: {
        color: Colors.defaultTitleColor,
        height: 50,
        fontFamily: Fonts.defaultRegularFontFamily,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        marginTop: 30,
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    buttonContainer: {
        backgroundColor: Colors.defaultGreenColor,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
        height: 50
    },
    buttonPlaceHolder: {
        color: Colors.defaultDarkColor,
        fontFamily: Fonts.defaultRegularFontFamily,
        fontSize: 15,
    }

})