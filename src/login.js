export default function Login() {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState('');

  const creds = {
    'paredon': 'P@red0n2025!',
    'sarreal': 'S@rr34l2025!',
    'mexxus': 'M3xxu$2025!',
    'permaducto': 'P3rm@2025!',
    'admin': 'Adm1nG3n2025!'
  };

  function submit(e) {
    e.preventDefault();
    if (creds[user] && creds[user] === pass) {
      localStorage.setItem('consorcio', user);
      window.location.href = '/app';
    } else {
      setError('Credenciales inválidas');
    }
  }

  return React.createElement('div', { className: 'flex h-screen items-center justify-center bg-gray-100' },
    React.createElement('form', { onSubmit: submit, className: 'bg-white p-8 rounded shadow w-80' },
      React.createElement('h1', { className: 'text-2xl mb-4 text-center text-[#00425A]' }, 'PMO Proyectos'),
      error && React.createElement('p', { className: 'text-red-500' }, error),
      React.createElement('input', {
        className: 'border p-2 w-full mb-4',
        placeholder: 'Usuario',
        value: user,
        onChange: e => setUser(e.target.value)
      }),
      React.createElement('input', {
        type: 'password',
        className: 'border p-2 w-full mb-4',
        placeholder: 'Contraseña',
        value: pass,
        onChange: e => setPass(e.target.value)
      }),
      React.createElement('button', { className: 'bg-[#F26522] text-white p-2 rounded w-full uppercase' }, 'Entrar')
    )
  );
}
