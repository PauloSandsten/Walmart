import React from "react";
import { Default as DefaultLayout } from "./layouts";

/**
 * If this was a real application we would have a router, such as "React-Router" here.
 * As we aren't doing any routing for this challange, we just use the layout and page
 * component directly in here.
 */
function App() {
  return <DefaultLayout>"hello"</DefaultLayout>;
}

export default App;
