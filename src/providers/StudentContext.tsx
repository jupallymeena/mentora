import React, { createContext, useState } from "react";
import { students as initialStudents } from "../data/mockData";

export const StudentContext = createContext<any>(null);

export function StudentProvider({ children }: any) {

  const [students, setStudents] = useState(initialStudents);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
}