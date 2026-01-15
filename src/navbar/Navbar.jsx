import style from './navbar.module.css'
function Navbar() {
    return (
      <>
       <nav className={`${style.bg_navbar} navbar navbar-expand-lg navbar-dark position-sticky top-0`}>
  <div className="container-fluid py-3">

    <a className="navbar-brand fw-bold fs-2 text-white ms-5" href="#">
      Start Bootstrap
    </a>

    <button
      className="navbar-toggler text-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 gap-3">
        <li><a className="nav-link text-white fs-5 fw-bold">Portfolio</a></li>
        <li><a className="nav-link text-white fs-5 fw-bold">About</a></li>
        <li><a className="nav-link text-white fs-5 fw-bold">Contact</a></li>
      </ul>
    </div>

  </div>
</nav>

      </>
    );
  }
  
  export default Navbar;