"use client";

import AuthContext from "./Providers/AuthContext";
import ReduxProviderCustom from "./Providers/ReduxProviderCustom";

export default function Providers({ children }) {


  return ( // you can have multiple client side providers wrapped, in this case I am also using NextUIProvider
    <>
      <ReduxProviderCustom>
        <AuthContext>{children}</AuthContext>
      </ReduxProviderCustom>
    </>
  );
}