import React from 'react';
import { days, timeSlots, appointments } from '../../data/mockData';
import { cn } from '../../lib/utils';

export function Calendar({ className }) {
  const currentDate = new Date();
  
  const processedTimeSlots = timeSlots.map(slot => {
    const slotAppointments = {};
    
    days.forEach(day => {
      slotAppointments[day.number] = appointments.filter(appointment => 
        appointment.day === days.findIndex(d => d.number === day.number) + 1 && 
        appointment.startTime === slot.time
      );
    });
    
    return {
      ...slot,
      appointments: slotAppointments
    };
  });

  return (
    <div className={cn("bg-white rounded-lg shadow-card overflow-hidden w-full", className)}>
      <div className="grid grid-cols-8 border-b overflow-x-auto">
        <div className="py-3 px-4 border-r sticky left-0 bg-white z-10">
          <span className="text-gray-500 text-sm">Time</span>
        </div>
        
        {days.map((day, index) => (
          <div 
            key={day.number}
            className={cn(
              "py-3 text-center border-r last:border-r-0 min-w-[80px]",
              index === 3 && "bg-secondary-50"
            )}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">{day.name}</span>
              <span className={cn(
                "w-8 h-8 flex items-center justify-center mt-1 text-sm rounded-full",
                index === 3 ? "bg-secondary-600 text-white" : "text-gray-800"
              )}>
                {day.number}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="divide-y">
        {processedTimeSlots.map((slot) => (
          <div key={slot.id} className="grid grid-cols-8">
            <div className="py-3 px-4 border-r flex items-center sticky left-0 bg-white z-10">
              <span className="text-gray-600 text-sm">{slot.time}</span>
            </div>
            
            {days.map((day) => (
              <div
                key={day.number}
                className="p-1 border-r last:border-r-0 min-h-[3rem] relative min-w-[80px]"
              >
                {slot.appointments[day.number]?.map((appointment) => (
                  <div
                    key={appointment.id}
                    className={cn(
                      "text-white p-1 rounded text-xs",
                      appointment.color
                    )}
                  >
                    {appointment.title}
                  </div>
                ))}
                
                {!slot.appointments[day.number]?.length && (
                  <div className="h-full flex items-center justify-center">
                    <span className="text-gray-300">—</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;