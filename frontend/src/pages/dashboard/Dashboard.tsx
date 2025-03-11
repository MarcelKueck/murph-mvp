const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-secondary-500 text-sm font-medium mb-2">Upcoming Consultations</h2>
          <p className="text-3xl font-bold text-secondary-900">3</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-secondary-500 text-sm font-medium mb-2">Documents Shared</h2>
          <p className="text-3xl font-bold text-secondary-900">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-secondary-500 text-sm font-medium mb-2">Completed Consultations</h2>
          <p className="text-3xl font-bold text-secondary-900">8</p>
        </div>
      </div>
      
      {/* Recent activity */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-secondary-900 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b border-secondary-100 flex items-center">
            <div className="bg-primary-100 p-2 rounded-full mr-4">
              <svg className="h-5 w-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-secondary-900">Consultation scheduled with Dr. Smith</p>
              <p className="text-secondary-500 text-sm">Tomorrow at 10:00 AM</p>
            </div>
          </div>
          
          <div className="p-4 border-b border-secondary-100 flex items-center">
            <div className="bg-primary-100 p-2 rounded-full mr-4">
              <svg className="h-5 w-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-secondary-900">New document uploaded</p>
              <p className="text-secondary-500 text-sm">2 days ago</p>
            </div>
          </div>
          
          <div className="p-4 flex items-center">
            <div className="bg-primary-100 p-2 rounded-full mr-4">
              <svg className="h-5 w-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <div>
              <p className="text-secondary-900">Consultation completed</p>
              <p className="text-secondary-500 text-sm">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
