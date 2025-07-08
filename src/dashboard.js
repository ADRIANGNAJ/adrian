export default function Dashboard({ consorcio }) {
  const [module, setModule] = React.useState('home');
  const docs = {
    semanal: { actual: 'reporte_semanal.pdf', historico: ['reporte_semanal_ant.pdf'] },
    lecciones: { actual: null, historico: [] },
    fotos: { actual: 'fotos.pdf', historico: [] }
  };

  function logout() {
    localStorage.removeItem('consorcio');
    window.location.href = '/';
  }

  function renderContent() {
    if (module === 'home') {
      return React.createElement('div', { className: 'p-4' },
        React.createElement('h2', { className: 'text-xl' }, `Bienvenido ${consorcio}`),
        React.createElement('p', null, 'Estatus del proyecto: En progreso')
      );
    }
    if (module === 'semanal') return renderDoc('Reporte Semanal', docs.semanal);
    if (module === 'lecciones') return renderDoc('Lecciones Aprendidas', docs.lecciones);
    if (module === 'fotos') return renderDoc('Reporte Fotográfico', docs.fotos);
    return null;
  }

  function renderDoc(title, { actual, historico }) {
    return React.createElement('div', { className: 'p-4' },
      React.createElement('h2', { className: 'text-xl mb-4' }, title),
      actual ? React.createElement('iframe', { src: actual, className: 'w-full h-96 mb-4' })
             : React.createElement('p', null, 'No hay documento de esta semana aún'),
      historico.length > 0 && React.createElement('div', null,
        React.createElement('h3', { className: 'mt-4 mb-2' }, 'Histórico'),
        historico.map(h => React.createElement('p', { key: h }, h))
      )
    );
  }

  const menuItem = (id, label) => React.createElement('button', {
      className: `block w-full text-left px-4 py-2 hover:bg-gray-200 ${module===id?'bg-gray-200':''}`,
      onClick:()=>setModule(id)
    }, label);

  return React.createElement('div', { className: 'flex h-screen' },
    React.createElement('aside', { className: 'w-48 bg-[#00425A] text-white flex flex-col' },
      React.createElement('h1', { className: 'p-4 text-lg font-bold' }, 'PMO'),
      menuItem('home','Inicio'),
      menuItem('semanal','Reporte Semanal'),
      menuItem('lecciones','Lecciones Aprendidas'),
      menuItem('fotos','Reporte Fotográfico'),
      React.createElement('button', { className: 'mt-auto bg-[#F26522] m-4 p-2 rounded', onClick: logout }, 'Salir')
    ),
    React.createElement('main', { className: 'flex-1 overflow-auto' }, renderContent())
  );
}
