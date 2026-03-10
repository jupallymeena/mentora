export const Roles = {
  PARENT: "parent",
  STUDENT: "student",
  MENTOR: "mentor"
};

export const createUser = (userId, name, role, email) => ({
  userId,
  name,
  role,
  email
});

export const createStudent = (id, name, dob) => ({
  id,
  name,
  dob
});

export const createLesson = (id, title) => ({
  id,
  title
});

export const createSession = (id, topic, date, summary) => ({
  id,
  topic,
  date,
  summary
});