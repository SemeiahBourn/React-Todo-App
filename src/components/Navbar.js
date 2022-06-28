const Navbar = () => {
    return (
      <nav style ={styles.navStyle}>
        <h1> todos App</h1>
  
        <ul>
          <li>Home</li>
          <li>Products</li>
        </ul>
      </nav>
    );
  };
  
   const styles ={
       navStyle:{
           display: 'flex',
           justifyContent: 'space-around',
           border: 'solid red 2px'
       }
   }
  export default Navbar