export const variables = {
    API_URL: "",
    PHOTO_URL: "",
  };
  
  if (process.env.NODE_ENV === "development") {
    variables.API_URL = "http://127.0.0.1:8000/";
    variables.PHOTO_URL = "http://127.0.0.1:8000/Photos/";
  } else {
    // Se você quiser fornecer valores padrão para o ambiente de produção, substitua as strings vazias abaixo.
    variables.API_URL = "https://backend-test-rouge.vercel.app/";
    variables.PHOTO_URL = "https://backend-test-rouge.vercel.app/Photos/";
  }
  