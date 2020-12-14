import { ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (type: any, text: ToastContent) => type(text, {
  autoClose: 3000,
});

export  default notify;
