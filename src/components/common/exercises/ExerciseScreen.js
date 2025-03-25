import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Icon, ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icon";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import CardExercise from "./cardExercise";

dayjs.locale("pt-br");

const ExerciseScreen = () => {
  const [weekDays, setWeekDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [currentWeekStart, setCurrentWeekStart] = useState(dayjs().startOf("week").add(1, "day"));

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
    <View className="p-4 bg-gray-100 rounded-xl shadow-lg">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => changeWeek(-1)} className="p-2 bg-[#ED5359] rounded-lg">
          <Icon as={ArrowLeftIcon} size="lg" color="white" />
        </TouchableOpacity>
        <Text className="text-xl font-bold">
          {currentWeekStart.format("DD MMM")} - {currentWeekStart.add(6, "day").format("DD MMM")}
        </Text>
        <TouchableOpacity onPress={() => changeWeek(1)} className="p-2 bg-[#ED5359] rounded-lg">
          <Icon as={ArrowRightIcon} size="lg" color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={weekDays}
        horizontal
        keyExtractor={(item) => item.date}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`p-4 mx-1 rounded-lg w-13 items-center ${
              item.date === selectedDate ? "bg-[#ED5359]" : "bg-white"
            }`}
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
      <CardExercise />
    </View>
  );
};

export default ExerciseScreen;
