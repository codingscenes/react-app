import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <div>
          <h1>This page doesn't exists!</h1>
        </div>
      </main>
    </>
  );
};
export default ErrorPage;
