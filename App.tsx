// In App.js in a new project
import * as React from "react";

import { FormProvider } from "./src/Context/UseContext";

import Router from "./src/Router/Router";

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
