# Componente Textapp Doc 
###### Este componente recibe las siguienets props:
1. **size**: Tamaño de fuente.
2. **weigth**: Tipo de letra = bold, normal, etc...
3. **styles**: Recibe un objeto de estilos por si se necesitan estilos extra.
4. **text**: Recibe el texto que se renderizara.

**Props obligatorias**
1. ✅text

**Formas de uso**
Si no se envia ninguna de las siguientes props el componente tomara los valores por default de las siguienets props.
1. **size**: 20
2. **weight**:"normal"
3. **styles**: {}
###### Ejemplo de uso sin props:
```
    <Textapp text = {'Hola mundo'}/>

```
###### Ejemplo enviado props:
```
    <Textapp
        size = {20}
        weight = 'normal' 
        text = {'Hola mundo'}
    />
```
Si neceitas estilos adicioales a los establecidos mandar la props styles.
###### Ejemplo:
```
    <Textapp
        size = {20}
        weight = 'normal'
        styles = {{marginTop: 10, color:'pink'}} //Envia cunatos estilos necestes
        text = {'Hola mundo'}
    />
```
# Componente Doc TextInputApp
###### Este componente recibe las siguienets props:

1. **onChange**: función para modificar el state del componente padre.
2. **value**: valor que tomara el TextInput despues de actualizar el state del componente padre.

**Props obligatorias**
1. ✅onChage
2. ✅value

**Formas de uso**
Para utilizar correctamente este componente hay que enviarle una función para actualizar el state del componenet padre.

###### Ejemplo:
```
const componentePadre = () => {
    const [textoDeInput, setTextoDeInput] = useState('');

    return (
        <TextInputApp 
            value = { textoDeInput }
            onChange = { (texto) => setTextoDeInput( texto )}
        />
    )
}
```
**La prop onChange** recibe un callback para actualizar el estado del componentePadre
