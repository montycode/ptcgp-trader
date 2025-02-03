"use client";
import React from "react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";

// Este componente es reutilizable
interface CaptureListScreenshotProps {
  listId: string; // Recibimos el ID del contenedor de la lista a capturar
  buttonLabel?: string; // Opcionalmente, se puede personalizar el texto del botón
}

const CaptureListScreenshot: React.FC<CaptureListScreenshotProps> = ({
  listId,
  buttonLabel = "Capturar lista",
}) => {
  const captureScreenshot = async () => {
    const element = document.getElementById(listId); // Usamos el id de la lista pasada como prop
    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");

      // Crear un enlace para descargar la imagen
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${listId}.png`;
      link.click();
    }
  };

  return (
    <div>
      <Button className="text-dark-100" onClick={captureScreenshot}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default CaptureListScreenshot;
