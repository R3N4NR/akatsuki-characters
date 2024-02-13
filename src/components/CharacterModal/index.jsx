import styles from './styles.module.scss'
import { IoClose } from "react-icons/io5"

export const CharModal = ({
    closeModal,
    name,
    img_path,
    debut,
    family,
    natureType,
    personal,
    uniqueTraits
}) => {

    return (
        <div className={styles.modal}>
            <IoClose onClick={closeModal} className={styles.closeButton} />
            <div className={styles.modalContent}>

                {name && (
                    <div className={styles.section}>
                        <strong>Name: </strong>{name}
                    </div>
                )}

                {personal && personal.occupation && (
                    <div className={styles.section}>
                        <strong>Occupation: </strong>{personal.occupation}
                    </div>
                )}

                {personal && personal.sex && (
                    <div className={styles.section}>
                        <strong>Sex: </strong>{personal.sex}
                    </div>
                )}

                {debut && debut.anime && (
                    <div className={styles.section}>
                        <strong>Anime Debut:</strong> {debut.anime}
                    </div>
                )}

                {debut && debut.manga && (
                    <div className={styles.section}>
                        <strong>Manga Debut:</strong> {debut.manga}
                    </div>
                )}

                {personal && personal.affiliation && (
                    <div className={styles.section}>
                        <ul>
                            <strong>Affiliation:</strong>
                            {Array.isArray(personal.affiliation) ? (
                                personal.affiliation.map(item => (
                                    <li key={item}>{item}</li>
                                ))
                            ) : (
                                <li>{personal.affiliation}</li>
                            )}
                        </ul>
                    </div>
                )}

                {personal && personal.status && (
                    <div className={styles.section}>
                        <span><strong>Status:</strong> {personal.status}</span>
                    </div>
                )}

                {personal && personal.classification && (
                    <div className={styles.section}>
                        <ul>
                            <strong>Classification:</strong>
                            {Array.isArray(personal.classification) ? (
                                personal.classification.map(item => (
                                    <li key={item}>{item}</li>
                                ))
                            ) : (
                                <li>{personal.classification}</li>
                            )}
                        </ul>
                    </div>
                )}

                {family && (
                    <div className={styles.section}>
                        <span><strong>Creator:</strong> {family.creator}</span>
                        <ul>
                            <strong>Elements:</strong>
                            {natureType && natureType.map(type => (
                                <li key={type}>{type}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {personal && personal.species && (
                    <div className={styles.section}>
                        <span><strong>Species:</strong> {personal.species}</span>
                    </div>
                )}

                {personal && personal.tailedBeast && (
                    <div className={styles.section}>
                        <span><strong>Tailed Beast:</strong> {personal.tailedBeast}</span>
                    </div>
                )}

                {personal && personal.kekkeiGenkai && (
                    <div className={styles.section}>
                        <ul>
                            <strong>Kekkei Genkai:</strong>
                            {Array.isArray(personal.kekkeiGenkai) ? (
                                personal.kekkeiGenkai.map(item => (
                                    <li key={item}>{item}</li>
                                ))
                            ) : (
                                <li>{personal.kekkeiGenkai}</li>
                            )}
                        </ul>
                    </div>
                )}

                {personal && personal.partner && (
                    <div className={styles.section}>
                        <ul>
                            <strong>Partner:</strong>
                            {Array.isArray(personal.partner) ? (
                                personal.partner.map(item => (
                                    <li key={item}>{item}</li>
                                ))
                            ) : (
                                <li>{personal.partner}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
