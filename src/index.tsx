import { definePlugin } from "@decky/api";
import { PanelSection, PanelSectionRow } from "@decky/ui";

function Content() {
  return (
    <PanelSection title="NieR UI">
      <PanelSectionRow>
        <div>Étape 0 : le plugin se charge correctement.</div>
      </PanelSectionRow>
    </PanelSection>
  );
}

export default definePlugin(() => {
  console.log("[NieR UI] plugin chargé");

  return {
    name: "NieR UI",
    titleView: <div>NieR UI</div>,
    content: <Content />,
    icon: <span>◆</span>,
    onDismount() {
      console.log("[NieR UI] plugin déchargé");
    },
  };
});
