import { useState } from 'react'; // Import useState for state management
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

function Navbar() {
  // const [user, setUser] = useState(true);
  const user = true;
  const [isInputVisible, setInputVisible] = useState(false); // Step 1: State for input visibility

  const toggleInputVisibility = () => setInputVisible(!isInputVisible); // Step 2: Event handler to toggle visibility

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4" style={{ backgroundColor: '#1f2120', color:'#d9d8d7'}}>
      <h1 className="text-lg md:text-xl font-extrabold"><Link to='/'>Dare</Link></h1>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <p onClick={toggleInputVisibility} style={{ cursor: 'pointer' }}><BsSearch /></p> 
        {isInputVisible && <input className="outline-none px-3 py-1 text-sm" placeholder='Search a post' type='text'/>} {/* Step 3: Conditional rendering */}
        {user ? <h3><Link to='/write'>Write</Link></h3> : <h3><Link to='/login'>Login</Link></h3>}
        {user ? <h3><Link to='/profile'>Profile</Link></h3> : <h3><Link to='/register'>Register</Link></h3>}
      </div>
    </div>
  )
}

export default Navbar; // Corrected the function name to follow the convention