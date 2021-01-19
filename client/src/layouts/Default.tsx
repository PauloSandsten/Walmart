import React from "react";
import { Topbar, TopActionBar, EndFooter } from "../templates";

const Default: React.FC = ({ children }): React.ReactElement => {
  return (
    <>
      <Topbar />
      <TopActionBar />
      <main>{children}</main>
      <footer>
        <EndFooter />
      </footer>
    </>
  );
};

export { Default };
