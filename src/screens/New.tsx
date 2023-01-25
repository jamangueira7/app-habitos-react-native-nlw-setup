import {ScrollView, Text, TextInput, View} from 'react-native';
import { BackButton } from "../components/BackButton";
import { Checkbox } from '../components/Checkbox';
import { useState } from 'react';

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];
export function New() {

  const [ weekDays, setWeekDays ] = useState<number[]>([]);

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600">

        </TextInput>

        <Text className="font-semibold mt-4 mb-3 text-white text-base">Qual a recorrênciaw</Text>

        {
          availableWeekDays.map((weekday, index) => (
            <Checkbox
              key={weekday}
              title={weekday}
            />
          ))
        }


      </ScrollView>
    </View>
  );
}