class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen flex" data-name="app" data-file="app.js">
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] items-center justify-center p-12">
          <div className="max-w-md text-white">
            <div className="mb-8">
              <div className="icon-shield-check text-6xl mb-4"></div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Sistema de Administración</h1>
            <p className="text-lg text-blue-100 mb-6">
              Gestiona tu organización con control total de usuarios, roles y permisos.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="icon-check-circle text-xl"></div>
                <span>Control de versiones integrado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-users text-xl"></div>
                <span>Gestión de roles y permisos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-lock text-xl"></div>
                <span>Acceso seguro y protegido</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
          <LoginForm />
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);