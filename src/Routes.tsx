import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import { Layout } from "@/components";

import { Home, Profile, SignIn, SignUp,  About, Discounts, Bookings, Saved } from "@/pages";

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
          <Route path="Discounts" element={<Discounts />} />
          <Route path="Bookings" element={<Bookings />} />
          <Route path="Saved" element={<Saved />} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}
