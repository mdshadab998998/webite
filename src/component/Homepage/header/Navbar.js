import "./Navbar.css"
const Navbar=()=>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src="navicon.png" alt="none" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className=" navbar-nav me-auto mb-2 mb-lg-0 px-5 d-flex">
        <li className="nav-item">
        <a className="navbar-brand px-2 ml-1" href="shadab">Home</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand px-2" href="shadab">About</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand px-2" href="shadab">Courses</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand px-2" href="shadab">Instructers</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand p-2" href="shadab">Blog</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand" href="shadab">Content</a>
        </li>
        <li className="nav-item uniquenavitem">
        <a className="navbar-brand" href="shadab">GET A QUOTE</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar