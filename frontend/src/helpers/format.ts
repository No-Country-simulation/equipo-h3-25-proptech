export const isRoleValid = (value: string) => {
  return value === "INVERSOR" 
      || value === "COMPRADOR" 
      || value === "AHORRADOR" 
    ? "" : "El tipo de usuario no es válido";

}

export const isValidZipCode = (value: string) => {
  const numericRegex = /^[0-9]+$/;
  return !numericRegex.test(value) ? "El código postal solo debe contener numeros" : "";
}

export const isCountryValid = (value: string) => {
  return value === "Argentina" 
      || value === "Colombia" 
      || value === "Brasil" 
      || value === "Chile" 
      || value === "Venezuela" 
      || value === "Peru" 
      || value === "Bolivia" 
      || value === "Paraguay" 
      || value === "Uruguay"
    ? "" : "El país no es válido";
}
