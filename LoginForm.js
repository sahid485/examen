function LoginForm() {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      const result = await authenticateUser(email, password);
      
      if (result.success) {
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        window.location.href = 'dashboard.html';
      } else {
        setError(result.message);
      }
      
      setLoading(false);
    };

    return (
      <div className="w-full max-w-md" data-name="login-form" data-file="components/LoginForm.js">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              Bienvenido
            </h2>
            <p className="text-gray-500">Ingresa tus credenciales para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="usuario@ejemplo.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? 'Ingresando...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs font-medium text-gray-600 mb-2">Usuarios de prueba:</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p><strong>Superusuario:</strong> super@admin.com / super123</p>
              <p><strong>Administrador:</strong> admin@admin.com / admin123</p>
              <p><strong>Usuario:</strong> user@admin.com / user123</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}