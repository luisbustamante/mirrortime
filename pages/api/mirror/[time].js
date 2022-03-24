export const times = [
  {
    time: "00:00",
    paragraphs: [
      `Tienes una decisión que tomar o una situación regresa ahí donde todo comenzó. Tienes que liberarte un poco más.`,
    ],
  },
  {
    time: "01:01",
    paragraphs: [
      `Puede ser que una persona te ame o que te sientas solo. Tu ángel te invita a aislarte para que te descubras mejor como persona.`,
    ],
  },
  {
    time: "02:02",
    paragraphs: [
      `Puede que alguien te esconda algo. Recuerda que siempre está ahí para ti.`,
    ],
  },
  {
    time: "03:03",
    paragraphs: [
      `No te confíes de una persona que te rodea.  Él te empujará a activarte.`,
    ],
  },
  {
    time: "04:04",
    paragraphs: [
      `Una situación delicada en puerta. Debes hacer todo por resaltar tu potencial.`,
    ],
  },
  {
    time: "05:05",
    paragraphs: [
      `Una persona que te conoce te ama. Tienes que mantener los pies en la tierra.`,
    ],
  },
  {
    time: "06:06",
    paragraphs: [
      `Cuentas mucho para una persona. Tienes que hacer las paces contigo mismo (a) para evolucionar positivamente.`,
    ],
  },
  {
    time: "07:07",
    paragraphs: [
      `Una persona de ojos claros tiene sentimientos por ti. Te conoces perfectamente, sácale provecho`,
    ],
  },
  {
    time: "08:08",
    paragraphs: [
      `No te confíes, algunas situaciones podrían tornarse en tu contra. Estás cerca de un gran cambio.`,
    ],
  },
  {
    time: "09:09",
    paragraphs: [
      `Estás entablando una bella amistad. Tienes que dejar de ser menos vanidoso (a`,
    ],
  },
  {
    time: "10:10",
    paragraphs: [
      `Alguien está flechado por ti. Tienes que tomar los caminos correctos.`,
    ],
  },
  {
    time: "11:11",
    paragraphs: [
      `Amas demasiado a alguien y corres el riesgo de sufrir. Debes de tener cuidado para no lastimar a los que te rodean.`,
    ],
  },
  {
    time: "12:12",
    paragraphs: [
      `Es la hora ideal para realizar un deseo. Sabes cómo aprovechar las situaciones, tienes que sacar provecho de eso.`,
    ],
  },
  {
    time: "13:13",
    paragraphs: [
      `Algunos de tus sueños por fin se harán realidad. Tienes que conectarte con tu yo interior`,
    ],
  },
  {
    time: "14:14",
    paragraphs: [
      `Si has fracasado una vez tienes que volver a intentarlo. Sigue como hasta por tu camino espiritual.`,
    ],
  },
  {
    time: "15:15",
    paragraphs: [
      `Tú ex todavía te ama, es hora de pasión y magnetismo. Tienes de dejar de ser precipitado (a).`,
    ],
  },
  {
    time: "16:16",
    paragraphs: [
      `Un (a) rubio (a) siente cosas fuertes por ti. Tienes que sacar todo lo malo que llevas dentro.`,
    ],
  },
  {
    time: "17:17",
    paragraphs: [
      `Es un buen momento para crear e imaginar. Pero, también, es la hora de problemas de pareja. Tienes una gran fuerza interior, aprovéchala.`,
    ],
  },
  {
    time: "18:18",
    paragraphs: [
      `Tu deseo se realizará. Ya has comprendido bien todo lo que engloba el amor.`,
    ],
  },
  {
    time: "19:19",
    paragraphs: [
      `Tienes que ser más paciente. Tu ángel está siempre para escucharte.`,
    ],
  },
  {
    time: "20:20",
    paragraphs: [
      `La persona que amas piensa en ti. Tienes que ser más discreto (a).`,
    ],
  },
  {
    time: "21:21",
    paragraphs: [
      `El éxito está presente, confía en ti ¡lánzate! Estás a punto de cumplir grandes cosas.`,
    ],
  },
  {
    time: "22:22",
    paragraphs: [
      `Una persona que te ama te llamará. Continúa ayudando a los demás.
  `,
    ],
  },
  {
    time: "23:23",
    paragraphs: [
      `Tu pareja te necesita, aprende a escucharlo (a). Continúa creyendo en ti.`,
    ],
  },
];

export default function handler(req, res) {
  const { time } = req.query;
  const mirrorTime = times.find(
    (element) => element.time === time.replace(/\-/g, ":")
  );
  res.status(200).json(mirrorTime);
}
