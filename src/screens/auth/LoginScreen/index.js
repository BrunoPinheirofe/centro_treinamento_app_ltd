import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control"
import { Button, ButtonText } from "@/components/ui/button"
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input"
import { VStack } from "@/components/ui/vstack"
import { AlertCircleIcon, EyeIcon, EyeOffIcon, Icon } from "@/components/ui/icon"
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAuth } from "@/src/contexts/AuthContext"
import { useAuth } from "@/src/hooks/useAuth"
import { View } from "react-native"
import { Text } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { singIn } = useAuth();


  return <SafeAreaView>
    <Card size={"lg"} variant={"filled"}>
      <Heading size="md" className={'mb-1'}>
        Fazer Login
      </Heading>

      <VStack className=" ">
        <FormControl
          isInvalid={isInvalid}
          size="md"
          isDisabled={false}
          isReadOnly={false}
          isRequired={false}
        >
          <FormControlLabel>
            <FormControlLabelText className="text-white">Email:</FormControlLabelText>
          </FormControlLabel>

          <Input className="bg-[#D9D9D9] border text-white placeholder-gray-400 rounded-lg h-14">
            <InputField
              type="text"
              placeholder="Escreva seu email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              className="placeholder:text-xl"
            />
          </Input>

          <FormControlHelper>
            <FormControlHelperText>
              Email requerido
            </FormControlHelperText>
          </FormControlHelper>

          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Email requerido
            </FormControlErrorText>
          </FormControlError>

          <FormControlLabel>
            <FormControlLabelText className="text-white mt-4">Senha:</FormControlLabelText>
          </FormControlLabel>

          <Input className="bg-[#D9D9D9] border text-white placeholder-gray-400 rounded-lg h-14">
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="Escreva sua senha"
              value={password} deu certo UwU
              onChangeText={(text) => setPassword(text)}
              className="placeholder:text-xl"
            />
            <InputSlot className="px-3 " onPress={() => setShowPassword(!showPassword)}>
              <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} className="h-7 w-7" />
            </InputSlot>
          </Input>
          <View className="flex-row justify-between items-center w-full">
            <FormControlHelper className="flex-1">
              <FormControlHelperText className="">
                Deve ter pelo menos 6 caracteres.
              </FormControlHelperText>
            </FormControlHelper>

            <Text className="text-white text-sm mt-1 underline" onPress={() => { }}>
              Esqueci a senha
            </Text>
          </View>

          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Deve ter pelo menos 6 caracteres.
            </FormControlErrorText>
          </FormControlError>

        </FormControl>
        <Button className="w-fit self-end mt-4" size="sm" onPress={() => { singIn() }}>
          <ButtonText>Submit</ButtonText>
        </Button>

        <View classname="py-5">
          <Button className="w-full bg-[#ED5359] mt-6 h-14 self-center " onPress={() => { singIn() }}>
            <ButtonText className="text-[25px]">Entrar</ButtonText>
          </Button>

        </View>


      </VStack>

    </Card>
  </SafeAreaView>
}

export default LoginScreen;

{/*Filipenses 4:13 - "Posso todas as coisas naquele que me fortalece" */ }