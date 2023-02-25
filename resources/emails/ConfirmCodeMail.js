import BodyEmail from "../components/email/BodyEmail";
import {name} from "../../config/app";

export default function ConfirmCodeMail({user}) {
    return (
        <BodyEmail>
            <tr>
                <td style={{color: '#1a1a1a', lineHeight: '22px'}}>
                    <p style={{marginBottom: '12px'}}>
                        Ciao {user?.name},
                    </p>

                    <p style={{marginTop: '20px'}}>
                        È stata effettuata una richiesta per un codice di accesso su {name}.
                    </p>

                    <p style={{marginTop: '20px'}}>
                        <strong style={{fontSize: '14px'}}>
                            Ecco il tuo codice di conferma:
                        </strong>
                        <br/>
                        <span style={{fontSize: '16px'}}>
                         <p rel="noreferrer">[{user?.random}]</p>
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