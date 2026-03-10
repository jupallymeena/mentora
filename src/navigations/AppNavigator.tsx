
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MentorStudents from "../screens/mentor/MentorStudents";
import LoginScreen from "../screens/LoginScreen";
import ParentDashboard from "../screens/parent/ParentDashboard";
import StudentDashboard from "../screens/student/StudentDashboard";
import MentorDashboard from "../screens/mentor/MentorDashboard";
import CreateStudent from "../screens/parent/CreateStudent";
import LessonsList from "../screens/lessons/LessonsList";
import SessionsList from "../screens/lessons/SessionsList";
import SessionDetail from "../screens/lessons/SessionDetail";

import { StudentProvider } from "../providers/StudentContext";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <StudentProvider>

      <NavigationContainer>

        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ title: "Login" }}
          />

          <Stack.Screen 
            name="ParentDashboard" 
            component={ParentDashboard} 
            options={{ title: "Parent Dashboard" }}
          />

          <Stack.Screen 
            name="StudentDashboard" 
            component={StudentDashboard} 
            options={{ title: "Student Dashboard" }}
          />

          <Stack.Screen 
            name="MentorDashboard" 
            component={MentorDashboard} 
            options={{ title: "Mentor Dashboard" }}
          />

          <Stack.Screen 
            name="CreateStudent" 
            component={CreateStudent} 
            options={{ title: "Create Student" }}
          />
          <Stack.Screen 
  name="MentorStudents" 
  component={MentorStudents} 
  options={{ title: "Students" }}
/>
          <Stack.Screen 
            name="LessonsList" 
            component={LessonsList} 
            options={{ title: "Lessons" }}
          />

          <Stack.Screen 
            name="SessionsList" 
            component={SessionsList} 
            options={{ title: "Sessions" }}
          />

          <Stack.Screen 
            name="SessionDetail" 
            component={SessionDetail} 
            options={{ title: "Session Detail" }}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </StudentProvider>
  );
}