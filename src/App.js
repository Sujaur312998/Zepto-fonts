import FontUploadForm from './Component/FontUploadForm';
import FontGroup from './Component/FontGroup';
import CreateGroup from './Component/CreateGroup';
import NavBar from './Component/navbar/NavBar';
import { useRoutes } from 'react-router-dom';
import NotFoundPage from './Component/NotFoundPage'

export default function App() {
  const routes = [
    { path: '/', element: <FontUploadForm /> },
    { path: '/create_group', element: <FontGroup /> },
    { path: '/font_groups', element: <CreateGroup /> },
    { path: '*', element: <NotFoundPage /> },
  ];

  const element = useRoutes(routes);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {element}
      </main>
    </div>
  );
}
