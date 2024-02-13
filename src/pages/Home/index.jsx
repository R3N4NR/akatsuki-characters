import { useEffect, useState } from "react";
import { api } from "../../api/apis";
import styles from './styles.module.scss'
import { CharBoard } from "../../components/CharactersBoard";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos} from "react-icons/md";

import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      try {
        const apiData = await api('akatsuki', { page: nextPage, limit: 10 });
        setCharacters(apiData.akatsuki);
        setCurrentPage(nextPage);
      } catch (error) {
      return  <Link to="/error"/>
      }
    }

    
  };

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      try {
        const apiData = await api('akatsuki', { page: previousPage, limit: 10 });
        setCharacters(apiData.akatsuki);
        setCurrentPage(previousPage);
      } catch (error) {
        return  <Link to="/error"/>
      }
    }
    
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const apiData = await api('akatsuki', { page: 1, limit: 10 });
        setCharacters(apiData.akatsuki);
        setTotalPages(Math.ceil(apiData.total / 10));
        setLoading(false);
  
      } catch (error) {
        return  <Link to="/error"/>
      }
    };
    loadData();

  }, []);

  return (
  <>
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <div className={styles.homeBody}>
            <Header/>
            <CharBoard infos={characters} />

            <div className={styles.pageButton}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              <MdOutlineArrowBackIos size="10px" />
            </button>
            <div className={styles.currentPage}><span>{currentPage}</span></div>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              <MdOutlineArrowForwardIos size="10px" />
            </button>
          </div>
          </div>
          
        </div>
      )}
    </div>
    </>
  );
}
