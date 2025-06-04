import React, { useState, useEffect } from 'react';
import '../../styles/tools/TxtConverter.css'; // Asegúrate de tener este archivo CSS
import styles from '../../styles/Archives.module.css';
import NormalTitle from '../../archives/NormalTitle';
import DescriptionBlack from '../../archives/DescriptionBlack';
import Button from '../../archives/Button';


const TxtConverter = () => {
  
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  
  window.addEventListener('dragover', preventDefault, false);
  window.addEventListener('drop', preventDefault, false);
  
  return () => {
    window.removeEventListener('dragover', preventDefault, false);
    window.removeEventListener('drop', preventDefault, false);
  };
  }, []);

  const MAX_TOTAL_SIZE = 1 * 1024 * 1024; // 1 MB

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    if(selectedFiles.length > 12) {
      alert("Por favor selecciona un máximo de 12 archivos.");
      return;
    }
    
    const conbinedSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);
    
    if (conbinedSize > MAX_TOTAL_SIZE) {
      alert("El tamaño total de los archivos no debe exceder 1 MB.");
      return;
    }
    
    setFiles(selectedFiles);
  };

  const[isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (files.length === 0) {
      alert("Por favor selecciona al menos un archivo TXT.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('txtFiles', file); // ¡nombre exacto que espera el backend!
    });
    setIsLoading(true);
    try {
      console.log('Enviando archivo(s)...');
      const response = await fetch('https://webpages-zlkq.onrender.com/api/converter/process-txt', {
        method: 'POST',
        body: formData,     
      });
      console.log('Archivos enviados:', files.map(f => f.name));

      if (!response.ok) {
        console.log('Error en la respuesta del servidor:', response.statusText);
        throw new Error('Error al convertir el archivo');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'transformado.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al convertir el archivo.');
    }
    setIsLoading(false);
  };

  return (
    <div className="txtConverter">
      <NormalTitle text="Convertir archivo(s) TXT a Excel"/>
      <DescriptionBlack text="Aquí puedes unir archivos TXT generados por el SRI y transformarlos a Excel"/>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="fileInput" className="dropZone">
          Seleccionar archivos
        </label>

        <input
          id="fileInput"
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          multiple
          required
          className="hiddenInput"
        />

        {files.length > 0 && (
          <div className={styles.fileList}>
            <h3>Archivos seleccionados:</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index} className={styles.fileItem}>
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
            text="Procesar TXT"
            onClick={handleSubmit}
            isLoading={isLoading}
            type="submit"
          />
      </form>
    </div>
  );
};

export default TxtConverter;


        