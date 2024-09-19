import React from "react";

const Header = () => {
    return (
        <>
            <nav class=" bg-info navbar navbar-expand-lg ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">
                        CAD🦼
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link active column3 "
                                    aria-current="page"
                                    href="#"
                                >
                                    TIPOS DE DEFICIENCIA
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active column3 "
                                    aria-current="page"
                                    href="#"
                                >
                                    CENTRO DE AJUDA
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active column3 "
                                    aria-current="page"
                                    href="#"
                                >
                                    DOE AQUI
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active column3 "
                                    aria-current="page"
                                    href="#"
                                >
                                    SOBRE NÓS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;

