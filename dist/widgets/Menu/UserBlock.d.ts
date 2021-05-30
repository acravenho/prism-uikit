import React from "react";
import { Login } from "../WalletModal/types";
interface Props {
    to: string;
    account?: string;
    login: Login;
    logout: () => void;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
