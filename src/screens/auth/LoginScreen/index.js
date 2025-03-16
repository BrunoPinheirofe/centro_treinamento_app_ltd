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
const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [isInvalid, setIsInvalid] = useState(false)
  const [showPassword, setShowPassword] = useState(false);



  return <SafeAreaView>
    <Card size={"lg"} variant={"filled"}>
      <Heading size="md" className={'mb-1'}>
        Fazer Login
      </Heading>

      <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
        <FormControl
          isInvalid={isInvalid}
          size="md"
          isDisabled={false}
          isReadOnly={false}
          isRequired={false}
        >
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="text"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              email requerido
            </FormControlErrorText>
          </FormControlError>

          <FormControlLabel>
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <InputSlot onPress={() => setShowPassword(!showPassword)}>
              <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
            </InputSlot>
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Must be atleast 6 characters.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button className="w-fit self-end mt-4" size="sm" onPress={() => { alert('fazer login') }}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </VStack>

    </Card>
  </SafeAreaView>;
};
export default LoginScreen;