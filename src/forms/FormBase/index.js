import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const FormBase = ({ control, errors, fields, renderFooter }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      {fields.map((field) => (
        <View key={field.name} style={styles.inputContainer}>
          <Text style={styles.label}>{field.label}</Text>
          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={field.secureTextEntry && !showPassword}
                  {...field}
                />
              )}
              name={field.name}
            />
            {field.secureTextEntry && (
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            )}
          </View>
          {errors[field.name] && (
            <Text style={styles.errorText}>{errors[field.name].message}</Text>
          )}
        </View>
      ))}
      {renderFooter && renderFooter()}
    </View>
  );
};

const styles = {
  inputWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 7,
    height: 50,
    paddingLeft: 15,
    paddingRight: 40, // Espaço para o ícone
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 13,
  },
  // ... mantenha os outros estilos
};

export default FormBase; 