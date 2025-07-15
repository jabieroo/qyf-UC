const ramos = [
  // Primer año
  { id: "qg1", nombre: "Química general I", requisitos: [], abre: ["qg2"], semestre: 1 },
  { id: "mundo", nombre: "El mundo de los medicamentos", requisitos: [], abre: ["botanica"], semestre: 1 },
  { id: "precalculo", nombre: "Precálculo", requisitos: [], abre: ["calculo1"], semestre: 1 },
  { id: "intro", nombre: "Introducción a las ciencias farmacéuticas", requisitos: [], abre: [], semestre: 1 },
  { id: "labqg1", nombre: "Laboratorio de química general I", requisitos: [], abre: [], semestre: 1 },
  { id: "electivo1", nombre: "Electivo", requisitos: [], abre: [], semestre: 1 },

  { id: "qg2", nombre: "Química general II", requisitos: ["qg1"], abre: ["botanica", "qo1", "qa1", "qf"], semestre: 2 },
  { id: "calculo1", nombre: "Cálculo I", requisitos: ["precalculo"], abre: ["estadistica", "qf"], semestre: 2 },
  { id: "fisica", nombre: "Física para ciencias", requisitos: [], abre: ["qf"], semestre: 2 },
  { id: "electivo2", nombre: "Electivo", requisitos: [], abre: [], semestre: 2 },
  { id: "electivo3", nombre: "Electivo", requisitos: [], abre: [], semestre: 2 },

  // Segundo año
  { id: "botanica", nombre: "Botánica y farmacognosia", requisitos: ["mundo", "qg2"], abre: [], semestre: 3 },
  { id: "qo1", nombre: "Química orgánica I", requisitos: ["qg2"], abre: ["qo2"], semestre: 3 },
  { id: "estadistica", nombre: "Estadística para QF", requisitos: ["calculo1"], abre: ["qa1"], semestre: 3 },
  { id: "bio", nombre: "Biología de la célula", requisitos: [], abre: ["fisio"], semestre: 3 },
  { id: "electivo4", nombre: "Electivo", requisitos: [], abre: [], semestre: 3 },

  { id: "qo2", nombre: "Química orgánica II", requisitos: ["qo1"], abre: ["labqo", "bioq"], semestre: 4 },
  { id: "qa1", nombre: "Química analítica I", requisitos: ["estadistica", "qg2"], abre: ["ai"], semestre: 4 },
  { id: "fisio", nombre: "Fisiología", requisitos: ["bio"], abre: ["micro", "fisioPat"], semestre: 4 },
  { id: "electivo5", nombre: "Electivo", requisitos: [], abre: [], semestre: 4 },
  { id: "electivo6", nombre: "Electivo", requisitos: [], abre: [], semestre: 4 },

  // Tercer año
  { id: "labqo", nombre: "Laboratorio de química orgánica", requisitos: ["qo2"], abre: ["fq1"], semestre: 5 },
  { id: "bioq", nombre: "Bioquímica", requisitos: ["qo2"], abre: ["micro", "bioqClin", "farm1"], semestre: 5 },
  { id: "qf", nombre: "Química-Física", requisitos: ["qg2", "calculo1", "fisica"], abre: ["farmacoK", "fq1"], semestre: 5 },
  { id: "fisioPat", nombre: "Fisiopatología", requisitos: ["fisio"], abre: ["farm1", "bioqClin"], semestre: 5 },
  { id: "analisis", nombre: "Análisis Instrumental", requisitos: ["qa1"], abre: ["tecfarma1"], semestre: 5 }, 

  { id: "micro", nombre: "Microbiología e inmunología", requisitos: ["bioq", "fisio"], abre: [], semestre: 6 },
  { id: "farm1", nombre: "Farmacología I", requisitos: ["bioq", "fisioPat"], abre: ["farm2", "saludPublica"], semestre: 6 },
  { id: "fq1", nombre: "Fármaco-química I", requisitos: ["labqo", "qf"], abre: ["fq2", "legislacion"], semestre: 6 },
  { id: "farmacoK", nombre: "Farmacocinética y Biofarmacia", requisitos: ["qf"], abre: ["tecfarma1"], semestre: 6 },
  { id: "electivo7", nombre: "Electivo", requisitos: [], abre: [], semestre: 6 },

  // Cuarto año
  { id: "bioqClin", nombre: "Bioquímica clínica", requisitos: ["bioq", "fisioPat"], abre: [], semestre: 7 },
  { id: "farm2", nombre: "Farmacología II", requisitos: ["farm1"], abre: ["farm3", "farmaciaClinica"], semestre: 7 },
  { id: "fq2", nombre: "Fármaco-química II", requisitos: ["fq1"], abre: ["toxico", "fq3", "farmaciaClinica", "tecfarma2"], semestre: 7 },
  { id: "tecfarma1", nombre: "Tecnología farmacéutica I", requisitos: ["farmacoK"], abre: ["tesis", "practica1", "tecfarma2"], semestre: 7 },
  { id: "electivo8", nombre: "Electivo", requisitos: [], abre: [], semestre: 7 },

  { id: "toxico", nombre: "Toxicología", requisitos: ["fq2"], abre: [], semestre: 8 },
  { id: "tesis", nombre: "Tesis", requisitos: ["tecfarma1"], abre: [], semestre: 8 },

  // Quinto año
  { id: "farm3", nombre: "Farmacología III", requisitos: ["farm2"], abre: [], semestre: 9 },
  { id: "fq3", nombre: "Fármaco-química III", requisitos: ["fq2"], abre: ["farmaciaPrivada"], semestre: 9 },
  { id: "farmaciaClinica", nombre: "Farmacia clínica y Atención farmacéutica", requisitos: ["farm2", "fq2"], abre: ["internado"], semestre: 9 },
  { id: "tecfarma2", nombre: "Tecnología farmacéutica II", requisitos: ["tecfarma1", "fq2"], abre: [], semestre: 9 },
  { id: "opr1", nombre: "OPR", requisitos: [], abre: [], semestre: 9 },
  { id: "practica1", nombre: "Práctica profesional I", requisitos: ["tecfarma1"], abre: ["practica2"], semestre: 9 },

  { id: "saludPublica", nombre: "Salud pública para QF", requisitos: ["farm1"], abre: [], semestre: 10 },
  { id: "internado", nombre: "Internado clínico", requisitos: ["farmaciaClinica"], abre: [], semestre: 10 },
  { id: "farmaciaPrivada", nombre: "Farmacia privada", requisitos: ["fq3"], abre: [], semestre: 10 },
  { id: "legislacion", nombre: "Legislación y Deontología farmacéutica", requisitos: ["fq1"], abre: [], semestre: 10 },
  { id: "opr2", nombre: "OPR", requisitos: [], abre: [], semestre: 10 },
  { id: "opr3", nombre: "OPR", requisitos: [], abre: [], semestre: 10 },
  { id: "practica2", nombre: "Práctica profesional II", requisitos: ["practica1"], abre: [], semestre: 10 },
];

const ramosMap = {};
const totalSemestres = 10;

for(let i = 1; i <= totalSemestres; i++) {
  const container = document.getElementById(`semestre${i}`);
  if (!container) continue;
  ramos
    .filter(r => r.semestre === i)
    .forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = ramo.id;
      div.textContent = ramo.nombre;
      if (ramo.requisitos.length > 0) div.classList.add("bloqueado");
      div.addEventListener("click", () => aprobarRamo(ramo.id));
      container.appendChild(div);
      ramosMap[ramo.id] = { ...ramo, div, aprobado: false };
    });
}

function aprobarRamo(id) {
  const ramo = ramosMap[id];
  if (ramo.requisitos.some(req => !ramosMap[req].aprobado)) return; // bloqueado
  if (ramo.aprobado) return; // ya aprobado
  ramo.aprobado = true;
  ramo.div.classList.remove("bloqueado");
  ramo.div.classList.add("aprobado");
  // Desbloquear los ramos que dependen de este
  ramo.abre.forEach(idDest => {
    const destino = ramosMap[idDest];
    if (destino && destino.requisitos.every(req => ramosMap[req].aprobado)) {
      destino.div.classList.remove("bloqueado");
    }
  });
}
