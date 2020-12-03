import React from 'react';

const Modal = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ height: '100vh' }}>
      <p>Compra realizada com sucesso!</p>
    </div>
  );
};

export default Modal;
