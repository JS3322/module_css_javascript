async function doMath() {
    const math = await import("./calculator_variable");
    math.plus(2, 3);
}
btn.addEventListener("click", doMath);