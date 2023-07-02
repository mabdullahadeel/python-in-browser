const runBtn = document.getElementById("run-btn");
const clearBtn = document.getElementById("clear-btn");
const textarea = document.getElementById("python-source");
const outputArea = document.getElementById("output-log");

async function main() {
  let pyodide = await loadPyodide({
    indexUrl: "https://cdn.jsdelivr.net/pyodide/v0.23.3/full/",
    stdout: (s) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = `>> ${s}`;
      outputArea.appendChild(paragraph);
    },
    stderr: (s) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = `>> ${s}`;
      outputArea.appendChild(paragraph);
    },
  });

  runBtn?.addEventListener("click", () => {
    console.log("run");
    outputArea.innerHTML = "";
    const code = textarea.value;
    pyodide.runPython(code);
  });

  clearBtn?.addEventListener("click", () => {
    outputArea.innerHTML = "";
  });
}
main();
