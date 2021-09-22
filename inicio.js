import React, { useCallback, useEffect, useState } from 'react'

export const Main = () => {
    
    const palabras = [ 'Rodolfo', 'Debora', 'Gilberto', 'Romeo', 'Peppa']
    


    const [parola, setParola] = useState("")

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * palabras.length);
        setParola(palabras[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 4000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    
         
    return (
      <div className='main__text'>
         <h3>Hola! Soy {parola}</h3>
      </div>
       )
}
