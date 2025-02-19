import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormBase from '../../../forms/FormBase';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../SignUpScreen/styles';
import Button from '../../../components/common/button';

const schema = yup.object().shape({
  codigo: yup.string().required('Código obrigatório').length(6, 'Código inválido'),
  novaSenha: yup.string().required('Senha obrigatória').min(6, 'Mínimo 6 caracteres'),
  confirmarSenha: yup.string().oneOf([yup.ref('novaSenha'), null], 'As senhas devem ser iguais')
});

const ResetPasswordScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log('Nova senha:', data);
    // Implementar chamada à API aqui
    navigation.navigate('Login');
  };

  const fields = [
    {
      name: 'codigo',
      label: 'Código de verificação',
      keyboardType: 'number-pad'
    },
    {
      name: 'novaSenha',
      label: 'Nova senha',
      secureTextEntry: true
    },
    {
      name: 'confirmarSenha',
      label: 'Confirme a nova senha',
      secureTextEntry: true
    }
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.containerLogin}>
        <View style={styles.header}>
          <Text style={styles.textLogin}>Nova Senha</Text>
        </View>

        <FormBase
          control={control}
          errors={errors}
          fields={fields}
          renderFooter={() => (
            <Button
              title="Redefinir Senha"
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
          <Text style={styles.linkText}>Reenviar código</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen; 