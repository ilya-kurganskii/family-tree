import React from "react";
import Header from "../../../common/header/header.component";
import { FamilyTreeContainer } from "../../containers/family-tree/family-tree.container";

function TreeDetailsComponent() {
  return (
    <>
      <Header />
      <main className="main">
        <h2 className="main_info typography__secondary">
          <span className="main_info_firstLine">
            Здравствуйте, Если вы сюда попали, значит это ваша родословная.
          </span>
          Мы собираем информацию о нашем древо. Если вы хотите дополнить,
          прислать фотографии, написать пару строчек о себе или о близком
          человеке напишите нам в «обратную связь», мы с удвольствием ответим и
          дополним.
        </h2>
        <FamilyTreeContainer className="main_familyTree" />
      </main>
    </>
  );
}

export default React.memo(TreeDetailsComponent);
