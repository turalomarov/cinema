import { Link, useRouteError } from 'react-router-dom';
import Title from '@app/components/Title';

const NotFound = () => {
  const error = useRouteError();
  const errorMessage = (error as Error)?.message
    || (error as { statusText?: string })?.statusText;

  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <h1 className="my-20 text-xl md:text-4xl text-app-white">404 - Page Not Found</h1>
      <Link to="/">
        <button
          type="button"
          className="rounded-md bg-app-grey-blue p-2 px-4 hover:bg-app-white hover:text-app-dark-blue"
        >
          Go home
        </button>
      </Link>
      {
        process.env.NODE_ENV === 'development' && (
        <Title className="pt-10">
          {errorMessage}
        </Title>
        )
      }
    </div>
  );
};

export default NotFound;
