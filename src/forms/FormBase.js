import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/common/button";
import { Ionicons } from "@expo/vector-icons";


const FormBase = ({ fields, onSubmit, buttonTitle, mode = "dark", title = null }) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const styles = mode === "dark" ? stylesDark : stylesLight;


    return (
        <View style={styles.container}>
            <Text style={styles.tilte}>{title}</Text>
            {fields.map((field, index) => (
                <View key={index}>
                    <Controller
                        control={control}
                        name={field.name}
                        rules={field.rules}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View
                                style={styles.input}
                            >
                                
                                <Text style={styles.label}>{field.label}</Text>
                                {field.type === "text" && (
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder={field.label}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                                {field.type === "password" && (
                                    <View style={styles.password}>
                                        <TextInput
                                            style={styles.inputText}
                                            placeholder={field.label}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            secureTextEntry={!showPassword} />
                                        <TouchableOpacity
                                            style={styles.showPasswordButton}
                                            onPress={() => setShowPassword(!showPassword)}>
                                            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="grey" />
                                        </TouchableOpacity>
                                    </View>)
                                }
                            </View>
                        )}
                    />
                    {errors[field.name] && <Text style={styles.roles}>{errors[field.name].message}</Text>}
                </View>
            ))}
            <Button onPress={handleSubmit(onSubmit)} title={buttonTitle || "Enviar"} />
        </View>
    );

};

const stylesDark = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#2B2B2B",
            marginTop: 1,
            width: "75%",
            gap: 10,

        },
        tilte: {
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
        },
        label: {
            marginBottom: 5,
            fontSize: 16,
            color: "white",
        },

        inputText: {
            height: 40,
            paddingLeft: 10,
            paddingRight: 40,
            backgroundColor: "#D9D9D9",
            borderRadius: 7,
            height: 50,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            width: "100%",
        },

        roles: {
            color: "#B5241F",
            width: "75%",
            fontWeight: "bold",
            fontSize: 16,
        },
        password: {
            position: 'relative',
            width: "100%",
        },
        passwordIput: {
            flex: 1,
        },
        showPasswordButton: {
            position: 'absolute',
            right: 10,
            top: 15,
            zIndex: 1,
        },
    }
)

const stylesLight = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d9d9d9",
        margin: 10,
        width: "95%",
        gap: 10,
        paddingBottom: 60,
      },
    label: {
        marginBottom: 5,
        fontSize: 16,
        color: "black",
      },

      inputText: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 40,
        backgroundColor: "#fff",
        borderRadius: 7,
        borderColor: "#000",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      },

      roles: {
        color: "#B5241F",
        width: "75%",
        fontWeight: "bold",
        fontSize: 16,
      },

})

export default FormBase;