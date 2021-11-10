function ConverterAnoLuz() {
  var valorKilometros = document.getElementById("valor")
  var kilometros = parseFloat(valorKilometros.value)
  var velocidadeLuz = kilometros*1.0570008340247*(10**-13)
  document.getElementById("valorConvertido").innerHTML = "O valor em anos-luz é " + velocidadeLuz
}