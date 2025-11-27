function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [notifications] = React.useState([
      { id: 1, message: 'Nuevo usuario registrado', time: 'Hace 5 min' },
      { id: 2, message: 'Actualización del sistema disponible', time: 'Hace 1 hora' },
      { id: 3, message: 'Reporte mensual generado', time: 'Hace 2 horas' }
    ]);

    return (
      <div 
        className="bg-white border-b shadow-sm px-8 py-4 flex items-center justify-end"
        style={{ borderColor: 'var(--border-color)' }}
        data-name="topbar"
        data-file="components/Topbar.js"
      >
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <div className="icon-bell text-xl" style={{ color: 'var(--text-secondary)' }}></div>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50"
                 style={{ borderColor: 'var(--border-color)' }}>
              <div className="p-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <h3 className="font-semibold">Notificaciones</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map(notif => (
                  <div key={notif.id} className="p-4 border-b hover:bg-gray-50 cursor-pointer"
                       style={{ borderColor: 'var(--border-color)' }}>
                    <p className="text-sm mb-1">{notif.message}</p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t" style={{ borderColor: 'var(--border-color)' }}>
                <button className="text-sm font-medium" style={{ color: 'var(--primary-color)' }}>
                  Ver todas
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}