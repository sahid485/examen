function DashboardStats({ user }) {
  try {
    const stats = [
      { icon: 'users', label: 'Total Usuarios', value: '1,234', change: '+12%', color: 'blue' },
      { icon: 'activity', label: 'Activos Hoy', value: '842', change: '+8%', color: 'green' },
      { icon: 'file-text', label: 'Documentos', value: '456', change: '+23%', color: 'purple' },
      { icon: 'trending-up', label: 'Crecimiento', value: '18%', change: '+5%', color: 'orange' }
    ];

    return (
      <div data-name="dashboard-stats" data-file="components/DashboardStats.js">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-500">Bienvenido de nuevo, {user.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border"
                 style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                  <div className={`icon-${stat.icon} text-xl text-${stat.color}-600`}></div>
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
            <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b last:border-b-0"
                     style={{ borderColor: 'var(--border-color)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                       style={{ backgroundColor: 'var(--primary-color)' }}>
                    U
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Usuario realizó una acción</p>
                    <p className="text-xs text-gray-500">Hace {i} hora{i > 1 ? 's' : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
            <h3 className="text-lg font-semibold mb-4">Información del Sistema</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Rol:</span>
                <span className="font-medium capitalize">{user.role}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Versión:</span>
                <span className="font-medium">{user.version}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Estado:</span>
                <span className="text-green-600 font-medium">Activo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardStats component error:', error);
    return null;
  }
}