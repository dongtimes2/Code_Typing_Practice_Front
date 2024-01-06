import ReactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  return ReactDom.createPortal(
    children,
    document.getElementById('modal-root')!,
  );
};

export default ModalPortal;
