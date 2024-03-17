import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import { Layout } from "@/components";

import { Home, Profile, SignIn, SignUp,  About } from "@/pages";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="About" element={<About />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}
