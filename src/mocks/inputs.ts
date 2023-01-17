export const inputs: any[] = [
  [
    {
      type: "single-input",
      name: "name",
      label: "Nome",
      inputType: "text",
      vModelName: "name",
      placeHolder: "Insira aqui o seu nome",
    },
    {
      type: "single-input",
      name: "name",
      label: "Nome",
      inputType: "text",
      vModelName: "lastName",
      placeHolder: "Insira aqui o seu nome",
    },
    {
      type: "inline-inputs",
      label: "Outra coisa",
      inputs: [
        {
          name: "date",
          inputType: "date",
          vModelName: "date",
          placeHolder: "Insira aqui a data",
        },
        {
          name: "something",
          inputType: "text",
          vModelName: "something",
          placeHolder: "Insira aqui something",
        },
      ],
    },
  ],
  [
    {
      type: "single-input",
      name: "name",
      label: "Nome",
      inputType: "text",
      vModelName: "name",
      placeHolder: "Insira aqui o seu nome",
    },
    {
      type: "inline-inputs",
      label: "Outra coisa",
      inputs: [
        {
          name: "date",
          inputType: "date",
          vModelName: "date",
          placeHolder: "Insira aqui a data",
        },
        {
          name: "something",
          inputType: "text",
          vModelName: "something",
          placeHolder: "Insira aqui something",
        },
      ],
    },
  ],
];
