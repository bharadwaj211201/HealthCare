import { Heart, Settings as Lungs, Sheet as Teeth, Bone, Stethoscope, Eye, Brain, Edit } from 'lucide-react';

export const navItems = [
  { section: 'General', title: '', icon: () => null, href: '' },
  { title: 'Dashboard', icon: Stethoscope, href: '/' },
  { title: 'History', icon: Edit, href: '/history' },
  { title: 'Calendar', icon: Edit, href: '/calendar' },
  { title: 'Appointments', icon: Edit, href: '/appointments' },
  { title: 'Statistics', icon: Edit, href: '/statistics' },
  { section: 'Tools', title: '', icon: () => null, href: '' },
  { title: 'Chat', icon: Edit, href: '/chat' },
  { title: 'Support', icon: Edit, href: '/support' },
  { title: 'Setting', icon: Edit, href: '/setting' },
];

export const healthItems = [
  {
    title: 'Lungs',
    icon: Lungs,
    color: 'text-red-500',
    date: '20 Oct 2021',
    status: 65,
  },
  {
    title: 'Heart',
    icon: Heart,
    color: 'text-red-500',
    date: '22 Oct 2021',
    status: 90,
  },
  {
    title: 'Teeth',
    icon: Teeth,
    color: 'text-blue-500',
    date: '30 Oct 2021',
    status: 75,
  },
  {
    title: 'Bone',
    icon: Bone,
    color: 'text-orange-500',
    date: '26 Oct 2021',
    status: 40,
  },
];

export const appointments = [
  {
    id: '1',
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    startTime: '09:00',
    endTime: '11:00',
    day: 4,
    icon: Teeth,
    color: 'bg-indigo-600',
  },
  {
    id: '2',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Barnes',
    startTime: '11:00',
    endTime: '12:00',
    day: 4,
    icon: Bone,
    color: 'bg-blue-500',
  },
  {
    id: '3',
    title: 'Health checkup complete',
    doctor: '',
    startTime: '11:00',
    endTime: '12:00',
    day: 4,
    icon: Edit,
    color: 'bg-blue-100',
  },
  {
    id: '4',
    title: 'Ophthalmologist',
    doctor: '',
    startTime: '14:00',
    endTime: '15:00',
    day: 4,
    icon: Eye,
    color: 'bg-blue-100',
  },
  {
    id: '5',
    title: 'Cardiologist',
    doctor: '',
    startTime: '12:00',
    endTime: '13:00',
    day: 6,
    icon: Heart,
    color: 'bg-blue-100',
  },
  {
    id: '6',
    title: 'Neurologist',
    doctor: '',
    startTime: '16:00',
    endTime: '17:00',
    day: 6,
    icon: Brain,
    color: 'bg-blue-100',
  },
];

export const timeSlots = [
  { id: 1, time: '09:00', appointments: {} },
  { id: 2, time: '10:00', appointments: {} },
  { id: 3, time: '11:00', appointments: {} },
  { id: 4, time: '12:00', appointments: {} },
  { id: 5, time: '13:00', appointments: {} },
  { id: 6, time: '14:00', appointments: {} },
  { id: 7, time: '15:00', appointments: {} },
  { id: 8, time: '16:00', appointments: {} },
];

export const days = [
  { number: 25, name: 'Mon' },
  { number: 26, name: 'Tue' },
  { number: 27, name: 'Wed' },
  { number: 28, name: 'Thu' },
  { number: 29, name: 'Fri' },
  { number: 30, name: 'Sat' },
  { number: 31, name: 'Sun' },
];

export const activityData = Array.from({ length: 7 }, (_, i) => {
  const values = Array.from({ length: 4 }, () => getRandomInt(0, 5));
  return {
    day: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'][i],
    appointments: values.map((value, index) => ({
      value,
      color: ['#38BDF8', '#4338CA', '#10B981', '#F97316'][index]
    }))
  };
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}