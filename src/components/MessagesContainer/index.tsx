import { Bounce, ToastContainer } from "react-toastify";

type MessagensContainerProps = {
  children: React.ReactNode;
};

// COMPONENTE ADAPTER
export function MassageContainer({ children }: MessagensContainerProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
