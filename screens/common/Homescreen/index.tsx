import { useState, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import {StyleSheet, Text} from "react-native"
import PhoneInput from "react-native-phone-number-input";

export default function Homescreen(){
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    return(
        <View style={styles.container}>
            <PhoneInput
           
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
            
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            <Text style={{color: 'white',fontWeight: 'bold',lineHeight:37}} >Check</Text>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'tomato',
        margin: 30,
        width: 100,
        height: 40,
        lineHeight: 40,
        alignItems: 'center',
        
    },
    title: {
        fontSize: 30
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});