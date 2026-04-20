// src\services\api.js
const API = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

export const getCourses = () =>
  fetch(`${API}/api/coursesd`).then(res => res.json());

export const createCourse = (data) =>
  fetch(`${API}/api/coursesd`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    body: data
  }).then(res => res.json());

export const getSessions = (courseId) =>
  fetch(`${API}/api/session?courseId=${courseId}`, {
    headers: { Authorization: `Bearer ${getToken()}` }
  }).then(res => res.json());

export const startCourse = (courseId) =>
  fetch(`${API}/api/enroll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ courseId })
  }).then(res => res.json());

export const createSession = (data) =>
  fetch(`${API}/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const createTask = (data) =>
  fetch(`${API}/api/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());