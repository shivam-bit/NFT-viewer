import styles from 'src/styles/layouts/GalleryGrid.module.scss';

const GalleryGrid: any = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default GalleryGrid;
