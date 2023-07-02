const runBtn = document.getElementById("run-btn");
const clearBtn = document.getElementById("clear-btn");
const textarea = document.getElementById("python-source");
// const outputArea = document.getElementById("output-log");

async function main() {
  const terminal = new Terminal();
  let pyodide = await loadPyodide({
    indexUrl: "https://cdn.jsdelivr.net/pyodide/v0.23.3/full/",
    stdout: (s) => {
      terminal.write(`>> ${s}\r\n`);
      //   const paragraph = document.createElement("p");
      //   paragraph.innerHTML = `>> ${s}`;
      //   outputArea.appendChild(paragraph);
    },
    stderr: (s) => {
      terminal.write(`>> ${s}\r\n`);
    },
  });
  terminal.open(document.getElementById("terminal"));

  runBtn?.addEventListener("click", () => {
    console.log("run");
    const code = textarea.value;
    pyodide.runPython(code);
  });

  clearBtn?.addEventListener("click", () => {
    console.log("clear");
    terminal.clear();
  });
}
main();
