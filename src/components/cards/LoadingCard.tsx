import ContentLoader from 'react-content-loader';

const LoadingCard: any = () => {
  return (
    <ContentLoader
      speed={2.4}
      height={340}
      viewBox="0 0 280 320"
      backgroundColor="#f3f3f3"
      foregroundColor="#ffffff"
      className="card"
      style={{ width: '100%' }}
    >
      <rect x="0" y="0" rx="0" ry="0" width="280" height="180" />
      <rect x="0" y="220" rx="0" ry="0" width="280" height="40" />
      <rect x="0" y="280" rx="0" ry="0" width="280" height="40" />
    </ContentLoader>
  );
};

export default LoadingCard;
