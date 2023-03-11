import React, { useEffect, useState } from 'react';
import Module1 from './Modules/Module1';
import Module2 from './Modules/Module2';
import Module3 from './Modules/Module3'
import './Modules/css/bodyModules.css'

function Prueba(props) {
  const [pagina, setPagina] = useState(props.moduleState);

  console.log(props.moduleState); 
  console.log("El estado es: ", pagina )

  useEffect(() => {
    setPagina(props.moduleState);
  }, [props.moduleState]);

  console.log("El estado es: ", pagina )
 
  return (
   <>      
      {pagina === 'module1' && (
        <Module1/>
      )}
      {pagina === 'module2' && (
        <Module2/>
      )}
      {pagina === 'module3' && (
        <Module3/>
      )}
    </>

  );
}

export default Prueba;