import BodyEmail from "../components/email/BodyEmail";
import {name} from "../../config/app";

export default function AuthenticateMail({user}) {
    return (
        <BodyEmail>
            <tr>
                <td style={{color: '#1a1a1a', lineHeight: '22px'}}>
                    <p style={{marginBottom: '12px'}}>
                        Ciao {user?.name},
                    </p>

                    <p style={{marginTop: '20px'}}>
                        È stato rilevato un accesso su {name}.
                    </p>

                    <i style={{marginTop: '20px'}}>
                        {user?.address} | {user?.agent}
                    </i>

                </td>
            </tr>
        </BodyEmail>
    )
}