import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormBase from '../../../forms/FormBase';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../SignUpScreen/styles';
import Button from '../../../components/common/button';

const schema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
});

const ForgotPasswordScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log('Solicitação de recuperação:', data);
    // Implementar chamada à API aqui
    navigation.navigate('ResetPassword');
  };

  const fields = [
    {
      name: 'email',
      label: 'Email cadastrado',
      keyboardType: 'email-address'
    }
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.containerLogin}>
        <View style={styles.header}>
          <Text style={styles.textLogin}>Recuperar Senha</Text>
        </View>

        <FormBase
          control={control}
          errors={errors}
          fields={fields}
          renderFooter={() => (
            <Button
              title="Enviar Código"
              onPress={handleSubmit(onSubmit)}
              variant="primary"
              style={{ marginTop: 20 }}
            />
          )}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.link}
        >
          <Text style={styles.linkText}>Voltar para o login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen; 