import React from "react";
import { SafeAreaView, View, Text, Button, ButtonText } from "@gluestack-ui/themed";

const AdminLogout = () => (
  <SafeAreaView className="flex-1 items-center justify-center bg-white p-4">
    <View className="items-center w-full">
      <Button className="bg-[#ED5359] w-full items-center p-3 rounded-lg" onPress={() => alert("Logout")}>
            <ButtonText className="text-xl font-bold text-white">Sair da conta</ButtonText>
        </Button>
    </View>
  </SafeAreaView>
);

export default AdminLogout;
