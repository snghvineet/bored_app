import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

const Modal = function Modal({ children, close }) {
	return createPortal(
		<>
			<div
				className='fixed top-0 left-0 w-full h-full bg-black/75 z-10'
				onClick={close}
				onKeyDown={close}
			/>
			<dialog open className='top-[20%] rounded-lg z-20 w-1/3 px-8 py-4'>
				<button
					className='text-2xl top-2 right-2 absolute text-gray-600'
					onClick={close}
				>
					<IoClose />
				</button>
				{children}
			</dialog>
		</>,
		document.getElementById('modal-root')
	);
};

export default Modal;
