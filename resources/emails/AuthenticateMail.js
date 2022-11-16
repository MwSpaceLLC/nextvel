import BodyEmail from "../components/email/BodyEmail";

export default function AuthenticateMail({email}) {
    return (
        <BodyEmail>
            <tr>
                <td className="content-cell" style={{
                    boxSizing: 'border-box',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    position: 'relative',
                    maxWidth: '100vw',
                    padding: '32px'
                }}>

                    <h1 style={{
                        boxSizing: 'border-box',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                        position: 'relative',
                        color: '#3d4852',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        marginTop: 0,
                        textAlign: 'left'
                    }}>Accesso rilevato</h1>

                    <p style={{
                        boxSizing: 'border-box',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                        position: 'relative',
                        fontSize: '16px',
                        lineHeight: '1.5em',
                        marginTop: 0,
                        textAlign: 'left'
                    }}>
                        Abbiamo rilevato un accesso al tuo account <i>{email}</i>
                    </p>

                </td>
            </tr>
        </BodyEmail>
    )
}