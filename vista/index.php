<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Florencia Russo</title>
    <!-- Font Awesome CDN link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

    <!-- Custom CSS file link -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <!--  jQuery desde CDN -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>

<body>
    <!-- Navbar section starts -->
    <header>
        <nav class="navbar">
            <div class="logo"><a href="#home">Florencia<span>.</span></a></div>
            <div class="navmenu" id="navmenu">
                <ul class="navlist">
                    <li><a href="#home" class="active">Inicio</a></li>
                    <li><a href="#resumen">Resumen</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>

                <div class="navclose" id="navclose">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="follow">
                    <a href="https://www.facebook.com/profile.php?id=61550583982023&locale=es_LA" class="fab fa-facebook-f"></a>
                    <a href="https://www.instagram.com/flor_r.js/" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-github"></a>
                </div>
            </div>
            <div class="navtoggle" id="navtoggle">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>
    <!-- Navbar section ends -->

    <!-- Home section starts -->
    <section class="home" id="home">
        <div class="image">
            <img src="../assets/img/foto2.png" alt="Florencia Russo">
        </div>
        <div class="content">
            <h2>¡Hola! Soy Flor</h2>
            <span>Full-stack Developer</span>
            <p>Soy desarrolladora full-stack con experiencia en proyectos web, combinando diseño, creatividad y funcionalidad para crear soluciones tecnológicas únicas.</p>
            <button class="btn"><a href="">Descargar CV</a></button>
        </div>
    </section>
    <!-- Home section ends -->

    <!-- Resume section starts -->
    <section id="resumen">
        <div class="left-column">
            <h3>¿Por qué contratarme?</h3>
            <p>Soy responsable, empática y apasionada por el desarrollo web. Me encanta trabajar en equipo y crear experiencias digitales impactantes.</p>
            <div class="menu">
                <button class="resume-btn active">Experiencia</button>
                <button class="resume-btn">Educación</button>
                <button class="resume-btn">Habilidades</button>
                <button class="resume-btn">Acerca de mí</button>
            </div>
        </div>

        <div class="right-column">
            <div class="resume-detail experience active">
                <h3>Mi Experiencia</h3>
                <p>He trabajado en proyectos que abarcan diseño y desarrollo web.</p>
                <div class="squares">
                    <div class="square">
                        <h4>2024: Portfolio Personal</h4>
                        <p>Desarrollo de un sitio profesional con HTML, CSS, JavaScript y Bootstrap.</p>
                    </div>
                    <div class="square">
                        <h4>2023: Página de Venta de Libros</h4>
                        <p>Plataforma responsiva desarrollada con PHP y Bootstrap.</p>
                    </div>
                    <div class="square">
                        <h4>2022: Tienda de Ropa</h4>
                        <p>Diseño de un sitio básico de e-commerce con foco en la experiencia del usuario.</p>
                    </div>
                </div>
            </div>

            <div class="resume-detail education">
                <h3>Mi Educación</h3>
                <p>Logros académicos y formación complementaria.</p>
                <div class="squares">
                    <div class="square">
                        <h4>2023 - Actualidad</h4>
                        <p>Tecnicatura Universitaria en Desarrollo Web, UNComa.</p>
                    </div>
                    <div class="square">
                        <h4>2023</h4>
                        <p>Curso de Inglés para el Trabajo, Codo a Codo.</p>
                    </div>
                </div>
            </div>

            <div class="resume-detail habilities">
                <h3>Mis Habilidades</h3>
                <p>Dominio de lenguajes y herramientas clave para el desarrollo web:</p>
                <div class="habilidades">
                    <div class="square" data-label="HTML5">
                        <i class="icono fa-brands fa-html5"></i>
                    </div>
                    <div class="square" data-label="CSS3">
                        <i class="icono fa-brands fa-css3-alt"></i>
                    </div>
                    <div class="square" data-label="JavaScript">
                        <i class="icono fa-brands fa-js"></i>
                    </div>
                </div>
            </div>

            <div class="resume-detail aboutme">
                <h3>Acerca de mí</h3>
                <p>Soy empática, proactiva y apasionada por el aprendizaje continuo y los desafíos profesionales.</p>
                <div class="acerca-de-mi">
                    <div>
                        <p><span>Nombre:</span> Florencia Russo</p>
                    </div>
                    <div>
                        <p><span>Email:</span> russoflorencia96@gmail.com</p>
                    </div>
                    <div>
                        <p><span>Teléfono:</span> +54 9 2984-730386</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Resume section ends -->

    <!-- Services section starts -->
    <section class="services" id="services">
        <div class="service">
            <h3>Desarrollo Web</h3>
            <p>Creación de sitios web funcionales, responsivos y con un diseño moderno, adaptados a las necesidades de cada cliente.</p>
        </div>
        <div class="service">
            <h3>Diseño de Logos</h3>
            <p>Diseño de identidades visuales únicas para negocios y proyectos personales.</p>
        </div>
    </section>
    <!-- Services section ends -->
    <!-- projects section starts -->
    <section class="projects active" id="projects">
        <h2 class="heading">Latest <span>Project</span></h2>
        <div class="project-container">
            <div class="project-box">
                <div class="project-detail active">
                    <p class="numb">01</p>
                    <h3>E-commerce Front End</h3>

                    <p>Este proyecto se centra en el diseño y la funcionalidad del cliente, con una interfaz visual amigable y características interactivas como un carrito de compras y validación de formularios. Es un gran ejemplo de cómo estructurar un sitio de ventas en línea.</p>
                    <div class="tech">
                        <p><strong>Tecnologías: </strong><span>HTML, CSS, JavaScript</span></p>
                    </div>
                    <div>
                        <button class="btn-proyect" data-label="Ver Proyecto"><a href="https://github.com/project1" target="_blank"><i class="arrow fa-solid fa-arrow-right"></i></a></button>
                        <button class="btn-proyect" data-label="Ver Repositorio"><a href="https://project1.com" target="_blank"><i class="fa-brands fa-github"></i></a></button>
                    </div>
                </div>
                <div class="project-detail">
                    <p class="numb">02</p>
                    <h3>E-commerce Front End</h3>
                    <p>Este proyecto se centra en el diseño y la funcionalidad del cliente, con una interfaz visual amigable y características interactivas como un carrito de compras y validación de formularios. Es un gran ejemplo de cómo estructurar un sitio de ventas en línea.</p>
                    <div class="tech">
                        <p><strong>Tecnologías: </strong><span>HTML, CSS, JavaScript, Bootstrap</span></p>
                    </div>
                    <div>
                        <button class="btn-proyect" data-label="Ver Proyecto"><a href="https://github.com/project1" target="_blank"><i class="arrow fa-solid fa-arrow-right"></i></a></button>
                        <button class="btn-proyect" data-label="Ver Repositorio"><a href="https://project1.com" target="_blank"><i class="fa-brands fa-github"></i></a></button>
                    </div>
                </div>
                <div class="project-detail">
                    <p class="numb">03</p>
                    <h3>Maquetado en Figma</h3>
                    <p>Este diseño de alta fidelidad de una página para el municipio de Roca está optimizado para la experiencia del usuario, con secciones bien organizadas que muestran información importante para la comunidad, como noticias, servicios y contacto.</p>
                    <div class="tech">
                        <p><strong>Tecnologías: </strong><span>Figma</span></p>
                    </div>
                    <div>
                        <button class="btn-proyect" data-label="Ver Proyecto"><a href="https://github.com/project1" target="_blank"><i class="arrow fa-solid fa-arrow-right"></i></a></button>
                        <button class="btn-proyect" data-label="Ver Repositorio"><a href="https://project1.com" target="_blank"><i class="fa-brands fa-github"></i></a></button>
                    </div>
                </div>
                <div class="project-detail">
                    <p class="numb">04</p>
                    <h3>E-commerce Full Stack</h3>
                    <p>Este proyecto implementa la estructura MVC (Modelo-Vista-Controlador) y soporta distintos tipos de usuarios, como administradores y clientes. Incluye funcionalidades como gestión de productos, registro/login y administración de pedidos.</p>
                    <div class="tech">
                        <p><strong>Tecnologías: </strong><span>HTML, CSS, JavaScript, PHP, MysQL</span></p>
                    </div>
                    <div>
                        <button class="btn-proyect" data-label="Ver Proyecto"><a href="https://github.com/project1" target="_blank"><i class="arrow fa-solid fa-arrow-right"></i></a></button>
                        <button class="btn-proyect" data-label="Ver Repositorio"><a href="https://project1.com" target="_blank"><i class="fa-brands fa-github"></i></a></button>
                    </div>
                </div>
            </div>
            <div class="project-box">
                <div class="project-carousel">
                    <div class="img-slide">
                        <div class="img-item">
                            <img src="../assets/img//Proyecto1.png" alt="Proyecto 1">
                        </div>
                        <div class="img-item">
                            <img src="../assets/img//Proyecto2.png" alt="Proyecto 1">
                        </div>
                        <div class="img-item">
                            <img src="../assets/img//Proyecto3.png" alt="Proyecto 1">
                        </div>
                        <div class="img-item">
                            <img src="../assets/img//Proyecto4.png" alt="Proyecto 1">
                        </div>
                    </div>
                </div>
                <div class="navigation">
                    <button class="carousel-control disabled" id="arrow-prev"><i class="fa-solid fa-arrow-left"></i></button>

                    <button class="carousel-control" id="arrow-next"><i class="arrow fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </section>
    <!-- proyect section ends -->
    <!-- contact section starts -->
    <section class="contact" id="contact">
        <div class="contact-container">
            <div class="contact-box">
                <h2>Trabajemos juntos</h2>
                <div class="contact-detail">
                    <i class="fa-solid fa-phone"></i>
                    <div class="detail">
                        <p>Teléfono</p>
                        <p>(+54 9) 2984 730386</p>
                    </div>
                </div>
                <div class="contact-detail">
                    <i class="fa-solid fa-envelope"></i>
                    <div class="detail">
                        <p>Email</p>
                        <p>russoflorencia96@gmail.com</p>
                    </div>
                </div>
                <div class="contact-detail">
                    <i class="fa-solid fa-location-dot"></i>
                    <div class="detail">
                        <p>Dirección</p>
                        <p>Mendoza 376, General Roca - R.N</p>
                    </div>
                </div>
            </div>
            <div class="contact-box">
                <form id="mailForm" action="action/mail.php" method="post">
                    <h2>Contactame</h2>
                    <div id="message" class="hidden"></div>
                    <div class="field-box">
                        <label for="name">
                            <input type="text" placeholder="Nombre" name="name" id="name">
                        </label>
                        <label for="lastname">
                            <input type="text" placeholder="Apellido" name="lastname" id="lastname">
                        </label>
                        <label for="email" class="email">
                            <input type="email" placeholder="Email" name="email" id="email">
                        </label>
                        <label for="subject" class="subject">
                            <input type="text" id="subject" name="subject" placeholder="Asunto">
                        </label>
                        <label for="textarea" class="textarea">
                            <textarea name="textarea" id="textarea" placeholder="Escribe tu message aquí." cols="20" rows="10"></textarea>
                        </label>
                    </div>
                    <button type="submit" class="btn">Enviar message</button>
                </form>
            </div>
        </div>
    </section>
    <!-- contact section ends -->
<!-- Modal -->
<div id="successModal" class="modal">
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <p>¡El envío fue exitoso!</p>
  </div>
</div>

    <!-- Footer section starts -->
    <footer>
        <p>Portfolio de Florencia Russo &copy; 2024. Todos los derechos reservados.</p>
    </footer>


    <!-- Footer section ends -->
    <!-- JavaScript file -->
   <!-- JavaScript -->
<script src="../assets/js/main.js" defer></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function () {
  $('#mailForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const lastname = $('#lastname').val().trim();
    const email = $('#email').val().trim();
    const textarea = $('#textarea').val().trim();
    const modal = $('#successModal');
    const closeBtn = $('.close-btn');

    $('#message').html('').addClass('hidden').removeClass('red-message green-message');

    // Validar campos vacíos
    if (!name || !lastname || !email || !textarea) {
      $('#message')
        .html('<p>Por favor, rellena todos los campos.</p>')
        .removeClass('hidden')
        .addClass('red-message');
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('#message')
        .html('<p>Por favor, introduce un email válido.</p>')
        .removeClass('hidden')
        .addClass('red-message');
      return;
    }

    // Ajax para enviar el formulario
    $.ajax({
      url: 'action/mail.php',
      type: 'POST',
      dataType: 'json',
      data: $(this).serialize(),
      success: function (response) {
        if (response.success) {
          modal.addClass('modal--show');
          $('#name').val('');
$('#lastname').val('');
$('#email').val('');
$('#textarea').val('');
        } else {
          $('#message')
            .html('<p>' + response.message + '</p>')
            .removeClass('hidden')
            .addClass('red-message');
        }
      },
      error: function () {
        $('#message')
          .html('<p>Error al procesar la solicitud. Inténtalo de nuevo.</p>')
          .removeClass('hidden')
          .addClass('red-message');
      }
    });

    // Función para cerrar el modal
    function closeModal() {
      modal.removeClass( "modal--show" );
    }

    closeBtn.on('click', closeModal);
    $(window).on('click', function (e) {
      if ($(e.target).is(modal)) {
        closeModal();
      }
    });
  });
});

</script>
</body>

</html>