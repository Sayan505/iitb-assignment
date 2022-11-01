function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd"}}>
            <a class="navbar-brand" href="/" style={{ marginLeft: 64, padding: 2 }}>Upload</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/view/"> View/Download <span class="sr-only"></span></a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
