async function authenticateUser(email, password) {
  try {
    const result = await trickleListObjects('user', 100, true);
    const users = result.items || [];
    
    const user = users.find(u => 
      u.objectData.Email === email && u.objectData.Password === password
    );
    
    if (user) {
      return {
        success: true,
        user: {
          id: user.objectId,
          email: user.objectData.Email,
          name: user.objectData.Name,
          role: user.objectData.Role,
          version: user.objectData.Version
        }
      };
    }
    
    return {
      success: false,
      message: 'Credenciales incorrectas. Verifica tu correo y contraseña.'
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return {
      success: false,
      message: 'Error al autenticar. Por favor intenta nuevamente.'
    };
  }
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}