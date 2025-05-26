import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { activityData } from '../../data/mockData';
import { cn } from '../../lib/utils';

export function ActivityGraph({ className }) {
  return (
    <div className={cn("bg-white p-4 rounded-lg shadow-card w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800">Activity</h3>
        <div className="text-sm text-gray-500">3 appointment on this week</div>
      </div>
      
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activityData}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            barGap={2}
          >
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <Tooltip 
              cursor={false}
              contentStyle={{
                backgroundColor: '#FFF',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                borderRadius: '0.375rem',
                fontSize: '0.75rem',
              }}
            />
            
            {[0, 1, 2, 3].map(index => (
              <Bar
                key={index}
                dataKey={`appointments[${index}].value`}
                fill={`appointments[${index}].color`}
                barSize={6}
                radius={[2, 2, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-end mt-2">
        <button className="text-secondary-600 text-sm font-medium flex items-center">
          Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ActivityGraph;