import React from "react";
import { KlarnaIcon } from "./icons/KlarnaIcon";
import { MastercardIcon } from "./icons/MastercardIcon";
import { VisaIcon } from "./icons/VisaIcon";
import { TryggIcon } from "./icons/TryggIcon";
import { PaymentProviderContainer } from "./styles";

export const PaymentProviders = () => {
  return (
    <PaymentProviderContainer>
      <KlarnaIcon />
      <MastercardIcon />
      <VisaIcon />
      <TryggIcon />
    </PaymentProviderContainer>
  );
};
