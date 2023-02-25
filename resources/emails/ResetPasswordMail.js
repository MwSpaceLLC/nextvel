import BodyEmail from "../components/email/BodyEmail";

import {name, url} from "../../config/app";

export default function ResetPasswordMail({user, link}) {
    return (
        <BodyEmail>
            <tr>
                <td style={{color: '#1a1a1a', lineHeight: '22px'}}>
                    <p style={{marginBottom: '12px'}}>
                        Ciao {user?.name},
                    </p>

                    <p style={{marginTop: '20px'}}>
                        È stata effettuata una richiesta per reimpostare la password su {name}.
                    </p>

                    <p style={{marginTop: '20px'}}>
                        <strong style={{fontSize: '14px'}}>
                            Ecco un link per reimpostare la tua password:
                        </strong>
                        <br/>
                        <span style={{fontSize: '16px'}}>
                         <a href={link} target="_blank" rel="noreferrer">[Reset della password]</a>
                        </span>
                    </p>

                    <i style={{marginTop: '20px'}}>
                        Se non hai effettuato questa richiesta, puoi tranquillamente ignorare questo messaggio.
                    </i>

                </td>
            </tr>
        </BodyEmail>
    )
}