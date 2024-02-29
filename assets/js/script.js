const selectedTop = document.getElementById("tempTop");
const selectedBottom = document.getElementById("tempBottom");

const inputBottom = document.getElementById("tempBottom-input");

function calcular(optionTop, optionBottom, inputTop) {
  //Verifica as opções escolhidas para realização a conversão com base na função de cada conversão
  if (optionTop == "celsius") {
    if (optionBottom == "fahrenheit") {
      return inputTop * (9 / 5) + 32;
    } else if (optionBottom == "kelvin") {
      return inputTop + 273.15;
    }
  } else if (optionTop == "fahrenheit") {
    if (optionBottom == "celsius") {
      return (inputTop - 32) * (5 / 9);
    } else if (optionBottom == "kelvin") {
      return (inputTop - 32) * (5 / 9) + 273.15;
    }
  } else if (optionTop == "kelvin") {
    if (optionBottom == "celsius") {
      return inputTop - 273.15;
    } else if (optionBottom == "fahrenheit") {
      return (inputTop - 273.15) * (5 / 9) + 32;
    }
  }
}

function print(resultTemp) {
  inputBottom.value = resultTemp;
}

document.getElementById("calcular").addEventListener("click", () => {
  const erroNull = document.getElementsByClassName("erro-null")[0];
  const erroCampus = document.getElementsByClassName("erro-campus")[0];
  const optionTop = selectedTop.options[selectedTop.selectedIndex].value;
  const optionBottom =
    selectedBottom.options[selectedBottom.selectedIndex].value;

  const inputTop = parseFloat(document.getElementById("tempTop-input").value);

  erroNull.style.display = "none";
  erroCampus.style.display = "none";

  //Verifica se o campo de input está vazio e se o valor digitado é um número

  if (isNaN(inputTop)) {
    erroNull.style.display = "flex";
  } else {
    //Verifica se as opções de conversões não são iguais
    if (optionTop !== optionBottom) {
      const resultTemp = calcular(optionTop, optionBottom, inputTop);
      print(resultTemp);
    } else {
      erroCampus.style.display = "block";
    }
  }
});
