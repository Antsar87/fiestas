import React from 'react';

//Estilos
import * as Styled from './Nav.style.js';
import { IconContext } from 'react-icons';

//Data
import { NavData } from './NavData.js';

//Componentes
import Slidebar from '../Slidebar/Slidebar';

const Nav = (props) => {
  return (
    <>
      <Styled.Nav>
        {/* Padre */}
        <Styled.Flex>
          {/* Flex */}
          <Slidebar />
          {/*  */}
          <Styled.Box>
            <IconContext.Provider value={{ color: '#FFF' }}>
              {NavData.map((item, index) => (
                <li key={index}>
                  <Styled.Link
                    href={item.link}
                    target={item.newTab && '_blank'}
                    onClick={() => props.popup(item.valor)}
                  >
                    {item.icon}
                    {item.contenido}
                  </Styled.Link>
                </li>
              ))}
            </IconContext.Provider>
          </Styled.Box>
          {/*  */}
          {/* Flex */}
        </Styled.Flex>
        {/* Padre */}
      </Styled.Nav>

      <Styled.BoxMedia>
        <IconContext.Provider value={{ color: '#FFF' }}>
          {NavData.map((item, index) => (
            <li key={index}>
              <Styled.Link
                href={item.link}
                target={item.newTab && '_blank'}
                onClick={() => console.log("clicked")}
              >
                {item.icon}
                {item.contenido}
              </Styled.Link>
            </li>
          ))}
        </IconContext.Provider>
      </Styled.BoxMedia>
    </>
  );
};

export default Nav;