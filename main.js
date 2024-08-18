
const textbox = document.getElementById("textbox");
const cel = document.getElementById("tocelcius");
const fah = document.getElementById("tofahrenheit");
const ans = document.getElementById("ans");
let temp;

function convert()
{
    temp = Number(textbox.value);
    if(cel.checked)
    {
        temp = (temp - 32) * 5 / 9;
        ans.textContent = `The answer is ${temp.toFixed(2)}°C`;
    }

    else if(fah.checked)
    {
        temp = temp * 9 / 5 + 32;
        ans.textContent = `The answer is ${temp.toFixed(2)}°F`;
    }

    else 
    {
        ans.textContent = "Please select a unit";
    }
}