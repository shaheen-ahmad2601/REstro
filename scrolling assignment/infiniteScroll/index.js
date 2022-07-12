let container = document.getElementById("container");
function get_Data(set) {
  for (let i = set; i < set + 25; i++) {
    let name = document.createElement("h3");
    name.setAttribute("id", "name");
    name.innerText = `Masai Student ${i}`;
    container.append(name);
  }
}
get_Data(1);

// setting infinite scrolling
let s = 1;
container.addEventListener("scroll", () => {
  console.log(
    container.scrollTop,
    container.clientHeight,
    container.scrollHeight
  );

  if (
    container.scrollHeight - Math.abs(container.scrollTop) <=
    container.clientHeight
  ) {
    get_Data(s++ * 25 + 1);
  }
});
