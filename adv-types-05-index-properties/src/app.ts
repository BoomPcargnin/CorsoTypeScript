interface ErrorContainer {
  id: string,
  // I soli tipi accettati sono  
  // number & string
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: 'form-newsletter-error',
  email: 'Not a valid email!',
  // Se specifico string come tipo,
  // Posso usare anche number (ma non viceversa)
  2: 'Not a valid email!', 
  username: 'Must start with a capital character!'
};