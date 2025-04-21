import React from 'react';

const ManagementLink = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="text-blue-200 hover:text-white transition-colors font-medium"
    >
      Gestión de Contenidos
    </button>
  );
};

export default ManagementLink;