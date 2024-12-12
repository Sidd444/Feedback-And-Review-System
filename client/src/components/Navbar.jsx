import { AuthContext } from '../contexts/AuthContext';
import {useContext} from 'react';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center p-4 shadow-md">
      <img className="h-12 w-12" type="image/png" src="https://www.freeiconspng.com/thumbs/review-icon-png/review-icon-png-1.png" alt="logo" />
      <h1 className="text-2xl font-bold mb-2 md:mb-0">Reviwer</h1>
      {user ? (
        <span className="text-xl font-bold">{user.name}</span>
      ) : (
        <span className="italic">Please log in</span>
      )}
    </nav>
  );
};

export default Navbar;
