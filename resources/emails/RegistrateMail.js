import BodyEmail from "../components/email/BodyEmail";
import {name} from "../../config/app";

export default function RegistrateMail({user}) {
    return (
        <BodyEmail>
            <tr>
                <td style={{color: '#1a1a1a', lineHeight: '22px'}}>
                    <p style={{marginBottom: '12px'}}>
                        Ciao {user?.name},
                    </p>

                    <p style={{marginTop: '20px'}}>
                        È stata effettuata una registrazione su {name}.
                    </p>

                    <p style={{marginTop: '20px'}}>
                        <strong style={{fontSize: '14px'}}>
                            Ecco le tue credenziali di accesso:
                        </strong>
                        <br/>
                        <span style={{fontSize: '16px'}}>
                            <p rel="noreferrer">[{user?.email}]</p>
                            <p rel="noreferrer">[{Array.from(Array(user?.email.length).keys()).map(i => '*')}]</p>
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