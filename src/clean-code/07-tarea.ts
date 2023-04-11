(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';
 
  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes {
      constructor(
          public value: string,
          public placeholder: string,
      ) {}
  }

  class InputEvents {
      constructor() {}

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }


  //? Idea para la nueva clase InputElement
  // En este caso habría que pasar las instancias de las clases como referencia...
  // Ya sabemos el problema de las referencias, cuidado...
  // class InputElement {
  //   constructor(
  //     public html: HtmlElement,
  //     public attributes: InputAttributes,
  //     public events: InputEvents
  //   ) {}
  // }
  class InputElement {
    public html: HtmlElement
    public attributes: InputAttributes
    public events: InputEvents
    
    constructor(
      value: string,
      placeholder: string,
      id: string
    ) {
      this.html = new HtmlElement(id, 'input')
      this.attributes = new InputAttributes(value, placeholder)
      this.events = new InputEvents()
    }
  }

  // const nameField = new InputEvents('Adolfo', 'Enter first name', 'txtName');
  const nameField = new InputElement('Adolfo', 'Enter first name', 'txtName');

  console.log({ nameField });

})()
