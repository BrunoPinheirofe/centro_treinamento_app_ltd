import React, { useState, useEffect } from "react";
import { View, Text,TextInput, TouchableOpacity, FlatList} from "react-native";
import { ChevronDownIcon } from "@/components/ui/icon";
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectItem } from "@/components/ui/select";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Button, ButtonText, SafeAreaView } from "@gluestack-ui/themed";

dayjs.locale("pt-br");

const AdminCreateWorking = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [currentWeekStart, setCurrentWeekStart] = useState(dayjs().startOf("week").add(1, "day"));
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    getWeekDays(currentWeekStart);
  }, [currentWeekStart]);

  function getWeekDays(startDate) {
    let days = [];
    for (let i = 0; i < 7; i++) {
      const date = startDate.add(i, "day");
      days.push({
        date: date.format("YYYY-MM-DD"),
        dayLabel: date.format("ddd").toUpperCase(),
        number: date.format("DD"),
      });
    }
    setWeekDays(days);
  }

  function changeWeek(direction) {
    setCurrentWeekStart((prev) => prev.add(direction * 7, "day"));
  }

  return (
    <SafeAreaView className="flex-1">
      {/* Container principal */}
      <View className="flex-1 p-4 bg-white">

        {/* Nome do treino */}
        <View className="mb-4">
          <Text className="font-bold text-black mb-1 text-2xl">Nome do treino</Text>
          <TextInput
            placeholder="Escreva o nome do treino"
            placeholderTextColor="gray"
            className="bg-[#FFFAFA] rounded-md border border-gray-400 h-12 px-3 text-black text-lg"
          />
        </View>

        {/* Descrição do treino */}
        <View className="mb-4">
          <Text className="font-bold text-black mb-1 text-2xl">Descrição do treino</Text>
          <TextInput
            placeholder="Escreva a descrição do treino"
            placeholderTextColor="gray"
            className="bg-[#FFFAFA] border border-gray-400 rounded-md h-12 px-3 text-black text-lg"
          />
        </View>

        {/* Select de Aluno */}
        <View>
          <Text className="font-bold text-black text-2xl">Aluno</Text>
          <Select>
            <SelectTrigger variant="outline" size="xl" className="bg-[#FFFAFA] border border-gray-400 px-2">
              <SelectInput placeholder="Selecionar aluno" className="mt-1" />
              <SelectIcon className="ml-auto" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectItem label="Indiano" value="filipe" />
                <SelectItem label="Brunera" value="bruno" />
                <SelectItem label="Torrez Gemeas" value="kayo" />
                <SelectItem label="Nicaraguas" value="nicacio" />
                <SelectItem label="Linguinha do satanas" value="gabriel" />
                <SelectItem label="Magrelo do satanas" value="mathueus" />
                <SelectItem label="Calvo do satanas" value="vynicius" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        {/* Calendário Semanal */}
        <View className="p-4 bg-white rounded-xl shadow-lg mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <TouchableOpacity onPress={() => changeWeek(-1)} className="p-2 bg-[#ED5359] rounded-lg">
              <Text className="text-white">{"<"}</Text>
            </TouchableOpacity>
            <Text className="text-xl font-bold">
              {currentWeekStart.format("DD MMM")} - {currentWeekStart.add(6, "day").format("DD MMM")}
            </Text>
            <TouchableOpacity onPress={() => changeWeek(1)} className="p-2 bg-[#ED5359] rounded-lg">
              <Text className="text-white">{">"}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={weekDays}
            horizontal
            keyExtractor={(item) => item.date}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                className={`p-4 mx-1 rounded-lg w-13 items-center ${item.date === selectedDate ? "bg-[#ED5359]" : "bg-white"}`}
                onPress={() => setSelectedDate(item.date)}
              >
                <Text className={`text-sm ${item.date === selectedDate ? "text-white" : "text-gray-600"}`}>
                  {item.dayLabel}
                </Text>
                <Text className={`text-lg font-bold ${item.date === selectedDate ? "text-white" : "text-black"}`}>
                  {item.number}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

         <View>
            <Button className="bg-[#ED5359] mt-2 items-center p-3 rounded-lg mt-3" onPress={() => alert("Implementar Isso")}>
              <ButtonText className="text-xl font-bold text-white">Enviar Treino</ButtonText>
            </Button>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default AdminCreateWorking;
