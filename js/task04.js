 // Write code under this line
  class StringBuilder {
      constructor (_value) {
          this._value=_value;
      }
      append(value){          
        this._value+=value
      }
      
      prepend(value){
        this._value= value + this._value
      }
      pad(value){
        this.prepend(value);
        this.append(value);
      }
      get value() {
        return this._value
    }
  }

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
