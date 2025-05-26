import React from 'react';
import { appointments } from '../../data/mockData';
import { cn } from '../../lib/utils';

export function UpcomingSchedule({ className }) {
  const thursdayAppointments = appointments.filter(app => app.day === 4);
  const saturdayAppointments = appointments.filter(app => app.day === 6);

  return (
    <div className={cn("bg-white p-4 rounded-lg shadow-card w-full", className)}>
      <h3 className="text-lg font-medium text-gray-800 mb-4">The Upcoming Schedule</h3>
      
      <div className="space-y-4">
        {thursdayAppointments.length > 0 && (
          <ScheduleGroup title="On Thursday" appointments={thursdayAppointments} />
        )}
        
        {saturdayAppointments.length > 0 && (
          <ScheduleGroup title="On Saturday" appointments={saturdayAppointments} />
        )}
      </div>
    </div>
  );
}

function ScheduleGroup({ title, appointments }) {
  return (
    <div>
      <h4 className="text-sm text-gray-600 mb-2">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
}

function AppointmentCard({ appointment }) {
  const getIconBgColor = () => {
    if (appointment.title.includes('Dentist')) return 'bg-secondary-100';
    if (appointment.title.includes('Cardio')) return 'bg-red-100';
    if (appointment.title.includes('Neuro')) return 'bg-blue-100';
    if (appointment.title.includes('Ophth')) return 'bg-blue-100';
    if (appointment.title.includes('Health')) return 'bg-blue-100';
    return 'bg-blue-100';
  };

  return (
    <div className={cn(
      "p-3 rounded-lg flex items-start gap-3",
      appointment.title.includes('Dentist') ? 'bg-secondary-50' : 'bg-blue-50'
    )}>
      <div className={cn("p-2 rounded-lg", getIconBgColor())}>
        <appointment.icon className={cn(
          "w-5 h-5",
          appointment.title.includes('Dentist') ? 'text-secondary-600' : 'text-primary-500'
        )} />
      </div>
      
      <div>
        <h5 className="font-medium text-gray-800 text-sm">{appointment.title}</h5>
        <div className="text-xs text-gray-500 mt-1">
          {appointment.startTime} {appointment.doctor && 'AM'}
          {appointment.doctor && (
            <div className="mt-1">{appointment.doctor}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;