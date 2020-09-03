/** @format */

import React, { Dispatch, useState } from "react";
import ChatBot from "react-simple-chatbot";
import { useDispatch } from "react-redux";
import { ChatBotAction } from "./state/action";
import { ThemeProvider } from "styled-components";

export function ProgrammingChatBot() {
  const dispatch = useDispatch<Dispatch<ChatBotAction>>();
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function updateHeight() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  const steps = [
    //Anfang
    {
      id: "start",
      message:
        "Hallo, ich bin Karli. Ich bin ein Chatbot, also kein echter Mensch, aber ich kann dir viele Fragen zu Liebe, Sex oder Beziehungen beantworten.",
      trigger: "start-2",
    },
    {
      id: "start-2",
      message:
        "Deine Antworten bleiben dabei anonym und niemand kann sie lesen. Wozu möchtest du etwas wissen?",
      trigger: "select-interest",
    },
    //Auswahl des Themas
    {
      id: "select-interest",
      options: [
        { value: 1, label: "Liebe 😍", trigger: "interest-liebe" },
        {
          value: 2,
          label: "Geschlechtskrankheiten 😐",
          trigger: "interest-krankheit",
        },
        { value: 3, label: "Verhütung 😎", trigger: "interest-verhütung" },
      ],
    },

    {
      id: "interest-liebe",
      message:
        "Liebe ist etwas sehr aufregendes, kann aber auch kompliziert sein. Aktuell lerne ich noch, deswegen kann ich noch nicht alle Fragen beantworten. Ist deine Frage dabei?",
      trigger: "select-liebe",
    },

    {
      id: "interest-krankheit",
      message:
        "Geschlechtskrankheiten sind zunächst etwas Normales, aber man kann sich durch sicheren Sex davor schützen. Was möchtest du Wissen?",
      trigger: "select-krankheit",
    },
    {
      id: "interest-verhütung",
      message:
        "Sex kann für beide Personen sehr aufregend sein, aber man sollte die Verhütung nicht vergessen. Womit kann ich dir helfen?",
      trigger: "interest-verhütung-2",
    },
    {
      id: "interest-verhütung-2",
      message: " Womit kann ich dir helfen?",
      trigger: "select-verhütung",
    },

    //Liebe-Section
    {
      id: "select-liebe",
      options: [
        {
          value: 1,
          label: "Ich bin unglücklich verliebt",
          trigger: "liebe-unglücklich",
        },
        {
          value: 2,
          label: "Wo finde ich einen Freund?",
          trigger: "liebe-freund*in",
        },
        {
          value: 3,
          label: "Wo finde ich eine Freundin?",
          trigger: "liebe-freund*in",
        },
        {
          value: 4,
          label: "Was kann ich tun, wenn ich jemanden toll finde?",
          trigger: "liebe-action",
        },
      ],
    },
    {
      id: "liebe-unglücklich",
      message:
        "Ich kann verstehen, dass du traurig bist und das ist auch voll in Ordnung. Am besten du redest mit deinen Freunden darüber. Sie können dich am besten trösten. Vielleicht haben sie auch Zeit dich abzulenken und etwas zu unternehmen, damit du auf andere Gedanken kommst.",
      trigger: "liebe-unglücklich-2",
    },
    {
      id: "liebe-unglücklich-2",
      message:
        "Wenn du weinen möchtest, ist das auch total in Ordnung. Fast alle Menschen fühlen so bei Liebeskummer. Und bestimmt findest du auch bald eine neue Liebe, da bin ich mir sicher.",
      trigger: "weitere-fragen",
    },
    {
      id: "liebe-freund*in",
      message:
        "Mach dir keine Sorgen irgendwann klappt es schon. Manchmal ist man mit was ganz anderes beschäftigt und dann trifft man einen Menschen den man mag. Das kann überall passieren. In der Schule, beim Sport, bei Partys oder im Schwimmbad.",
      trigger: "liebe-freund*in-2",
    },
    {
      id: "liebe-freund*in",
      message:
        "Vielleicht kennst du die Person ja auch schon und merkst, dass du gerne mehr als Freunde wärst.",
      trigger: "weitere-fragen",
    },
    {
      id: "liebe-action",
      message:
        "Wenn du jemandem cool findest, trau dich und sprich sie/ihn an. Die meisten Menschen sind schüchtern und freuen sich, wenn sie jemand anspricht.",
      trigger: "weitere-fragen",
    },

    //Geschlechtskrankheiten-Section
    {
      id: "select-krankheit",
      options: [
        {
          value: 1,
          label: "Woran erkenne ich, dass ich eine Geschlechtskrankheit habe?",
          trigger: "krankheit-erkennen",
        },
        {
          value: 2,
          label: "Was ist AIDS?",
          trigger: "krankheit-aids",
        },
        {
          value: 3,
          label: "Was sind Chlamydien?",
          trigger: "krankheit-chlamydien",
        },
      ],
    },
    {
      id: "krankheit-erkennen",
      message:
        "Die Symptome von Geschlechtskrankheiten sind nicht immer eindeutig. Geh am besten zu einem Arzt oder einer Ärztin und lass dich testen, wenn du einen Verdacht hast. Du musst dich nicht schämen und brauchst keine Angst zu haben. Ärzt*innen kennen sich damit aus.",
      trigger: "krankheit-erkennen-behandeln",
    },
    {
      id: "krankheit-erkennen-behandeln",
      options: [
        {
          value: 1,
          label: "Was passiert, wenn ich eine Geschlechtskrankheit habe?",
          trigger: "krankheit-erkennen-2",
        },
      ],
    },
    {
      id: "krankheit-erkennen-2",
      message:
        "Die meisten Geschlechtskrankheiten können mit Medikamenten leicht behandelt werden. Um eine Ansteckung zu verhindern, solltest du stets ein Kondom beim Geschlechtverkehr benutzen.",
      trigger: "select-weitere-fragen",
    },
    {
      id: "krankheit-aids",
      message:
        "Bei AIDS wird dein Körper geschwächt und kann sich nicht mehr gegen andere Erreger wehren. Das kann zu schweren Krankheiten und auch zum Tod führen, wenn es nicht behandelt wird.",
      trigger: "krankheit-aids-2",
    },
    {
      id: "krankheit-aids-2",
      message:
        "Wenn man sich damit angesteckt hat, kann man es auch an andere Menschen über Blut, Sperma und Scheidenflüssigkeit übertragen. Kondome können vor AIDS schützen.",
      trigger: "weitere-fragen",
    },
    {
      id: "krankheit-chlamydien",
      message:
        "Chlamydien sind Bakterien, die du erst bis zu sechs Wochen nachdem du dich angesteckt hast bemerkst.",
      trigger: "krankheit-chlamydien-gefühl",
    },
    {
      id: "krankheit-chlamydien-gefühl",
      options: [
        {
          value: 1,
          label: "Wie fühlt sich das an?",
          trigger: "krankheit-chlamydien-2",
        },
      ],
    },
    {
      id: "krankheit-chlamydien-2",
      message:
        "Dabei kommt es zu einem brennenden Gefühl beim Wasserlassen oder du bekommst Ausfluss aus dem Penis, der Vagina oder dem Po.",
      trigger: "krankheit-chlamydien-behandeln",
    },
    {
      id: "krankheit-chlamydien-behandeln",
      options: [
        {
          value: 1,
          label: "Wie kann ich Chlamydien behandeln?",
          trigger: "krankheit-chlamydien-3",
        },
      ],
    },
    {
      id: "krankheit-chlamydien-3",
      message:
        "Mit dem richtigen Antibiotika heilt diese Krankheit sehr schnell. Deswegen ist es wichtig, dass du bei Beschwerden einen Ärztin oder einen Arzt aufsuchst.",
      trigger: "weitere-fragen",
    },

    //Verhütung-Section
    {
      id: "select-verhütung",
      options: [
        {
          value: 1,
          label: "Ist es schlimm, wenn ich die Pille vergesse?",
          trigger: "verhütung-pille",
        },
        {
          value: 2,
          label: "Können Kondome ablaufen?",
          trigger: "vehütung-kondome",
        },
        {
          value: 3,
          label: "Was ist sicherer: Pille oder Kondome?",
          trigger: "vehütung-pille-kondome",
        },
      ],
    },

    {
      id: "verhütung-pille",
      message:
        "Wenn du vergessen hast, die Pille zu nehmen, solltest du das innerhalb von 24 Stunden nachholen. Danach kannst du sie wieder im ganz normalen Rhythmus nehmen. Wenn die 24 Stunden schon vergangen sind, solltest du 7 Tage zur Sicherheit mit Kondom verhüten.",
      trigger: "weitere-fragen",
    },
    {
      id: "vehütung-kondome",
      message:
        "Ja, das können sie. Kondome haben ganz normale Haltbarkeitsdaten, die auch auf der Verpackung stehen. Wenn sie abgelaufen sind, solltest du sie nicht mehr verwenden.",
      trigger: "weitere-fragen",
    },
    {
      id: "vehütung-pille-kondome",
      message:
        "Die sicherere Verhütungsmethode ist die Pille. Durch künstliche weibliche Hormone wird der Eisprung unterdrückt, so dass du nicht schwanger werden kannst. Die Pille ist dabei zu 91% sicher und das Kondom zu 85%. Aber du solltest daran denken, die Pille regelmäßig zu nehmen, damit sie sicher wirkt",
      trigger: "vehütung-pille-kondome-2",
    },
    {
      id: "vehütung-pille-kondome-2",
      message:
        "Es gibt aber nicht die eine Patentlösung. Am besten du sprichst mit deiner Ärztin oder dein Arzt und findest so die passende Verhütungsmethode für dich. P. S. Es gibt noch mehr Verhütungsmittel, die in Frage kommen könnten.",
      trigger: "vehütung-pille-kondome-3",
    },
    {
      id: "vehütung-pille-kondome-3",
      message:
        "P. S. Es gibt noch mehr Verhütungsmittel, die in Frage kommen könnten: Verhütungsschirmchen, Verhütungsring- oder Pflaser, Kuperspirale, Hormonimplantat, Frauenkondom uvm.",
      trigger: "weitere-fragen",
    },

    //weitere Fragen-Section
    {
      id: "weitere-fragen",
      message: "Hast du noch weitere Fragen?",
      trigger: "select-weitere-fragen",
    },
    {
      id: "select-weitere-fragen",
      options: [
        { value: 1, label: "Ja", trigger: "weitere-fragen-yes" },
        { value: 2, label: "Nein", trigger: "weitere-fragen-no" },
      ],
    },
    {
      id: "weitere-fragen-yes",
      message: "Welches Thema interessiert dich?",
      trigger: "select-interest",
    },
    {
      id: "weitere-fragen-no",
      message:
        "Alles klar. 🙂 Du kannst jederzeit wiederkommen. Das nächste Mal habe ich bestimmt schon viel dazu gelernt und kann dir bei mehr Fragen helfen.",
    },
  ];

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica",
    headerBgColor: "#1F8ACF",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#89cdba",
    botFontColor: "#fff",
    userBubbleColor: "#FBE8D9",
    userFontColor: "black",
  };

  const header = (
    <div
      style={{
        backgroundColor: "#F08372",
        padding: 14,
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
      }}
    >
      Karli
    </div>
  );

  const chatBotProps = {
    headerTitle: "Karli",
    botAvatar: require("./karli.png"),
    steps: steps,
    headerComponent: header,
    bubbleOptionStyle: { backgroundColor: "#FBE8D9", color: "black" },
  };

  if (height <= 750 && width <= 600) {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot width="100%" floating={true} opened={true} {...chatBotProps} />
      </ThemeProvider>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#e1f3ee",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <div style={{ flex: 1 }} />
        <div>
          <ThemeProvider theme={theme}>
            <ChatBot {...chatBotProps} />
          </ThemeProvider>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
