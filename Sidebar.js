function Sidebar({ user }) {
  try {
    const menuItems = [
      { icon: 'layout-dashboard', label: 'Dashboard', active: true },
      { icon: 'users', label: 'Usuarios', active: false },
      { icon: 'settings', label: 'Configuración', active: false },
      { icon: 'file-text', label: 'Reportes', active: false }
    ];

    return (
      <div 
        className="fixed left-0 top-0 h-screen bg-white border-r shadow-sm"
        style={{ width: 'var(--sidebar-width)', borderColor: 'var(--border-color)' }}
        data-name="sidebar"
        data-file="components/Sidebar.js"
      >
        <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                 style={{ backgroundColor: 'var(--primary-color)' }}>
              <div className="icon-shield-check text-xl text-white"></div>
            </div>
            <div>
              <h1 className="font-bold text-lg">AdminSys</h1>
              <p className="text-xs text-gray-500">v{user.version}</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  item.active ? 'bg-[var(--secondary-color)] text-[var(--primary-color)]' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`icon-${item.icon} text-lg`}></div>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium"
                 style={{ backgroundColor: 'var(--primary-color)' }}>
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{user.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-all"
          >
            <div className="icon-log-out text-base"></div>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}