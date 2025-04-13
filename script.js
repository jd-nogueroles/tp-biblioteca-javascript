// ========
// PASO 1 
// ========


const libros = [
    { id: 1, titulo: "Los peligros de fumar en la cama", autor: "Mariana Enriquez", año: 2009, genero: "Terror", disponible: true },
    { id: 2, titulo: "Nuestra parte de noche", autor: "Mariana Enriquez", año: 2019, genero: "Terror", disponible: true },
    { id: 3, titulo: "Las cosas que perdimos en el fuego", autor: "Mariana Enriquez", año: 2016, genero: "Cuentos", disponible: true },
    { id: 4, titulo: "Este es el mar", autor: "Mariana Enriquez", año: 2017, genero: "Fantasía", disponible: true },
    { id: 5, titulo: "Alguien camina sobre tu tumba", autor: "Mariana Enriquez", año: 2013, genero: "Crónica", disponible: true },
    { id: 6, titulo: "Frutos extraños", autor: "Leila Guerriero", año: 2009, genero: "Crónica", disponible: true },
    { id: 7, titulo: "Los suicidas del fin del mundo", autor: "Leila Guerriero", año: 2005, genero: "Crónica", disponible: true },
    { id: 8, titulo: "Zona de obras", autor: "Leila Guerriero", año: 2015, genero: "Crónica", disponible: true },
    { id: 9, titulo: "La otra guerra", autor: "Leila Guerriero", año: 2015, genero: "Ensayo", disponible: true },
    { id: 10, titulo: "Opus Gelber", autor: "Leila Guerriero", año: 2019, genero: "Biografía", disponible: true }
  ];
  
 
  const usuarios = [
    { id: 1, nombre: "Ana López", email: "ana@example.com", librosPrestados: [] },
    { id: 2, nombre: "Juan Pérez", email: "juan@example.com", librosPrestados: [] },
    { id: 3, nombre: "Lucía García", email: "lucia@example.com", librosPrestados: [] },
    { id: 4, nombre: "Marcos Díaz", email: "marcos@example.com", librosPrestados: [] },
    { id: 5, nombre: "Elena Torres", email: "elena@example.com", librosPrestados: [] }
  ];
  
 
  console.log("📚 Libros de Enriquez y Guerriero:", libros);
  console.log("👥 Usuarios:", usuarios);
  

  // ========
// PASO 2 
// ========

// 1. 
function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = {
      id: id,
      titulo: titulo,
      autor: autor,
      año: anio,
      genero: genero,
      disponible: true
    };
    libros.push(nuevoLibro);
    console.log("📗 Libro agregado:", nuevoLibro);
  }
  
  // 2. 
  function buscarLibro(criterio, valor) {
    const resultado = libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
    console.log("🔍 Resultados de búsqueda:", resultado);
  }
  
  // 3. 
  function ordenarLibros(criterio) {
    let n = libros.length;
    let librosOrdenados = [...libros]; 
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (criterio === "titulo" && librosOrdenados[j].titulo > librosOrdenados[j + 1].titulo) {
          [librosOrdenados[j], librosOrdenados[j + 1]] = [librosOrdenados[j + 1], librosOrdenados[j]];
        } else if (criterio === "año" && librosOrdenados[j].año > librosOrdenados[j + 1].año) {
          [librosOrdenados[j], librosOrdenados[j + 1]] = [librosOrdenados[j + 1], librosOrdenados[j]];
        }
      }
    }
  
    console.log(`📚 Libros ordenados por ${criterio}:`, librosOrdenados);
  }
  
  // 4.
  function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
      const eliminado = libros.splice(index, 1)[0];
      console.log("🗑️ Libro eliminado:", eliminado);
    } else {
      console.log("❌ No se encontró un libro con ese ID.");
    }
  }
  
  // ========
// PASO 3 
// ========

// 1. 
function registrarUsuario(nombre, email) {
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: nombre,
      email: email.toLowerCase().trim(),
      librosPrestados: []
    };
    usuarios.push(nuevoUsuario);
    console.log("👤 Usuario registrado:", nuevoUsuario);
  }
  
  // 2. 
  function mostrarTodosLosUsuarios() {
    console.log("📋 Lista de usuarios:", usuarios);
  }
  
  // 3. Buscar usuario por email
  function buscarUsuario(email) {
    const usuario = usuarios.find(u => u.email === email.toLowerCase().trim());
    if (usuario) {
      console.log("🔍 Usuario encontrado:", usuario);
      return usuario;
    } else {
      console.log("❌ No se encontró un usuario con ese email.");
      return null;
    }
  }
  
  // 4. 
  function borrarUsuario(nombre, email) {
    const index = usuarios.findIndex(u => u.nombre === nombre && u.email === email.toLowerCase().trim());
    if (index !== -1) {
      const eliminado = usuarios.splice(index, 1)[0];
      console.log("🗑️ Usuario eliminado:", eliminado);
    } else {
      console.log("❌ Usuario no encontrado.");
    }
  }
  
// ========
// PASO 4 
// ========

// 1. 
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
  
    if (!libro) {
      console.log("❌ No se encontró el libro con ese ID.");
      return;
    }
  
    if (!usuario) {
      console.log("❌ No se encontró el usuario con ese ID.");
      return;
    }
  
    if (!libro.disponible) {
      console.log("⚠️ El libro ya está prestado.");
      return;
    }
  
    libro.disponible = false;
    usuario.librosPrestados.push(libro.id);
    console.log(`📚 El libro "${libro.titulo}" fue prestado a ${usuario.nombre}.`);
  }
  
  // 2. 
  function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
  
    if (!libro) {
      console.log("❌ No se encontró el libro con ese ID.");
      return;
    }
  
    if (!usuario) {
      console.log("❌ No se encontró el usuario con ese ID.");
      return;
    }
  
    if (libro.disponible) {
      console.log("⚠️ El libro ya estaba disponible.");
      return;
    }
  
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
    console.log(`✅ El libro "${libro.titulo}" fue devuelto por ${usuario.nombre}.`);
  }
  

 // ========
// PASO 5 
// ========

function generarReporteLibros() {
    console.log("📊 Generando reporte...");
  
    // 1.
    const totalLibros = libros.length;
  
    // 2. 
    const librosPrestados = libros.filter(libro => !libro.disponible);
    const cantidadPrestados = librosPrestados.length;
  
    // 3. 
    const librosPorGenero = libros.reduce((acc, libro) => {
      acc[libro.genero] = (acc[libro.genero] || 0) + 1;
      return acc;
    }, {}); 
  
    // 4. 
    const libroMasAntiguo = libros.reduce((min, libro) => libro.año < min.año ? libro : min);
    const libroMasNuevo = libros.reduce((max, libro) => libro.año > max.año ? libro : max);
  
    console.log(`📚 Total de libros: ${totalLibros}`);
    console.log(`📕 Libros prestados: ${cantidadPrestados}`);
    console.log("📂 Libros por género:", librosPorGenero);
    console.log(`📖 Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.año})`);
    console.log(`📘 Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.año})`);
  }
  
//generarReporteLibros();

// ========
// PASO 6 
// ========

function librosConPalabrasEnTitulo() {
    const librosValidos = libros.filter(libro => {
      const titulo = libro.titulo;
  
      
      const tieneVariasPalabras = titulo.trim().split(" ").length > 1;
  
      
      const tieneNumeros = /\d/.test(titulo);
  
      
      const tieneCaracteresEspeciales = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(titulo);
  
      return tieneVariasPalabras && !tieneNumeros && !tieneCaracteresEspeciales;
    });
  
    const titulos = librosValidos.map(libro => libro.titulo);
  
    console.log("📖 Títulos válidos con más de una palabra (sin números ni caracteres especiales):", titulos);
  }
  
//librosConPalabrasEnTitulo();

// ========
// PASO 7 
// ========

function calcularEstadisticas() {
    const años = libros.map(libro => libro.año);
  
    // 1. 
    const suma = años.reduce((acc, año) => acc + año, 0);
    const promedio = (suma / años.length).toFixed(2);
  
    // 2.
    const contador = {};
    años.forEach(año => {
      contador[año] = (contador[año] || 0) + 1;
    });
  
    let añoMasFrecuente = null;
    let maxRepeticiones = 0;
    for (let año in contador) {
      if (contador[año] > maxRepeticiones) {
        maxRepeticiones = contador[año];
        añoMasFrecuente = año;
      }
    }
  
    // 3. 
    const añoMin = Math.min(...años);
    const añoMax = Math.max(...años);
    const diferencia = añoMax - añoMin;
  
    console.log("📅 Estadísticas de años de publicación:");
    console.log("👉 Años:", años);
    console.log(`📊 Promedio de publicación: ${promedio}`);
    console.log(`🔁 Año más frecuente: ${añoMasFrecuente} (${maxRepeticiones} veces)`);
    console.log(`📉 Diferencia entre el más antiguo (${añoMin}) y el más nuevo (${añoMax}): ${diferencia} años`);
  }
  
 //calcularEstadisticas();

 // ========
// PASO 8 
// ========

function normalizarDatos() {
    // 1. 
    libros.forEach(libro => {
      libro.titulo = libro.titulo.toUpperCase();
    });
  
    // 2. 
    libros.forEach(libro => {
      libro.autor = libro.autor.trim();
    });
  
    // 3. 
    usuarios.forEach(usuario => {
      usuario.email = usuario.email.toLowerCase().trim();
    });
  
    console.log("✅ Datos normalizados correctamente.");
    console.log("📚 Libros:", libros);
    console.log("👥 Usuarios:", usuarios);
  }
  
  // normalizarDatos();

  // ========
// PASO 9 
// ========

function menuPrincipal() {
    let opcion;
  
    do {
      opcion = prompt(
        "📚 Bienvenido al Sistema de Biblioteca\n\n" +
        "1. Agregar libro\n" +
        "2. Buscar libro\n" +
        "3. Ordenar libros\n" +
        "4. Borrar libro\n" +
        "5. Registrar usuario\n" +
        "6. Mostrar usuarios\n" +
        "7. Buscar usuario\n" +
        "8. Borrar usuario\n" +
        "9. Prestar libro\n" +
        "10. Devolver libro\n" +
        "11. Generar reporte\n" +
        "12. Libros con palabras en el título\n" +
        "13. Estadísticas\n" +
        "14. Normalizar datos\n" +
        "0. Salir"
      );
  
      switch (opcion) {
        case "1":
          const id = parseInt(prompt("ID del libro:"));
          const titulo = prompt("Título:");
          const autor = prompt("Autor:");
          const anio = parseInt(prompt("Año:"));
          const genero = prompt("Género:");
          agregarLibro(id, titulo, autor, anio, genero);
          break;
  
        case "2":
          const criterio = prompt("Buscar por: titulo / autor / genero");
          const valor = prompt("Valor a buscar:");
          buscarLibro(criterio, valor);
          break;
  
        case "3":
          const orden = prompt("Ordenar por: titulo / año");
          ordenarLibros(orden);
          break;
  
        case "4":
          const idBorrar = parseInt(prompt("ID del libro a borrar:"));
          borrarLibro(idBorrar);
          break;
  
        case "5":
          const nombre = prompt("Nombre del usuario:");
          const email = prompt("Email del usuario:");
          registrarUsuario(nombre, email);
          break;
  
        case "6":
          mostrarTodosLosUsuarios();
          break;
  
        case "7":
          const emailBuscar = prompt("Email a buscar:");
          buscarUsuario(emailBuscar);
          break;
  
        case "8":
          const nombreBorrar = prompt("Nombre del usuario:");
          const emailBorrar = prompt("Email del usuario:");
          borrarUsuario(nombreBorrar, emailBorrar);
          break;
  
        case "9":
          const idLibroPrestamo = parseInt(prompt("ID del libro a prestar:"));
          const idUsuarioPrestamo = parseInt(prompt("ID del usuario:"));
          prestarLibro(idLibroPrestamo, idUsuarioPrestamo);
          break;
  
        case "10":
          const idLibroDevolver = parseInt(prompt("ID del libro a devolver:"));
          const idUsuarioDevolver = parseInt(prompt("ID del usuario:"));
          devolverLibro(idLibroDevolver, idUsuarioDevolver);
          break;
  
        case "11":
          generarReporteLibros();
          break;
  
        case "12":
          librosConPalabrasEnTitulo();
          break;
  
        case "13":
          calcularEstadisticas();
          break;
  
        case "14":
          normalizarDatos();
          break;
  
        case "0":
          alert("¡Gracias por usar la biblioteca! 👋");
          break;
  
        default:
          alert("⚠️ Opción no válida.");
      }
  
    } while (opcion !== "0");
  }
  
  menuPrincipal();