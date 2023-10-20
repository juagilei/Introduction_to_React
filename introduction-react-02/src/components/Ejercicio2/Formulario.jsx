import { useState } from "react"

// creo un componente controlado llamado Formulario
// es un componente controlado por que esta controlado por el estado (useState) de react


export default function Formulario () {
// defino las variables como variables de estado.
const[form, setForm] = useState({
    name: '',
    email: '',
    message: ''
})
// definimos la función que actua en el cambio de datos (setForm)
const handleInputChange=(event)=>{
    // defino las variable que va a recibir setForm 
    // en este caso como es un array con tres elementos [name, email, message
    // defino el nombre del elemento y su valor e indico que es un evento tarjet,
    // o sea target por que hay varios elementos y se indicara cual es can cada momento por eso target

    const{name, value}=event.target
    // actualizo el form importando todo el array (...form) y 
    // dando valor al elemento que indico ([name]: value)
    setForm({...form,[name]:value})
}
// implementamos la función de submit donde se maneja el envio de datos
const handleSubmit=(event)=>{
    // Prevenimos el comportamiento de submit
    // Cuando el evento no sea correcto, submit no envia el formulario para eso usamos (event.preventDefault())
    event.preventDefault()
    // Podemos añadir alertas de concola para ver que funciona bien.
    alert('Datos del formulario:', form)
    console.log('Datos del formulario:', form)

}

//  Pasamos al render, lo que queremos que devuelva la función  ver por pantalla
   return(
//  Defino el formulario como tipo onsubmit
// Dentro defino los inputs poniendo un label a cada uno y definendo cada input.
// Los inouts los defino con type= 'text', 
// name el nombre de cada elemento del array form ('name', 'email', 'message')
// y finalmente la parte onChange que es el cambio donde llama a la función handleInputChange
// finalmente declaro un boton submit para hacer el envio
    <div>
        <h2>Forlmulario a rellenar</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="name" value={form.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={form.email} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Mensaje:</label>
                <input type="text" name="message" value={form.message} onChange={handleInputChange}/>
            </div>
            <button type='submit' name='boton'>Enviar</button>
        </form>
    </div>
    
   )
}