import React from "react";
import { Default as DefaultLayout } from "./layouts";
import { StoreFinder } from "./pages";

/**
 * If this was a real application we would have a router, such as "React-Router" here.
 * As we aren't doing any routing for this challange, we just use the layout and page
 * component directly in here.
 */
function App() {
  return (
    <DefaultLayout>
      <StoreFinder />
    </DefaultLayout>
  );
}

export default App;
