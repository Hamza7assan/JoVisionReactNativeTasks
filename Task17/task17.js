import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task16 = () => {
  // State to track if the text is visible
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button to toggle text visibility */}
      <Button 
        title={isVisible ? "Hide" : "Show"} 
        onPress={() => setIsVisible(!isVisible)} 
      />

      {/* Conditionally render the text */}
      {isVisible && <Text style={styles.text}>Your Name Here</Text>}
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  }
});

export default Task16;
