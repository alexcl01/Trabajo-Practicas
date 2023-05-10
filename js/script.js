function generar(){
	var nombre = ["Adriana", "Agustín", "Alberto", "Alejandra", "Aegon", "Alonso", "Alysanne", "Andrés Felipe", "Ángela", "Anthony", "Antonio", "Arya", "Bart", "Benigno", 
	"Ben", "Benjamín", "Carlos", "Carlos Alberto", "Carlos Eduardo", "Ceryse", "César", "Cristóbal", "Daemon", "Daniel", "David", "Diego", "Dylan", "Eduardo", 
	"Emiliano", "Emmanuel", "Enrique", "Erik", "Ernesto", "Ethan", "Fabián", "Facundo", "Felipe", "Félix", "Felisa", "Francisco", "Francisco Javier", 
	"Gabriel", "Gaspar", "Gustavo Adolfo", "Hugo", "Ian", "Iker", "Isaac", "Jacaerys", "Jacob", "Jaehaerys", "Javier", "Jayden", "Jeremy", "Jerónimo", "Jesús", 
	"Joaquín", "Jorge", "Jorge Luis", "Josefa", "José Antonio", "José Daniel", "José David", "José Francisco", "José Gregorio", "José Luis", "José Manuel", 
	"José Pablo", "Josué", "Juana", "Juan Ángel", "Juan Carlos", "Juan David", "Juan Esteban", "Juan Ignacio", "Juan José", "Juan Manuel", "Juan Pablo", "Julio", 
	"Julio Cesar", "Justin", "Kevin", "Lautaro", "Liam", "Lian", "Lorenzo", "Lucas", "Luis", "Luis Alberto", "Luisa", "Luis Fernando", "Maegor", "Manuel", 
	"Marco Antonio", "Margeary", "Mario", "Martín", "Mateo", "Matías", "Maykel", "Miguel", "Miguel Ángel", "Nelson", "Noah", "Oscar", "Pablo", "Pedro", "Rafaela", "Ramón", 
	"Raquel", "Rhaenyra", "Ricardo", "Rigoberto", "Roberto", "Rolando", "Samuel", "Sansa", "Santiago", "Santino", "Santos", "Sebastián", "Thiago", "Tomás", 
	"Valentina", "Vicente", "Victoria", "Víctor Hugo", "Visenya"];

	var apellido = ["Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin", "Jimenez", "Ruiz", "Hernandez", "Mormont", "Diaz", "Moreno", 
	"Alvarez", "Muñoz", "Romero", "Bolton", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez", "Vazquez", "Ramos", "Gil", "Tyrell", "Ramirez", "Serrano", "Blanco", "Suarez", "Molina", 
	"Morales", "Ortega", "Lannister", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez", "Iglesias", "Medina", "Garrido", "Santos", "Castillo", "Cortes", "Lozano", "Guerrero", 
	"Cano", "Prieto", "Mendez", "Calvo", "Cruz", "Gallego", "Vidal", "Leon", "Herrera", "Marquez", "Peña", "Cabrera", "Flores", "Campos", "Vega", "Diez", "Tully", "Fuentes", "Carrasco", 
	"Caballero", "Martell", "Nieto", "Reyes", "Aguilar", "Pascual", "Herrero", "Santana", "Stark", "Lorenzo", "Hidalgo", "Montero", "Ibañez", "Gimenez", "Ferrer", "Duran", "Vicente", "Benitez", 
	"Mora", "Santiago", "Arryn", "Arias", "Vargas", "Carmona", "Crespo", "Roman", "Pastor", "Soto", "Saez", "Velasco", "Soler", "Moya", "Esteban", "Parra", "Bravo", "Gallardo", "Rojas", 
	"Pardo", "Merino", "Velaryon", "Espinosa", "Izquierdo", "Lara", "Rivas", "Silva", "Rivera", "Casado", "Arroyo", "Redondo", "Camacho", "Rey", "Vera", "Otero", "Luque", "Galan", 
	"Montes", "Rios", "Sierra", "Segura", "Carrillo", "Marcos", "Marti", "Soriano", "Mendoza", "Targaryen"];

	var carrera = ["Ingeniería Informática", "Ingeniería de Telecomunicaciones", "Economía", "Ingeniería Industrial", "Administración de Empresas", "Matemáticas", "Ingeniería del Software"];

	var proyecto = ["PI-3000017324 - Apertura Oficina Luxemburgo", "PI-3000019767 - Adecuación Edificio Polivalente", "PI-3000021398 - Site in a Box - CyrusOne", 
	"PI-3000016991 - Elevación de Racks de Singapur", "PI-30000181690 - Reparación de Equipos - La Haya", "PI-3000019824 - Renovación Tecnológica - Bolivia",
	"PI-3000023401 - Cierre de Oficina de Brasil", "PI-3000027001 - Adecuación Oficina Indonesia", "PI-3000024519 - Gestión Documental - Mexico"];

	var rama = ["Site in a Box", "Infraestructura", "Aplicación Tecnológica", "Migraciones de Datos"];

	var rand_nombre = Math.floor(Math.random() * nombre.length); 
	var rand_apellido = Math.floor(Math.random() * apellido.length); 
	var rand_carrera = Math.floor(Math.random() * carrera.length);
	var rand_proyecto = Math.floor(Math.random() * proyecto.length);
	var rand_rama = Math.floor(Math.random() * rama.length);


	document.getElementById('result').innerHTML = "<h1>Nombre:</h1><div class='alert alert-success'><h2>"
			+ "Nombre Completo: <br>" + nombre[rand_nombre] + " " + apellido[rand_apellido] + "<br><br>"
			+ "Carrera Universitaria: <br>" + carrera[rand_carrera] + "<br><br>"
			+ "Proyecto Actual: <br>" + proyecto[rand_proyecto] + "<br><br>"
			+ "Rama de TI: <br>" + rama[rand_rama] + "</h2></div>";
}