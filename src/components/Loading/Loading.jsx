import React from 'react'
import React,{ useState } from "react";
import { PacmanLoader } from 'react-spinners';


const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulación de finalización de carga después de 3 segundos
useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <PacmanLoader color="#000000" size={25} />
          <p>Loading...</p>
        </div>
      ) : (
        // Contenido principal cuando no hay carga
        <div>
          {/* Resto del contenido */}
        </div>
      )}
    </div>
  );
  
}

export default Loading