import React from 'react';

class Registro extends React.Component {

    render() {
        return (
            <div className="formulario">
                <form>
                    <table>
                        <tr>
                            <td>Tipo</td>
                            <td> <select className="form-control margin-inputs" name="Tipo" required>
                                <option value="" selected disabled hidden></option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="otro">Otro</option>
                            </select>
                            </td>
                        </tr>
                        <tr >
                            <td>Nombre</td>
                            <td><input type="text" name="Nombre" className="margin-inputs" /></td>


                        </tr>
                        <tr>
                            <td>Barrio</td>
                            <td><input type="text" name="Barrio" className="margin-inputs" required /></td>
                        </tr>
                        <tr>
                            <td>Raza</td>
                            <td><input type="text" name="Raza" required className="margin-inputs" /></td>

                        </tr>
                        <tr>
                            <td>Sexo</td>
                            <td><select className="form-control margin-inputs" name="Sexo" required >
                                <option value="" selected disabled hidden></option>
                                <option value="Hembra">Hembra</option>
                                <option value="Macho">Macho</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Edad</td>
                            <td><input type="text" name="Edad" required className="margin-inputs" /></td>
                        </tr>
                        <tr>
                            <td>Pelaje</td>
                            <td><input type="Text" name="Pelaje" required className="margin-inputs" /></td>
                        </tr>
                        <tr>
                            <td>Color de ojos</td>
                            <td><input type="Text" name="Ojos" required className="margin-inputs" /></td>
                        </tr>
                        <tr>
                            <td>Descripcion del animal</td>
                            <td><input type="Text" name="Descripcion" required className="margin-inputs" /></td>
                        </tr>
                        <tr>
                            <td>Datos de contacto:</td>
                        </tr>
                        <tr>
                            <td>Nombre completo</td>
                            <td><input type="Text" name="Nombre de contacto" required className="margin-inputs" /></td>
                        </tr>
                        <tr>
                            <td>Telefono</td>
                            <td><input type="tel" name="Telefono de contacto" required className="margin-inputs" /></td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td><input type="email" name="email" required className="margin-inputs" /></td>
                        </tr>
                    </table>
                    <input className="btn btn-success btn-enviar" type="submit" value="Enviar"/>
        </form>
    </div>

                );
              }
            }
            
            
            export default Registro;
