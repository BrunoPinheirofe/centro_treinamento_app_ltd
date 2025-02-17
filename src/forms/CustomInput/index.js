import { Controller } from "react-hook-form";
import { TextInput, View, StyleSheet, Text } from "react-native";

const CustomInput = ({ control, name, rules, ...props }) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field, fieldState }) => (
      <View style={styles.inputContainer}>
        <TextInput
          {...field}
          {...props}
          style={[styles.input, fieldState.error && styles.errorInput]}
          onChangeText={field.onChange}
          value={field.value}
        />
        {fieldState.error && (
          <Text style={styles.errorText}>{fieldState.error.message}</Text>
        )}
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
  }
});

export default CustomInput;