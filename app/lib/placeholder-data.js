// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Luke',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    password: '123456',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    password: '123456',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    password: '123456',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    password: '123456',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    password: '123456',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    password: '123456',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    password: '123456',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    password: '123456',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    password: '123456',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    password: '123456',
  },
];

const sharingposts = [
  {
    creator_id: users[0].id,
    creation_date: '2023-06-01',
    company: 'Amazon',
    interview_status: 'Phone interview',
    interview_type: 'Technical Interview',
    title: 'Amazon SDE Internship Interview',
    content: 'Solving Data structure problems on the phone. \n Quite Challenging, need to be good at explaining code without editor.',
    likes: 15,
    views: 20,
  },
  {
    creator_id: users[1].id,
    creation_date: '2023-07-01',
    company: 'Amazon',
    interview_status: 'Online Assessment',
    interview_type: 'Technical Interview',
    title: 'Coding Assessment: AWS SWE',
    content: '3 coding questions, 1 debugging question, 1 work simulation question. \n 1. Given a string, find the longest substring with at most 2 distinct characters. \n 2. Given a string, find the longest substring with at most 2 distinct characters. \n 3. Given a string, find the longest substring with at most 2 distinct characters. \n 4. Given a string, find the longest substring with at most 2 distinct characters. \n 5. Given a string, find the longest substring with at most 2 distinct characters.',
    likes: 25,
    views: 30,
  },
  {
    creator_id: users[2].id,
    creation_date: '2023-08-01',
    company: 'American Express',
    interview_status: 'Final Round',
    interview_type: 'Behavioral Interview',
    title: 'Final Round American Express BA Internview',
    content: 'Ask me about my strengths and weakness, and how I would handle a difficult situation. \n Quite Challenging, need to be good at explaining code without editor.',
    likes: 34,
    views: 68,
  },
  {
    creator_id: users[3].id,
    creation_date: '2023-09-01',
    company: 'American Express',
    interview_status: 'First Round',
    interview_type: 'Technical Interview',
    title: 'First Round American Express Data Analyst Internview',
    content: 'Ask me about why I want to work there',
    likes: 12,
    views: 16,
  },
  {
    creator_id: users[4].id,
    creation_date: '2023-10-01',
    company: 'Boston Dynamics',
    interview_status: 'Second Round',
    interview_type: 'Technical Interview',
    title: 'Robotic Engineer Internship Interview',
    content: 'Ask me about ROS, my school projects, and my experience with robotic engineering',
    likes: 23,
    views: 46,
  },
  {
    creator_id: users[5].id,
    creation_date: '2023-11-01',
    company: 'BCG',
    interview_status: 'First Round',
    interview_type: 'Case Interview',
    title: 'BCG Summer Internship',
    content: 'Ask me a case question about how to increase the revenue of a company',
    likes: 16,
    views: 35,
  },
  {
    creator_id: users[6].id,
    creation_date: '2023-12-01',
    company: 'Cadence',
    interview_status: 'Rejected',
    interview_type: 'Behavioral Interview',
    title: 'Behavioral Interview for Cadence Tech',
    content: 'I forgot to introduce myself.',
    likes: 5,
    views: 20,
  },
  {
    creator_id: users[7].id,
    creation_date: '2023-06-15',
    company: 'Deloitte',
    interview_status: 'Offered',
    interview_type: 'Case Interview',
    title: 'Deloitte Full Time Offer',
    content: 'Practice over 50+ cases, finally got an offer from Deloitte',
    likes: 21,
    views: 50,
  },
  {
    creator_id: users[8].id,
    creation_date: '2023-07-15',
    company: 'EY',
    interview_status: 'First Round',
    interview_type: 'Behavioral Interview',
    title: 'Behavioral Questions for EY',
    content: 'Tell me about a time you handle difflcult person',
    likes: 32,
    views: 50,
  },
  {
    creator_id: users[9].id,
    creation_date: '2023-08-15',
    company: 'Facebook',
    interview_status: 'Online Assessment',
    interview_type: 'Technical Interview',
    title: 'Design a Facebook News Feed',
    content: 'A system design question and coding it out',
    likes: 43,
    views: 50,
  },
  {
    creator_id: users[2].id,
    creation_date: '2023-09-15',
    company: 'Google',
    interview_status: 'First Round',
    interview_type: 'Technical Interview',
    title: 'Google SWE Full Time',
    content: '2 Coding questions with 45 minutes in total, need to further optimize',
    likes: 30,
    views: 40,
  },
  {
    creator_id: users[3].id,
    creation_date: '2023-10-15',
    company: 'Google',
    interview_status: 'Final Round',
    interview_type: 'Technical Interview',
    title: 'Google STEP program for interns',
    content: 'Very fun and challenging, need to be good at explaining code and debugging',
    likes: 55,
    views: 100,
  },
  {
    creator_id: users[4].id,
    creation_date: '2023-11-15',
    company: 'JP Morgan',
    interview_status: 'Second Round',
    interview_type: 'Others',
    title: 'JP Morgan Quantitative Researcher',
    content: 'Heavy math problems, need to be good at probability and statistics',
    likes: 34,
    views: 50,
  },
  {
    creator_id: users[5].id,
    creation_date: '2023-12-15',
    company: 'IBM',
    interview_status: 'Second Round',
    interview_type: 'Technical Interview',
    title: 'Coding challenges for IBM Backend Developer',
    content: '2 questions, one on algorithm and one on SQL',
    likes: 20,
    views: 40,
  },
  {
    creator_id: users[6].id,
    creation_date: '2023-12-25',
    company: 'Santa Claus',
    interview_status: 'Others',
    interview_type: 'Others',
    title: 'Get an interview to be Santa Claus',
    content: 'Need to be able to sing and dance, make kids happy, there are 10 kids as interviewers',
    likes: 100,
    views: 125,
  },
];

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

module.exports = {
  users,
  sharingposts,
  // users,
  // invoices,
  // revenue,
};
