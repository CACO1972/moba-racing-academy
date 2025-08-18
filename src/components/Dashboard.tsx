
import React from 'react';
import { User } from '@supabase/supabase-js';
import NewDashboard from './dashboard/NewDashboard';

interface DashboardProps {
  user: User;
}

const Dashboard = ({ user }: DashboardProps) => {
  return <NewDashboard user={user} />;
};

export default Dashboard;
