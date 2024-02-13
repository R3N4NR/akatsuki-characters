import { CharCard } from '../CharactersCard';
import styles from './styles.module.scss';

export const CharBoard = ({ infos }) => {
  return (
    <>
      <div className={styles.board}>
        {infos ? (
          infos.map((item, index) => (
            <CharCard 
            key={index} 
            name={item.name} 
            img_path={item.images[0]}
            debut={item.debut}
            family={item.family}
            natureType={item.natureType}
            personal={item.personal}
            uniqueTraits={item.uniqueTraits}
            />
          ))
        ) : (
          <p>Nenhum dado disponível.</p>
        )}
      </div>
    </>
  );
};
