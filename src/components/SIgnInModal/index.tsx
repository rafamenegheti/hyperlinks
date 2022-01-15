import { ModalButton } from '../ModalButton'
import { useModalOpen } from '../../contexts/ModalContext'
import { SiGmail } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import {  Modal } from './styles'


export function SignInModal() {

    const { handleModal, isModalOpen } = useModalOpen()

    return(
        <Modal isOpen={isModalOpen} onRequestClose={handleModal} shouldFocusAfterRender={false}>
        <ModalButton text='Sign with GMail'icon="gmailFru.svg" color="EA4335"/>
        <ModalButton text='Sign with Instagram' icon="instagram.svg" color="#E1306C"/>
    </Modal>
    )
}