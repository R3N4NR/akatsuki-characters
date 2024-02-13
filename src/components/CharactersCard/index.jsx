import { CharModal } from '../CharacterModal';
import styles from './styles.module.scss'
import { useState } from 'react';
import NoAvatar from '../../assets/no-avatar.jpg'
export const CharCard = ({
    name, 
    img_path,
    debut,
    family,
    natureType,
    personal,
    uniqueTraits

}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        setModalOpen(false)
    }
    return (
        <>
            <div className={styles.card} onClick={() => setModalOpen(!modalOpen)}>
                <img src={img_path ? img_path : NoAvatar} alt="IMAGEM" />
                <div className={styles.charName}>
                    <span>{name}</span>
                </div>

            </div>
            {
                modalOpen && (
                    <CharModal 
                    closeModal={handleCloseModal} 
                    name={name} 
                    img_path={img_path}
                    debut={debut}
                    family={family}
                    natureType={natureType}
                    personal={personal}
                    uniqueTraits={uniqueTraits}
                    
                    />
                )
            }
        </>
    )
}