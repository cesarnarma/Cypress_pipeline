Feature: Cargar formulario de estudiantes

    Feature Description: realiza el llenado completo del formulario de estudiantes

    Scenario: Cargar campos formulario estudiantes
    Given Abrir el navegador
    When carga todos los campos del formulario y guardo
    Then el sistema crea el estudiante en el sistema