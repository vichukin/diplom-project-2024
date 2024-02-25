import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import { Layout } from "@/components";

import { Helpers } from "@/helpers";

import { Context } from "@/context";

import { Hooks } from "@/hooks";

import { Services } from "@/services";

import { Home, Profile } from "@/pages";

export function Routes() {
  const a = Helpers;
  const a1 = Hooks;
  const a2 = Services;
  const a3 = Context;

  console.log(a, a1, a2, a3);
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}
