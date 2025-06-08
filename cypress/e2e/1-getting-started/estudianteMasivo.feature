Feature: Cargar formulario de estudiantes Masivamente

  Scenario Outline: Cargar Masivamente formulario estudiantes
    Given Abrir el formulario de estudiante
    When cargo nombre "<nombre>"
    And cargo apellido "<apellido>"
    And cargo email "<email>"
    And cargo genero "<genero>"
    And cargo celular "<celular>"
    And cargo fechaNacimiento "<fechaNacimiento>"
    And cargo materia "<materia>"
    And cargo imagen "<imagen>"
    And cargo direccion "<direccion>"
    And cargo estado "<estado>"
    And cargo ciudad "<ciudad>"
    Then el sistema crea el estudiante en el sistema

  Examples:
    | nombre | apellido | email              | genero | celular    | fechaNacimiento | materia | imagen    | direccion       | estado | ciudad |
    | Cesar  | Narvaez  | cnarvaez@gmail.com | Male   | 3124567894 | 15 May 1995     | Maths   | img1.jpg  | av boyaca 10 12 | NCR    | Delhi  |
    | Pedro  | Alvarez  | pedro@gmail.com    | Male   | 3124567894 | 15 May 1995     | Maths   | img1.jpg  | av boyaca 10 12 | NCR    | Delhi  |
