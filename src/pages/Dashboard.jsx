import React from 'react';
import { DashboardHeader } from '../components/layout/Header';
import { HealthStatus } from '../components/dashboard/HealthStatus';
import { Calendar } from '../components/dashboard/Calendar';
import { ActivityGraph } from '../components/dashboard/ActivityGraph';
import { UpcomingSchedule } from '../components/dashboard/UpcomingSchedule';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="lg:col-span-3">
          <HealthStatus className="h-full" />
        </div>
        
        <div className="lg:col-span-4">
          <Calendar className="h-full" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="lg:col-span-3">
          <ActivityGraph className="h-full" />
        </div>
        
        <div className="lg:col-span-4">
          <UpcomingSchedule className="h-full" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;