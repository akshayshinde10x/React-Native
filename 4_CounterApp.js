import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
   return (
        <View>
           <Button onPress={() => {setCount(count + 1)}} title="Click Me"/>
           
           <Button onPress={() => {setCount(0)}} title="Reset"/>
           <Text>You clicked me {count} times</Text>
       </View>
   );
}
export default Counter;