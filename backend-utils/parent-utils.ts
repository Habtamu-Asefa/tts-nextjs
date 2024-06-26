import { ParentFollowup, ParentPostProps, StudentPostProps } from 'utils/types'
import { API_URL } from 'utils/url'

const createParent = async ({
  fullName,
  email,
  phone1,
  phone2,
  preferredBank,
  location,
  profilePicture,
  userId,
}: ParentPostProps) => {

  const response = await fetch(`${API_URL}api/v1/parent/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      email,
      phone1,
      phone2,
      preferredBank,
      location,
      profilePicture,
      userId,
    }),
  })
  return response
}

const createStudent = async ({
  fullName,
  nickName,
  gender,
  age,
  subjects,
  grade,
  school,
  address,
  hobby,
  prevTutored,
  prevTutorExperience,
  idealTutor,
  workDays,
  workHour,
  parentId,
  tutorId
}: StudentPostProps) => {

  const response = await fetch(`${API_URL}api/v1/student/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      nickName,
      gender,
      subjects,
      age,
      grade,
      school,
      address,
      prevTutored,
      prevTutorExperience,
      idealTutor,
      workDays,
      workHour,
      hobby,
      parentId,
      tutorId
    }),
  })

  return response
}

const getParentById = async (id: string, token: string) => {
  const response = await fetch(`${API_URL}api/v1/parent/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  return response
}
const createParentFollowUp = async ({
  parentId,
  month,
  year,

  comment,
  satisfaction,
  status,

  token
}: ParentFollowup) => {
  const response = await fetch(`${API_URL}api/v1/parent/followUp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      parentId,
      month,
      year,
      comment,
      satisfaction,
      status,

    }),
  })

  return response
}
export { createParent, createStudent, getParentById, createParentFollowUp }
