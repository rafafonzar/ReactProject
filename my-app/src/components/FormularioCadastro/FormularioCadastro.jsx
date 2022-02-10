import React, { Component } from "react";
import "./FormularioCadastro.css"

export class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input 
        type="text" 
        placeholder="Titulo"
        className="form-cadastro_input" />
        <textarea 
        rows={15}
        placeholder="Escreva sua nota...">

        </textarea>
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro