import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView} from "react-native";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
        <Text>fuck fuck fuck fuck</Text>
        <Text>fuck fuck fuck fuck</Text>
        <Text>fuck fuck fuck fuck</Text>
        <Text>Count: {count}</Text>
        <Button title="increment" onPress={() => setCount(count + 1)} />
    </SafeAreaView>
  );
};