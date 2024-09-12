import FontUploadForm from './Component/FontUploadForm';
import FontGroup from './Component/FontGroup';
import CreateGroup from './Component/CreateGroup';
import NavBar from './Component/navbar/NavBar';
import { useRoutes } from 'react-router-dom';
import NotFoundPage from './Component/NotFoundPage'
import { useEffect } from 'react';
import axios from 'axios';
import { host } from './host';


export default function App() {
  const routes = [
    { path: '/', element: <FontUploadForm /> },
    { path: '/create_group', element:<CreateGroup />  },
    { path: '/font_groups', element: <FontGroup /> },
    { path: '*', element: <NotFoundPage /> },
  ];

  const element = useRoutes(routes);

  

  useEffect(() => {
    axios.get(`${host}/DB/db.php`)
      .then((response) => {
        console.log('Response from PHP:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching PHP API:', error);
      });
  }, []); 

    return (
      <div className="w-full flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          {element}
        </main>
      </div>
    );
  }
