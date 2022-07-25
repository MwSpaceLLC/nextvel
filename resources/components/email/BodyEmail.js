export default function BodyEmail({children, footer}) {

    return (
        <table className="wrapper" width="100%" cellPadding={0} cellSpacing={0} role="presentation" style={{
            boxSizing: 'border-box',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            position: 'relative',
            PremailerCellpadding: 0,
            PremailerCellspacing: 0,
            PremailerWidth: '100%',
            backgroundColor: '#edf2f7',
            margin: 0,
            padding: 0,
            width: '100%'
        }}>
            <tbody>
            <tr>
                <td align="center" style={{
                    boxSizing: 'border-box',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    position: 'relative'
                }}>
                    <table className="content" width="100%" cellPadding={0} cellSpacing={0} role="presentation" style={{
                        boxSizing: 'border-box',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                        position: 'relative',
                        PremailerCellpadding: 0,
                        PremailerCellspacing: 0,
                        PremailerWidth: '100%',
                        margin: 0,
                        padding: 0,
                        width: '100%'
                    }}>
                        <tbody>

                        <tr>
                            <td className="header" style={{
                                boxSizing: 'border-box',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                position: 'relative',
                                padding: '25px 0',
                                textAlign: 'center'
                            }}>
                            </td>
                        </tr>

                        {/* Email Body */}
                        <tr>
                            <td className="body" width="100%" cellPadding={0} cellSpacing={0} style={{
                                boxSizing: 'border-box',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                position: 'relative',
                                PremailerCellpadding: 0,
                                PremailerCellspacing: 0,
                                PremailerWidth: '100%',
                                backgroundColor: '#edf2f7',
                                borderBottom: '1px solid #edf2f7',
                                borderTop: '1px solid #edf2f7',
                                margin: 0,
                                padding: 0,
                                width: '100%'
                            }}>
                                <table className="inner-body" align="center" width={570} cellPadding={0} cellSpacing={0}
                                       role="presentation" style={{
                                    boxSizing: 'border-box',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                    position: 'relative',
                                    PremailerCellpadding: 0,
                                    PremailerCellspacing: 0,
                                    PremailerWidth: '570px',
                                    backgroundColor: '#ffffff',
                                    borderColor: '#e8e5ef',
                                    borderRadius: '5px',
                                    borderWidth: '0px',
                                    // boxShadow: '0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015)',
                                    margin: '0 auto',
                                    padding: 0,
                                    width: '570px'
                                }}>
                                    {/* Body content */}
                                    <tbody>{children}</tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{
                                boxSizing: 'border-box',
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                position: 'relative'
                            }}>
                                <table className="footer" align="center" width={570} cellPadding={0} cellSpacing={0}
                                       role="presentation" style={{
                                    boxSizing: 'border-box',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                    position: 'relative',
                                    PremailerCellpadding: 0,
                                    PremailerCellspacing: 0,
                                    PremailerWidth: '570px',
                                    margin: '0 auto',
                                    padding: 0,
                                    textAlign: 'center',
                                    width: '570px'
                                }}>
                                    <tbody>
                                    <tr>
                                        <td className="content-cell" align="center" style={{
                                            boxSizing: 'border-box',
                                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                            position: 'relative',
                                            maxWidth: '100vw',
                                            padding: '32px'
                                        }}>
                                            {footer && (
                                                <p style={{
                                                    boxSizing: 'border-box',
                                                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                                    position: 'relative',
                                                    lineHeight: '1.5em',
                                                    marginTop: 0,
                                                    color: '#b0adc5',
                                                    fontSize: '12px',
                                                    textAlign: 'center'
                                                }}>{footer}</p>
                                            )}

                                            <p style={{
                                                boxSizing: 'border-box',
                                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                                                position: 'relative',
                                                lineHeight: '1.5em',
                                                marginTop: 0,
                                                color: '#b0adc5',
                                                fontSize: '12px',
                                                textAlign: 'center'
                                            }}>Copyright © 2022 {process.env.NEXT_PUBLIC_APP_NAME}. Tutti i
                                                diritti riservati.</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    )
}