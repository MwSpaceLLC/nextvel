import {name, url} from "../../../config/app";
import moment from "moment";

export default function BodyEmail({children, footer = moment().format('DD/MM/YYYY hh:mm')}) {

    return (
        <div style={{backgroundColor: '#ffffff'}}>
            <div style={{padding: '20px 0', margin: '0 auto', maxWidth: '600px'}}>

                <table style={{margin: '30px auto 0', fontSize: '16px', maxWidth: '450px'}}>
                    <tbody>{children}</tbody>
                </table>

                <table style={{margin: '30px auto', borderTop: '1px dashed #dadada', width: '450px'}}>
                    <tbody>
                    <tr>
                        <td style={{color: 'rgba(26,26,26,0.6)', paddingTop: '15px'}}>
                            <p style={{fontSize: '12px', textAlign: 'left'}}>
                                Inviato da <a href={url} target="_blank"
                                              rel="noreferrer">{name}</a> | {footer}
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}